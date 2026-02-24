import{j as r}from"./jsx-runtime-CBDCb4rg.js";import{r as q}from"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";const z="_wrapper_1plcc_5",B="_label_1plcc_12",D="_inputContainer_1plcc_18",L="_input_1plcc_18",H="_error_1plcc_59",O="_leadingIcon_1plcc_74",P="_withIcon_1plcc_83",U="_helperText_1plcc_89",k="_errorText_1plcc_94",e={wrapper:z,label:B,inputContainer:D,input:L,error:H,leadingIcon:O,withIcon:P,helperText:U,errorText:k},c=q.forwardRef(({label:a,helperText:p,error:d,leadingIcon:i,className:N,id:F,...m},M)=>{const h=F??(a==null?void 0:a.toLowerCase().replace(/\s+/g,"-")),R=[e.wrapper,N].filter(Boolean).join(" "),W=[e.input,d&&e.error,i&&e.withIcon,m.disabled&&e.disabled].filter(Boolean).join(" ");return r.jsxs("div",{className:R,children:[a&&r.jsx("label",{className:e.label,htmlFor:h,children:a}),r.jsxs("div",{className:e.inputContainer,children:[i&&r.jsx("span",{className:e.leadingIcon,children:i}),r.jsx("input",{ref:M,id:h,className:W,...m})]}),p&&r.jsx("span",{className:d?e.errorText:e.helperText,children:p})]})});c.displayName="TextField";c.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:"Label displayed above the input"},helperText:{required:!1,tsType:{name:"string"},description:"Helper or error message below the input"},error:{required:!1,tsType:{name:"boolean"},description:"Mark the field as having an error"},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon rendered inside the input (leading position)"}},composes:["Omit"]};const K={title:"Components/TextField",component:c,tags:["autodocs"],argTypes:{error:{control:"boolean"},disabled:{control:"boolean"}},decorators:[a=>r.jsx("div",{style:{maxWidth:320},children:r.jsx(a,{})})]},s={args:{label:"Email",placeholder:"you@example.com"}},t={args:{label:"Username",placeholder:"Enter username",helperText:"Must be at least 3 characters"}},o={args:{label:"Email",placeholder:"you@example.com",value:"invalid-email",error:!0,helperText:"Please enter a valid email address"}},l={args:{label:"Read only field",value:"Cannot edit this",disabled:!0}},n={args:{label:"Search",placeholder:"Search...",leadingIcon:r.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:r.jsx("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"})})}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com'
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var _,b,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters'
  }
}`,...(T=(b=t.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,v,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    value: 'invalid-email',
    error: true,
    helperText: 'Please enter a valid email address'
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var y,j,I;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Read only field',
    value: 'Cannot edit this',
    disabled: true
  }
}`,...(I=(j=l.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,E,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search...',
    leadingIcon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
      </svg>
  }
}`,...(S=(E=n.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};const Q=["Default","WithHelperText","ErrorState","Disabled","WithLeadingIcon"];export{s as Default,l as Disabled,o as ErrorState,t as WithHelperText,n as WithLeadingIcon,Q as __namedExportsOrder,K as default};
