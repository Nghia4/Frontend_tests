import React from 'react';

const Button = (props) => {
	return (
		<div
			onClick={props.onClick}
			className={props.className}
			data-active={props.active}
		>
			{props.number}
		</div>
	);
};

export default Button;
