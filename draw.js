const cell_size = 64;
const grid_w = 10;
const grid_h = 10;
const grid_left = 1;
const grid_top = 1;
const corner_offset = cell_size * 0.08;
const hover_offset = cell_size * 0.15;

const sol_text_color = "rgb(29, 106, 229)";
const mark_color = "rgba(247, 208, 56, 0.5)";

const type_thermo = 1;
const type_cage = 2;

current_mode = "normal";
scene = null;
matrix = [];
stuff = [];
drag = false;
undo_stack = [];
thermo = null;
cage = null;
outer = null;
underlay = null;
shift = false;


const textOptions = {
	font: "sans-serif",
	align: Pencil.Text.alignments.center,
	cursor: Pencil.Component.cursors.pointer
};
const centerTextOptions = {
	font: "sans-serif",
	align: Pencil.Text.alignments.center,
	cursor: Pencil.Component.cursors.pointer
};

function set_cell(x, y, mode, newtext)
{
	let m = get(x, y);
	let undo_entry = {
		mode: mode, 
		x: x, y: y, 
		newtext: newtext,
		old_normal: m.normal.text
	};

	if (!m.main_grid && mode != "set") {
		return;
	}
	if (m.locked && mode != "set") {
		return;
	}

	if (mode == "normal" || mode == "set") {
		if (mode == "normal") {
			m.normal.options.fill = sol_text_color;
		}
		else {
			m.locked = newtext != "";
			m.normal.options.fill = "black";
		}
		m.normal.text = newtext;
		const meas = Pencil.Text.measure(newtext, m.normal.text.options);
		m.normal.position.x = cell_size * 0.3; //(cell_size - meas.width) / 2;
		m.normal.position.y = cell_size * 0.2; //(cell_size - meas.height) / 2;
		m.center.text = "";
	}
	else if (mode == "center") {
		let current = m.center.text;
		let center = "";
		m.center.options.fill = sol_text_color;
		if (newtext != "") {
			for (let i = 1; i <= 9; ++i) {
				if ((current.indexOf(i) == -1 && i == newtext)
					|| (current.indexOf(i) != -1 && i != newtext)) {
					center += i;
				}
			}
		}

		m.normal.text = "";
		m.center.text = center;
		const meas = Pencil.Text.measure(center, m.center.text.options);
		m.center.position.x = (cell_size - meas.width) / 2;
		m.center.position.y = (cell_size - meas.height) / 2;
	}
	else if (mode == "corner") {
	}
	
	undo_entry.normal = m.normal.text;
	undo_stack.push(undo_entry);
}

function keyup(event) {
	if (event.key == "Shift") {
		shift = false;
	}
}

function keydown(event) {
	let newtext;
	if (event.key == "Shift") {
		shift = true;
	}
	if (event.key == "Delete" || event.key == "Backspace") {
		newtext = '';
	}
	else if (event.key >= "1" && event.key <= "9") {
		newtext = event.key;
	}
	else {
		return;
	}
	
	let count = 0;
	for (let x = 0; x < grid_w; ++x) {
		for (let y = 0; y < grid_h; ++y) {
			let m = get(x, y);
			if (m.mark) {
				set_cell(x, y, current_mode, newtext);
				++count;
			}
		}
	}
	undo_stack.push({mode: 'group', count: count});

	scene.render();
}

function get(x, y) {
	if (x < 0 || y < 0 || x >= grid_w || y >= grid_h) {
		return null;
	}
	return matrix[y][x];
}

function mark(x, y) {
	m = get(x, y);
	m.mark = true;
	m.rect.options.fill = mark_color;
	scene.render();
}

function inner_hover(x, y) {
	if (!drag) return;
	
	if (current_mode == "thermo") {
		p = {x: x * cell_size - thermo.start[0] + cell_size / 2, 
		     y: y * cell_size - thermo.start[1] + cell_size / 2};
		thermo.points.push(p);
		thermo.line.points = thermo.points;
		scene.render();
	}
}

