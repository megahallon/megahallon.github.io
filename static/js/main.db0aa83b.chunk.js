(this.webpackJsonpctc2=this.webpackJsonpctc2||[]).push([[0],{118:function(e,t,r){e.exports=r(153)},123:function(e,t,r){},124:function(e,t,r){},153:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(18),l=r.n(o),i=(r(123),r(17)),c=r(22),s=r(8),u=r(9),d=r(11),m=r(12),h=(r(124),r(102)),f=r(44),p=r(6),g=r(5),v=r(13),b=r(54),y=r.n(b),x=r(55),k=r.n(x),E=r(56),w=0,_=0,S=0,j=0,C=0,O=0,W=0,M=0,z=0,D="normal",A=0,B=0,R=["rgba(0, 0, 0, 1)","rgba(207, 207, 207, 0.5)","rgba(255, 255, 255, 0)","rgba(163, 224, 72, 0.5)","rgba(210, 59, 231, 0.5)","rgba(235, 117, 50, 0.5)","rgba(226, 38, 31, 0.5)","rgba(247, 208, 56, 0.5)","rgba(52, 187, 230, 0.5)"],U=0,G="normal",I=null,L=!1,N=null,T=[],P=[],H=!1,K=[],q=null,J=null,X=null,$=null,F=null,Q=!1,V=null,Y=[];var Z={font:"sans-serif",cursor:v.c.cursors.pointer},ee={font:"sans-serif",fill:"rgb(29, 106, 229)",cursor:v.c.cursors.pointer},te={font:"sans-serif",fill:"rgb(29, 106, 229)",cursor:v.c.cursors.pointer},re={font:"sans-serif",fill:"black",cursor:v.c.cursors.pointer},ne=function(e){Object(d.a)(r,e);var t=Object(m.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"makePath",value:function(e){var t=this.getOrigin();return e.translate(t.x,t.y),this.path=new window.Path2D,this.path.rect(0,0,this.width,this.height),e.fillStyle="rgba(255,255,255,1)",e.fill(this.path),e.fillStyle=this.options.fill.toString(e),e.translate(-t.x,-t.y),Object(p.a)(Object(g.a)(r.prototype),"makePath",this).call(this,e),this}}]),r}(v.h);function ae(e,t,r,n,a){var o=le(e,t),l={mode:r,x:e,y:t,newtext:a,old_normal:o.normal.text};if((o.main_grid||"set"===r)&&(1!==o.lock_type||"set"===r)){if("reset"===r)o.center.text="",o.normal.text="",o.corner.text="",o.r_color.options.fill=null;else if("normal"===r||"set"===r){"normal"===r?o.normal.options.fill="rgb(29, 106, 229)":(o.lock_type=""!==a?1:0,o.normal.options.fill=R[n],o.color=n),o.main_grid||""===a?o.normal.text=a:o.normal.text+=a;var i=v.h.measure(o.normal.text,o.normal.text.options);o.normal.position.x=(w-2.5*i.width)/2,o.normal.position.y=.15*w,o.center.text="",o.corner.forEach((function(e){e.text=""})),o.side.forEach((function(e){e.text=""}))}else if("center"===r&&""===o.normal.text){var c=o.center.text,s="";if(o.center.options.fill="rgb(29, 106, 229)",""!==a)for(var u=1;u<=9;++u)(-1===c.indexOf(u)&&u===+a||-1!==c.indexOf(u)&&u!==+a)&&(s+=u);o.center.text=s;var d=v.h.measure(s,o.center.options);o.center.position.x=(w-d.width)/2,o.center.position.y=(w-d.height)/2}else if("set_corner"===r)""===a?o.cage_corner.text="":o.cage_corner.text+=a,o.lock_type=""!==a?2:0;else if("corner"===r&&""===o.normal.text){var m="";o.corner.forEach((function(e){m+=e.text})),o.side.forEach((function(e){m+=e.text}));var h="";if(""!==a)for(var f=1;f<=9;++f)(-1===m.indexOf(f)&&f===+a||-1!==m.indexOf(f)&&f!==+a)&&(h+=f);var p=0;o.corner.forEach((function(e){e.text=h[p++]||""})),o.side.forEach((function(e){e.text=h[p++]||""}))}else"color"===r&&(L?o.r_color.options.fill=R[n]:(o.r_color_set.options.fill=R[n],o.fill=n));l.normal=o.normal.text,K.push(l)}}function oe(e){U=e,"color"===G&&(me((function(t){t.mark&&ae(t.x,t.y,"color",e,null)})),N.render())}function le(e,t){return e<0||t<0||e>=_||t>=S?null:T[t][e]}function ie(e,t){var r=le(e,t);r.mark=!0,r.rect.options.fill="rgba(247, 208, 56, 0.5)"}function ce(e){return[e[0]*w+w/2,e[1]*w+w/2]}function se(e,t,r){var n,a=R[r].match(/[.\d]+/g).map((function(e){return e>1?e/255:+e})),o=Object(f.a)(v.b,Object(i.a)(a));o.red=o.red*o.alpha+1*(1-o.alpha),o.green=o.green*o.alpha+1*(1-o.alpha),o.blue=o.blue*o.alpha+1*(1-o.alpha),o.alpha=1;var l=null,c=null,s=.3*w,u=ce(e[0]);if(e=e.slice(1).map((function(e){var t=ce(e);return{x:t[0]-u[0],y:t[1]-u[1]}})),"bulb"===t)l=new v.a(u,.4*w,{fill:o});else if("arrow"===t&&(s=.05*w,l=new v.a(u,.4*w,{fill:"white",strokeWidth:s,stroke:o}),e.length>1)){var d=e[e.length-1],m=e[e.length-2],h=m.x-d.x,p=m.y-d.y,g=w/4;(c=new v.d).position={x:d.x+u[0],y:d.y+u[1]},c.options.rotation=.5+Math.atan2(p,h)/(2*Math.PI);var b=new v.e({x:0,y:0},[{x:-g,y:-g},{x:0,y:0},{x:-g,y:g}],{stroke:o,strokeWidth:s,join:v.e.joins.miter});c.add(b)}var y=new v.e(u,e,{stroke:o,strokeWidth:s,join:v.e.joins.miter}),x=[];return c&&x.push(c),x.push(y),l&&x.push(l),(n=F).add.apply(n,x),N.render(),x}function ue(e){G=e.mode,L=e.solveMode,"cage"===e.mode&&(I=e.cageStyle),"thermo"===e.mode&&(I=e.thermoStyle),"number"===e.mode&&"normal"===e.numberStyle&&(G="set"),"number"===e.mode&&"corner"===e.numberStyle&&(G="set_corner")}var de=function(e){Object(d.a)(r,e);var t=Object(m.a)(r);function r(){return Object(s.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"setContext",value:function(e){Object(p.a)(Object(g.a)(r.prototype),"setContext",this).call(this,e),e.setLineDash([this.options.dash,this.options.dash])}}]),r}(v.e);function me(e){for(var t=0;t<_;++t)for(var r=0;r<S;++r){e(le(t,r))}}function he(e){var t=function(t,r){return e.find((function(e){return e[0]===t&&e[1]===r}))},r=[];return me((function(e){var n=e.x,a=e.y;if(t(n,a)){var o=t(n,a-1),l=t(n,a+1),i=t(n-1,a),c=t(n+1,a),s=t(n-1,a-1),u=t(n+1,a-1),d=t(n-1,a+1),m=t(n+1,a+1),h=[],f=function(e,t){h.push(new de(e,[[t[0]-e[0],t[1]-e[1]]],{dash:4,strokeWidth:2,stroke:"black"}))};if(!i){var p=e.corner_pos[0],g=e.corner_pos[3];o&&((p=e.corner_ext_pos[1].slice(0))[1]-=s?A:0),l&&((g=e.corner_ext_pos[6].slice(0))[1]+=d?A:0),f(p,g)}if(!c){var v=e.corner_pos[1],b=e.corner_pos[2];o&&((v=e.corner_ext_pos[2].slice(0))[1]-=u?A:0),l&&((b=e.corner_ext_pos[5].slice(0))[1]+=m?A:0),f(v,b)}if(!o){var y=e.corner_pos[0],x=e.corner_pos[1];i&&((y=e.corner_ext_pos[0].slice(0))[0]-=s?A:0),c&&((x=e.corner_ext_pos[3].slice(0))[0]+=u?A:0),f(y,x)}if(!l){var k=e.corner_pos[3],E=e.corner_pos[2];i&&((k=e.corner_ext_pos[7].slice(0))[0]-=d?A:0),c&&((E=e.corner_ext_pos[4].slice(0))[0]+=m?A:0),f(k,E)}h.forEach((function(t){return e.r_cage.add(t)})),r=r.concat(h)}})),N.render(),r}function fe(e){var t=function(t,r){return e.find((function(e){return e[0]===t&&e[1]===r}))},r=[];return me((function(e){var n=e.x,a=e.y;if(t(n,a)){var o=t(n,a-1),l=t(n,a+1),i=t(n-1,a),c=t(n+1,a),s=[],u=function(e,t){s.push(new v.e(e,[[t[0]-e[0],t[1]-e[1]]],{strokeWidth:4,stroke:"black"}))};if(!i)u(e.r_corner_pos[0],e.r_corner_pos[3]);if(!c)u(e.r_corner_pos[1],e.r_corner_pos[2]);if(!o)u(e.r_corner_pos[0],e.r_corner_pos[1]);if(!l)u(e.r_corner_pos[3],e.r_corner_pos[2]);s.forEach((function(t){return e.edge_cage.add(t)})),r.push.apply(r,s)}})),N.render(),r}function pe(){var e=Object(E.range)(1,10),t=Array.from({length:9},(function(){return[]})),r=Array.from({length:9},(function(){return[]})),n=Array.from({length:9},(function(){return[]}));me((function(e){var a=e.x-j,o=e.y-C,l=+e.normal.text;r[a].push(l),t[o].push(l);var i=Math.floor(a/3)+3*Math.floor(o/3);n[i].push(l)}));for(var a=0;a<9;++a){if(!Object(E.isEqual)(t[a].sort(),e))return alert("bad row ".concat(a)),!1;if(!Object(E.isEqual)(r[a].sort(),e))return alert("bad column ".concat(a)),!1;if(!Object(E.isEqual)(n[a].sort(),e))return alert("bad box ".concat(a)),!1}return alert("OK"),!0}function ge(){if(!L){var e=[];P.forEach((function(t,r){t.cells.find((function(e){return e[0]===V[0]&&e[1]===V[1]}))&&(t.objs.forEach((function(e){return e.parent.remove(e)})),e.push(r))})),e.forEach((function(e){return P[e]=null})),P=P.filter((function(e){return null!=e}))}var t=0;me((function(e){e.mark&&(ae(e.x,e.y,G,U,""),++t)})),t>1&&K.push({mode:"group",count:t}),N.render()}function ve(){me((function(e){ae(e.x,e.y,"reset",null,"")})),N.render()}function be(){if(0!==K.length){var e=K.pop(),t=0;"group"===e.mode&&(t=e.count,e=K.pop());do{"normal"===e.mode||"set"===e.mode?ae(e.x,e.y,e.mode,U,e.old_normal):"center"!==e.mode&&"corner"!==e.mode||ae(e.x,e.y,e.mode,U,e.newtext),K.pop(),--t>0&&(e=K.pop())}while(t>0);N.render()}}function ye(e,t,r){w=r.cellSize,j=r.left,W=r.right,C=r.top,O=r.bottom,_=j+r.width+W,S=C+r.height+O,M=r.gridDivWidth,z=r.gridDivHeight,D=r.dashedGrid?"dash":"normal",e&&function(e){var t=Uint8Array.from(atob(e),(function(e){return e.charCodeAt(0)})),r=y.a.inflate(t),n=k.a.decode(r);1!==n.version&&alert("Bad version"),w=n.grid[0],_=n.grid[1],S=n.grid[2],j=n.grid[3],W=n.grid[4],C=n.grid[5],O=n.grid[6],M=n.grid[7],z=n.grid[8],D=n.grid[9]}(e),A=.08*w,B=.2*w;var n=t.cloneNode(!1);t.parentNode.replaceChild(n,t),n.style.width=w*_+20+"px",n.style.height=w*S+250+"px",(N=new v.g(n)).on("keyup",(function(e){return function(e){"Shift"===e.key&&(Q=!1)}(e)})),N.on("mouseup",(function(){return H=!1,void("thermo"===G&&q?(P.push({type:1,style:I,cells:q.cells,objs:q.objs,color:U}),q=null):"cage"===G&&"dash"===I&&J?(P.push({type:2,style:I,objs:J.objs,cells:J.cells}),J=null):"cage"===G&&"edge"===I&&X&&(P.push({type:2,style:I,objs:X.objs,cells:X.cells}),X=null))})),T=[],P=[],K=[],q=null,J=null,X=null,$=null,F=null,Q=!1,V=null;var a=w*_,o=(N.size.x-a)/2,l={fill:"rgba(255, 255, 255, 0)",stroke:"black",strokeWidth:1,cursor:v.c.cursors.pointer},c={fill:"rgba(255, 255, 255, 0)",cursor:v.c.cursors.pointer};Z.fontSize=.8*w,ee.fontSize=.3*w,$=new v.d([o,20]),N.add($),F=new v.d([0,0]),$.add(F);for(var s=0;s<S;++s)T[s]=[];for(var u=w,d=function(e){for(var t=function(t){var r=e*u,n=t*u,a=e>=j&&t>=C&&e<_-W&&t<S-O,o=new v.d([r,n]);l.strokeWidth=0;var s=new v.f([0,0],u,u,l),d=new v.f([0,0],u,u,l),m=new v.f([0,0],u,u,l),h=new v.f([0,0],u,u,l),f=new v.f([0,0],u,u,l),p=new v.f([0,0],u,u,l),g=new v.f([0,0],u,u,l),b=new v.f([B,B],u-2*B,u-2*B,c),y=new v.h([0,.5*u],"",Z),x=new v.h([0,.4*u],"",ee),k=[];k[0]=[A,A],k[1]=[u-A,A],k[2]=[u-A,u-A],k[3]=[A,u-A];var E=[];E[0]=[u/2,A],E[1]=[u-A,u/2],E[2]=[u/2,u-A],E[3]=[A,u/2];var M=[u/2,u/2],z=[],D=[];a&&(te.fontSize=.25*u,re.fontSize=.25*u,k.forEach((function(e,t){(e=e.slice(0))[0]-=.025*u,e[1]-=.025*u,2!==t&&3!==t||(e[1]-=.15*u),1!==t&&2!==t||(e[0]-=.1*u),0===t&&z.push(new ne(e,"",re)),D.push(new v.h(e,"",te))})));var R=[];a&&E.forEach((function(e,t){(e=e.slice(0))[0]-=.02*u,e[1]-=.02*u,2===t&&(e[1]-=.15*u),1!==t&&3!==t||(e[1]-=.05*u),0!==t&&2!==t||(e[0]-=.02*u),1===t&&(e[0]-=.1*u),R.push(new v.h(e,"",te))}));var L=[];L[0]=[0,0],L[1]=[u,0],L[2]=[u,u],L[3]=[0,u];var P=[];P[0]=[0,A],P[1]=[A,0],P[2]=[u-A,0],P[3]=[u,A],P[4]=[u,u-A],P[5]=[u-A,u],P[6]=[A,u],P[7]=[0,u-A],o.add.apply(o,[g,p,s,f,h,d,m,b,y,x].concat(z,D,R)),o.on("mousedown",(function(r){return function(e,t,r){Q||me((function(e){e.mark&&(e.rect.options.fill="rgba(255, 255, 255, 0)",e.mark=!1)})),V=[t,r],H=!0,"thermo"===G?(q={cells:[[t,r]],color:U}).objs=se(q.cells,I,U):"cage"===G&&"dash"===I?(J={cells:[t,r]}).objs=he(J.cells):"cage"===G&&"edge"===I?(X={cells:[t,r]}).objs=fe(X.cells):"edge"===G||ie(t,r),N.render()}(0,e,t)})),o.on("hover",(function(){return function(e,t){H&&("thermo"===G||"edge"===G||("cage"===G&&"edge"===I?(X.objs&&X.objs.forEach((function(e){return e.parent.remove(e)})),X.cells.push([e,t]),X.objs=fe(X.cells)):"cage"===G&&"dash"===I?(J.objs&&J.objs.forEach((function(e){return e.parent.remove(e)})),J.cells.push([e,t]),J.objs=he(J.cells)):ie(e,t)),N.render())}(e,t)})),o.on("mousemove",(function(r){return function(e,t,r){if(H&&"edge"===G){var n=le(t,r),a=e.position.x-$.position.x-n.pos[0],o=e.position.y-$.position.y-n.pos[1];if((a<.4*w||a>.6*w)&&o>.4*w&&o<.6*w){a<.4*w&&(n=le(t-1,r));var l=new v.e([w,0],[[0,w]],{fill:null,strokeWidth:3,stroke:"black"});n.edge_right.add(l),N.render()}else if((o<.4*w||o>.6*w)&&a>.4*w&&a<.6*w){o<.4*w&&(n=le(t,r-1));var i=new v.e([0,w],[[w,0]],{fill:null,strokeWidth:3,stroke:"black"});n.edge_bottom.add(i),N.render()}}}(r,e,t)})),b.on("hover",(function(){return function(e,t){var r;H&&"thermo"===G&&((r=F).remove.apply(r,Object(i.a)(q.objs)),q.cells.push([e,t]),q.objs=se(q.cells,I,U),N.render())}(e,t)})),T[t][e]={x:e,y:t,pos:[r,n],cont:o,rect:s,fill:null,color:null,normal:y,center:x,r_corner_pos:L,corner:D,side:R,corner_pos:k,center_pos:M,side_pos:E,corner_ext_pos:P,cage_corner:z[0],edge_cage:h,edge_right:d,edge_bottom:m,r_cage:f,r_color_set:g,r_color:p,main_grid:a},$.add(o)},r=0;r<S;++r)t(r)},m=0;m<_;++m)d(m);var f=_-j-W,p=S-C-O,g=new v.f([j*w,C*w],f*w,p*w,{strokeWidth:4,stroke:"black",fill:null});return $.add(g),function(){var e,t,r={fill:"rgba(255, 255, 255, 0)",stroke:"black",strokeWidth:1,dash:"dash"===D?4:0},n={fill:"rgba(255, 255, 255, 0)",stroke:"black",strokeWidth:4};(e=$).remove.apply(e,Object(i.a)(Y));var a=_-j-W,o=S-C-O;Y=[];for(var l=0;l<a;++l)Y.push(new de([(j+l)*w,C*w],[[0,o*w]],l%M===0?n:r));for(var c=0;c<o;++c)Y.push(new de([j*w,(C+c)*w],[[a*w,0]],c%z===0?n:r));(t=$).add.apply(t,Object(i.a)(Y))}(),N.render(),e&&function(e){var t=Uint8Array.from(atob(e),(function(e){return e.charCodeAt(0)})),r=y.a.inflate(t),n=k.a.decode(r);F.empty(),P=[],me((function(e){e.lock_type=0,e.normal.text="",e.center.text=""})),n.cells.forEach((function(e){var t=Object(h.a)(e,5),r=t[0],n=t[1],a=t[2],o=t[3],l=t[4];1===a?ae(r,n,"set",l,o):2===a?ae(r,n,"set_corner",l,o):3===a&&ae(r,n,"color",l,o)})),n.stuff.forEach((function(e){1===e.type?e.objs=se(e.points,e.style,e.color):2===e.type&&"dash"===e.style?e.objs=he(e.cells):2===e.type&&"edge"===e.style&&(e.objs=fe(e.cells)),P.push(e)})),N.render()}(e),null}window.addEventListener("keydown",(function(e){return function(e){var t;if("TEXTAREA"!==e.target.tagName)if("Shift"!==e.key){if("Delete"===e.key||"Backspace"===e.key)return ge(),void e.preventDefault();if(!(e.key>="0"&&e.key<="9"))return e.key.startsWith("Arrow")&&V?(Q||me((function(e){e.mark&&(e.rect.options.fill="rgba(255, 255, 255, 0)",e.mark=!1)})),"ArrowUp"===e.key&&V[1]>0&&(V[1]-=1),"ArrowDown"===e.key&&V[1]<S-1&&(V[1]+=1),"ArrowLeft"===e.key&&V[0]>0&&(V[0]-=1),"ArrowRight"===e.key&&V[0]<_-1&&(V[0]+=1),ie(V[0],V[1]),void N.render()):void 0;t=e.key;for(var r=0,n=0;n<_;++n)for(var a=0;a<S;++a){if(le(n,a).mark){if("color"===G){var o=+t-1;o>=0&&o<=9&&ae(n,a,G,o,null)}else ae(n,a,G,U,t);++r}}K.push({mode:"group",count:r}),N.render()}else Q=!0}(e)}));var xe=r(203),ke=r(187),Ee=r(188),we=r(189),_e=r(190),Se=r(155),je=r(200),Ce=r(191),Oe=r(205),We=r(201),Me=r(207),ze=r(104),De=r(208),Ae=r(194),Be=r(209),Re=r(204),Ue=r(198),Ge=r(195),Ie=r(196),Le=r(197),Ne=window.location.search,Te=new URLSearchParams(Ne),Pe=Te.get("p"),He="1"===Te.get("s");function Ke(e){return a.a.createElement(xe.a,{open:e.open,onClose:e.onClose},a.a.createElement(ke.a,null,"URL"),a.a.createElement(Ee.a,null,a.a.createElement(we.a,null,e.text)),a.a.createElement(_e.a,null,a.a.createElement(Se.a,{onClick:function(){e.onClose(),window.open(e.text,"_blank").focus()}},"Open in tab"),a.a.createElement(Se.a,{color:"primary",onClick:e.onClose},"OK")))}var qe=function(e){Object(d.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(s.a)(this,r),(n=t.call(this,e)).handleKeyDown=function(e){if(n.state.solveMode&&("q"===e.key&&n.setMode("normal"),"w"===e.key&&n.setMode("center"),"e"===e.key&&n.setMode("corner"),"r"===e.key&&n.setMode("color")," "===e.key)){var t=["normal","center","corner","color"],r=t.indexOf(n.state.mode);-1!==r?(r=(r+1)%t.length,n.setMode(t[r])):n.setMode("normal")}},n.setMode=function(e){n.setState({mode:e},(function(){return ue(n.state)}))},n.setStyle=function(e,t){n.setState(Object(c.a)({},e,t),(function(){return ue(n.state)}))},n.generateUrl=function(){var e=function(e){var t={version:1,grid:[w,_,S,j,W,C,O,M,z,D],cells:[],stuff:P,desc:e};t.stuff.forEach(),me((function(e){1===e.lock_type&&t.cells.push([e.x,e.y,e.lock_type,e.normal.text,e.color]),2===e.lock_type&&t.cells.push([e.x,e.y,e.lock_type,e.cage_corner.text,e.color]),-1!==e.fill&&t.cells.push([e.x,e.y,3,null,e.fill])}));var r=k.a.encode(t),n=y.a.deflate(r),a=btoa(String.fromCharCode.apply(String,Object(i.a)(n)));return window.location.origin+"/?s=1&p="+encodeURIComponent(a)}(n.state.description);n.setState({dialogText:e,dialogOpen:!0})},n.handleChange=function(e,t){n.setState(Object(c.a)({},e.target.parentNode.id,t))},n.setGrid=function(){ye(Pe,document.getElementById("canvas"),n.state)},n.canvasRef=a.a.createRef(),n.state={solveMode:He,settingsMode:"size",color:0,description:"",cellSize:64,width:9,height:9,left:0,right:0,top:0,bottom:0,gridDivWidth:3,gridDivHeight:3,dashedGrid:!1,mode:He?"normal":"thermo",numberStyle:"normal",cageStyle:"dash",thermoStyle:"arrow",dialogOpen:!1,dialogText:"",seconds:0,timeStatus:!1},n}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this,t="";Pe&&(t=function(e){var t=Uint8Array.from(atob(e),(function(e){return e.charCodeAt(0)})),r=y.a.inflate(t);return k.a.decode(r).desc}(Pe)),this.setState({description:t},(function(){return ye(Pe,e.canvasRef.current,e.state)})),ue(this.state),document.addEventListener("keydown",this.handleKeyDown),this.interval=setInterval((function(){e.state.timeStatus&&e.setState({seconds:e.state.seconds+1})}),1e3)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown),clearInterval(this.interval)}},{key:"numberStyleBox",value:function(){var e=this;return a.a.createElement(je.a,{margin:"10px"},a.a.createElement(Ce.a,{fullWidth:!0},a.a.createElement(Oe.a,{shrink:!0,id:"numberstyle-label"},"Style"),a.a.createElement(We.a,{labelId:"numberstyle-label",fullWidth:!0,value:this.state.numberStyle,onChange:function(t){return e.setStyle("numberStyle",t.target.value)}},a.a.createElement(Me.a,{value:"normal"},"Normal"),a.a.createElement(Me.a,{value:"corner"},"Corner"))))}},{key:"cageStyleBox",value:function(){var e=this;return a.a.createElement(je.a,{margin:"10px"},a.a.createElement(Ce.a,{fullWidth:!0},a.a.createElement(Oe.a,{shrink:!0,id:"cagestyle-label"},"Style"),a.a.createElement(We.a,{labelId:"cagestyle-label",fullWidth:!0,value:this.state.cageStyle,onChange:function(t){return e.setStyle("cageStyle",t.target.value)}},a.a.createElement(Me.a,{value:"dash"},"Dashed"),a.a.createElement(Me.a,{value:"edge"},"Edge"))))}},{key:"thermoStyleBox",value:function(){var e=this;return a.a.createElement(je.a,{margin:"10px"},a.a.createElement(Ce.a,{fullWidth:!0},a.a.createElement(Oe.a,{shrink:!0,id:"thermostyle-label"},"Style"),a.a.createElement(We.a,{labelId:"thermostyle-label",fullWidth:!0,value:this.state.thermoStyle,onChange:function(t){return e.setStyle("thermoStyle",t.target.value)}},a.a.createElement(Me.a,{value:"bulb"},"With bulb"),a.a.createElement(Me.a,{value:"nobulb"},"No bulb"),a.a.createElement(Me.a,{value:"arrow"},"Arrow"))))}},{key:"sizeSlider",value:function(e){var t={cellSize:{label:"Cell size",min:32,max:96,step:4,marks:!0},width:{label:"Width",min:3,max:30,step:1,marks:!1},height:{label:"Height",min:3,max:30,step:1,marks:!1},gridDivWidth:{label:"Grid divider width",min:0,max:10,step:1,marks:!1},gridDivHeight:{label:"Grid divider height",min:0,max:10,step:1,marks:!1},left:{label:"Left margin",min:0,max:10,step:1,marks:!1},right:{label:"Right margin",min:0,max:10,step:1,marks:!1},top:{label:"Top margin",min:0,max:10,step:1,marks:!1},bottom:{label:"Bottom margin",min:0,max:10,step:1,marks:!1}}[e];return a.a.createElement(je.a,null,a.a.createElement(ze.a,null,t.label,": ",this.state[e]),a.a.createElement(De.a,{value:this.state[e],min:t.min,max:t.max,step:t.step,marks:t.marks,id:e,onChange:this.handleChange,onChangeCommitted:this.setGrid}))}},{key:"render",value:function(){var e=this;return a.a.createElement(je.a,{display:"flex",flexDirection:"row"},a.a.createElement(Ke,{text:this.state.dialogText,open:this.state.dialogOpen,onClose:function(){return e.setState({dialogOpen:!1})}}),this.state.solveMode&&a.a.createElement(je.a,{width:"250px"},a.a.createElement(je.a,{margin:"20px",padding:"10px",boxShadow:3},a.a.createElement(ze.a,{align:"center",variant:"h4"},new Date(1e3*this.state.seconds).toISOString().substr(11,8)),a.a.createElement(Ae.a,{fullWidth:!0,size:"large"},a.a.createElement(Se.a,{onClick:function(){return e.setState({timeStatus:!0})}},a.a.createElement(Ge.a,null)),a.a.createElement(Se.a,{onClick:function(){return e.setState({timeStatus:!1})}},a.a.createElement(Ie.a,null)),a.a.createElement(Se.a,{onClick:function(){return e.setState({seconds:0,timeStatus:!1})}},a.a.createElement(Le.a,null)))),""!==this.state.description&&a.a.createElement(je.a,{margin:"20px"},a.a.createElement(Be.a,{multiline:!0,variant:"outlined",InputProps:{readOnly:!0},value:this.state.description})),a.a.createElement(je.a,{margin:"20px"},a.a.createElement(Be.a,{multiline:!0,variant:"outlined"}))),!this.state.solveMode&&a.a.createElement(je.a,{width:"250px"},a.a.createElement(je.a,{margin:"30px"},a.a.createElement(We.a,{fullWidth:!0,value:this.state.mode,onChange:function(t){return e.setMode(t.target.value)}},a.a.createElement(Me.a,{value:"number"},"Number"),a.a.createElement(Me.a,{value:"cage"},"Cage"),a.a.createElement(Me.a,{value:"thermo"},"Thermo"),a.a.createElement(Me.a,{value:"color"},"Color")),"number"===this.state.mode&&this.numberStyleBox(),"cage"===this.state.mode&&this.cageStyleBox(),"thermo"===this.state.mode&&this.thermoStyleBox()),a.a.createElement(je.a,{margin:"30px"},a.a.createElement(Ae.a,{fullWidth:!0,size:"large",variant:"contained",orientation:"vertical"},a.a.createElement(Se.a,{onClick:this.generateUrl},"Generate URL"))),a.a.createElement(je.a,{margin:"30px"},a.a.createElement(We.a,{fullWidth:!0,value:this.state.settingsMode,onChange:function(t){return e.setState({settingsMode:t.target.value})}},a.a.createElement(Me.a,{value:"size"},"Size"),a.a.createElement(Me.a,{value:"margins"},"Margins"),a.a.createElement(Me.a,{value:"grid"},"Grid"),a.a.createElement(Me.a,{value:"description"},"Description"))),"size"===this.state.settingsMode&&a.a.createElement(je.a,{margin:"30px",padding:"10px",boxShadow:3},this.sizeSlider("cellSize"),this.sizeSlider("width"),this.sizeSlider("height")),"margins"===this.state.settingsMode&&a.a.createElement(je.a,{margin:"30px",padding:"10px",boxShadow:3},this.sizeSlider("left"),this.sizeSlider("right"),this.sizeSlider("top"),this.sizeSlider("bottom")),"grid"===this.state.settingsMode&&a.a.createElement(je.a,{margin:"30px",padding:"10px",boxShadow:3},this.sizeSlider("gridDivWidth"),this.sizeSlider("gridDivHeight"),a.a.createElement(ze.a,null,"Dashed"),a.a.createElement(Re.a,{checked:this.state.dashedGrid,onChange:function(t){e.setGrid("dashedGrid",t.target.checked)}})),"description"===this.state.settingsMode&&a.a.createElement(je.a,{margin:"30px",padding:"10px",boxShadow:3},a.a.createElement(Be.a,{multiline:!0,rows:8,value:this.state.description,onChange:function(t){return e.setState({description:t.target.value})}}))),a.a.createElement(je.a,{display:"flex"},a.a.createElement("div",{id:"canvas",ref:this.canvasRef})),a.a.createElement(je.a,{width:"250px"},this.state.solveMode&&a.a.createElement(je.a,{margin:"30px"},a.a.createElement(Ae.a,{fullWidth:!0,size:"large",variant:"contained",orientation:"vertical"},[["normal","Normal"],["center","Center"],["corner","Corner"],["color","Color"]].map((function(t){return a.a.createElement(Se.a,{key:t[0],color:e.state.mode===t[0]?"primary":"default",onClick:function(r){return e.setMode(t[0])}},t[1])})))),a.a.createElement(je.a,{margin:"30px"},a.a.createElement(Ae.a,{fullWidth:!0,size:"large",variant:"contained",orientation:"vertical"},a.a.createElement(Se.a,{onClick:ve},"Reset"),a.a.createElement(Se.a,{onClick:pe},"Check"),a.a.createElement(Se.a,{onClick:be},"Undo"),a.a.createElement(Se.a,{onClick:ge},"Delete"))),a.a.createElement(je.a,{margin:"30px"},a.a.createElement(Ue.a,{container:!0},!this.state.solveMode&&"color"!==this.state.mode&&R.map((function(t,r){return a.a.createElement(Ue.a,{key:r,item:!0,xs:4},a.a.createElement(Se.a,{variant:e.state.color===r?"contained":"outlined",onClick:function(){console.log(r,e.state.color),e.setState({color:r}),oe(r)}},a.a.createElement("div",{style:{border:"1px solid black",background:t,width:"30px",height:"30px"}})))})),"color"===this.state.mode&&R.map((function(e,t){return a.a.createElement(Ue.a,{key:t,item:!0,xs:4},a.a.createElement(Se.a,{variant:"outlined",onClick:function(){return oe(t)}},a.a.createElement("div",{style:{border:"1px solid black",background:e,width:"30px",height:"30px"}})))})),"color"!==this.state.mode&&Object(i.a)(Array(9).keys()).map((function(e){return a.a.createElement(Ue.a,{key:e,item:!0,xs:4},a.a.createElement(Se.a,{variant:"outlined",onClick:function(){return function(e){var t=0;me((function(r){r.mark&&(ae(r.x,r.y,G,U,e),++t)})),K.push({mode:"group",count:t}),N.render()}(e+1)}},a.a.createElement("div",{style:{fontSize:"20px"}},e+1)))}))))))}}]),r}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.db0aa83b.chunk.js.map