const defaultState = [
  {
    id: 1,
    nome: "Disney",
    descricao:
      " Encontre na Walt Disney um lugar onde os contos de fadas se transformam em realidade! Este é o lugar onde a diversão e a magia reinam ",
    preco: 5000,
    imagem: "./disney.jpg",
  },
  {
    id: 2,
    nome: "Paris",
    descricao:
      " Um dos destinos mais românticos do mundo, conheça os cartões-postais mais famosos como Torre Eiffel, o Museu do Louvre, o Arco do Triunfo e a Catedral de Notre-Dame.",
    preco: 7000,
    imagem: "./paris.png",
  },
  {
    id: 3,
    nome: "Cancun",
    descricao:
      " Conheça a cidade turística mais famosa do México. Com praias brancas e águas cristalinas, resorts luxuosos e noites regadas a música.",
    preco: 4000,
    imagem: "./cancun.jpg",
  },
  {
    id: 4,
    nome: "Londres",
    descricao:
      " Londres é cosmopolita e vibrante. Na cidade você encontrará uma mistura de modernidade com pubs e atrações da monarquia inglesa.",
    preco: 6000,
    imagem: "./londres.png",
  },
  {
    id: 5,
    nome: "New York",
    descricao:
      " Uma das cidades mais famosas do mundo. Para todos que procuram por diversão, compras e cultural, esse é o destino ideal. Possui um dos pontos turísticos mais conhecidos do mundo como a Estátua da Liberdade, o Central Park e a Times Square.",
    preco: 10000,
    imagem: "./ny.png",
  },
  {
    id: 6,
    nome: "Las Vegas",
    descricao:
      " Prepare-se para uma maratona sem exagero algum. Vegas é para quem está com disposição de bater perna pela cidade, ir às compras, ir à restaurantes, assistir espetáculos, jogar nos cassinos e ver paisagens deslumbrantes no Grand Canyon",
    preco: 7000,
    imagem: "./lasvegas.png",
  },
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
