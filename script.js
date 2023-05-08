let history = [];

function adjustHeight() {
    const textArea = document.getElementById("textArea");
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + 'px';
}

function removeLineBreaks() {
    const textArea = document.getElementById("textArea");
    addToHistory(textArea.value);
    const stringWithoutLineBreaks = textArea.value.replace(/(\r\n|\n|\r)/gm, " ");
    textArea.value = stringWithoutLineBreaks;
    adjustHeight();
}

function removeLineNumbers() {
    const textArea = document.getElementById("textArea");
    addToHistory(textArea.value);
    const stringWithoutLineNumbers = textArea.value.replace(/^[\s]*\d+\s*(?=.)/gm, (match) => match.replace(/\d+/g, ''));
    textArea.value = stringWithoutLineNumbers;
    adjustHeight();
}

function removeDoubleSpaces() {
    const textArea = document.getElementById("textArea");
    addToHistory(textArea.value);
    const stringWithSingleSpaces = textArea.value.replace(/  +/g, ' ');
    textArea.value = stringWithSingleSpaces;
    adjustHeight();
}

function addToHistory(text) {
    if (history.length === 10) {
        history.shift();
    }
    history.push(text);
}

function undo() {
    if (history.length > 0) {
        const textArea = document.getElementById("textArea");
        history.pop(); // Remove the current state
        const previousState = history.length > 0 ? history[history.length - 1] : '';
        textArea.value = previousState;
        adjustHeight();
    }
}

adjustHeight();
