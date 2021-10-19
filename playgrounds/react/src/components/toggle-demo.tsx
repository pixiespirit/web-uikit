import { H3, Toggle } from "@pixiepkg/react";
import React, { useState } from "react";
import { container, row } from "./_shared-styles";

export const ToggleDemo = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);
  const [checkex, setCheckex] = useState<boolean>(false);
  return (
    <div style={container}>
      <H3 bold>Toggles</H3>
      <div style={row}>
        <Toggle checked={checked} onChecked={setChecked}>
          Toggle
        </Toggle>

        <Toggle size="large" checked={checked} onChecked={setChecked}>
          Toggle
        </Toggle>
        <Toggle onChecked={setCheckex} checked={checkex} disabled>
          disabled
        </Toggle>
        <Toggle checked={true} onChecked={setCheckex} disabled>
          checked disabled
        </Toggle>
      </div>
    </div>
  );
};
