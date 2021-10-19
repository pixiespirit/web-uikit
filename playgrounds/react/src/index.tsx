import React from "react";
import ReactDOM from "react-dom";
import { ButtonDemo } from "./components/button-demo";
import { CheckBoxDemo } from "./components/check-box-demo";
import { InputDemo } from "./components/input-demo";
import { TextAreaDemo } from "./components/text-area-demo";
import { ToggleDemo } from "./components/toggle-demo";
import { TypographyDemo } from "./components/typography-demo";

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    <TypographyDemo />
    <InputDemo />
    <ButtonDemo />
    <TextAreaDemo />
    <CheckBoxDemo />
    <ToggleDemo />
  </div>,
  document.querySelector("#root")
);
