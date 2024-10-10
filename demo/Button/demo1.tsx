/**
 * title: 块级按钮
 * description: block 属性将使按钮适合其父宽度。
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
        flexDirection: 'column',
      }}
    >
      <Button block>Block default</Button>
      <Button block danger>
        Block default danger
      </Button>
      <Button block type="dashed" danger>
        Block dashed danger
      </Button>
      <Button block type="primary">
        Block primary
      </Button>

      <Button block type="primary" danger>
        Block primary danger
      </Button>
    </div>
  );
}
