(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["SHWXO-Cu"],{"SHWXO-Cu":function(e,l,n){n.d(l,"__esModule",{value:!0}),n.d(l,"default",{enumerable:!0,get:function(){return i;}});var t=n("8Z0rk4BW");n("e8u4IoLi");var r=n("qdGieaVz");let{Option:o}=r.Select,a={labelCol:{span:8},wrapperCol:{span:16}},s={wrapperCol:{offset:8,span:16}};var i=()=>{let[e]=r.Form.useForm();return(0,t.jsxs)(r.Form,{...a,form:e,name:"control-hooks",onFinish:e=>{console.log(e);},style:{maxWidth:600},children:[(0,t.jsx)(r.Form.Item,{name:"note",label:"Note",rules:[{required:!0}],children:(0,t.jsx)(r.Input,{})}),(0,t.jsx)(r.Form.Item,{name:"gender",label:"Gender",rules:[{required:!0}],children:(0,t.jsxs)(r.Select,{placeholder:"Select a option and change input text above",onChange:l=>{switch(l){case"male":e.setFieldsValue({note:"Hi, man!"});break;case"female":e.setFieldsValue({note:"Hi, lady!"});break;case"other":e.setFieldsValue({note:"Hi there!"});}},allowClear:!0,children:[(0,t.jsx)(o,{value:"male",children:"male"}),(0,t.jsx)(o,{value:"female",children:"female"}),(0,t.jsx)(o,{value:"other",children:"other"})]})}),(0,t.jsx)(r.Form.Item,{noStyle:!0,shouldUpdate:(e,l)=>e.gender!==l.gender,children:({getFieldValue:e})=>"other"===e("gender")?(0,t.jsx)(r.Form.Item,{name:"customizeGender",label:"Customize Gender",rules:[{required:!0}],children:(0,t.jsx)(r.Input,{})}):null}),(0,t.jsx)(r.Form.Item,{...s,children:(0,t.jsxs)(r.Space,{children:[(0,t.jsx)(r.Button,{type:"primary",htmlType:"submit",children:"Submit"}),(0,t.jsx)(r.Button,{htmlType:"button",onClick:()=>{e.resetFields();},children:"Reset"}),(0,t.jsx)(r.Button,{type:"link",htmlType:"button",onClick:()=>{e.setFieldsValue({note:"Hello world!",gender:"male"});},children:"Fill form"})]})})]});};}}]);
//# sourceMappingURL=SHWXO-Cu-async.acfc1a83.js.map