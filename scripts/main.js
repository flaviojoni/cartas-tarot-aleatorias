//Fazer um random para um arcano maior (de 0 a 21)
//Fazer um random para um arcano menor (de 1 a 56)
const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    random = Math.random() * (max - min) + min; //O mínimo é inclusivo e o máximo exclusivo
    return Math.floor(random);
}

//document.getElementById('arc-maior').setAttribute("src", "valor");
//Preciso colocar um novo valor ali dentro a partir do seguinte:
//./images/arcanosMaiores/${valorRandom}.jpg

const srcAttributeMaior = (numero) => {
    let arcanoMaiorImage = document.getElementById('arc-maior');
    arcanoMaiorImage.setAttribute('src', `./images/arcanosMaiores/${numero}.jpg`)
}

const srcAttributeMenor = (numero) => {
    let arcanoMenorImage = document.getElementById('arc-menor');
    arcanoMenorImage.setAttribute('src', `./images/arcanosMenores/${numero}.jpg`)
}

let randomImages = () => {
    srcAttributeMaior(randomNumber(0, 22));
    srcAttributeMenor(randomNumber(1, 57));
}

document.getElementById('aleatorios').addEventListener('click', () => {
    randomImages();
});