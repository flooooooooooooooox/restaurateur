// Génère la skyline en un fichier SVG statique : le navigateur la rastérise
// une fois et la réutilise, au lieu de recréer ~360 nœuds par instance.
import { writeFileSync } from 'fs';
const INK = '#4a0937', DARK = '#38062a', W = '#ffd75e', WA = '#7ff0e0';
const out = [];
const windows = (x,y,w,h,cols,rows,seed) => {
  const gx = w/cols, gy = h/rows, ww = Math.min(gx*0.46,5), wh = Math.min(gy*0.42,6);
  for (let c=0;c<cols;c++) for (let r=0;r<rows;r++) {
    const n = (c*7 + r*13 + seed*31) % 11;
    if (n < 4) continue;
    out.push(`<rect x="${(x+gx*c+(gx-ww)/2).toFixed(1)}" y="${(y+gy*r+(gy-wh)/2).toFixed(1)}" width="${ww.toFixed(1)}" height="${wh.toFixed(1)}" rx=".8" fill="${n>8?WA:W}" opacity="${n>8?.5:.65}"/>`);
  }
};
const deco = (x,y,w,seed) => { const h=200-y;
  out.push(`<rect x="${x}" y="${y+26}" width="${w}" height="${h-26}" fill="${INK}"/>`);
  out.push(`<rect x="${x+w*.14}" y="${y+12}" width="${w*.72}" height="22" fill="${INK}"/>`);
  out.push(`<rect x="${x+w*.34}" y="${y}" width="${w*.32}" height="16" fill="${INK}"/>`);
  out.push(`<rect x="${x+w*.47}" y="${y-16}" width="${w*.06}" height="18" fill="${DARK}"/>`);
  out.push(`<circle cx="${x+w*.5}" cy="${y-18}" r="2.4" fill="${W}" opacity=".8"/>`);
  out.push(`<rect x="${x-2}" y="${y+24}" width="${w+4}" height="3" fill="${DARK}"/>`);
  out.push(`<rect x="${x-2}" y="${y+60}" width="${w+4}" height="2.5" fill="${DARK}"/>`);
  windows(x+4,y+34,w-8,h-46,Math.max(2,Math.round(w/13)),Math.max(3,Math.round((h-46)/15)),seed); };
const neon = (x,y,w,seed,n=WA) => { const h=200-y;
  out.push(`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${INK}"/>`);
  out.push(`<rect x="${x}" y="${y}" width="${w}" height="4" fill="${n}" opacity=".55"/>`);
  out.push(`<rect x="${x+w*.2}" y="${y-9}" width="${w*.6}" height="9" fill="${DARK}"/>`);
  windows(x+5,y+12,w-10,h-20,Math.max(2,Math.round(w/14)),Math.max(2,Math.round((h-20)/16)),seed); };
const step = (x,y,w,seed) => { const h=200-y;
  out.push(`<rect x="${x}" y="${y+14}" width="${w}" height="${h-14}" fill="${INK}"/>`);
  out.push(`<rect x="${x+w*.1}" y="${y+7}" width="${w*.8}" height="10" fill="${INK}"/>`);
  out.push(`<rect x="${x+w*.26}" y="${y}" width="${w*.48}" height="9" fill="${INK}"/>`);
  out.push(`<rect x="${x-1.5}" y="${y+12}" width="${w+3}" height="2.5" fill="${DARK}"/>`);
  windows(x+4,y+22,w-8,h-32,Math.max(2,Math.round(w/13)),Math.max(3,Math.round((h-32)/15)),seed); };
const palm = (x,s,flip) => {
  const g = [`<path d="M-5 200Q0 140 9 92L19 94Q7 142 5 200Z" fill="${INK}"/>`];
  [100,114,128,142,156,170].forEach((ty,i)=>g.push(`<rect x="${-3+i*.9}" y="${ty}" width="${13-i*.5}" height="2" rx="1" fill="${DARK}"/>`));
  g.push(`<g transform="translate(13 92)" fill="${INK}"><path d="M0 0Q-30-14-56-4Q-40-24-6-10Z"/><path d="M0 0Q-22-28-40-38Q-14-36-2-10Z"/><path d="M0 0Q2-32-6-54Q14-36 8-8Z"/><path d="M0 0Q24-28 44-38Q18-36 4-10Z"/><path d="M0 0Q32-13 58-2Q40-24 6-10Z"/><g stroke="${DARK}" stroke-width="1.4" fill="none" opacity=".9"><path d="M0 0Q-28-12-52-4"/><path d="M0 0Q-20-26-36-36"/><path d="M0 0Q0-30-4-50"/><path d="M0 0Q22-26 40-36"/><path d="M0 0Q30-12 54-3"/></g><circle cx="-4" cy="5" r="4" fill="${DARK}"/><circle cx="5" cy="7" r="3.4" fill="${DARK}"/></g>`);
  // La mise à l'échelle part de l'origine : la base du palmier, tracée au sol
  // (y=200), remonterait à 200×échelle et le palmier flotterait. On compense en
  // décalant de 200×(1-échelle) pour que le pied reste posé au sol.
  const dy = 200 * (1 - s);
  out.push(`<g transform="translate(${x} ${dy.toFixed(2)}) scale(${flip?-s:s} ${s})">${g.join('')}</g>`); };

out.push('<g opacity=".45">');
neon(90,112,70,2); step(300,98,58,5); neon(620,118,82,8,W); step(905,104,64,3); neon(1090,120,76,6);
out.push('</g>');
deco(40,58,46,1); neon(150,104,74,4); step(236,80,52,7); deco(360,46,40,9); neon(412,110,88,2,W);
step(512,72,56,6); neon(660,96,68,1); deco(742,54,44,5); step(800,106,62,8); neon(874,88,54,3,W);
deco(962,64,42,7); step(1018,100,60,4); neon(1092,82,70,9);
// ⚠️ La skyline est répétée horizontalement : aucune forme ne doit franchir
// x=0 ni x=1200, sinon elle est tranchée à chaque raccord. Un palmier fait
// environ ±58 unités de large (× son échelle) autour de son ancrage.
palm(300,.92,false); palm(596,1.06,true); palm(930,.86,false); palm(1126,1,true);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax slice">${out.join('')}</svg>`;
writeFileSync('public/images/skyline.svg', svg);
console.log('public/images/skyline.svg :', (svg.length/1024).toFixed(1), 'Ko,', out.length, 'formes');
