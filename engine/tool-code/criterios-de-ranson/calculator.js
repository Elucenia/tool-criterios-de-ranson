/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"criterios-de-ranson","title":"Critérios de Ranson","fields":[["idade","Admissão: idade &gt; 55 anos (biliar: &gt; 70)","chk",{"pts":1}],["leuco","Admissão: leucócitos &gt; 16.000/mm³ (biliar: &gt; 18.000)","chk",{"pts":1}],["glic","Admissão: glicemia &gt; 200 mg/dL (biliar: &gt; 220)","chk",{"pts":1}],["ldh","Admissão: LDH &gt; 350 U/L (biliar: &gt; 400)","chk",{"pts":1}],["ast","Admissão: AST &gt; 250 U/L","chk",{"pts":1}],["ht","48 h: queda do hematócrito &gt; 10 pontos percentuais","chk",{"pts":1}],["bun","48 h: aumento do BUN &gt; 5 mg/dL, ureia &gt; 10,7 mg/dL (biliar: BUN &gt; 2, ureia &gt; 4,3)","chk",{"pts":1}],["ca","48 h: cálcio &lt; 8 mg/dL","chk",{"pts":1}],["pao2","48 h: PaO₂ &lt; 60 mmHg (não se aplica à biliar)","chk",{"pts":1}],["be","48 h: déficit de bases &gt; 4 mEq/L (biliar: &gt; 5)","chk",{"pts":1}],["seq","48 h: sequestro de líquidos &gt; 6 L (biliar: &gt; 4 L)","chk",{"pts":1}]],"config":{"unit":"","label":"Critérios de Ranson","fields":[["idade","chk",1],["leuco","chk",1],["glic","chk",1],["ldh","chk",1],["ast","chk",1],["ht","chk",1],["bun","chk",1],["ca","chk",1],["pao2","chk",1],["be","chk",1],["seq","chk",1]],"bands":[[0,"low","Ranson 0 a 2: pancreatite leve provável","Mortalidade em torno de 1% na série original."],[3,"mid","Ranson 3 a 4: pancreatite grave","Mortalidade em torno de 15%; monitorização intensiva."],[5,"high","Ranson 5 a 6: pancreatite grave","Mortalidade em torno de 40%; considerar UTI."],[7,"high","Ranson ≥ 7: pancreatite muito grave","Mortalidade próxima de 100% na série original; UTI."]]},"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);


function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
