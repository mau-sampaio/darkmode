function temaToggleMode() {
    document.body.classList.toggle("dark");
    document.querySelector(".toggle").classList.toggle("active");
}


// let itens = document.querySelectorAll(".item") //Pegando todos os elementos com a classe "ITEM" (array de itens)
// const obj = []; //array vazio

// for (const i of itens) {
//     obj.push({
//         img: i.querySelector("img").src,
//         titulo: i.querySelector("h2").innerText,
//         parag: i.querySelector("p").innerText
//     })
// }

const listaFelinos = [
    {
        "img": "./imagens/tiger.jpg",
        "titulo": "O tigre",
        "parag": "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão."
    },
    {
        "img": "./imagens/leon.jpg",
        "titulo": "O leão",
        "parag": "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia."
    },
    {
        "img": "./imagens/leopardo.jpg",
        "titulo": "O leopardo",
        "parag": "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista)."
    },
    {
        "img": "./imagens/pantera-negra.jpg",
        "titulo": "A pantera negra",
        "parag": "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais."
    },
    {
        "img": "./imagens/jaguar.jpg",
        "titulo": "O jaguar",
        "parag": "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo)."
    },
    {
        "img": "./imagens/chita.jpg",
        "titulo": "O guepardo",
        "parag": "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros."
    }
]

for (const felino of listaFelinos) {
    const div = document.createElement("div");
    div.classList.add("item")
    const img = document.createElement("img");
    img.src = felino.img;
    const titulo = document.createElement("h2");
    const tituloConteudo = document.createTextNode(felino.titulo);
    titulo.appendChild(tituloConteudo);
    const parag = document.createElement("p");
    const paragConteudo = document.createTextNode(felino.parag);
    parag.appendChild(paragConteudo);
    div.appendChild(img);
    div.appendChild(titulo);
    div.appendChild(parag);
    document.querySelector(".container").appendChild(div);
}

