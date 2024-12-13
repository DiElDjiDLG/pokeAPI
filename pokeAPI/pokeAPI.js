const searchBtn = document.getElementById('search-button');

const pokemonImg = document.getElementById('sprite');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const types = document.getElementById('types');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const spAttack = document.getElementById('special-attack');
const spDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const getPokemon = async () => {

    clearPage();
    
  try {
    const input = document.getElementById('search-input').value.toLowerCase();
    const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${input}`);

    if (!res.ok) {
      alert("Pokémon not found");
      throw new Error("Could not find data");
    }

    const data = await res.json();

    //Pokemon img
    const pokemonSprite = data.sprites.front_default;
    pokemonImg.src = pokemonSprite;
    pokemonImg.style.display = 'block';

    //Pokemon name
    pokemonName.textContent = data.name.toUpperCase();

    //Pokemon id
    pokemonId.textContent += `#${data.id}`;

    //Pokemon weight
    weight.textContent = data.weight;

    //Pokemon height
    height.textContent = data.height;

    //Pokemon types
    const typesInfo = data.types.map(typeInfo => typeInfo.type.name);
    typesInfo.forEach(type => {
  const typeElement = document.createElement('div');
  typeElement.textContent = type.toUpperCase();
  types.appendChild(typeElement);
});

    //Pokemon hp
    const getHp = data.stats.find(stat => stat.stat.name === "hp").base_stat;
    hp.textContent = getHp

    //Pokemon attack
    const getAttack = data.stats.find(stat => stat.stat.name === "attack").base_stat;
    attack.textContent = getAttack;

    //Pokemon defense
    const getDefense = data.stats.find(stat => stat.stat.name === "defense").base_stat;
    defense.textContent = getDefense;

    //Pokemon special attack
    const getSpAttack = data.stats.find(stat => stat.stat.name === "special-attack").base_stat;
    spAttack.textContent = getSpAttack;

    //Pokemon special defense
    const getSpDefense = data.stats.find(stat => stat.stat.name === "special-defense").base_stat;
    spDefense.textContent = getSpDefense;

    //Pokemon speed
    const getSpeed = data.stats.find(stat => stat.stat.name === "speed").base_stat;
    speed.textContent = getSpeed;

  } catch (e) {
    console.error("Error: ", e)
  }

}

const clearPage = () => {
  pokemonImg.src = "";
  pokemonName.textContent = "";
  pokemonId.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  types.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  spAttack.textContent = "";
  spDefense.textContent = "";
  speed.textContent = "";
}

searchBtn.addEventListener('click', getPokemon);