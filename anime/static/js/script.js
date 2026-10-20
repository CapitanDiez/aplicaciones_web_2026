async function verAnime() {
    console.log("Funcionaaaaaaa");

    try {
        const url = "https://api.animechan.io/v1/quotes/random";
        const datos_random = document.getElementById("datos_random");
        const response = await fetch(url);
        const [data] = await response.json();
        console.log("Data:", data);
        datos_random.textContent = data.content;
        
    } catch (error) {
        console.error("Upss algo falló:", error.message);
    }
}
