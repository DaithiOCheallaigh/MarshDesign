import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{r as E}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W="_wrapper_2n0u7_6",G="_nativeInput_2n0u7_14",R="_checkmark_2n0u7_33",T="_checkIcon_2n0u7_62",q="_label_2n0u7_77",r={wrapper:W,nativeInput:G,checkmark:R,checkIcon:T,label:q},a=E.forwardRef(({label:s,className:O,id:N,...S},A)=>{const i=N??(s==null?void 0:s.toLowerCase().replace(/\s+/g,"-")),B=[r.wrapper,O].filter(Boolean).join(" ");return e.jsxs("label",{className:B,htmlFor:i,children:[e.jsx("input",{ref:A,type:"checkbox",id:i,className:r.nativeInput,...S}),e.jsx("span",{className:r.checkmark,children:e.jsx("svg",{className:r.checkIcon,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M2 6L5 9L10 3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),s&&e.jsx("span",{className:r.label,children:s})]})});a.displayName="Checkbox";a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed beside the checkbox"}},composes:["Omit"]};const H={title:"Components/Checkbox",component:a,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},checked:{control:"boolean"}}},o={args:{label:"Accept terms and conditions"}},c={args:{label:"I agree",defaultChecked:!0}},t={args:{label:"Disabled checkbox",disabled:!0}},n={args:{label:"Disabled and checked",disabled:!0,defaultChecked:!0}},l={args:{}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"Option A",defaultChecked:!0}),e.jsx(a,{label:"Option B"}),e.jsx(a,{label:"Option C"}),e.jsx(a,{label:"Disabled",disabled:!0})]})};var p,u,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var b,h,k;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'I agree',
    defaultChecked: true
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,g,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Disabled checkbox',
    disabled: true
  }
}`,...(C=(g=t.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var f,_,j;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Disabled and checked',
    disabled: true,
    defaultChecked: true
  }
}`,...(j=(_=n.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var D,w,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {}
}`,...(I=(w=l.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var y,v,L;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
}`,...(L=(v=d.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const J=["Default","Checked","Disabled","DisabledChecked","WithoutLabel","Group"];export{c as Checked,o as Default,t as Disabled,n as DisabledChecked,d as Group,l as WithoutLabel,J as __namedExportsOrder,H as default};
