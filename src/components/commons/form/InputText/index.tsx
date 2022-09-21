import { InputHTMLAttributes } from 'react';

import { Control, Controller, FieldValues } from "react-hook-form";
import TextField, { Input } from '@material/react-text-field';

import './styles.scss';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    control: Control<FieldValues, any>;
    name: string;
    label: string;
}

export function InputText({ control, name, label, ...rest }: InputTextProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, value, name },
            }) => (
                <TextField label={label}>
                    <Input
                        onChange={onChange}
                        value={value}
                        name={name}
                        id={name}
                        {...rest}
                    />
                </TextField>
            )}
        />
    )
}