import { Checkbox, H3 } from '../../core/dist';
import React, { useRef, useState } from 'react';
import { container, row } from './_shared-styles';

export const CheckBoxDemo = (): JSX.Element => {
    const [checked, setChecked] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    console.log(ref.current?.checked);

    return (
        <div style={container}>
            <H3 bold>Checkboxs</H3>
            <div style={row}>
                <Checkbox ref={ref} checked={checked} onChecked={setChecked}>
                    Check box
                </Checkbox>
                <Checkbox size="large" checked={checked} onChecked={setChecked}>
                    Check box
                </Checkbox>
                <Checkbox size="large" checked={checked} onChecked={setChecked} disabled>
                    Check box
                </Checkbox>

                <Checkbox checked />
            </div>
        </div>
    );
};
