import { H3, KindTag, Tag } from '@pixiepkg/core';
import React from 'react';
import { container, row } from './_shared-styles';

export const GalleryTag = (): JSX.Element => {
  return (
    <div style={container}>
      <H3>Tags</H3>
      <div style={row}>
        <Tag kind={KindTag.PRIMARY}>P2P call</Tag>
        <Tag kind={KindTag.PRIMARY}>Group call</Tag>
        <Tag kind={KindTag.WARNING}>Pending</Tag>
        <Tag kind={KindTag.WARNING}>Waiting for acceptance</Tag>
      </div>
    </div>
  );
};
