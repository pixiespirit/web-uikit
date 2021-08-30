import { ImagePicture2Outline } from '@pixiepkg/icon';
import React from 'react';
import {
  Input,
  InputGroup,
  InputLeftIcon,
  InputRightIcon
} from '../../core/dist';

export const InputDemo = () => {
  return (
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
  );
};
