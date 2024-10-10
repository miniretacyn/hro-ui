"use strict";(self.webpackChunkhro_ui=self.webpackChunkhro_ui||[]).push([[461],{14361:function(v,o,n){var i;n.r(o),n.d(o,{demos:function(){return B}});var s=n(15009),u=n.n(s),p=n(99289),g=n.n(p),a=n(67294),P=n(4497),f=n(84794),B={"button-demo-demo":{component:a.memo(a.lazy(function(){return n.e(570).then(n.bind(n,83589))})),asset:{type:"BLOCK",id:"button-demo-demo",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:n(51758).Z},"hro-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u57FA\u7840\u6309\u94AE"},context:{"hro-ui":f,react:i||(i=n.t(a,2))},renderOpts:{compile:function(){var l=g()(u()().mark(function c(){var r,m=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},c)}));function d(){return l.apply(this,arguments)}return d}()}},"button-demo-demo1":{component:a.memo(a.lazy(function(){return n.e(570).then(n.bind(n,57450))})),asset:{type:"BLOCK",id:"button-demo-demo1",refAtomIds:["Button"],dependencies:{"index.tsx":{type:"FILE",value:n(74342).Z},"hro-ui":{type:"NPM",value:"0.0.1"},react:{type:"NPM",value:"18.3.1"}},entry:"index.tsx",title:"\u5757\u7EA7\u6309\u94AE"},context:{"hro-ui":f,react:i||(i=n.t(a,2))},renderOpts:{compile:function(){var l=g()(u()().mark(function c(){var r,m=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(335).then(n.bind(n,37335));case 2:return e.abrupt("return",(r=e.sent).default.apply(r,m));case 3:case"end":return e.stop()}},c)}));function d(){return l.apply(this,arguments)}return d}()}}}},84794:function(v,o,n){n.r(o),n.d(o,{Button:function(){return A},Foo:function(){return L},Test:function(){return U}});var i=n(97857),s=n.n(i),u=n(13769),p=n.n(u),g=n(68400),a=n.n(g),P=n(90512),f=n(67294),B=n(41686),l="#dadedf",d="#ff4d4f",c="",r="#00A66D",m="#009062",y="#49CA94",e="#ffffff",b=n(85893),C=["icon","children","type","disabled","block","active","danger","circle","dashed","loading","ghost","className","htmlType","onClick","wait","size"],x,T=B.ZP.button(x||(x=a()([`
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
`])),e,l,r,r,c,d,d,e,r,r,y,y,m,d,d,l,l,r),D=f.forwardRef(function(t,h){var z=t.icon,W=t.children,E=t.type,K=E===void 0?"default":E,O=t.disabled,N=t.block,F=t.active,Z=t.danger,$=t.circle,S=t.dashed,_=t.loading,k=t.ghost,G=t.className,H=t.htmlType,Q=t.onClick,V=t.wait,j=t.size,J=j===void 0?"middle":j,M=p()(t,C);return(0,b.jsxs)(T,s()(s()({},M),{},{ref:h,disabled:O,type:H,className:(0,P.Z)("hro-btn",K,J,{disabled:O||_,block:N,danger:Z,circle:$,dashed:S,ghost:k,pc:!0,anchor:M.as==="a",active:F},G),children:[z,W]}))});D.displayName="HRO-Button";var A=D,I=function(h){return(0,b.jsx)("h4",{children:h.title})},L=I,R=function(h){return(0,b.jsx)("h4",{children:h.title})},U=R},73120:function(v,o,n){n.r(o),n.d(o,{texts:function(){return s}});var i=n(4497);const s=[{value:"\u6309\u94AE\u7528\u4E8E\u5F00\u59CB\u4E00\u4E2A\u5373\u65F6\u64CD\u4F5C\u3002",paraId:0,tocIndex:0}]},51758:function(v,o){o.Z=`import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button size="small">Default</Button>
      <Button size="middle" active>
        Outline
      </Button>
      <Button size="large" danger>
        Danger
      </Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" danger>
        Primary
      </Button>
      <Button icon={<div>@</div>}>icon</Button>
      <Button active>long name type</Button>
      <Button danger>Danger</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" danger>
        Primary
      </Button>
    </div>
  );
}
`},74342:function(v,o){o.Z=`import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
      }}
    >
      <Button block>Block default</Button>
      <Button block type="primary">
        Block primary
      </Button>
      <Button block danger dashed>
        Block danger
      </Button>
    </div>
  );
}
`}}]);
