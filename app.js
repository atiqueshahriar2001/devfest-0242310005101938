(() => {
  'use strict';
  const $ = (q) => document.querySelector(q);
  const ui = {
    map: $('#mapSvg'), start: $('#startSelect'), hazards: $('#hazardList'), result: $('#routeResult'),
    file: $('#fileInput'), toast: $('#toast'),
  };
  const words = {
    en: {
      simActive:'SIMULATION ACTIVE', eyebrow:'EMERGENCY ROUTE PLANNER', title:'Every second has<br/>a safer way out.', subtitle:'Map your building, adjust conditions, and find the lowest-cost route to safety.', frontend:'FRONTEND SIMULATION', scenario:'SCENARIO', buildingMap:'BUILDING MAP', mapTitle:'Your building, at a glance', fit:'Fit view', reset:'Reset', liveMap:'LIVE MAP', room:'Room', junction:'Junction', exit:'Exit', route:'Best route', blocked:'Blocked', routePlan:'ROUTE PLAN', startingPoint:'STARTING POINT', recalc:'Route recalculates instantly', conditions:'CONDITIONS', conditionsTitle:'Adjust conditions', conditionsCopy:'Toggle a location or corridor to simulate a hazard.', locations:'Locations', corridors:'Corridors', exits:'Exits', hazardHint:'Hazards are simulated. Select any item to change its status.', customMap:'Bring your own building', customCopy:'Load a building.json file to explore a different layout.', importJson:'Import JSON', education:'Educational simulation only.', safetyCopy:'Not certified for real-world evacuation planning.', sampleJson:'Download sample JSON', helpTitle:'Find a safe way through.', helpCopy:'Choose a starting room, then toggle locations, corridors, or exits to model changing conditions. Your least-cost route updates as you make changes.', helpStep1:'Pick an available starting location.', helpStep2:'Use the Conditions panel to change hazards.', helpStep3:"Reset to restore the building file's initial state.", helpDisclaimer:'For education and practice only. Always follow official emergency procedures.', bestRoute:'LOWEST-COST ROUTE', destination:'Destination', cost:'COST', noRoute:'No route available', noRouteHint:'No open exit can be reached from this location.', startBlocked:'Starting location blocked', startBlockedHint:'Unblock this location or choose another start.', accessible:'Accessible', unavailable:'Unavailable', block:'Block', unblock:'Unblock', close:'Close', reopen:'Reopen', blockedState:'Blocked', closedState:'Closed', openState:'Open', locationsCount:'LOCATIONS', corridorsCount:'CORRIDORS', sampleLoaded:'Sample building loaded', resetDone:'Restored the file’s initial conditions', imported:'Building imported', validation:'Could not import building', nodeType:'Node', edgeType:'Corridor', invalidFile:'Choose a valid JSON file.', ties:'Tie break: lowest exit ID, then node ID sequence.', notRoom:'Choose a room or junction as the start.',
    },
    bn: {
      simActive:'সিমুলেশন চালু', eyebrow:'জরুরি পথ পরিকল্পনা', title:'প্রতিটি মুহূর্তে<br/>নিরাপদ পথ আছে।', subtitle:'ভবনের মানচিত্র দেখুন, পরিস্থিতি বদলান, নিরাপদ স্থানে যাওয়ার সর্বনিম্ন খরচের পথ খুঁজুন।', frontend:'ফ্রন্টএন্ড সিমুলেশন', scenario:'পরিস্থিতি', buildingMap:'ভবনের মানচিত্র', mapTitle:'এক নজরে আপনার ভবন', fit:'দৃশ্য ঠিক করুন', reset:'রিসেট', liveMap:'লাইভ মানচিত্র', room:'কক্ষ', junction:'সংযোগস্থল', exit:'বহির্গমন', route:'সেরা পথ', blocked:'বন্ধ', routePlan:'পথ পরিকল্পনা', startingPoint:'শুরুর স্থান', recalc:'পথ তাৎক্ষণিকভাবে হিসাব হয়', conditions:'পরিস্থিতি', conditionsTitle:'পরিস্থিতি বদলান', conditionsCopy:'ঝুঁকি অনুকরণ করতে স্থান বা করিডর চালু/বন্ধ করুন।', locations:'স্থান', corridors:'করিডর', exits:'বহির্গমন', hazardHint:'ঝুঁকি অনুকরণ করা হয়। অবস্থা বদলাতে যেকোনোটি নির্বাচন করুন।', customMap:'নিজের ভবনের মানচিত্র দিন', customCopy:'অন্য বিন্যাস দেখতে building.json ফাইল লোড করুন।', importJson:'JSON আনুন', education:'শুধু শিক্ষামূলক সিমুলেশন।', safetyCopy:'বাস্তব উচ্ছেদ পরিকল্পনার জন্য প্রত্যয়িত নয়।', sampleJson:'নমুনা JSON ডাউনলোড', helpTitle:'নিরাপদ পথ খুঁজুন।', helpCopy:'শুরুর কক্ষ বেছে নিন, তারপর পরিস্থিতি অনুকরণ করতে স্থান, করিডর বা বহির্গমনের অবস্থা বদলান। প্রতিটি পরিবর্তনে সর্বনিম্ন খরচের পথ আপডেট হয়।', helpStep1:'চলাচলযোগ্য শুরুর স্থান বেছে নিন।', helpStep2:'ঝুঁকি বদলাতে পরিস্থিতি প্যানেল ব্যবহার করুন।', helpStep3:'ফাইলের প্রাথমিক অবস্থা ফেরাতে রিসেট করুন।', helpDisclaimer:'শুধু শিক্ষা ও অনুশীলনের জন্য। জরুরি অবস্থায় সরকারি নির্দেশনা অনুসরণ করুন।', bestRoute:'সর্বনিম্ন খরচের পথ', destination:'গন্তব্য', cost:'খরচ', noRoute:'কোনো পথ নেই', noRouteHint:'এই স্থান থেকে খোলা বহির্গমনে যাওয়া যাচ্ছে না।', startBlocked:'শুরুর স্থান বন্ধ', startBlockedHint:'স্থানটি খুলুন অথবা অন্য শুরুর স্থান বাছুন।', accessible:'চলাচলযোগ্য', unavailable:'বন্ধ', block:'বন্ধ করুন', unblock:'খুলুন', close:'বন্ধ করুন', reopen:'খুলুন', blockedState:'বন্ধ', closedState:'বন্ধ', openState:'খোলা', locationsCount:'স্থান', corridorsCount:'করিডর', sampleLoaded:'নমুনা ভবন লোড হয়েছে', resetDone:'ফাইলের প্রাথমিক অবস্থা ফিরিয়ে আনা হয়েছে', imported:'ভবন আমদানি হয়েছে', validation:'ভবন আমদানি করা যায়নি', nodeType:'নোড', edgeType:'করিডর', invalidFile:'সঠিক JSON ফাইল বেছে নিন।', ties:'সমান হলে প্রথমে বহির্গমন আইডি, তারপর নোড আইডি ক্রম।', notRoom:'শুরু হিসেবে কক্ষ বা সংযোগস্থল বেছে নিন।',
    }
  };
  const embeddedSample = {
    building:'Northstar Learning Center',
    nodes:[
      {id:'R1',label:'Reception',type:'room',x:12,y:24},{id:'R2',label:'Studio',type:'room',x:12,y:76},
      {id:'C1',label:'West Hall',type:'junction',x:37,y:24},{id:'C2',label:'Central Hall',type:'junction',x:63,y:24},
      {id:'C3',label:'South Hall',type:'junction',x:37,y:76},{id:'C4',label:'East Hall',type:'junction',x:63,y:76},
      {id:'E1',label:'North Exit',type:'exit',x:88,y:24},{id:'E2',label:'South Exit',type:'exit',x:88,y:76}
    ],
    edges:[
      {id:'a',from:'R1',to:'C1',cost:2},{id:'b',from:'C1',to:'C2',cost:2},{id:'c',from:'C2',to:'E1',cost:3},
      {id:'e',from:'C3',to:'C4',cost:2},{id:'f',from:'C4',to:'E2',cost:3},{id:'g',from:'R2',to:'C3',cost:2},
      {id:'h',from:'C1',to:'C3',cost:4},{id:'i',from:'C2',to:'C4',cost:3},{id:'j',from:'C3',to:'C2',cost:2}
    ],
    initial_state:{blocked_nodes:[],blocked_edges:[],closed_exits:[]}
  };
  let lang = 'en', building, initial, state, startId, solution, tab = 'nodes', zoom = 1, pan = {x:0,y:0}, toastTimer;
  const cmp = (a,b) => a < b ? -1 : a > b ? 1 : 0;
  const t = (key) => words[lang][key] || words.en[key] || key;
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function showToast(msg) { ui.toast.textContent = msg; ui.toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => ui.toast.classList.remove('show'), 2400); }
  function validate(d) {
    const fail = m => { throw new Error(m); };
    if (!d || typeof d !== 'object' || Array.isArray(d)) fail('Root must be a JSON object.');
    if (typeof d.building !== 'string' || !d.building.trim()) fail('building must be a non-empty string.');
    if (!Array.isArray(d.nodes) || d.nodes.length < 2 || d.nodes.length > 60) fail('nodes must contain 2–60 entries.');
    if (!Array.isArray(d.edges) || d.edges.length < 1 || d.edges.length > 150) fail('edges must contain 1–150 entries.');
    const ids = new Map(), edgeIds = new Set(), pairs = new Set();
    let hasStart = false, hasExit = false;
    for (const n of d.nodes) {
      if (!n || typeof n.id !== 'string' || !n.id || ids.has(n.id)) fail('Every node needs a unique, case-sensitive string id.');
      if (typeof n.label !== 'string' || !n.label.trim()) fail(`Node ${n.id}: label must not be empty.`);
      if (!['room','junction','exit'].includes(n.type)) fail(`Node ${n.id}: type must be room, junction, or exit.`);
      if (typeof n.x !== 'number' || !Number.isFinite(n.x) || typeof n.y !== 'number' || !Number.isFinite(n.y)) fail(`Node ${n.id}: x and y must be numeric.`);
      ids.set(n.id,n); if (n.type === 'exit') hasExit = true; else hasStart = true;
    }
    if (!hasStart || !hasExit) fail('Include at least one room or junction and one exit.');
    for (const e of d.edges) {
      if (!e || typeof e.id !== 'string' || !e.id || edgeIds.has(e.id)) fail('Every corridor needs a unique string id.');
      if (!ids.has(e.from) || !ids.has(e.to)) fail(`Corridor ${e.id}: from and to must reference existing nodes.`);
      if (e.from === e.to) fail(`Corridor ${e.id}: self-loops are not allowed.`);
      if (!Number.isInteger(e.cost) || e.cost <= 0) fail(`Corridor ${e.id}: cost must be a positive integer.`);
      const pair = [e.from,e.to].sort(cmp).join('\0'); if (pairs.has(pair)) fail(`Corridor ${e.id}: repeated node pairs are not allowed.`);
      edgeIds.add(e.id); pairs.add(pair);
    }
    const init = d.initial_state;
    if (!init || typeof init !== 'object') fail('initial_state is required.');
    for (const k of ['blocked_nodes','blocked_edges','closed_exits']) if (!Array.isArray(init[k])) fail(`initial_state.${k} must be an array.`);
    for (const id of init.blocked_nodes) if (!ids.has(id) || ids.get(id).type === 'exit') fail(`Invalid blocked node id: ${id}`);
    for (const id of init.blocked_edges) if (!edgeIds.has(id)) fail(`Invalid blocked corridor id: ${id}`);
    for (const id of init.closed_exits) if (!ids.has(id) || ids.get(id).type !== 'exit') fail(`Invalid closed exit id: ${id}`);
    return d;
  }
  function initBuilding(d, message) {
    building = validate(d); initial = JSON.parse(JSON.stringify(d.initial_state));
    state = {blocked_nodes:new Set(initial.blocked_nodes),blocked_edges:new Set(initial.blocked_edges),closed_exits:new Set(initial.closed_exits)};
    startId = building.nodes.find(n => n.type === 'room')?.id || building.nodes.find(n => n.type === 'junction').id;
    pan={x:0,y:0}; zoom=1; $('#headerBuilding').textContent=building.building; $('#footerBuilding').textContent=building.building;
    document.title=`${building.building} — Smart Escape`; render(); if (message) showToast(message);
  }
  function comparePaths(a,b) { for(let i=0;i<Math.min(a.length,b.length);i++){const c=cmp(a[i],b[i]);if(c)return c;}return a.length-b.length; }
  function shortestPath() {
    const nodes = new Map(building.nodes.map(n=>[n.id,n])), adjacency=new Map(building.nodes.map(n=>[n.id,[]]));
    for(const e of building.edges) if(!state.blocked_edges.has(e.id) && !state.blocked_nodes.has(e.from) && !state.blocked_nodes.has(e.to) && !state.closed_exits.has(e.from) && !state.closed_exits.has(e.to)) { adjacency.get(e.from).push({id:e.to,cost:e.cost});adjacency.get(e.to).push({id:e.from,cost:e.cost}); }
    const best=new Map([[startId,{cost:0,path:[startId]}]]), done=new Set();
    while(true){let current=null, record=null; for(const [id,r] of best) if(!done.has(id) && (!record || r.cost<record.cost || (r.cost===record.cost && comparePaths(r.path,record.path)<0))){current=id;record=r;} if(current===null) break; done.add(current);
      for(const nxt of adjacency.get(current)){const candidate={cost:record.cost+nxt.cost,path:[...record.path,nxt.id]},old=best.get(nxt.id);if(!old||candidate.cost<old.cost||(candidate.cost===old.cost&&comparePaths(candidate.path,old.path)<0))best.set(nxt.id,candidate);}
    }
    const exits=building.nodes.filter(n=>n.type==='exit'&&!state.closed_exits.has(n.id)&&!state.blocked_nodes.has(n.id)&&best.has(n.id)).sort((a,b)=>{const x=best.get(a.id),y=best.get(b.id);return x.cost-y.cost||cmp(a.id,b.id)||comparePaths(x.path,y.path);});
    return exits.length?{...best.get(exits[0].id),exit:exits[0].id}:null;
  }
  function svgEl(name,attrs={}){const e=document.createElementNS('http://www.w3.org/2000/svg',name);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);return e;}
  function renderMap() {
    const W=1000,H=560, pad=95, xs=building.nodes.map(n=>n.x),ys=building.nodes.map(n=>n.y),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
    const sx=v=>pad+(maxX===minX?.5:(v-minX)/(maxX-minX))*(W-2*pad), sy=v=>pad+(maxY===minY?.5:(v-minY)/(maxY-minY))*(H-2*pad);
    ui.map.replaceChildren();ui.map.setAttribute('viewBox',`0 0 ${W} ${H}`);ui.map.setAttribute('preserveAspectRatio','xMidYMid meet');
    const scene=svgEl('g',{transform:`translate(${pan.x} ${pan.y}) translate(${W/2} ${H/2}) scale(${zoom}) translate(${-W/2} ${-H/2})`});ui.map.appendChild(scene);
    const routeEdges=new Set();if(solution)for(let i=0;i<solution.path.length-1;i++){const e=building.edges.find(e=>(e.from===solution.path[i]&&e.to===solution.path[i+1])||(e.to===solution.path[i]&&e.from===solution.path[i+1]));if(e)routeEdges.add(e.id);}
    const nodes=new Map(building.nodes.map(n=>[n.id,n]));
    const edgesLayer=svgEl('g');scene.appendChild(edgesLayer);
    for(const e of building.edges){const a=nodes.get(e.from),b=nodes.get(e.to),x1=sx(a.x),y1=sy(a.y),x2=sx(b.x),y2=sy(b.y),mx=(x1+x2)/2,my=(y1+y2)/2,blocked=state.blocked_edges.has(e.id)||state.blocked_nodes.has(e.from)||state.blocked_nodes.has(e.to),line=svgEl('line',{x1,y1,x2,y2,class:`edge-line${routeEdges.has(e.id)?' in-route':''}${blocked?' blocked':''}`});edgesLayer.appendChild(line);
      const hit=svgEl('line',{x1,y1,x2,y2,class:'edge-hit','data-edge':e.id,'aria-label':`${e.id}, cost ${e.cost}`});hit.addEventListener('click',()=>toggle('blocked_edges',e.id));edgesLayer.appendChild(hit);
      const g=svgEl('g',{class:`cost-label${blocked?' is-blocked':''}`,transform:`translate(${mx} ${my-9})`});g.append(svgEl('rect',{x:-13,y:-9,width:26,height:18,rx:5}));const tx=svgEl('text',{x:0,y:0});tx.textContent=e.cost;g.append(tx);edgesLayer.appendChild(g);
    }
    const nodeLayer=svgEl('g');scene.appendChild(nodeLayer);
    for(const n of building.nodes){const x=sx(n.x),y=sy(n.y),isBlocked=state.blocked_nodes.has(n.id),isClosed=state.closed_exits.has(n.id),onRoute=Boolean(solution&&solution.path.includes(n.id)),isStart=n.id===startId;
      const g=svgEl('g',{class:`node-group${isBlocked?' is-blocked':''}${isClosed?' is-closed':''}${onRoute?' on-route':''}${isStart?' start-node':''}`,transform:`translate(${x} ${y})`,tabindex:'0',role:'button','aria-label':`${n.id}: ${n.label}`});
      g.append(svgEl('circle',{class:'node-halo',r:n.type==='exit'?28:25}));const shape=n.type==='junction'?svgEl('rect',{class:'node-shape node-junction',x:-13,y:-13,width:26,height:26,rx:6}):svgEl('circle',{class:`node-shape node-${n.type}`,r:n.type==='exit'?16:15});g.append(shape);
      const label=svgEl('text',{class:'node-label',x:0,y:4});label.textContent=n.id;g.append(label);const sub=svgEl('text',{class:'node-sublabel',x:0,y:n.type==='exit'?34:31});sub.textContent=n.label;g.append(sub);
      if(isBlocked||isClosed){const warning=svgEl('text',{class:'map-warning',x:0,y:-24,'text-anchor':'middle'});warning.textContent=lang==='bn'?'বন্ধ':'CLOSED';g.append(warning);}
      if(isStart){const pin=svgEl('text',{class:'map-entrance',x:0,y:-31,'text-anchor':'middle'});pin.textContent=lang==='bn'?'শুরু':'START';g.append(pin);}
      g.addEventListener('click',()=>{if(n.type!=='exit'){startId=n.id;render();}else if(!isClosed)toggle('closed_exits',n.id);});g.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();g.dispatchEvent(new MouseEvent('click'));}});nodeLayer.appendChild(g);
    }
  }
  function renderStart(){const candidates=building.nodes.filter(n=>n.type!=='exit').sort((a,b)=>cmp(a.id,b.id));ui.start.innerHTML=candidates.map(n=>`<option value="${esc(n.id)}" ${n.id===startId?'selected':''} ${state.blocked_nodes.has(n.id)?'disabled':''}>${esc(n.id)} — ${esc(n.label)}${state.blocked_nodes.has(n.id)?` (${t('unavailable')})`:''}</option>`).join('');if(state.blocked_nodes.has(startId))ui.start.value=startId;}
  function renderResult(){solution=state.blocked_nodes.has(startId)?null:shortestPath();const blocked=state.blocked_nodes.has(startId);if(blocked)ui.result.innerHTML=`<div class="route-empty">${t('startBlocked')}<small>${t('startBlockedHint')}</small></div>`;else if(!solution)ui.result.innerHTML=`<div class="route-empty">${t('noRoute')}<small>${t('noRouteHint')}</small></div>`;else ui.result.innerHTML=`<div class="route-success"><div class="route-success-top"><span>${t('bestRoute')}</span><span class="route-cost">${solution.cost}<small> ${t('cost')}</small></span></div><div class="route-sequence">${solution.path.map((id,i)=>`${i?'<span class="route-arrow">→</span>':''}<span class="route-node">${esc(id)}</span>`).join('')}</div><div class="route-destination">${t('destination')}: <strong>${esc(solution.exit)}</strong></div></div>`;}
  function renderHazards(){const entries=tab==='nodes'?building.nodes.filter(n=>n.type!=='exit').map(n=>({id:n.id,label:n.label,sub:n.type,key:'blocked_nodes',active:state.blocked_nodes.has(n.id),type:n.type})):tab==='edges'?building.edges.map(e=>({id:e.id,label:`${e.from} ↔ ${e.to}`,sub:`${t('cost')} ${e.cost}`,key:'blocked_edges',active:state.blocked_edges.has(e.id),type:'edge'})):building.nodes.filter(n=>n.type==='exit').map(n=>({id:n.id,label:n.label,sub:n.id,key:'closed_exits',active:state.closed_exits.has(n.id),type:'exit'}));
    ui.hazards.innerHTML=entries.map(e=>`<div class="hazard-row"><div class="hazard-item"><span class="item-icon">${esc(e.id)}</span><div><div class="item-label">${esc(e.label)}</div><div class="item-sub">${esc(e.sub)}</div></div></div><button class="toggle${e.active?' on':''}" data-key="${e.key}" data-id="${esc(e.id)}" aria-label="${e.active?t('unblock'):t('block')} ${esc(e.label)}" aria-pressed="${e.active}"></button></div>`).join('')||`<div class="hazard-row"><span class="item-label">—</span></div>`;
    ui.hazards.querySelectorAll('.toggle').forEach(b=>b.addEventListener('click',()=>toggle(b.dataset.key,b.dataset.id)));
  }
  function renderCounts(){const count=state.blocked_nodes.size+state.blocked_edges.size+state.closed_exits.size;$('#hazardCount').textContent=`${count} ${lang==='bn'?'সক্রিয়':'ACTIVE'}`;$('#scenarioCount').textContent=String(count+1).padStart(2,'0');$('#mapStats').innerHTML=`${building.nodes.length} ${t('locationsCount').toUpperCase()} <span>·</span> ${building.edges.length} ${t('corridorsCount').toUpperCase()}`;}
  function translate(){document.documentElement.lang=lang==='bn'?'bn':'en';document.querySelectorAll('[data-i]').forEach(el=>{const val=t(el.dataset.i);if(el.dataset.i==='title')el.innerHTML=val;else el.textContent=val;});$('#langToggle').innerHTML=lang==='en'?'বাংলা <span>↗</span>':'English <span>↗</span>';$('#helpBtn').title=lang==='en'?'How to use':'ব্যবহারের নিয়ম';}
  function render(){translate();renderStart();renderResult();renderHazards();renderCounts();renderMap();document.querySelectorAll('.hazard-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
  function toggle(key,id){const set=state[key];set.has(id)?set.delete(id):set.add(id);render();}
  function setTab(next){tab=next;renderHazards();document.querySelectorAll('.hazard-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
  async function loadSample(){try{const r=await fetch('building.json');if(!r.ok)throw Error('missing');initBuilding(await r.json());}catch(e){initBuilding(embeddedSample);}}
  ui.start.addEventListener('change',()=>{startId=ui.start.value;render();});
  document.querySelectorAll('.hazard-tab').forEach(b=>b.addEventListener('click',()=>setTab(b.dataset.tab)));
  $('#resetBtn').addEventListener('click',()=>{state={blocked_nodes:new Set(initial.blocked_nodes),blocked_edges:new Set(initial.blocked_edges),closed_exits:new Set(initial.closed_exits)};render();showToast(t('resetDone'));});
  $('#langToggle').addEventListener('click',()=>{lang=lang==='en'?'bn':'en';render();});
  $('#fileInput').addEventListener('change',async ev=>{const f=ev.target.files[0];if(!f)return;try{initBuilding(JSON.parse(await f.text()),t('imported'));}catch(e){showToast(`${t('validation')}: ${e.message||t('invalidFile')}`);}ev.target.value='';});
  $('#fitBtn').addEventListener('click',()=>{zoom=1;pan={x:0,y:0};renderMap();$('#zoomLabel').textContent='100%';});
  const setZoom=(z)=>{zoom=Math.max(.75,Math.min(1.6,z));$('#zoomLabel').textContent=`${Math.round(zoom*100)}%`;renderMap();};
  $('#zoomIn').addEventListener('click',()=>setZoom(zoom+.15));$('#zoomOut').addEventListener('click',()=>setZoom(zoom-.15));
  $('#downloadSample').addEventListener('click',()=>{const a=document.createElement('a');a.href='building.json';a.download='building.json';a.click();});
  $('#helpBtn').addEventListener('click',()=>$('#helpModal').hidden=false);$('#closeHelp').addEventListener('click',()=>$('#helpModal').hidden=true);$('#helpModal').addEventListener('click',e=>{if(e.target.id==='helpModal')e.currentTarget.hidden=true;});document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#helpModal').hidden=true;});
  loadSample();
})();
