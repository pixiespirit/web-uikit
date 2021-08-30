import Head from 'next/head';
import React, { CSSProperties } from 'react';
import {Input} from "../../core/dist";


const style: CSSProperties = {
  maxWidth: 1170,
  margin: '2rem auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 20
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
        <div className="wrapper">
          <h2 className={"title"}>Input</h2>
          <div className="mb-4">
            <Input placeholder={"placeholder ne haha"} />
          </div>
          <div className="mb-4">
            <Input placeholder={"Invalid"} />
          </div>
          {/*<div className="mb-4">*/}
          {/*  <InputGroup>*/}
          {/*    /!*<InputRightIcon children={<span>haha</span>}/>*!/*/}
          {/*    <Input placeholder={"Invalid"} />*/}
          {/*    <InputLeftIcon children={<ImagePicture2Outline size={24} display={"block"} />}/>*/}
          {/*  </InputGroup>*/}
          {/*</div>*/}

        </div>
        {/*<GalleryTypographyIntro />*/}
        {/*<GalleryButton />*/}
        {/*<GalleryTag />*/}
        {/*<GalleryCheckbox />*/}
        {/*<GalleryRadio />*/}
        {/*<GalleryToggle />*/}
        {/*<GalleryInput />*/}
        {/*<GalleryAvatar />*/}
        {/*<GallerySeparator />*/}
      </main>
    </div>
  );
}
