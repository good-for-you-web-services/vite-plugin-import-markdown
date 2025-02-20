export interface MarkdownType {
	attributes: Record<string, unknown>;
	body: string;
}

declare module '*.md' {
	const value: MarkdownType;
	export default value;
}
