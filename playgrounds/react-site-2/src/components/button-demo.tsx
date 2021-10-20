import React from "react";
import { Button, KindButton, SizeButton } from "@pixiepkg/react";
import IconSVG from "./icons/react-outlined.svg";

export function ButtonDemo() {
  return (
    <div className="wrapper">
      <h2 className="title">Button</h2>
      <div className="row">
        <Button kind={KindButton.PRIMARY} size={SizeButton.XLARGE}>
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.LARGE}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.MEDIUM}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.SMALL}
          className="ml-4"
        >
          Text
        </Button>
      </div>
      <div className="row">
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.XLARGE}
          rounded
          leftIcon={<img src={IconSVG} alt="fd" width={20} height={20} />}
          rightIcon={<img src={IconSVG} alt="fd" width={20} height={20} />}
        >
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.LARGE}
          rounded
          className="ml-4"
          leftIcon={<img src={IconSVG} alt="fd" width={20} height={20} />}
          rightIcon={<img src={IconSVG} alt="fd" width={20} height={20} />}
        >
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.MEDIUM}
          rounded
          className="ml-4"
          leftIcon={<img src={IconSVG} alt="fd" width={16} height={16} />}
          rightIcon={<img src={IconSVG} alt="fd" width={16} height={16} />}
        >
          Text
        </Button>
        <Button
          kind={KindButton.PRIMARY}
          size={SizeButton.SMALL}
          rounded
          className="ml-4"
          leftIcon={<img src={IconSVG} alt="fd" width={16} height={16} />}
          rightIcon={<img src={IconSVG} alt="fd" width={16} height={16} />}
        >
          Text
        </Button>
      </div>
      <div className="row">
        <Button kind={KindButton.SECONDARY} size={SizeButton.XLARGE}>
          Text
        </Button>
        <Button
          kind={KindButton.SECONDARY}
          size={SizeButton.LARGE}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.SECONDARY}
          size={SizeButton.MEDIUM}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.SECONDARY}
          size={SizeButton.SMALL}
          className="ml-4"
        >
          Text
        </Button>
      </div>
      <div className="row">
        <Button kind={KindButton.GHOST} size={SizeButton.XLARGE}>
          Text
        </Button>
        <Button
          kind={KindButton.GHOST}
          size={SizeButton.LARGE}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.GHOST}
          size={SizeButton.MEDIUM}
          className="ml-4"
        >
          Text
        </Button>
        <Button
          kind={KindButton.GHOST}
          size={SizeButton.SMALL}
          className="ml-4"
        >
          Text
        </Button>
      </div>
    </div>
  );
}
