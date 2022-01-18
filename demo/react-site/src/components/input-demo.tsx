import React from "react";
import { ImagePicture2Outline } from "@pixiepkg/icon";
import { H3, Textbox } from "@pixiepkg/react";

export const InputDemo = () => {
  return (
    <div className="wrapper">
      <H3>Text box</H3>

      <div className="mb-4">
        <Textbox
          size="small"
          placeholder="hello"
          addonLeft="http://"
          addonRight={<p>.com</p>}
        />
      </div>

      <div className="mb-4">
        <Textbox
          iconLeft={<ImagePicture2Outline size={24} display={"block"} />}
          defaultValue="disabled"
          disabled
        />
      </div>

      <div className="mb-4">
        <Textbox
          size="large"
          iconRight={<ImagePicture2Outline size={24} display={"block"} />}
          onClickRightIcon={() => alert("pressed")}
        />
      </div>

      <div className="mb-4">
        <Textbox invalid />
      </div>
    </div>
  );
};
