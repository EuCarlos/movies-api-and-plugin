const movies_plugin = document.createElement('div');
const styles = document.createElement('style');
const data_slug = document.currentScript.getAttribute('data-slug');

const URL = `http://localhost:3000/api/v1/movies/${data_slug}`;

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let { id, url, name, description, image } = JSON.parse(this.responseText);

            movies_plugin.innerHTML = `
                <div id="movies-plugin__content" key="${id}">
                    <img class="movies-plugin__img" src="${image}" alt="${name}">

                    <div class="movies-plugin__text">
                        <h2 class="movies-plugin__text__title">
                            <a href="${url}">${name}</a>
                        </h2>
                        <p class="movies-plugin__text__description">${description}</p>
                    </div>
                </div>
            `
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
}

loadXMLDoc();

styles.innerHTML = `
#movies-plugin__content {
    display: flex;
    flex-direction: row;
    padding: 10px;
    border: solid 1px #c1c1c1;
    border-radius: 10px;
}
img.movies-plugin__img { width: 110px; margin-right: 1rem; }
.movies-plugin__text { font-family: monospace; }
.movies-plugin__text h2 { margin: 0px; }
.movies-plugin__text h2 a { color: #6c6969; font-weight: bold; }
`

document.head.appendChild(styles)
document.body.appendChild(movies_plugin)