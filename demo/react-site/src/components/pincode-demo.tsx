import { H3, PinCode } from "@pixiepkg/react";
import React, { useState } from "react";

export const PinCodeDemo = () => {
  const [values, setValues] = useState(["0", "0", "0", "0"]);
  return (
    <div className="wrapper">
      <H3 bold>Pin code</H3>
      <PinCode values={values} setValues={setValues} />
    </div>
  );
};
