(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["jJRaJtvm"],{jJRaJtvm:function(e,a,l){l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var t=l("8Z0rk4BW");l("LUxa2Fmy");var n=l("WyIMPUJp"),d=l("4i_r4BgY"),o=l("qdGieaVz"),s=()=>{let[e,a]=(0,n.useState)([]),[l,s]=(0,n.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Upload,{onRemove:l=>{let t=e.indexOf(l),n=e.slice();n.splice(t,1),a(n);},beforeUpload:l=>(a([...e,l]),!1),fileList:e,children:(0,t.jsx)(o.Button,{icon:(0,t.jsx)(d.UploadOutlined,{}),children:"Select File"})}),(0,t.jsx)(o.Button,{type:"primary",onClick:()=>{let l=new FormData;e.forEach(e=>{l.append("files[]",e);}),s(!0),fetch("https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",{method:"POST",body:l}).then(e=>e.json()).then(()=>{a([]),o.message.success("upload successfully.");}).catch(()=>{o.message.error("upload failed.");}).finally(()=>{s(!1);});},disabled:0===e.length,loading:l,style:{marginTop:16},children:l?"Uploading":"Start Upload"})]});};}}]);
//# sourceMappingURL=jJRaJtvm-async.290fc7a2.js.map