import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{r as v}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const B="_wrapper_12lmz_6",k="_icon_12lmz_13",N="_input_12lmz_23",V="_disabled_12lmz_61",r={wrapper:B,icon:k,input:N,disabled:V},n=v.forwardRef(({className:c,placeholder:j="Search…",...l},w)=>{const y=[r.wrapper,c].filter(Boolean).join(" ");return e.jsxs("div",{className:y,children:[e.jsx("span",{className:r.icon,"aria-hidden":"true",children:e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[e.jsx("circle",{cx:"6",cy:"6",r:"5",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M10.5 10.5L13 13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})}),e.jsx("input",{ref:w,type:"search",className:[r.input,l.disabled&&r.disabled].filter(Boolean).join(" "),placeholder:j,...l})]})});n.displayName="SearchBar";n.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown inside the input",defaultValue:{value:"'Search…'",computed:!1}}},composes:["Omit"]};const T={title:"Components/SearchBar",component:n,argTypes:{placeholder:{control:"text"},disabled:{control:"boolean"}},tags:["autodocs"]},a={args:{placeholder:"Search…"}},s={args:{placeholder:"Search…",defaultValue:"Aviation"}},o={args:{placeholder:"Search…",disabled:!0}},t={args:{placeholder:"Search table…"},decorators:[c=>e.jsx("div",{style:{width:295},children:e.jsx(c,{})})]};var d,i,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var h,u,m;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    defaultValue: 'Aviation'
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var S,g,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search…',
    disabled: true
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,_,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search table…'
  },
  decorators: [Story => <div style={{
    width: 295
  }}>
        <Story />
      </div>]
}`,...(b=(_=t.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const W=["Default","WithValue","Disabled","TableSearch"];export{a as Default,o as Disabled,t as TableSearch,s as WithValue,W as __namedExportsOrder,T as default};
