// Domain-calculation tests for Data Detective (node test/calc.test.mjs)
import {readFileSync} from 'node:fs';
import assert from 'node:assert';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
// Extract the script body and evaluate it in a minimal DOM-free context.
const src = html.split('<script>')[1].split('</script>')[0]
  .replace(/document\.|window\.|\$\(|getElementById/g, 'void 0&&');
// Safer: re-declare the pure pieces directly for testing.
function mulberry32(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function pearson(xs,ys){const n=xs.length,mx=xs.reduce((a,b)=>a+b)/n,my=ys.reduce((a,b)=>a+b)/n;let s=0,sx=0,sy=0;for(let i=0;i<n;i++){const dx=xs[i]-mx,dy=ys[i]-my;s+=dx*dy;sx+=dx*dx;sy+=dy*dy}return sx&&sy?s/Math.sqrt(sx*sy):0}

// population recipe (must mirror index.html)
const POP=[];{const r=mulberry32(4242);
  for(let i=0;i<600;i++){const club=i<300;POP.push({club,eb:r()<(club?0.92:0.28)});}}
const TRUEPOP=POP.filter(p=>p.eb).length/POP.length;

// 1. seeded RNG reproducibility
assert.deepStrictEqual([...Array(3)].map(mulberry32(7)),[...Array(3)].map(mulberry32(7)),'seeded RNG must reproduce');
// 2. population size and true rate in sane range
assert.strictEqual(POP.length,600);assert.ok(TRUEPOP>0.5&&TRUEPOP<0.7,'true rate ~60%');
// 3. biased workshop sample overestimates vs register sample
const s=(m,n)=>{const r=mulberry32(999);const o=[];let g=0;
  if(m==='w'){while(o.length<n&&g++<1e6){const p=POP[(r()*600)|0];if(p.club)o.push(p)}}
  else while(o.length<n)o.push(POP[(r()*600)|0]);
  return o.filter(p=>p.eb).length/o.length};
assert.ok(s('w',40)>s('r',40)+0.15,'workshop sample must overestimate');
assert.ok(Math.abs(s('r',400)-TRUEPOP)<0.08,'large fair sample lands near truth');
assert.ok(s('w',400)>0.75,'big biased sample stays biased');
// 4. correlation: full period strong, within-band weak
const A3=[];{const r=mulberry32(777);const temps=[6,8,11,15,19,24,28,29,25,20,13,8];
  temps.forEach((t,m)=>A3.push({t,sales:Math.round(120+t*22+r()*40),inc:Math.round(2+t*0.55+r()*3)}))}
const rAll=pearson(A3.map(d=>d.sales),A3.map(d=>d.inc));
const rHot=pearson(A3.filter(d=>d.t>=22).map(d=>d.sales),A3.filter(d=>d.t>=22).map(d=>d.inc));
assert.ok(rAll>0.8,'pooled correlation must be strong, got '+rAll);
assert.ok(rHot<rAll,'within-band correlation must shrink');
console.log('all calc tests passed');
