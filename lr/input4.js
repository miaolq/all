import React from 'react';
import { Input } from 'zarm';
import { includesBigUnicode } from 'utils/index';

export default function InputN4(props) {
  const onChange = (value = '') => {
    const newValue = [...String(value.trim())].filter(item => !includesBigUnicode(item)).join('');
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  return <Input {...props} onChange={onChange} />;
}
