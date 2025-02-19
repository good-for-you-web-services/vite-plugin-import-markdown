interface MarkdownType {
	attributes: Record<string, unknown>;
	body: string;
}

declare module '*.md' {
	export default MarkdownType;
}
