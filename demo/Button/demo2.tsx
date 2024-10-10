/**
 * title: 幽灵按钮
 * description: 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上
 */
// @ts-ignore
import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        background: '#BEC8C8',
        padding: 20,
      }}
    >
      <Button type="primary" ghost>
        primary
      </Button>
      <Button disabled>Default</Button>
      <Button ghost danger type="dashed">
        danger
      </Button>
      <Button ghost danger>
        danger
      </Button>
    </div>
  );
}
