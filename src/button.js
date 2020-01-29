import React from 'react';

const Button = ({style,disabled,onClick,value,}) => (
<button style={style} disabled={disabled} onClick={onClick} > 
    {value}
</button>
);

export default Button;