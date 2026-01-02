//  fyi - open a new email using page title as the subject, and in the body
//        put the page title, URL, and any selected text
(() => {
    const pageTitle: string = encodeURIComponent(document.title),
        returnChar: string = '%0A',
        selected: Selection | null = window.getSelection(),
        selectedText: string = selected && selected.type === 'Range' && selected.rangeCount > 0 ? selected.getRangeAt(0).toString() : '';
    location.href = `mailto:?subject=fyi:${pageTitle}&body=${pageTitle}${returnChar}${encodeURIComponent(document.URL)}${returnChar}---${returnChar}${encodeURIComponent(selectedText)}${returnChar}${returnChar}`;
})();
