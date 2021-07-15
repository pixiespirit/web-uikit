import { H3, Toggle } from '@pixiepkg/core';
import React, { useState } from 'react';
import { container, row } from './_shared-styles';

export const GalleryToggle = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkex, setCheckex] = useState<boolean>(false);
  return (
    <div style={container}>
      <H3 bold>Toggles</H3>
      <div style={row}>
        <Toggle checked={checked} setChecked={setChecked} />
        <Toggle checked={checkex} setChecked={setCheckex} disabled />
      </div>
    </div>
  );
};
