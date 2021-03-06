import React from 'react';
import classNames from 'classnames';

const defaultProps = {
  children: null,
  name: undefined,
  value: '',
  disabled: false,
  checked: false
}

const Radio = ({
  className,
  children,
  name,
  value,
  disabled,
  checked,
  ...props
}) => {

  const classes = classNames(
    'form-radio',
    className
  );

  return (
    <label className={classes}>
      <input
        {...props}
        type="radio"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
      />
      {children}
    </label>
  );
}

Radio.defaultProps = defaultProps;

export default Radio;
