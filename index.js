
function addSpriteToPage(sprite){
    let div = document.getElementById("sprite_div");
    let img = document.createElement("img");
    img.setAttribute("src", sprite);
    img.setAttribute("width", "200px");
    img.setAttribute("height", "200px");
    div.appendChild(img);
}

 async function callPokeApi(final_link){
    let sprite;
    await fetch(final_link)
        .then(response => response.json())
        .then(data => sprite = data.sprites.front_default)
    await addSpriteToPage(sprite);
}


document.addEventListener("DOMContentLoaded", ()=>{
    let button = document.getElementById("submit-button");
    const arr = new Array();
    const pokeLink = "https://pokeapi.co/api/v2/pokemon/"
    button.addEventListener("click", async ()=>{
        let pokeInput = document.getElementById("name-input").value;
        pokeInput = pokeInput.toLowerCase();
        console.log(pokeInput);
        await callPokeApi(pokeLink + pokeInput);
    })

});