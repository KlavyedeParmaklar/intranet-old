import React from 'react'

import classes from './Input.css'

const Input = (props) => {
    let inputElement = null
    const inputClasses = [classes.InputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className="form-control"
                style={props.style}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            />
            break;
        case ('select'):
            inputElement = <select
                className="form-select"
                style={props.style}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            >
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        case ('date'):
            inputElement = <input
                className="form-control"
                style={props.style}
                {...props.elementConfig}
                value={props.value}
                placeholder={props.placeholder}
                ref={props.ref}
                onChange={props.onChange}
            />
            break;
        case ('label'):
            inputElement = <label
                className={inputClasses.join(' ')}
                style={props.style}
                {...props.elementConfig}
            >{props.value}</label>
            break;
    }

    return (
        <div>
            {inputElement}
        </div>
    )
}

export default Input