function hover(x, y) {
	if (!drag) return;
	
	if (current_mode == "thermo") {
	} else if (current_mode == "cage") {
		delete_cage(cage.cells);
		cage.cells.push([x, y]);
		draw_cage(cage.cells);
	} else {
		mark(x, y);
	}
}

function mousedown(x, y) {
	if (!shift) {
		for (let x = 0; x < grid_w; ++x) {
			for (let y = 0; y < grid_h; ++y) {
				let m = get(x, y);
				if (m.mark) {
					m.rect.options.fill = "rgba(255, 255, 255, 0)";
					m.mark = false;
				}
			}
		}
	}
	scene.render();

	drag = true;
	
	if (current_mode == "thermo") {
		thermo_start = [x * cell_size + cell_size / 2, 
		                y * cell_size + cell_size / 2];
		bulb = new Pencil.Circle(thermo_start, cell_size * 0.4, {fill: "#aaa"});
		line = new Pencil.Line(thermo_start, [], 
			{stroke: "#aaa", strokeWidth: cell_size * 0.3, join: Pencil.Line.joins.miter});
		thermo = {bulb: bulb, line: line, start: thermo_start, points: []};
		underlay.add(bulb);
		underlay.add(line);
		scene.render();
	}
	else if (current_mode == "cage") {
		cage = {cells: [x, y]};
		draw_cage(cage.cells);
	}
	else {
		mark(x, y);
	}
}

function draw_thermo(start, points) {
	bulb = new Pencil.Circle(start, cell_size * 0.4, {fill: "#aaa"});
	line = new Pencil.Line(start, points, 
		{stroke: "#aaa", strokeWidth: cell_size * 0.3, join: Pencil.Line.joins.miter});
	underlay.add(bulb);
	underlay.add(line);
	scene.render();	
}

function mouseup() {
	drag = false;
	if (current_mode == "thermo") {
		stuff.push({type: type_thermo, start: thermo.start, points: thermo.points});
		thermo = null;
	}
	else if (current_mode == "cage") {
		stuff.push({type: type_cage, cells: cage.cells});
		cage = null;
	}
}

function click(x, y) {
}

function set_mode(mode)
{
	current_mode = mode;
	console.log(mode);
}

class CageLine extends Pencil.Line {
	setContext(ctx) {
		super.setContext(ctx);
		ctx.setLineDash([2, 2]);
	}
}

function each_cell(f) {
	for (let x = 0; x < grid_w; ++x) {
		for (let y = 0; y < grid_h; ++y) {
			let m = get(x, y);
			f(m);
		}
	}
}

function delete_cage(cells)
{
	each_cell(m => {
		m.r_cage.empty();
	});
}
function draw_cage(cells)
{
	get_cage = (x, y) => {
		return cells.find(e => e[0] == x && e[1] == y);
	};

	each_cell(m => {
		let x = m.x;
		let y = m.y;
		if (!get_cage(x, y)) return;
		let up = get_cage(x, y - 1);
		let down = get_cage(x, y + 1);
		let left = get_cage(x - 1, y);
		let right = get_cage(x + 1, y);
		let ul = get_cage(x - 1, y - 1);
		let ur = get_cage(x + 1, y - 1);
		let dl = get_cage(x - 1, y + 1);
		let dr = get_cage(x + 1, y + 1);
		let l = [];
		let add_line = (start, end) => {
			l.push(new CageLine(
				start, [[end[0] - start[0], end[1] - start[1]]],
				{strokeWidth: 1, stroke: "black"}));
		}
		if (!left) {
			let start = m.corner_pos[0]; 
			let end = m.corner_pos[3];
		if (up) start = m.corner_ext_pos[1];
			if (down) end = m.corner_ext_pos[6];
			add_line(start, end);
		}
		if (!right) {
			let start = m.corner_pos[1]; 
			let end = m.corner_pos[2];
			if (up) start = m.corner_ext_pos[2];
			if (down) end = m.corner_ext_pos[5];
			add_line(start, end);
		}
		if (!up) {
			let start = m.corner_pos[0]; 
			let end = m.corner_pos[1];
			if (left) start = m.corner_ext_pos[0];
			if (right) end = m.corner_ext_pos[3];
			add_line(start, end);
		}
		if (!down) {
			let start = m.corner_pos[3]; 
			let end = m.corner_pos[2];
			if (left) start = m.corner_ext_pos[7];
			if (right) end = m.corner_ext_pos[4];
			add_line(start, end);
		}
		if (up && left && !ul) {
			add_line(m.corner_pos[0], m.corner_ext_pos[0]);
			add_line(m.corner_pos[0], m.corner_ext_pos[1]);
		}
		if (down && right && !dr) {
			add_line(m.corner_pos[2], m.corner_ext_pos[4]);
			add_line(m.corner_pos[2], m.corner_ext_pos[5]);
		}
		if (up && right && !ur) {
			add_line(m.corner_pos[1], m.corner_ext_pos[2]);
			add_line(m.corner_pos[1], m.corner_ext_pos[3]);
		}
		if (down && left && !dl) {
			add_line(m.corner_pos[3], m.corner_ext_pos[6]);
			add_line(m.corner_pos[3], m.corner_ext_pos[7]);
		}
		l.forEach(e => m.r_cage.add(e));
	});
	scene.render();
}

