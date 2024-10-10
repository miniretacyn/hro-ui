/**
 * title: 基础按钮
 * description: desc
 */
// @ts-ignore
import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button>Default</Button>
      <Button active>Active</Button>
      <Button danger>Danger</Button>
      <Button type="dashed">Default</Button>
      <Button active type="dashed">
        Active
      </Button>
      <Button danger type="dashed">
        Danger dashed
      </Button>
      <Button type="primary">Primary</Button>
      <Button type="primary" danger>
        Primary danger
      </Button>
      <Button type="primary" icon={<div>@</div>}>
        icon
      </Button>
    </div>
  );
}
