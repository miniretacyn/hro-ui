/**
 * title: 禁用按钮
 * description: 各个按钮的禁用状态样式
 */
// @ts-ignore
import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button disabled>Default disabled</Button>
      <Button active disabled>
        Active disabled
      </Button>
      <Button danger disabled>
        Danger disabled
      </Button>
      <Button disabled type="dashed">
        Default disabled dashed
      </Button>
      <Button active disabled type="dashed">
        Active disabled dashed
      </Button>
      <Button danger disabled type="dashed">
        Danger disabled dashed
      </Button>
      <Button type="primary" disabled>
        Primary disabled
      </Button>
      <Button type="primary" danger disabled>
        Primary danger disabled
      </Button>
    </div>
  );
}
