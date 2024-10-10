/**
 * title: 语法糖
 * description: 通过 type 语法糖，使用预设的按钮样式：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。推荐主按钮在同一个操作区域最多出现一次
 */
// @ts-ignore
import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  const onClick = (e: any) => {
    console.log('----e is:', e);
  };
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button type="primary" onClick={onClick}>
        Primary Button
      </Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  );
}
