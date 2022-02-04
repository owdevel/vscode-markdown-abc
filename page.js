import * as ABCJS from "abcjs";

function init() {
    let i = 0;
    for (const abcContainer of document.getElementsByClassName('abc')) {
        const id = `abc-${Date.now()}-${i++}`;
        const source = abcContainer.textContent;

        const out = document.createElement('div');
        out.id = id;
        abcContainer.innerHTML = '';
        abcContainer.appendChild(out);

        ABCJS.renderAbc(id, source);
    }
}

window.addEventListener('vscode.markdown.updateContent', init);
init();