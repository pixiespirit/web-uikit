import * as React from 'react';
import { Textarea } from '../../core/dist';

export const TextAreaDemo = () => {
    return (
        <div className="wrapper">
            <h2 className="title">Text area</h2>
            <Textarea placeholder="placeholder of text area" />
            <Textarea disabled={true} value="Text area disable" label="Label" caption="This is caption" />
            <Textarea readonly value="Text area readonly" label="Label" caption="This is caption" />
            <Textarea label="Label" required invalid caption="This is caption" placeholder="Textarea invalid" />
            <Textarea label="Label" required caption="This is caption" value="Value of textarea" />
        </div>
    );
};
