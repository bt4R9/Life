var S=Object.defineProperty;var H=(n,$,h)=>$ in n?S(n,$,{enumerable:!0,configurable:!0,writable:!0,value:h}):n[$]=h;var t=(n,$,h)=>(H(n,typeof $!="symbol"?$+"":$,h),h);(function(){"use strict";const y=class{constructor(o){t(this,"H");t(this,"W");t(this,"grid");this.H=o.height,this.W=o.width,this.grid=[],this.build()}build(){for(let o=0;o<this.H;o++){this.grid[o]=[];for(let b=0;b<this.W;b++)this.grid[o][b]=0}}addRLE(o,b={y:0,x:0}){for(const[i,s]of o.grid)this.grid[i+b.y][s+b.x]=1}update(){for(let o=0;o<this.H;o++)for(let b=0;b<this.W;b++){let i=0;for(const[s,e]of y.neighbors){const a=o+s,l=b+e;a>=0&&a<this.H&&l>=0&&l<this.W&&Math.abs(this.grid[a][l])===1&&(i+=1)}this.grid[o][b]===1&&(i<2||i>3)&&(this.grid[o][b]=-1),this.grid[o][b]===0&&i===3&&(this.grid[o][b]=2)}for(let o=0;o<this.H;o++)for(let b=0;b<this.W;b++)this.grid[o][b]>0?this.grid[o][b]=1:this.grid[o][b]=0}};let n=y;t(n,"neighbors",[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]);class ${constructor(o){t(this,"canvas");t(this,"context");t(this,"board");t(this,"frameId",-1);t(this,"targetFPSInterval",1e3/8);t(this,"target",-1);t(this,"size");t(this,"gap");t(this,"frame",()=>{this.frameId=requestAnimationFrame(this.frame);const o=Date.now(),b=o-this.target;b<this.targetFPSInterval||(this.target=o-b%this.targetFPSInterval,this.board.update(),this.draw())});this.size=o.size,this.gap=o.gap,this.canvas=o.canvas,this.board=o.board,this.context=this.canvas.getContext("2d")}draw(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#000";let o=0,b=0;for(let i=0;i<this.board.H;i++){b=0;for(let s=0;s<this.board.W;s++)this.board.grid[i][s]===1&&this.context.fillRect(b,o,this.size,this.size),b+=this.size+this.gap;o+=this.size+this.gap}}start(){this.target=Date.now(),this.frameId=requestAnimationFrame(this.frame)}stop(){cancelAnimationFrame(this.frameId)}}var h=`#C This is a glider.
x = 3, y = 3
bo$2bo$3o!`,m=`#N Gosper glider gun
#C This was the first gun discovered.
#C As its name suggests, it was discovered by Bill Gosper.
x = 36, y = 9, rule = B3/S23
24bo$22bobo$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o$2o8bo3bob2o4b
obo$10bo5bo7bo$11bo3bo$12b2o!`,x=`#N Pulsar
#O John Conway
#C A period 3 oscillator. Despite its size, this is the fourth most common oscillator (and by
#C far the most common of period greater than 2).
#C www.conwaylife.com/wiki/index.php?title=Pulsar
x = 13, y = 13, rule = B3/S23
2b3o3b3o2b2$o4bobo4bo$o4bobo4bo$o4bobo4bo$2b3o3b3o2b2$2b3o3b3o2b$o4bob
o4bo$o4bobo4bo$o4bobo4bo2$2b3o3b3o!`,v=`#N greyship.rle
#C https://conwaylife.com/wiki/Greyship
#C https://www.conwaylife.com/patterns/greyship.rle
x = 140, y = 115, rule = B3/S23
68bo$65b4o$65b3o$63bo3bo$63b3o10b2o$61bo5bo7b2ob2o$61b6o6bob5o$59bo10b
obob2ob2o$59b12obob2o$57bo16b2o$57b18o9b4o$55bo19bo7bo4bo$55b20o7bo$
53bo23bobobo6bo$53b27o$51bo42b2o$51b32o10b4o$49bo34bo7b5o$49b35o7bo$
47bo38bob2o$47b40ob2o$45bo44bo11bo2bo$45b46o10bo$7bo35bo57bo3bo$4b4o
35b50o8b4o$4b2o35bo53bob3o$2bo38b55obobo$2b4o33bo59bo$bo37b61o10b2o$3o
2bo31bo71b2ob2o$b3o33b64o6bob5o$2bo32bo68bobob2ob2o$3b3obo27b70obob2o$
3bo2b2o25bo74b2o$4b3o26b76o9b4o$6bo24bo77bo7bo4bo$4bo26b78o7bo$4bobo
22bo81bobobo6bo$3bo25b85o$4bobo20bo100b2o$4bo22b90o10b4o$6bo18bo92bo7b
5o$4b3o18b93o7bo$3bo2b2o15bo96bob2o$3b3obo15b98ob2o$2bo18bo102bo11bo2b
o$b3o17b104o10bo$3o2bo13bo115bo3bo$bo17b108o8b4o$2b4o11bo111bob3o$2bo
14b113obobo$4b2o9bo117bo$4b4obo5b119o$7b2obo2bo$9b2o2b122o$10b2o126bo$
11b128o2$11b128o$10b2o126bo$9b2o2b122o$7b2obo2bo$4b4obo5b119o$4b2o9bo
117bo$2bo14b113obobo$2b4o11bo111bob3o$bo17b108o8b4o$3o2bo13bo115bo3bo$
b3o17b104o10bo$2bo18bo102bo11bo2bo$3b3obo15b98ob2o$3bo2b2o15bo96bob2o$
4b3o18b93o7bo$6bo18bo92bo7b5o$4bo22b90o10b4o$4bobo20bo100b2o$3bo25b85o
$4bobo22bo81bobobo6bo$4bo26b78o7bo$6bo24bo77bo7bo4bo$4b3o26b76o9b4o$3b
o2b2o25bo74b2o$3b3obo27b70obob2o$2bo32bo68bobob2ob2o$b3o33b64o6bob5o$
3o2bo31bo71b2ob2o$bo37b61o10b2o$2b4o33bo59bo$2bo38b55obobo$4b2o35bo53b
ob3o$4b4o35b50o8b4o$7bo35bo57bo3bo$45b46o10bo$45bo44bo11bo2bo$47b40ob
2o$47bo38bob2o$49b35o7bo$49bo34bo7b5o$51b32o10b4o$51bo42b2o$53b27o$53b
o23bobobo6bo$55b20o7bo$55bo19bo7bo4bo$57b18o9b4o$57bo16b2o$59b12obob2o
$59bo10bobob2ob2o$61b6o6bob5o$61bo5bo7b2ob2o$63b3o10b2o$63bo3bo$65b3o$
65b4o$68bo!`,z=`#N bigabehindtwolwss.rle
#O Hartmut Holzwart
#C https://conwaylife.com/wiki/Big_A
#C https://www.conwaylife.com/patterns/bigabehindtwolwss.rle
x = 9, y = 15, rule = B3/S23
4o$o3bo$o$bo2bo2$5b4o$4bo2bo$4bo2bo$4bo2bo$5b4o2$bo2bo$o$o3bo$4o!`;class g{constructor(o){t(this,"rle");t(this,"width",-1);t(this,"height",-1);t(this,"rule","");t(this,"pattern",[]);this.rle=o,this.parse()}parse(){const o=[],b=this.rle.match(/rule\s\=\s(.+)/i),i=this.rle.match(/x\s*=\s*\s(\d+)/),s=this.rle.match(/y\s*=\s*\s(\d+)/);if(b){const r=b[1];if(r!=="B3/S23")throw new Error("Unsupported RLE format ["+r+"]")}let e=0,a=0,l=0;for(let r=0;r<this.rle.length;r++){const d=this.rle[r];if(d==="x"||d==="#")for(;r<this.rle.length&&this.rle[r]!==`
`;)r+=1;else if(d==="$")a=0,l+=e,e=1;else if(d==="b")a+=e,e=1;else if(d==="o"){for(let c=0;c<e;c++)o.push([l,a]),a+=1;e=1}else if(/[0-9]/.test(d)){let c=0,w=r;for(;/[0-9]/.test(this.rle[w]);)c=c*10+Number(this.rle[w]),w+=1;e=c,r=w-1}}this.pattern=o,i&&(this.width=Number(i[1])),s&&(this.height=Number(s[2]))}get grid(){return this.pattern}}new g(h);const C=new g(m),u=new g(x),R=new g(v),E=new g(z);class L{constructor(){t(this,"board",null);t(this,"renderer",null)}initialize(o){const{canvas:b,size:i,gap:s}=o,e=Math.floor(b.width/(i+s)),a=Math.floor(b.height/(i+s));this.board=new n({width:e,height:a}),this.renderer=new $({canvas:b,size:i,gap:s,board:this.board}),this.board.addRLE(C,{x:5,y:5}),this.board.addRLE(R,{x:220,y:80}),this.board.addRLE(u,{x:30,y:100}),this.board.addRLE(u,{x:30,y:60}),this.board.addRLE(u,{x:30,y:120}),this.board.addRLE(E,{x:150,y:5})}start(){var o;(o=this.renderer)==null||o.start()}stop(){var o;(o=this.renderer)==null||o.stop()}}const p=new L;self.addEventListener("message",f=>{switch(f.data.type){case"initialize":p.initialize(f.data),p.start();break}})})();
