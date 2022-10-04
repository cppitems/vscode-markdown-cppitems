import type MarkdownIt from 'markdown-it';
import * as emoji from 'markdown-it-emoji';
import container from 'markdown-it-container';
import inline_hljs from 'markdown-it-highlightjs/core'
import hljs from 'highlight.js/lib/core';
import cppitems from 'highlight.js/lib/languages/cppitems';
import cmake from 'highlight.js/lib/languages/cmake';
hljs.configure({languages:[]});
hljs.registerLanguage('cppitems', cppitems);
hljs.registerLanguage('cmake', cmake);

export function activate() {
    return {
        extendMarkdownIt(md: MarkdownIt) {

            // ::: fold <text always shown>
            // <hidden markdown section>
            // :::             
            md.use(emoji);
            md.use(inline_hljs, { hljs: hljs, inline: true });
            md.use(container, 'fold', {
            
                validate: function(params) {
                    return params.trim().match(/^fold\s+(.*)$/);
                },
                
                render: function (tokens, idx) {
                    var m = tokens[idx].info.trim().match(/^fold\s+(.*)$/);
                
                    if (tokens[idx].nesting === 1) {
                    // opening tag
            
                    return '<details><summary>' + md.render(m[1]) + '</summary>\n';
            
                    } else {
                    // closing tag
                    return '</details>\n';
                    }
                }
            });
            return md;            
        }
    };
}

