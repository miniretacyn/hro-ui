/**
 * title: 按钮尺寸
 * description: 按钮有大、中、小三种尺寸。<br>通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸默认为中。
 */
// @ts-ignore
import { Button } from 'hro-ui';
import React from 'react';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      <Button size="small">small</Button>
      <Button>middle</Button>
      <Button size="large">large</Button>
    </div>
  );
}
