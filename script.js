const container = document.querySelector('.container')

const API_URL = `https://pokeapi.co/api/v2/`

getPokeData()

async function getPokeData() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
  const data = await res.json()
  data.results.forEach(({ name, url }, idx) => {
    createPokeCard(name, url, idx)
  })
}

async function createPokeCard(name, url, idx) {
  idx++
  const res = await fetch(url)
  const data = await res.json()
  const cardElement = document.createElement('div')
  cardElement.classList.add('card')
  cardElement.innerHTML = `
     <img src=${
       data.sprites?.other?.dream_world?.front_default
     } alt="avatarPoke" class="avatarPoke" />
        <p class="count">#${
          idx < 10 ? '00' + idx : idx > 10 && idx < 100 ? '0' + idx : idx
        }</p>
        <h3 class="strong">${name}</h3>
        <p class="type">Type: ${data.types[0]?.type?.name}</p>
  `
  container.append(cardElement)
}
