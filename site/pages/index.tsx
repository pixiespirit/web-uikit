import Head from 'next/head';
import React, { CSSProperties } from 'react';
import {
  Input,
  InputGroup,
  InputLeftIcon,
  InputRightIcon
} from '../../core/dist';
import { ImagePicture2Outline } from '@pixiepkg/icon';
import { ButtonDemo } from '../components/button-demo';

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
          <h2 className="title">Input</h2>
          <div className="mb-4">
            <Input placeholder={'Sizes prop sm'} sizes={'sm'} />
          </div>
          <div className="mb-4">
            <Input placeholder={'Sizes prop md as default'} />
          </div>
          <div className="mb-4">
            <Input placeholder={'sizes props lg'} sizes={'lg'} />
          </div>

          <div className="mb-4">
            <Input placeholder={'Invalid input'} required />
          </div>

          <div className="mb-4">
            <InputGroup>
              {/*<InputRightIcon children={<span>haha</span>}/>*/}
              <Input placeholder={'Left icon with action onClick'} />
              <InputLeftIcon onClick={() => alert('ok')}>
                <ImagePicture2Outline size={24} display={'block'} />
              </InputLeftIcon>
            </InputGroup>
          </div>
          <div className="mb-4">
            <InputGroup>
              <Input placeholder={'Right icon'} />
              <InputRightIcon>
                <ImagePicture2Outline size={24} display={'block'} />
              </InputRightIcon>
            </InputGroup>
          </div>
        </div>

        <ButtonDemo />
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
