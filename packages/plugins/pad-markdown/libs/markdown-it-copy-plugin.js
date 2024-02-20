const hljs = require('highlight.js');
const copy_plugin=(md) =>{
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    let highlightedContent = tokens[idx].content;
    const lang = tokens[idx].info;
    if (lang && hljs.getLanguage(lang)) {
      try {
        highlightedContent = hljs.highlight(tokens[idx].content, { language: lang }).value;
        const content = tokens[idx].content.replace(/"/g, '&quot;');
        let result = `
        <div style="position: relative" class="mycodeblock">
        <pre><code>${highlightedContent}</code></pre>
        <button class="code-copy-button" data-clipboard-text="${content}">  
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16"><path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" /></svg>
        </button>
        </div>`;
        return result;
      } catch (__) { }
    }
    return temp(tokens, idx, options, env, slf);
  }
}
module.exports = copy_plugin;
