(this.webpackJsonpr3f_fbx_model=this.webpackJsonpr3f_fbx_model||[]).push([[0],{55:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);a(55);var n=a(0),i=a.n(n),c=a(26),s=a.n(c),r=a(80),o=a(79),j=a(76),b=a(17),u=a(6),d=a(2),f=a(77),h=a(78),l=a(40),O=a(75),m=function(e){return"/r3f-fbx-model"+e},p=a(19),x=function(){var e=Object(f.a)(m("/assets/ybot.fbx")),t=function(e,t){var a=Object(n.useState)(!0),i=Object(u.a)(a,2),c=i[0],s=i[1],r=[];t.forEach((function(t){var a=Object(f.a)(m(e+t+".fbx")).animations;a[0].name=t,r.push(a[0])}));var o=Object(O.a)(r),j=o.actions,b=o.names,d=o.ref,h=Object(l.b)({animations:{options:b},start:Object(l.a)((function(){return s(!0)})),pause:Object(l.a)((function(){return s(!1)}))});return Object(n.useEffect)((function(){var e;return null===(e=j[h.animations])||void 0===e||e.reset().fadeIn(.5).play(),function(){var e;null===(e=j[h.animations])||void 0===e||e.fadeOut(.5),s(!0)}}),[j,h.animations]),Object(n.useEffect)((function(){var e=j[h.animations];e&&(e.paused=!c)}),[j,h.animations,c]),d}("/assets/",["ybot","belly_dancing","samba_dancing","goofy_running"]),a=Object(h.a)("F75F0B_461604_9A3004_FB9D2F",512),i=Object(u.a)(a,1)[0],c=Object(h.a)("28292A_D3DAE5_A3ACB8_818183",512),s=Object(u.a)(c,1)[0],r=new d.MeshMatcapMaterial({matcap:i}),o=new d.MeshMatcapMaterial({matcap:s});return e.traverse((function(e){if(e instanceof d.Mesh){var t=e;t.castShadow=!0,t.receiveShadow=!0,"Alpha_Surface"===t.name?t.material=r:"Alpha_Joints"===t.name&&(t.material=o)}})),Object(p.jsx)("group",{ref:t,scale:.01,children:Object(p.jsx)("primitive",{object:e,dispose:null})})},v=function(){return Object(p.jsxs)(b.a,{camera:{position:[0,1.5,3],fov:50,aspect:window.innerWidth/window.innerHeight,near:.1,far:2e3},dpr:window.devicePixelRatio,shadows:!0,children:[Object(p.jsx)("color",{attach:"background",args:["#1e1e1e"]}),Object(p.jsx)(r.a,{}),Object(p.jsx)(o.a,{target:[0,1,0]}),Object(p.jsx)("ambientLight",{intensity:.1}),Object(p.jsx)("directionalLight",{position:[5,5,5],castShadow:!0,"shadow-mapSize-width":2048,"shadow-mapSize-height":2048}),Object(p.jsxs)(n.Suspense,{fallback:null,children:[Object(p.jsx)(x,{}),Object(p.jsx)(j.a,{rotation:[-Math.PI/2,0,0],args:[5,5],receiveShadow:!0,children:Object(p.jsx)("meshStandardMaterial",{})})]}),Object(p.jsx)("axesHelper",{})]})},g=function(){return Object(p.jsx)("div",{style:{width:"100vw",height:"100vh"},children:Object(p.jsx)(v,{})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,81)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),w()}},[[74,1,2]]]);
//# sourceMappingURL=main.a7304360.chunk.js.map