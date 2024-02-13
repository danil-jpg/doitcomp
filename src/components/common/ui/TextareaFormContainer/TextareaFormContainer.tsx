import React, { FC } from 'react';
import './TextareaFormContainer.scss';

interface ITextFormContainer {
    style?: {};
    title: string;
    name: string;
    type1?: string;
    ph: string;
    value: string;
    setValue: (e: string) => void;
}

const TextareaFormContainer: FC<ITextFormContainer> = ({ style, title, name, type1, ph, value, setValue }) => {
    return (
        <div className={'textareaContainer'} style={style ? style : {}}>
            <h2 className={`textareaContainer__title`}>{title}</h2>
            <textarea
                style={style ? style : {}}
                className={`textarea`}
                placeholder={ph ? ph : ''}
                name={name ? name : ''}
                typeof={type1 ? type1 : ''}
                aria-label={name ? name : ''}
                value={value}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}></textarea>
        </div>
    );
};

export default TextareaFormContainer;
