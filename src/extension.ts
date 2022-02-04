import * as Token from 'markdown-it/lib/token';
import * as MarkdownIt from 'markdown-it';
import * as MarkdownItContainer from 'markdown-it-container';
import * as ABCJS from 'abcjs';

export function activate() {

	const pluginKeyword = 'abc';
	const ttContainerOpen = 'container_' + pluginKeyword + '_open';
	const ttContainerClose = 'container_' + pluginKeyword + '_close';

	return {
		extendMarkdownIt(md: MarkdownIt) {
			console.log("Loading");
			md.use(MarkdownItContainer, pluginKeyword, {
				marker: '`',
				validate: (params: string) => {
					return params.trim().match(pluginKeyword);
				},
				render: (tokens: Token[], idx: number) => {
					const token = tokens[idx];

					let src = '';
					if (token.type === ttContainerOpen) {
						for (let i = idx + 1; i < tokens.length; i++) {
							const val = tokens[i];
							if (val === undefined || val.type === ttContainerClose) {
								break;
							}

							src += val.content;
							if (val.block && val.nesting <= 0) {
								src += '\n';
							}

							val.tag = '';
							val.type = "inline";
							val.children = [];
						}
					}

					if (token.nesting === 1) {
						return `<div class="${pluginKeyword}">${src}`;
					} else {
						return '</div>';
					}
				}
			});

			return md;
		}
	};
}

// this method is called when your extension is deactivated
export function deactivate() { }
