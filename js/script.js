const url = "https://japceibal.github.io/japflix_api/movies-data.json";
let pelis = [];

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        pelis = data;
    });

let boton = document.getElementById("btnBuscar")
boton.addEventListener("click", showData)

function showData() {

    const inputBuscar = document.getElementById("inputBuscar").value.toLowerCase();
    let lista = "";

    pelis.forEach((peli) => {
        
        const genres = peli.genres.map((genre) => genre.name.toLowerCase());

        if (
            peli.title.toLowerCase().includes(inputBuscar) ||
            peli.tagline.toLowerCase().includes(inputBuscar) ||
            peli.overview.toLowerCase().includes(inputBuscar) ||
            genres.includes(inputBuscar)
        ) {
            lista += `
          <div class="list-group-item list-group-item-action cursor-active">
            <div class="row">
              <div class="col">
                <div class="d-flex w-100 justify-content-between">
                  <h4 class="mb-1">${peli.title}</h4>
                </div>
                <p class="mb-1">${peli.tagline}</p>
              </div>
            </div>
          </div>`;
        }
    });
    document.getElementById("lista").innerHTML = lista;
}

