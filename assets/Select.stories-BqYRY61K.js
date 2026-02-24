import{j as s}from"./jsx-runtime-CBDCb4rg.js";import{r as m}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const A="_wrapper_yxe0s_6",V="_trigger_yxe0s_14",W="_open_yxe0s_37",M="_placeholder_yxe0s_48",R="_selectedText_yxe0s_52",z="_chevron_yxe0s_58",F="_chevronOpen_yxe0s_66",I="_dropdown_yxe0s_72",K="_option_yxe0s_90",G="_optionSelected_yxe0s_106",H="_checkmark_yxe0s_113",t={wrapper:A,trigger:V,open:W,placeholder:M,selectedText:R,chevron:z,chevronOpen:F,dropdown:I,option:K,optionSelected:G,checkmark:H};function x({options:o,value:l,onChange:h,placeholder:N="Please select",disabled:f,className:E}){const[i,a]=m.useState(!1),v=m.useRef(null),y=o.find(e=>e.value===l);m.useEffect(()=>{function e(r){v.current&&!v.current.contains(r.target)&&a(!1)}return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);function P(e){e.key==="Escape"&&a(!1),(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),a(r=>!r))}const B=[t.trigger,i&&t.open].filter(Boolean).join(" ");return s.jsxs("div",{ref:v,className:[t.wrapper,E].filter(Boolean).join(" "),children:[s.jsxs("button",{type:"button",className:B,onClick:()=>!f&&a(e=>!e),onKeyDown:P,disabled:f,"aria-haspopup":"listbox","aria-expanded":i,children:[s.jsx("span",{className:y?t.selectedText:t.placeholder,children:y?y.label:N}),s.jsx("span",{className:[t.chevron,i&&t.chevronOpen].filter(Boolean).join(" "),"aria-hidden":"true",children:s.jsx("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",children:s.jsx("path",{d:"M1 1L5 5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),i&&s.jsx("ul",{className:t.dropdown,role:"listbox","aria-label":"Options",children:o.map(e=>{const r=e.value===l,q=[t.option,r&&t.optionSelected].filter(Boolean).join(" ");return s.jsxs("li",{role:"option","aria-selected":r,className:q,onClick:()=>{h==null||h(e.value),a(!1)},children:[s.jsx("span",{className:t.checkmark,"aria-hidden":"true",children:r&&s.jsx("svg",{width:"10",height:"8",viewBox:"0 0 10 8",fill:"none",children:s.jsx("path",{d:"M1 4L3.5 6.5L9 1",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.label]},e.value)})})]})}x.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"List of selectable options"},value:{required:!1,tsType:{name:"string"},description:"Currently selected value (controlled)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the user selects an option"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder shown when nothing is selected",defaultValue:{value:"'Please select'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables the select"},className:{required:!1,tsType:{name:"string"},description:""}}};const n=[{label:"All Assets",value:"all"},{label:"Aviation",value:"aviation"},{label:"Marine",value:"marine"},{label:"Property",value:"property"},{label:"Casualty",value:"casualty"},{label:"Cyber",value:"cyber"}],X={title:"Components/Select",component:x,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"},value:{control:"select",options:n.map(o=>o.value)}},tags:["autodocs"],decorators:[o=>s.jsx("div",{style:{width:320,paddingBottom:200},children:s.jsx(o,{})})]},c={args:{options:n,placeholder:"Please select"}},p={args:{options:n,value:"aviation"}},d={args:{options:n,placeholder:"Please select",disabled:!0}},u={render:()=>{const[o,l]=m.useState("");return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[s.jsx(x,{options:n,value:o,onChange:l,placeholder:"Filter by asset type"}),o&&s.jsxs("p",{style:{fontSize:12,color:"#002c77"},children:["Selected: ",o]})]})}};var g,_,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    options: assetOptions,
    placeholder: 'Please select'
  }
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var j,S,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: assetOptions,
    value: 'aviation'
  }
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,O,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: assetOptions,
    placeholder: 'Please select',
    disabled: true
  }
}`,...(C=(O=d.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var L,T,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Select options={assetOptions} value={value} onChange={setValue} placeholder="Filter by asset type" />
        {value && <p style={{
        fontSize: 12,
        color: '#002c77'
      }}>Selected: {value}</p>}
      </div>;
  }
}`,...(D=(T=u.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const Y=["Default","WithSelection","Disabled","Controlled"];export{u as Controlled,c as Default,d as Disabled,p as WithSelection,Y as __namedExportsOrder,X as default};
