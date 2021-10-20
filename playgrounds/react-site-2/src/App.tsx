import React, { CSSProperties } from "react";
import "./App.css";
import "@pixiepkg/react/dist/bundle.css";

import { ButtonDemo } from "./components/button-demo";
import { CheckBoxDemo } from "./components/check-box-demo";
import { InputDemo } from "./components/input-demo";
import { TextAreaDemo } from "./components/text-area-demo";
import { ToggleDemo } from "./components/toggle-demo";
import { TypographyDemo } from "./components/typography-demo";

const style: CSSProperties = {
  maxWidth: 1170,
  margin: "2rem auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

function App() {
  return (
    <div style={style}>
      <TypographyDemo />
      <InputDemo />
      <ButtonDemo />
      <TextAreaDemo />
      <CheckBoxDemo />
      <ToggleDemo />
    </div>
  );
}

export default App;
