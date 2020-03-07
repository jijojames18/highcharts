import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormInput = (props) => {
    return (
        <div className="group">
            <TextField
                variant={props.variant}
                margin={props.margin}
                required
                fullWidth
                id={props.id}
                type={props.type}
                label={props.label}
                name={props.name}
                onChange={props.handleChange}
                value={props.value}
                autoFocus={props.autoFocus}
                autoComplete={props.autoComplete}
            />
        </div>
    );
};

export default FormInput;