(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/naveen-balaji.6e2ca53d.png"},function(e,a,t){e.exports=t.p+"static/media/naveen-balaji-small.6ca69fb0.jpg"},function(e,a,t){e.exports=t.p+"static/media/eric-levine.b3f2e107.png"},function(e,a,t){e.exports=t.p+"static/media/eric-levine-small.dc310235.jpg"},function(e,a,t){e.exports=t.p+"static/media/stephen-hagan.b1849c2e.png"},function(e,a,t){e.exports=t.p+"static/media/stephen-hagan-small.6d3a572b.jpg"},function(e,a,t){e.exports=t.p+"static/media/elaine-cao.062d9d65.png"},function(e,a,t){e.exports=t.p+"static/media/elaine-cao-small.f8146623.jpg"},function(e,a,t){e.exports=t.p+"static/media/vincent-brown.a605bf9a.png"},function(e,a,t){e.exports=t.p+"static/media/vincent-brown-small.4d3c1988.jpg"},function(e,a,t){e.exports=t.p+"static/media/daniel-zielinski.e11ebc48.png"},function(e,a,t){e.exports=t.p+"static/media/daniel-zielinski-small.75016663.jpg"},function(e,a,t){e.exports=t.p+"static/media/brent-yard.a1f3a18c.png"},function(e,a,t){e.exports=t.p+"static/media/brent-yard-small.fa6f60e1.jpg"},function(e,a,t){e.exports=t.p+"static/media/john-koines.564233c7.png"},function(e,a,t){e.exports=t.p+"static/media/john-koines-small.f3b68b40.jpg"},,,function(e,a,t){e.exports=t.p+"static/media/background.52dfc6cc.png"},function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(11),l=t.n(c),r=(t(36),t(3)),o=t(12),m=t.n(o),s=t(13),p=t.n(s),u=t(14),d=t.n(u),v=t(15),f=t.n(v),k=t(16),g=t.n(k),b=t(17),h=t.n(b),N=t(18),E=t.n(N),D=t(19),j=t.n(D),x=t(20),P=t.n(x),L=t(21),y=t.n(L),w=t(22),A=t.n(w),S=t(23),B=t.n(S),C=t(24),V=t.n(C),z=t(25),J=t.n(z),T=t(26),H=t.n(T),M=t(27),R=t.n(M),G={firstName:"Naveen",lastName:"Balaji",picture:m.a,thumbnail:p.a,competitiveDeck:"Modern Tron",edhDeck:"5-color Charms",previousDeck:"Time Vault",previousPlace:1,judgeLevel:0},I={firstName:"John",lastName:"Koines",picture:H.a,thumbnail:R.a,competitiveDeck:"Vintage DPS",edhDeck:"Sen Triplets",previousDeck:"N/A",previousPlace:null,judgeLevel:1},K={firstName:"Stephen",lastName:"Hagan",picture:g.a,thumbnail:h.a,competitiveDeck:"Modern Ponza",edhDeck:"Aminatou Prison",previousDeck:"N/A",previousPlace:null,judgeLevel:2},O={firstName:"Elaine",lastName:"Cao",picture:E.a,thumbnail:j.a,competitiveDeck:"UW Control",edhDeck:"None",previousDeck:"Hate Bears",previousPlace:3,judgeLevel:2},U={firstName:"Daniel",lastName:"Zielinski",picture:A.a,thumbnail:B.a,competitiveDeck:"",edhDeck:"",previousDeck:"Power Artifact",previousPlace:5,judgeLevel:0},W={firstName:"Vincent",lastName:"Brown",picture:P.a,thumbnail:y.a,competitiveDeck:"",edhDeck:"",previousDeck:"4 Color Mentor",previousPlace:7,judgeLevel:0},Y={firstName:"Eric",lastName:"Levine",picture:d.a,thumbnail:f.a,competitiveDeck:"Storm",edhDeck:"All of them",previousDeck:"N/A",previousPlace:null,judgeLevel:3},Z={firstName:"Brent",lastName:"Yard",picture:V.a,thumbnail:J.a,competitiveDeck:"Paradoxical",edhDeck:"Sygg, River Guide",previousDeck:"N/A",previousPlace:null,judgeLevel:1},q=function(){return{naveenbalaji:G,vincentbrown:W,elainecao:O,stephenhagan:K,johnkoines:I,ericlevine:Y,brentyard:Z,danielzielinski:U}};t(37);var F=function(e){var a=q()[e.match.params.playerName];return a?i.a.createElement("div",{className:"player"},i.a.createElement("div",{className:"content"},i.a.createElement("img",{className:"profile-picture",src:a.picture,alt:"Large format of ".concat(a.firstName)}),i.a.createElement("div",{className:"name"},i.a.createElement("h1",null,a.firstName),i.a.createElement("h1",null,a.lastName)),i.a.createElement("div",{className:"text-block"},i.a.createElement("div",null,i.a.createElement("label",null,"Competitive Deck:")," ",a.competitiveDeck),i.a.createElement("div",null,i.a.createElement("label",null,"EDH Deck:")," ",a.edhDeck),i.a.createElement("div",null,i.a.createElement("label",null,"Previous VRD:")," ",a.previousDeck,a.previousPlace?" (".concat(a.previousPlace,")"):""),i.a.createElement("div",null,i.a.createElement("label",null,"Judge Level:")," ",a.judgeLevel)))):i.a.createElement(r.a,{to:"/"})};t(46);var Q=function(){return i.a.createElement("div",{className:"home"},i.a.createElement("h1",null,"STL"),i.a.createElement("h1",null,"VRD"))};var X=function(){return i.a.createElement(r.d,null,i.a.createElement(r.b,{path:"/",exact:!0,component:Q}),i.a.createElement(r.b,{path:"/player/:playerName",exact:!0,component:F}),i.a.createElement(r.a,{to:"/"}))},$=t(4);t(47);var _=function(){var e=q();return i.a.createElement("div",{className:"footer"},Object.keys(e).map(function(a){return i.a.createElement("span",{key:a},i.a.createElement($.b,{to:"/player/".concat(a)},i.a.createElement("img",{className:"profile-picture",src:e[a].thumbnail,alt:"Small format of ".concat(e[a].firstName)})))}))},ee=t(30),ae=t.n(ee);t(48);var te=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"background",alt:"background",src:ae.a}),i.a.createElement($.a,null,i.a.createElement(X,null),i.a.createElement(_,null)))};l.a.render(i.a.createElement(te,null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.45982e83.chunk.js.map