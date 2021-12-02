import React, { VFC } from 'react';
import { YBot } from './components/YBot';

export const App: VFC = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<YBot />
		</div>
	)
}
