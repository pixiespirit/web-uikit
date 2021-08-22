import Head from 'next/head';
import React, { CSSProperties } from 'react';
import { GalleryAvatar } from '../components/avatar';
import { GalleryButton } from '../components/button';
import { GalleryCheckbox } from '../components/check-box';
import { GalleryInput } from '../components/input';
import { GalleryRadio } from '../components/radio';
import { GallerySeparator } from '../components/separator';
import { GalleryTag } from '../components/tag';
import { GalleryToggle } from '../components/toggle';
import { GalleryTypographyIntro } from '../components/typography';
import {Input, InputGroup, InputLeftIcon, InputRightIcon} from "../../core/dist";
import {ImagePicture2Outline} from "@pixiepkg/icon";


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
            <Input placeholder={"Invalid"} required/>
          </div>
          <div className="mb-4">
            <InputGroup>
              {/*<InputRightIcon children={<span>haha</span>}/>*/}
              <Input placeholder={"Invalid"} required/>
              <InputLeftIcon children={<ImagePicture2Outline size={24} display={"block"} />}/>
            </InputGroup>
          </div>

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
