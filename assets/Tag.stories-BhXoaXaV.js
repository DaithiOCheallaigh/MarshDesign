import{j as e}from"./jsx-runtime-CBDCb4rg.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const j="_tag_1422p_6",A="_disabled_1422p_20",w="_label_1422p_24",C="_remove_1422p_29",o={tag:j,disabled:A,label:w,remove:C};function a({label:l,onRemove:i,disabled:d,className:_}){const T=[o.tag,d&&o.disabled,_].filter(Boolean).join(" ");return e.jsxs("div",{className:T,children:[e.jsx("span",{className:o.label,children:l}),i&&e.jsx("button",{type:"button",className:o.remove,onClick:i,disabled:d,"aria-label":`Remove ${l}`,children:e.jsx("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none","aria-hidden":"true",children:e.jsx("path",{d:"M1 1L7 7M7 1L1 7",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})})})]})}a.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{label:{required:!0,tsType:{name:"string"},description:"Text label displayed inside the tag"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when the remove button is clicked; omit to hide the button"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the tag and its remove button"},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Tag",component:a,argTypes:{label:{control:"text"},disabled:{control:"boolean"},onRemove:{action:"removed"}},tags:["autodocs"]},s={args:{label:"Aviation"}},r={args:{label:"Aviation",onRemove:()=>{}}},t={args:{label:"Aviation",onRemove:()=>{},disabled:!0}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{label:"Aviation",onRemove:()=>{}}),e.jsx(a,{label:"Marine",onRemove:()=>{}}),e.jsx(a,{label:"Property",onRemove:()=>{}}),e.jsx(a,{label:"Casualty",onRemove:()=>{}})]})};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Aviation'
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Aviation',
    onRemove: () => {}
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,x,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Aviation',
    onRemove: () => {},
    disabled: true
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,R,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap'
  }}>
      <Tag label="Aviation" onRemove={() => {}} />
      <Tag label="Marine" onRemove={() => {}} />
      <Tag label="Property" onRemove={() => {}} />
      <Tag label="Casualty" onRemove={() => {}} />
    </div>
}`,...(f=(R=n.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const q=["Default","Removable","Disabled","MultipleTags"];export{s as Default,t as Disabled,n as MultipleTags,r as Removable,q as __namedExportsOrder,N as default};