function load(base64)
{
	let bin = Uint8Array.from(atob(base64), c => c.charCodeAt(0));
	let data = msgpack.decode(bin)
	
	underlay.empty();
	
	stuff = [];
	for (let x = 0; x < grid_w; ++x) {
		for (let y = 0; y < grid_h; ++y) {
			let m = get(x, y);
			m.locked = false;
			m.normal.text = "";
			m.center.text = "";
		}
	}

	data.cells.forEach(c => {
		set_cell(c[0], c[1], "set", c[2]);
	});
	data.stuff.forEach(s => {
		stuff.push(s);
		if (s.type == type_thermo) {
			draw_thermo(s.start, s.points);
		}
		else if (s.type == type_cage) {
			draw_cage(s.cells);
		}
	});
}

function generate_url()
{
	out = {
		gw: grid_w,
		gh: grid_h,
		cells: [],
		stuff: stuff
	};
	
	each_cell(m => {
		if (m.locked) {
			out.cells.push([m.x, m.y, m.normal.text]);
		}
	});
	let coded = msgpack.encode(out);
	alert(btoa(String.fromCharCode(...coded)));	
}

function undo() {
	if (undo_stack.length == 0)
		return;
	let u = undo_stack.pop();
	let count = 0;
	if (u.mode == "group") {
		count = u.count;
		u = undo_stack.pop();
	}
	do {
		if (u.mode == "normal") {
			set_cell(u.x, u.y, u.mode, u.old_normal);
		}
		else if (u.mode == "center") {
			set_cell(u.x, u.y, u.mode, u.newtext);
		}	
		undo_stack.pop();
		--count;
		if (count > 0) {
			u = undo_stack.pop();
		}
	} while (count > 0);
	scene.render();
}

