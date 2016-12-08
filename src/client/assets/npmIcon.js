import React from 'react';

export default ({ downloads }) => (
	<div style={{minWidth: 32, height: 32, fontSize: 14, textAlign: 'center'}}>
		<svg viewBox="0 0 18 7">
			<path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
			<path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
		</svg>
		{downloads}
	</div>
)
