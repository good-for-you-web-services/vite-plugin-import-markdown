import fm from 'front-matter';
import { type Plugin } from 'vite';

export default function MarkdownPlugin(): Plugin {
	const splitMarkdown = (src: string) => {
		const { attributes, body } = fm(src);
		const markdownObject = {
			frontmatter: attributes,
			body,
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
