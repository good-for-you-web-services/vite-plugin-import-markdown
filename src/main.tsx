import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<h1>Hello World</h1>
		<p>
			This is a test for an extension that imports markdown content easily into your vite
			project.
		</p>
		<div>
			<h2>Raw Markdown</h2>
			<div></div>
		</div>
		<div>
			<h2>Markdown Front-Matter</h2>
			<div></div>
		</div>
		<div>
			<h2>Markdown Body</h2>
			<div></div>
		</div>
	</StrictMode>
);