function render() {
	scene = new Pencil.Scene();
	
	scene.on("keydown", (event) => keydown(event));
	scene.on("keyup", (event) => keyup(event));
	scene.on("mouseup", () => mouseup());
	
	const outer_w = cell_size * grid_w;
	const outer_h = cell_size * grid_h;
	const outer_x = (scene.size.x - outer_w) / 2;
	const outer_y = (scene.size.y - outer_h) / 2;
	const options = {
		fill: "rgba(255, 255, 255, 0)",
		stroke: "black",
		strokeWidth: 1,
		cursor: Pencil.Component.cursors.pointer
	};
	const options_inner = {
		fill: "rgba(255, 255, 255, 0)",
		cursor: Pencil.Component.cursors.pointer
	};

	textOptions.fontSize = cell_size * 0.8;
	centerTextOptions.fontSize = cell_size * 0.3;
	
	outer = new Pencil.Container([outer_x, outer_y]);
	scene.add(outer);

	underlay = new Pencil.Container([0, 0]);
	outer.add(underlay);

	for (let y = 0; y < grid_h; ++y) {
		matrix[y] = [];
	}
	for (let x = 0; x < grid_w; ++x) {
		for (let y = 0; y < grid_h; ++y) {
			xp = x * cell_size;
			yp = y * cell_size;
			let main_grid = (x >= grid_left && y >= grid_top);
			let cont = new Pencil.Container([xp, yp]);
			options.strokeWidth = main_grid ? 1 : 0;
			let r = new Pencil.Rectangle([0, 0], cell_size, cell_size, options);
			let r_cage = new Pencil.Rectangle([0, 0], cell_size, cell_size, options);
			let r_hover = new Pencil.Rectangle(
				[hover_offset, hover_offset], 
				cell_size - hover_offset * 2, 
				cell_size - hover_offset * 2, options_inner);
			let normal = new Pencil.Text([0, cell_size * 0.1], "", textOptions);
			let center = new Pencil.Text([0, cell_size * 0.4], "", centerTextOptions);
			let corner_pos = [];
			corner_pos[0] = [corner_offset, corner_offset];
			corner_pos[1] = [cell_size - corner_offset, corner_offset];
			corner_pos[2] = [cell_size - corner_offset, cell_size - corner_offset];
			corner_pos[3] = [corner_offset, cell_size - corner_offset];
			let corner_ext_pos = [];
			corner_ext_pos[0] = [0, corner_offset];
			corner_ext_pos[1] = [corner_offset, 0];
			corner_ext_pos[2] = [cell_size - corner_offset, 0];
			corner_ext_pos[3] = [cell_size, corner_offset];
			corner_ext_pos[4] = [cell_size, cell_size - corner_offset];
			corner_ext_pos[5] = [cell_size - corner_offset, cell_size];
			corner_ext_pos[6] = [corner_offset, cell_size];
			corner_ext_pos[7] = [0, cell_size - corner_offset];
			let side_pos = [];
			side_pos[0] = [cell_size / 2, corner_offset];
			side_pos[1] = [corner_offset, cell_size / 2];
			side_pos[2] = [cell_size - corner_offset, cell_size / 2];
			side_pos[3] = [cell_size / 2, cell_size - corner_offset];
			let center_pos = [cell_size / 2, cell_size / 2];
			cont.add(r);
			cont.add(r_cage);
			cont.add(r_hover);
			cont.add(normal);
			cont.add(center);
			cont.on("mousedown", () => mousedown(x, y));
			cont.on("hover", () => hover(x, y));
			r_hover.on("hover", () => inner_hover(x, y));
			cont.on("click", () => click(x, y));
			matrix[y][x] = {
				x: x, y: y, pos: [xp, yp], cont: cont, rect: r, normal: normal, center: center,
				corner_pos: corner_pos, center_pos: center_pos, side_pos: side_pos,
				corner_ext_pos: corner_ext_pos,
				r_cage: r_cage, main_grid: main_grid};
			outer.add(cont);
		}
	}

	let box_w = grid_w - grid_left;
	let box_h = grid_h - grid_top;
	for (let x = 0; x < box_w / 3; ++x) {
		for (let y = 0; y < box_h / 3; ++y) {
			let box = new Pencil.Rectangle(
				[cell_size * grid_left + cell_size * 3 * x, 
				 cell_size * grid_top + cell_size * 3 * y],
				cell_size * 3, cell_size * 3, {fill: null, strokeWidth: 3, stroke: "black"});
			outer.add(box);
		}
	}		
	
	buttons = new Pencil.Container([outer_x + outer_w + 50, outer_y]);
	button_desc = [
		["Normal", () => set_mode("normal")],
		["Center", () => set_mode("center")],
		["Corner", () => set_mode("corner")],
		["Undo", () => undo()],
		["Set", () => set_mode("set")],
		["Thermo", () => set_mode("thermo")],
		["Cage", () => set_mode("cage")],
		["URL", () => generate_url()],
	];
	ypos = 0;
	let bb = []
	button_desc.forEach(e => {
		let b = new Pencil.Button([0, ypos], {fontSize: 32, value: e[0]});
		ypos += 64;
		b.on("click", e[1]);
		bb.push(b);
	});
	bb.reverse().forEach(e => buttons.add(e));
	scene.add(buttons);
	
	scene.render();
}

window.addEventListener("load", () => { render(); });