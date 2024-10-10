"use strict";(self.webpackChunkhro_ui=self.webpackChunkhro_ui||[]).push([[923],{26520:function(F,l,e){e.r(l),e.d(l,{default:function(){return m}});var x=e(5574),p=e.n(x),C=e(97857),j=e.n(C),o=e(67294),c=e(53683),O=e(38024),k=e(64236),v={Button:{type:"COMPONENT",id:"Button",title:"Button",propsConfig:{type:"object",required:[],className:"Props",properties:{type:{type:"string",enum:["default","primary"],description:"default \u7EBF\u6846\uFF0Cprimary \u5B9E\u8272\u6846"},active:{type:"boolean",description:"\u7EBF\u6846\u4F7F\u7528\u4E3B\u9898\u8272"},size:{type:"string",enum:["middle","small","large"],description:"\u8BBE\u7F6E\u6309\u94AE\u5927\u5C0F"},disabled:{type:"boolean",description:"\u7981\u7528"},style:{type:"object",className:"CSSProperties",description:"\u81EA\u5B9A\u4E49style"},htmlType:{type:"string",enum:["submit","reset","button"],description:"\u6309\u94AE\u7C7B\u578B"},block:{type:"boolean",description:"\u5757\u7EA7\u6309\u94AE"},children:{type:"reactNode",className:"ReactNode"},className:{type:"string",description:"\u81EA\u5B9A\u4E49className"},circle:{type:"boolean",description:"\u5706\u5F62\u6309\u94AE"},dashed:{type:"boolean",description:"\u865A\u7EBF\u8FB9"},danger:{type:"boolean",description:"\u8BBE\u7F6E\u5371\u9669\u6309\u94AE"},as:{type:"any",description:"\u8BBE\u7F6E\u4E3A\u5C55\u793A\u7684\u6807\u7B7E\uFF0C\u6BD4\u5982div,a,button"},icon:{type:"reactNode",className:"ReactNode",description:"\u8BBE\u7F6E\u6309\u94AE\u7684\u56FE\u6807\u7EC4\u4EF6"},loading:{type:"boolean",description:"\u8BBE\u7F6E\u6309\u94AE\u52A0\u8F7D\u72B6\u6001"},ghost:{type:"boolean",description:"\u662F\u5426\u5E7D\u7075\u6309\u94AE"},onClick:{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"e",type:"React.SyntheticEvent<Element, Event>",isRequired:!0}]},className:"__type",description:"\u70B9\u51FB\u56DE\u8C03"},wait:{oneOf:[{type:"number"},{type:"boolean"}],description:"\u70B9\u51FB\u540E\uFF0C\u4E0B\u6B21\u80FD\u70B9\u51FB\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u9632\u6B62\u91CD\u590D\u70B9\u51FB, \u5982\u679C\u662Ftrue, \u95F4\u9694\u9ED8\u8BA4\u662F1s"},ref:{oneOf:[{const:null},{type:"string"},{type:"function",signature:{isAsync:!1,returnType:{type:"void"},arguments:[{key:"instance",type:"T | null",isRequired:!0}]},className:"bivarianceHack"},{type:"object",properties:{current:{oneOf:[{type:"any",className:"T"},{const:null}],description:"The current value of the ref."}},required:["current"],className:"RefObject<T>"}],className:"LegacyRef<T>",description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).",tags:{see:"{@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}"}},key:{oneOf:[{oneOf:[{type:"string"},{type:"number"},{_unknown:"bigint"}],className:"Key"},{const:null}]}}}},Foo:{type:"COMPONENT",id:"Foo",title:"Foo",propsConfig:{type:"object",required:["title"],className:"__type",properties:{title:{type:"string"}}}},Test:{type:"COMPONENT",id:"Test",title:"Test",propsConfig:{type:"object",required:["title"],className:"__type",properties:{title:{type:"string"}}}}},r=e(90482),a=e(84794),R=e(85893),t=j()({},a),h={name:"hro-ui",description:"A react library developed with dumi",version:"0.0.1",license:"MIT",authors:[]},d="browser",u=void 0,i={footer:'Copyright \xA9 2024 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"hro-ui"},g=!0;function m(){var S=(0,c.pC)(),y=(0,o.useState)(!1),f=p()(y,2),b=f[0],N=f[1],T=(0,o.useRef)(c.m8.location.pathname);(0,o.useEffect)(function(){return c.m8.listen(function(n){n.location.pathname!==T.current&&(T.current=n.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var P=o.useMemo(function(){var n={pkg:h,historyType:d,entryExports:t,demos:null,components:v,locales:r.k,loading:b,setLoading:N,hostname:u,themeConfig:i,_2_level_nav_available:g};return Object.defineProperty(n,"demos",{get:function(){return(0,O.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),n},[h,d,t,v,r.k,b,N,u,i,g]);return(0,R.jsx)(k.D.Provider,{value:P,children:S})}},84794:function(F,l,e){e.r(l),e.d(l,{Button:function(){return f},Foo:function(){return N},Test:function(){return P}});var x=e(97857),p=e.n(x),C=e(13769),j=e.n(C),o=e(68400),c=e.n(o),O=e(90512),k=e(67294),v=e(41686),r="#dadedf",a="#ff4d4f",R="",t="#00A66D",h="#009062",d="#49CA94",u="#ffffff",i=e(85893),g=["icon","children","type","disabled","block","active","danger","circle","dashed","loading","ghost","className","htmlType","onClick","wait","size"],m,S=v.ZP.button(m||(m=c()([`
  color: inherit;
  cursor: pointer;
  margin: 0;
  display: inline-flex;
  box-sizing: border-box;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: transparent;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  white-space: nowrap;
  background-image: none;
  transition: all 0.3s ease;
  user-select: none;
  touch-action: manipulation;
  padding: 4px 16px;
  border-radius: 2px;
  border: 1px solid transparent;
  border-radius: 6px;
  &.small {
    height: 24px;
    font-size: 12px;
  }
  &.middle {
    height: 32px;
    font-size: 14px;
  }
  &.large {
    height: 46px;
    font-size: 16px;
  }
  &.default {
    background-color: `,`;
    border-color: `,`;
    &:hover {
      opacity: 0.8;
    }
    &.pc:hover,
    &.active {
      color: `,`;
      border-color: `,`;
    }
    &.mobile:active {
      background-color: `,`;
    }

    &.danger,
    &.danger:hover,
    &.danger:active {
      color: `,`;
      border-color: `,`;
    }
  }

  &.primary {
    color: `,`;
    background-color: `,`;
    border-color: `,`;
    &:hover {
      background-color: `,`;
      border-color: `,`;
    }
    &:active {
      background-color: `,`;
    }
    &.danger,
    &.danger:hover,
    &.danger:active {
      background-color: `,`;
      border-color: `,`;
    }
  }

  &.disabled,
  &.disabled:hover,
  &.disabled:active {
    cursor: not-allowed;
    opacity: 0.6;
    pointer-events: none;
  }

  &.block {
    width: 100%;
  }

  &.circle {
    min-width: 32px;
    padding: 0;
    border-radius: 50%;
  }

  &.dashed {
    border-style: dashed;
  }

  &.ghost,
  &.ghost:hover {
    color: `,`;
    background-color: transparent;
    border-color: `,`;
  }

  &.anchor {
    height: unset;
    margin: unset;
    padding: unset;
    color: `,`;
    background: unset;
    border: none;
  }
`])),u,r,t,t,R,a,a,u,t,t,d,d,h,a,a,r,r,t),y=k.forwardRef(function(n,s){var D=n.icon,L=n.children,E=n.type,M=E===void 0?"default":E,z=n.disabled,H=n.block,W=n.active,w=n.danger,K=n.circle,Z=n.dashed,$=n.loading,I=n.ghost,U=n.className,G=n.htmlType,Q=n.onClick,V=n.wait,B=n.size,J=B===void 0?"middle":B,A=j()(n,g);return(0,i.jsxs)(S,p()(p()({},A),{},{ref:s,disabled:z,type:G,className:(0,O.Z)("hro-btn",M,J,{disabled:z||$,block:H,danger:w,circle:K,dashed:Z,ghost:I,pc:!0,anchor:A.as==="a",active:W},U),children:[D,L]}))});y.displayName="HRO-Button";var f=y,b=function(s){return(0,i.jsx)("h4",{children:s.title})},N=b,T=function(s){return(0,i.jsx)("h4",{children:s.title})},P=T}}]);
