export async function getMotto() {
    let response = await fetch("./motto.json");
    let mottos = (await response.json()).mottos;
    
    let randomIndex = parseInt(Math.random() * mottos.length);
    let randomMotto = mottos[randomIndex];
    document.getElementById("motto").textContent = randomMotto;
}
