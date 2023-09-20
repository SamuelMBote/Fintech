import React from 'react';
const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)',
};
const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
};
const inputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle,
};
type IDateInput = React.ComponentProps<'input'> & {label: string};

const DateInput = ({label, name, ...props}: IDateInput) => {
  return (
    <div>
      <label style={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input style={inputStyle} name={name} type="date" {...props} />
    </div>
  );
};

export default DateInput;
