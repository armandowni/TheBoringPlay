(function(t){function e(e){for(var a,r,o=e[0],l=e[1],h=e[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(m.length)m.shift()();return s.push.apply(s,h||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],a=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},n={app:0},s=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var h=0;h<o.length;h++)e(o[h]);var c=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"37ff":function(t,e,i){t.exports=i.p+"img/bird1.a3374f04.png"},"42f9":function(t,e,i){t.exports=i.p+"img/canongame.a8a03555.png"},4626:function(t,e,i){"use strict";i("ddb9")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("router-view")],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[i("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("The Boring Game")]),i("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[i("span",{staticClass:"navbar-toggler-icon"})]),i("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[i("ul",{staticClass:"navbar-nav mr-auto"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"/"}},[t._v("Home "),i("span",{staticClass:"sr-only"},[t._v("(current)")])])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"/collection"}},[t._v("Game Collection")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Feedback")])])])])])])}],r={name:"App",components:{}},o=r,l=(i("034f"),i("2877")),h=Object(l["a"])(o,n,s,!1,null,null,null),c=h.exports,u=(i("4160"),i("159b"),i("8c4f")),m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4",attrs:{id:"judul"}},[a("h1",[t._v("Make the game even more boring")])]),a("div",{staticClass:"col-sm-8",attrs:{id:"carouselGame"}},[a("ul",[a("li",[a("a",{attrs:{href:"/canonGame"}},[a("div",{staticClass:"profile-card-2"},[a("img",{staticClass:"img img-responsive",attrs:{src:i("42f9")}}),a("div",{staticClass:"profile-name"},[t._v("Canon game")])])])])])])])])])}],p={name:"Home"},g=p,f=(i("b72a"),Object(l["a"])(g,m,d,!1,null,"5bb385c4",null)),v=f.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"collectionPage"},[a("div",{staticClass:"container gameContainer"},[a("ul",{staticClass:"list-group list-group-horizontal-sm gameList"},[a("li",{staticClass:"list-group-item"},[a("img",{attrs:{src:i("d625"),alt:"Tidak memuat",width:"60",height:"60"}}),a("br"),a("a",{attrs:{href:"/canonGame"}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v(" Canon game ")])])]),a("li",{staticClass:"list-group-item"},[a("img",{attrs:{src:i("83a0"),alt:"Tidak memuat",width:"60",height:"60"}}),a("br"),a("a",{attrs:{href:"#"}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v(" Coming Soon ")])])]),a("li",{staticClass:"list-group-item"},[a("img",{attrs:{src:i("83a0"),alt:"Tidak memuat",width:"60",height:"60"}}),a("br"),a("a",{attrs:{href:"#"}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v(" Coming Soon ")])])]),a("li",{staticClass:"list-group-item"},[a("img",{attrs:{src:i("83a0"),alt:"Tidak memuat",width:"60",height:"60"}}),a("br"),a("a",{attrs:{href:"#"}},[a("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[t._v(" Coming Soon ")])])])]),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#"}},[t._v("1")])]),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])])])])])}],C={name:"CollectionPage"},x=C,w=(i("a41c"),Object(l["a"])(x,b,y,!1,null,"544e3892",null)),_=w.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container-fluid"},[t._m(0),i("div",{staticClass:"row game"},[i("div",{staticClass:"col-6 theGame"},[t._m(1),i("div",{staticClass:"userBtn"},[i("ul",[i("li",[t._v("Degress: "),i("input",{staticClass:"inputDeg",attrs:{type:"number",id:"inputDeg",placeholder:"input degress(0-90)"},on:{change:function(e){return t.updateCanon()},keyup:function(e){return t.updateCanon()}}})]),i("li",[i("input",{staticStyle:{"margin-right":"20px"},attrs:{type:"button",id:"fireBtn",value:"Fire"},on:{click:function(e){return t.fire()}}})]),i("li",[i("input",{attrs:{type:"button",id:"startBtn",value:"Start Game"},on:{click:function(e){return t.startGame()}}})])]),i("h4",{staticClass:"alert",staticStyle:{color:"red"},attrs:{id:"alert"}})])]),t._m(2)])])},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row judul"},[i("div",{staticClass:"col-12 title"},[t._v(" Canon Game ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"gamePlay"}},[i("canvas",{attrs:{id:"gameCanvas"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-4 score"},[i("div",{staticClass:"highScores"},[i("h1",[t._v("Top 10 High Scores")]),i("table",{staticClass:"HighScore",attrs:{id:"highScore"}},[i("tr",[i("td",[t._v("No.")]),i("td",[t._v("Name")]),i("td",[t._v("Score")])])])])])}],P=(i("cb29"),i("a434"),i("b0c0"),i("37ff")),G=i.n(P),B={start:function(t){t.width=640,t.height=400,this.context=t.getContext("2d"),this.waktu=60},view:function(t){t.width=640,t.height=400,this.context=t.getContext("2d"),this.waktu=60},clear:function(t){this.context=t.getContext("2d"),this.context.clearRect(0,0,t.width,t.height)}},E=[{name:"IronMen",score:800},{name:"Odading",score:300},{name:"Lewis",score:200}],M={name:"CanonGame",data:function(){return{ground:null,time:null,myScore:null,timer:null,gameCanvas:null,change:!1,berhenti:!0,hit:!1,tembak:!1,angle:null,buttonFire:null,startBtn:null,score:0,bird:G.a,cannon:null,target:null,bullet:null}},mounted:function(){this.gameCanvas=document.getElementById("gameCanvas"),this.buttonFire=document.getElementById("fireBtn"),this.startBtn=document.getElementById("startBtn"),this.angle=document.getElementById("inputDeg"),this.viewGame()},methods:{viewGame:function(){B.view(this.gameCanvas),this.angle.value=0,this.disabledBtn(),this.viewDataPlayer(),this.utility(),this.updateGameArea(),this.clock()},startGame:function(){this.berhenti=!1,B.start(this.gameCanvas),this.clock(),this.enableBtn()},clock:function(){var t=this;0==this.berhenti?this.timer=setInterval((function(){if(t.printClock(B.waktu),-1==B.waktu){var e=prompt("Enter your name: ");t.addDataPlayer(e,t.score),t.score=0,t.berhenti=!0,t.tembak=!1,t.buttonFire.disabled=!1,t.hit=!1,t.printPeluru(),t.viewGame(),clearInterval(t.timer)}else B.waktu--}),1e3):this.printClock(B.waktu)},printClock:function(t){this.updateGameArea(),this.time.text="Time: "+t,this.time.update()},viewDataPlayer:function(){var t="";t=document.getElementById("highScore");for(var e=0;e<E.length;e++){var i=t.insertRow(e+1),a=i.insertCell(0),n=i.insertCell(1),s=i.insertCell(2);a.innerHTML=e+1+".",n.innerHTML=E[e].name,s.innerHTML=E[e].score}if(1==this.change)for(var r=t.rows.length;r>E.length+1;r--)t.deleteRow(r-1);this.change=!1},addDataPlayer:function(t,e){for(var i={name:t,score:e},a=0,n=0;n<E.length;n++)E[n].score>i.score?a=(E[n].score,i.score,n+1):E[n].score==i.score&&(a=n);E.splice(a,0,i),E.length>10&&E.splice(E.length-1,1),alert("Successfull add data \nName : "+t+"\nScore: "+e),this.change=!0},utility:function(){this.myScore=new this.componentScore(this.gameCanvas,"20px","Consolas","black",280,40,"text"),this.ground=new this.component(this.gameCanvas,630,100,"chocolate",5,350),this.time=new this.componentScore(this.gameCanvas,"20px","Consolas","black",500,40,"text"),this.cannon={ban:new this.component(this.gameCanvas,50,10,"black",15,340),meriam:new this.componentCanon(this.gameCanvas,60,20,"red",40,310),tiang:new this.component(this.gameCanvas,10,30,"black",30,310)};var t=Math.floor(200*Math.random())+200,e=Math.floor(200*Math.random())+100;this.target=new this.componentScore(this.gameCanvas,50,50,this.bird,t,e,"image"),this.bullet=new this.componentBullet(this.gameCanvas,10,10,"white",this.cannon.meriam.x,this.cannon.meriam.y)},component:function(t,e,i,a,n,s){this.width=e,this.height=i,this.speedX=0,this.speedY=0,this.x=n,this.y=s,this.update=function(){var e=t.getContext("2d");e.fillStyle=a,e.fillRect(this.x,this.y,this.width,this.height)},this.newPos=function(){this.x+=this.speedX,this.y+=this.speedY},this.clr=function(){var t=this.gameCanvas.context;t.clearRect(0,0,this.width,this.height)}},componentScore:function(t,e,i,a,n,s,r){this.type=r,"image"==r&&(this.image=new Image,this.image.src=a),this.width=e,this.height=i,this.speedX=0,this.speedY=0,this.x=n,this.y=s,this.update=function(){var e=t.getContext("2d");"text"==this.type?(e.font=this.width+" "+this.height,e.fillStyle=a,e.fillText(this.text,this.x,this.y)):"image"==r?e.drawImage(this.image,this.x,this.y,this.width,this.height):(e.fillStyle=a,e.fillRect(this.x,this.y,this.width,this.height))},this.newPos=function(){this.x+=this.speedX,this.y+=this.speedY}},componentCanon:function(t,e,i,a,n,s){this.width=e,this.height=i,this.speedX=0,this.speedY=0,this.angle=0,this.x=n,this.y=s;var r=t.getContext("2d");this.update=function(){r.fillStyle=a,r.save(),r.translate(this.x,this.y),r.rotate(this.angle*Math.PI/90),r.fillRect(this.width/-6,this.height/-2,this.width,this.height),r.lineWidth=1,r.restore()},this.newPos=function(){this.x+=this.speedX,this.y+=this.speedY},this.clr=function(){r.clearRect(this.x-15,this.y-66,100,80)}},componentBullet:function(t,e,i,a,n,s){this.width=e,this.height=i,this.speedX=0,this.speedY=0,this.BulletSpeed=8,this.angle=0,this.x=n,this.y=s,this.gravity=.05,this.gravitySpeed=0;var r=t.getContext("2d");this.update=function(){r.beginPath(),r.fillStyle=a,r.save(),r.rotate(this.angle*Math.PI/90),r.arc(this.x,this.y,5,0,2*Math.PI),r.lineWidth=1,r.fill(),r.restore()},this.newPos=function(){this.gravitySpeed+=this.gravity,this.x+=this.speedX,this.y+=this.speedY+this.gravitySpeed},this.clr=function(){r=B.context,r.clearRect(this.x-5,this.y-5,10,10)}},enableBtn:function(){this.buttonFire.disabled=!1,this.startBtn.disabled=!0,this.angle.disabled=!1},disabledBtn:function(){this.startBtn.disabled=!1,this.buttonFire.disabled=!0,this.angle.disabled=!0},updateGameArea:function(){B.clear(this.gameCanvas),this.ground.update(),this.scoreUpdate(this.score),this.randomBurung(),this.printCannonChar(),this.printPeluru()},scoreUpdate:function(t){this.myScore.text="SCORE: "+t,this.myScore.update()},printCannonChar:function(){this.cannon.ban.update(),this.cannon.tiang.update(),this.cannon.meriam.update()},updateCanon:function(){var t=this.angle.value;t>90?document.getElementById("alert").innerHTML="You cannon input greater than 90 degree ":t<0?document.getElementById("alert").innerHTML="You should input greater than 0 degree ":(document.getElementById("alert").innerHTML="",this.cannon.meriam.clr(),this.cannon.meriam.angle=t/2*-1,this.bullet.x=this.cannon.meriam.x,this.bullet.y=this.cannon.meriam.y,this.printCannonChar(),this.printPeluru())},randomBurung:function(){1==this.hit&&(this.target.x=Math.floor(200*Math.random())+200,this.target.y=Math.floor(200*Math.random())+100,this.hit=!1),this.target.update()},printPeluru:function(){this.bullet.update()},fire:function(){this.buttonFire.disabled=!0,this.tembak=!0,this.peluru()},peluru:function(){if(0==this.tembak)this.bullet.x=80,this.printPeluru();else var t=this,e=setInterval((function(){var i=t.bullet.x,a=t.bullet.x+t.bullet.width,n=t.bullet.y,s=t.bullet.y+t.bullet.height,r=t.target.x+15,o=t.target.x+t.target.width,l=t.target.y+15,h=t.target.y+t.target.height,c=!0;if((s<l||n>h||a<r||i>o)&&(c=!1),t.bullet.x>=B.width||t.bullet.y>=t.ground.y-10||t.bullet.y<=0)t.bullet.x=t.cannon.meriam.x,t.bullet.y=t.cannon.meriam.y,t.bullet.gravitySpeed=0,t.tembak=!1,t.buttonFire.disabled=!1,t.printPeluru(),clearInterval(e);else if(1==c)t.bullet.x=t.cannon.meriam.x,t.bullet.y=t.cannon.meriam.y,t.bullet.gravitySpeed=0,t.tembak=!1,t.buttonFire.disabled=!1,t.score+=100,t.hit=!0,t.printPeluru(),t.scoreUpdate(t.score),clearInterval(e);else{t.bullet.clr();var u=t.cannon.meriam.angle*Math.PI/90;t.bullet.x+=Math.cos(u)*t.bullet.BulletSpeed,t.bullet.y+=Math.sin(u)*t.bullet.BulletSpeed,t.bullet.newPos(),t.printPeluru()}}),30)}}},O=M,I=(i("4626"),Object(l["a"])(O,S,k,!1,null,"a7809028",null)),T=I.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container-fluid"},[t._m(0),i("div",{staticClass:"row game"},[i("div",{staticClass:"col-6 theGame"},[t._m(1),i("div",{staticClass:"userBtn"},[i("ul",[i("li",[i("button",{on:{onmousedown:function(e){return t.accelerate(-.2)},onmouseup:function(e){return t.accelerate(.05)}}},[t._v("ACCELERATE")])]),i("li",[i("input",{attrs:{type:"button",id:"startBtn",value:"Start Game"},on:{click:function(e){return t.startGame()}}})])]),i("h4",{staticClass:"alert",staticStyle:{color:"red"},attrs:{id:"alert"}})])]),t._m(2)])])])},$=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row judul"},[i("div",{staticClass:"col-12 title"},[t._v(" Flappy Game ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"gamePlay"}},[i("canvas",{attrs:{id:"gameCanvas"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-4 score"},[i("div",{staticClass:"highScores"},[i("h1",[t._v("Top 10 High Scores")]),i("table",{staticClass:"HighScore",attrs:{id:"highScore"}},[i("tr",[i("td",[t._v("No.")]),i("td",[t._v("Name")]),i("td",[t._v("Score")])])])])])}],R={start:function(t){t.width=640,t.height=400,this.context=t.getContext("2d"),this.frameNo=0},view:function(t){t.width=640,t.height=400,this.context=t.getContext("2d"),this.frameNo=0},clear:function(t){this.context.clearRect(0,0,t.width,t.height)}},F={name:"FlappyDuck",data:function(){return{myGamePiece:null,myObstacles:[],myScore:null,gameCanvas:null}},mounted:function(){this.gameCanvas=document.getElementById("gameCanvas"),this.viewGame()},methods:{viewGame:function(){this.myGamePiece=new this.component(30,30,"red",10,120),this.myGamePiece.gravity=.05,this.myScore=new this.component("30px","Consolas","black",280,40,"text"),R.view(this.gameCanvas)},startGame:function(){this.myGamePiece=new this.component(30,30,"red",10,120),this.myGamePiece.gravity=.05,this.myScore=new this.component("30px","Consolas","black",280,40,"text"),R.start(this.gameCanvas)},component:function(t,e,i,a,n,s){this.type=s,this.score=0,this.width=t,this.height=e,this.speedX=0,this.speedY=0,this.x=a,this.y=n,this.gravity=0,this.gravitySpeed=0,this.update=function(){var t=R.context;"text"==this.type?(t.font=this.width+" "+this.height,t.fillStyle=i,t.fillText(this.text,this.x,this.y)):(t.fillStyle=i,t.fillRect(this.x,this.y,this.width,this.height))},this.newPos=function(){this.gravitySpeed+=this.gravity,this.x+=this.speedX,this.y+=this.speedY+this.gravitySpeed,this.hitBottom()},this.hitBottom=function(){var t=R.canvas.height-this.height;this.y>t&&(this.y=t,this.gravitySpeed=0)},this.crashWith=function(t){var e=this.x,i=this.x+this.width,a=this.y,n=this.y+this.height,s=t.x,r=t.x+t.width,o=t.y,l=t.y+t.height,h=!0;return(n<o||a>l||i<s||e>r)&&(h=!1),h}},updateGameArea:function(){for(var t,e,i,a,n,s,r,o=0;o<this.myObstacles.length;o+=1)if(this.myGamePiece.crashWith(this.myObstacles[o]))return;R.clear(),R.frameNo+=1,(1==R.frameNo||this.everyinterval(150))&&(t=R.canvas.width,a=20,n=200,e=Math.floor(Math.random()*(n-a+1)+a),s=50,r=200,i=Math.floor(Math.random()*(r-s+1)+s),this.myObstacles.push(new this.component(10,e,"green",t,0)),this.myObstacles.push(new this.component(10,t-e-i,"green",t,e+i)));for(var l=0;l<this.myObstacles.length;l+=1)this.myObstacles[l].x+=-1,this.myObstacles[l].update();this.myScore.text="SCORE: "+R.frameNo,this.myScore.update(),this.myGamePiece.newPos(),this.myGamePiece.update()},everyinterval:function(t){return R.frameNo/t%1==0},jump:function(t){this.myGamePiece.gravity=t}}},H=F,N=(i("bb98"),Object(l["a"])(H,j,$,!1,null,null,null)),Y=N.exports,D=[{path:"/canonGame",name:"Canon Game",component:T},{path:"/flappyduck",name:"Flappy Duck",component:Y}],L=D;a["a"].use(u["a"]);var X=[{path:"/",name:"Landing Page",component:v},{path:"/home",name:"Home",component:v},{path:"/collection",name:"Collection",component:_}];L.forEach((function(t){X.push(t)}));var A=new u["a"]({mode:"history",routes:X}),W=A;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(c)},router:W}).$mount("#app")},"6f83":function(t,e,i){},"76eb":function(t,e,i){},"83a0":function(t,e,i){t.exports=i.p+"img/325-3254134_in-tribute-to-rivka-begun-coming-soon-icon-png.9c45317e.png"},"85ec":function(t,e,i){},a41c:function(t,e,i){"use strict";i("76eb")},b72a:function(t,e,i){"use strict";i("cfa5")},bb98:function(t,e,i){"use strict";i("6f83")},cfa5:function(t,e,i){},d625:function(t,e,i){t.exports=i.p+"img/canon-1600616-1356945.df10d3ce.png"},ddb9:function(t,e,i){}});
//# sourceMappingURL=app.62fcc664.js.map