const delay = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

export async function typingEffect(elements, totalInterval = 1500) {
    var effects = [];

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let interval = totalInterval / elements[i].textContent.length;
        effects.push(
            async function () {
                let text = element.textContent;
                element.textContent = "";

                for (let i = 0; i < text.length; i++) {
                    element.textContent += text[i];
                    await delay(interval);
                }     
            } ()
        )
    }
    
    await Promise.all(effects);
}
