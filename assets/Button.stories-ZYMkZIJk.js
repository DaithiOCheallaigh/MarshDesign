import{j as e}from"./jsx-runtime-CBDCb4rg.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const W="_button_9y0mg_7",k="_primary_9y0mg_31",F="_danger_9y0mg_45",G="_outline_9y0mg_62",J="_small_9y0mg_79",K="_medium_9y0mg_84",Q="_large_9y0mg_89",U="_label_9y0mg_96",X="_icon_9y0mg_102",r={button:W,primary:k,danger:F,outline:G,small:J,medium:K,large:Q,label:U,icon:X};function a({variant:M="primary",size:q="medium",icon:c,children:w,className:P,...A}){const E=[r.button,r[M],r[q],P].filter(Boolean).join(" ");return e.jsxs("button",{className:E,...A,children:[e.jsx("span",{className:r.label,children:w}),c&&e.jsx("span",{className:r.icon,children:c})]})}a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'danger' | 'outline'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'outline'"}]},description:"Visual style variant",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Size of the button",defaultValue:{value:"'medium'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon element rendered after the label"},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["ButtonHTMLAttributes"]};const ee={title:"Components/Button",component:a,argTypes:{variant:{control:"select",options:["primary","danger","outline"]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"}},tags:["autodocs"]},n={args:{children:"Primary Button",variant:"primary",size:"medium"}},i={args:{children:"Remove from Team",variant:"danger",size:"medium"}},t={args:{children:"Outline Button",variant:"outline",size:"medium"}},s={args:{children:"Small",variant:"primary",size:"small"}},l={args:{children:"Large",variant:"primary",size:"large"}},o={args:{children:"Disabled",variant:"primary",disabled:!0}},m={args:{children:"Save",variant:"primary",size:"medium",icon:e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M2 2v12h12V4.828L11.172 2H2zm1 1h7v3H3V3zm8 0h.172L13 4.828V13H3V7h10V6H3V3z"})})}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{variant:"primary",size:"small",children:"Small"}),e.jsx(a,{variant:"primary",size:"medium",children:"Medium"}),e.jsx(a,{variant:"primary",size:"large",children:"Large"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{variant:"danger",size:"small",children:"Remove"}),e.jsx(a,{variant:"danger",size:"medium",children:"Remove from Team"}),e.jsx(a,{variant:"danger",size:"large",children:"Remove"})]}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(a,{variant:"outline",size:"small",children:"Cancel"}),e.jsx(a,{variant:"outline",size:"medium",children:"Cancel"}),e.jsx(a,{variant:"outline",size:"large",children:"Cancel"})]})]})};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium'
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var v,y,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Remove from Team',
    variant: 'danger',
    size: 'medium'
  }
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var z,x,_;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline',
    size: 'medium'
  }
}`,...(_=(x=t.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var f,B,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    variant: 'primary',
    size: 'small'
  }
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var b,S,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    variant: 'primary',
    size: 'large'
  }
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var L,R,T;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    variant: 'primary',
    disabled: true
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var C,H,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Save',
    variant: 'primary',
    size: 'medium',
    icon: <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M2 2v12h12V4.828L11.172 2H2zm1 1h7v3H3V3zm8 0h.172L13 4.828V13H3V7h10V6H3V3z" />
      </svg>
  }
}`,...(I=(H=m.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var D,N,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Button variant="primary" size="small">Small</Button>
        <Button variant="primary" size="medium">Medium</Button>
        <Button variant="primary" size="large">Large</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Button variant="danger" size="small">Remove</Button>
        <Button variant="danger" size="medium">Remove from Team</Button>
        <Button variant="danger" size="large">Remove</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        <Button variant="outline" size="small">Cancel</Button>
        <Button variant="outline" size="medium">Cancel</Button>
        <Button variant="outline" size="large">Cancel</Button>
      </div>
    </div>
}`,...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const ae=["Primary","Danger","Outline","Small","Large","Disabled","WithIcon","AllVariants"];export{d as AllVariants,i as Danger,o as Disabled,l as Large,t as Outline,n as Primary,s as Small,m as WithIcon,ae as __namedExportsOrder,ee as default};
