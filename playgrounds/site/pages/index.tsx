import Head from "next/head";
import React, { CSSProperties } from "react";
import { H3, Label1 } from "@pixiepkg/react";
import { ButtonDemo } from "../components/button-demo";
import { CheckBoxDemo } from "../components/check-box-demo";
import { InputDemo } from "../components/input-demo";
import { TextAreaDemo } from "../components/text-area-demo";
import { ToggleDemo } from "../components/toggle-demo";
import { container } from "../components/_shared-styles";
import Link from "next/link";

export const TypographyIntro = (): JSX.Element => {
  return (
    <div style={container}>
      <H3 bold>Typography</H3>
      <Label1>
        Check it out at{" "}
        <Link href="/typography">
          <a style={{ color: "blue" }}>Typography.</a>
        </Link>
      </Label1>
    </div>
  );
};
const style: CSSProperties = {
  maxWidth: 1170,
  margin: "2rem auto",
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pixie Web UIKit</title>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta
          name="description"
          content="Web UIKit - Pixie core components gallery"
        />
      </Head>

      <main style={style}>
        <TypographyIntro />
        <InputDemo />
        <ButtonDemo />
        <TextAreaDemo />
        <CheckBoxDemo />
        <ToggleDemo />
        {/*<GalleryButton />*/}
        {/*<GalleryTag />*/}
        {/*<GalleryRadio />*/}
        {/*<GalleryInput />*/}
        {/*<GalleryAvatar />*/}
        {/*<GallerySeparator />*/}
      </main>
    </div>
  );
}
