import React from 'react';

const Row = (props) => {
	return <div data-testid="Row" className={props.className}>{props.children}</div>;
};

export default Row;
