import { typingEffect } from "./typingEffect.js"
import { blinkCursorEffect } from "./blinkCursorEffect.js"
import { getMotto } from "./randomMotto.js"

async function script() {
    await fetch("../banner.html")
    .then(response => {
        return response.text();
    })
    .then(html => {
        document.getElementById("banner-placeholder").innerHTML = html;
    });

    await getMotto();

    document.getElementById("loader").innerHTML = "";
    document.getElementById("scanlines-container")
        .style.visibility = "visible"

    await typingEffect(document.getElementsByClassName("typing"));
    await blinkCursorEffect(document.getElementsByClassName("blink"));
}

script()
