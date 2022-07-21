const tarjetas = document.getElementById('tarjetas');

const url = 'http://hp-api.herokuapp.com/api/characters';

fetch(url)
.then((resp) => resp.json())
.then((data) => printData(data))
.catch((error) => console.log(error))

const printData = (arr) => {
    let str = '';
    for(let i=0; i< 25; i++){
        const image = arr[i].image
        const name = arr[i].name
        const gender = arr[i].gender
        const house = arr[i].house
        const dateOfBirth  = arr[i].dateOfBirth 
        str = str + `
        <div class="tarjeta">
            <figure containerImg>
              <img src="${image}" alt="${name}" width="160">
            </figure>
            <p>${name}</p>
            <p>${gender}</p>
            <p>${house}</p>
            <p>${dateOfBirth}</p>
          </div>
        `
    }
    tarjetas.innerHTML = str;
}

const gryff = document.getElementById('gryff');

const urlGryffindor = 'http://hp-api.herokuapp.com/api/characters/house/gryffindor';


fetch(urlGryffindor)
.then((resp) => resp.json())
.then((data) => casaData(data))
.catch((error) => console.log(error))

const casaData = (arr) => {
    let str = '';
    for(let i=0; i< 10; i++){
        const image = arr[i].image
        const name = arr[i].name
        const house= arr[i].house
        const actor= arr[i].actor
        str = str + `
        <div class="gry">
            <figure>
              <img src="${image}" alt="${name}" width="160">
            </figure>
            <p>${name}</p>
            <p>(${actor})</p>
            <p>${house}</p>
          </div>
        `
    }
    gryff.innerHTML = str;
}

const slyth = document.getElementById('slyth');

const urlSlytherin = 'http://hp-api.herokuapp.com/api/characters/house/slytherin';


fetch(urlSlytherin)
.then((resp) => resp.json())
.then((data) => casaDat(data))
.catch((error) => console.log(error))

const casaDat = (arr) => {
    let str = '';
    for(let i=0; i< 9; i++){
        const image = arr[i].image
        const name = arr[i].name
        const house= arr[i].house
        const actor= arr[i].actor
        str = str + `
        <div class="sly">
            <figure>
              <img src="${image}" alt="${name}" width="160">
            </figure>
            <p>${name}</p>
            <p>(${actor})</p>
            <p>${house}</p>
          </div>
        `
    }
    slyth.innerHTML = str;
}

const huffle = document.getElementById('huffle');

const urlHufflepuff = 'http://hp-api.herokuapp.com/api/characters/house/hufflepuff';


fetch(urlHufflepuff)
.then((resp) => resp.json())
.then((data) => casaDa(data))
.catch((error) => console.log(error))

const casaDa = (arr) => {
    let str = '';
    for(let i=0; i< 1; i++){
        const image = arr[i].image
        const name = arr[i].name
        const house= arr[i].house
        const actor= arr[i].actor
        str = str + `
        <div class="huf">
            <figure>
              <img src="${image}" alt="${name}" width="140">
            </figure>
            <p>${name}</p>
            <p>(${actor})</p>
            <p>${house}</p>
          </div>
        `
    }
    huffle.innerHTML = str;
}


const raven = document.getElementById('raven');

const urlRavenclaw = 'http://hp-api.herokuapp.com/api/characters/house/ravenclaw';


fetch(urlRavenclaw)
.then((resp) => resp.json())
.then((data) => casaD(data))
.catch((error) => console.log(error))

const casaD = (arr) => {
    let str = '';
    for(let i=0; i< 2; i++){
        const image = arr[i].image
        const name = arr[i].name
        const house= arr[i].house
        const actor= arr[i].actor
        str = str + `
        <div class="rav">
            <figure>
              <img src="${image}" alt="${name}" width="160">
            </figure>
            <p>${name}</p>
            <p>(${actor})</p>
            <p>${house}</p>
          </div>
        `
    }
    raven.innerHTML = str;
}
