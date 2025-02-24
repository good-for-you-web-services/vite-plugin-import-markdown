import fm from 'front-matter';
import { type Plugin } from 'vite';

export interface MarkdownType {
	attributes: Record<string, unknown>;
	body: string;
}

export default function MarkdownPlugin(): Plugin {
	const splitMarkdown = (src: string) => {
		const { attributes, body } = fm<Record<string, unknown>>(src);
		const markdownObject: MarkdownType = {
			attributes: attributes,
			body: body,
		};

		return `export default ${JSON.stringify(markdownObject)};`;
	};

	return {
		name: 'transform-markdown',
		enforce: 'pre',
		transform(src: string, id: string) {
			if (id.slice(-3) === '.md') {
				return {
					code: splitMarkdown(src),
					map: null,
				};
			}
		},
	};
}
