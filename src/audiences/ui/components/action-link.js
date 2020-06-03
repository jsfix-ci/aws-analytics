import React from 'react';

const { Button } = wp.components;
const { sprintf } = wp.i18n;

const ActionLink = ( {
	post,
	label,
	children = null,
	className = '',
	onClick,
} ) => (
	<Button
		isLink
		className={ className }
		onClick={ event => {
			event.preventDefault();
			onClick( post );
		} }
		aria-label={ sprintf( label, post.title.rendered ) }
	>
		{ children || post.title.rendered }
	</Button>
);

export default ActionLink;
