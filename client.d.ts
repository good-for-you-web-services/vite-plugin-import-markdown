declare module '*.md' {
	const value: import('./dist').MarkdownType;
	export default value;
}
