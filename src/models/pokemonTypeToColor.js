export const DEFAULT_COLOR = 'rgb(146,144,250)';

export const TYPE_COLOR = {
  grass: 'rgb(162,212,135)',
  poison: 'rgb(158,128,171)',
  fire: 'rgb(229,111,107)',
  electic: 'rgb(250,215,107)',
};

const pokemonTypeToColor = (type) => TYPE_COLOR[type] || DEFAULT_COLOR;

export default pokemonTypeToColor;
