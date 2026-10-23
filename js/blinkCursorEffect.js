const delay = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function blinkCursorEffect(elements, interval = 500) {
    let textBuffer = [];

    while (true) {
        for (let i = 0; i < elements.length; i++) {
            textBuffer.push(elements[i].textContent);
        }

        for(let i = 0; i < elements.length; i++) {
            elements[i].textContent = textBuffer[i] + "_";
        }

        await delay(interval);

        for (let i = 0; i < elements.length; i++) {
            elements[i].textContent = textBuffer[i];
        }

        await delay(interval);
    }
}
