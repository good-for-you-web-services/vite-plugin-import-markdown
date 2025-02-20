# vite-plugin-markdown-import

A Vite plugin to simplify the importing of markdown files, with support for front-matter attributes. Uses [front-matter](https://www.npmjs.com/package/front-matter) under the hood for parsing markdown files.

This plugin does not transform the markdown content into JSX/React Elements, it simply returns a string of the markdown's body and an object with your front-matter attributes. You can use the markdown body string in a markdown renderer/formatter of your choice, like [react-markdown](https://www.npmjs.com/package/react-markdown).

## Installation

```bash
# npm
npm install -D vite-plugin-markdown-import

# pnpm
pnpm add -D vite-plugin-markdown-import

# yarn
yarn add -D vite-plugin-markdown-import
```

## Usage

### Vite Config

**File:** `vite.config.ts`

```typescript
import MarkdownPlugin from '@goodforyou/vite-plugin-markdown-import';

export default defineConfig({
	// other config...

	plugins: [
		// other plugins...
		MarkdownPlugin(),
	],
});
```

Files can then be imported in your vite application files, like so:

**File:** `example.tsx`

```tsx
// you can use other markdown rendering libraries, this is an example
import Markdown from 'react-markdown';
import TestMarkdown from './test-markdown.md';

export default function TestComponent() {
	return (
		<div>
			<Markdown>{TestMarkdown.body}</Markdown>
		</div>
	);
}
```

### Typescript Config

If you are using typescript, at this point markdown files would be imported as type `any`. To fix that, add the following to your `vite-env.d.ts` file:

**File:** `src/vite-env.d.ts`

```typescript
// other references...

/// <reference types="@goodforyou/vite-plugin-markdown-import/client" />
```

At this point now, imported files will have the type `MarkdownType` which specifies an object of the following:

```typescript
export interface MarkdownType {
	attributes: Record<string, unknown>;
	body: string;
}
```

If you want to type your attributes further, you can do so via extending `MarkdownType` like so:

```typescript
import type { MarkdownType } from '@goodforyou/vite-plugin-markdown-import/client';

export interface ExtendedMarkdownType extends MarkdownType {
	attributes: {
		title: string;
		description: string;
	};
}
```

You can then reference or declare a module in your `vite-env.d.ts` that will type your given markdown file:

```typescript
declare module 'path/to/folder/*.md' {
	const value: ExtendedMarkdownType;
	export default value;
}
```

<br />
<br />

## Package Information

### Maintained By

[Nick Cunningham](https://github.com/TheNickOfTime) from [Good For You Web Services](https://goodforyou.services/)
