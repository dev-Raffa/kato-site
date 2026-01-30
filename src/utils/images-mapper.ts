import Bombeiros1 from '../assets/services/bombeiros_1.png';
import Bombeiros2 from '../assets/services/bombeiros_2.png';
import Bombeiros3 from '../assets/services/bombeiros_3.png';

import Postos1 from '../assets/services/postos_1.png';
import Postos2 from '../assets/services/postos_2.png';
import Postos3 from '../assets/services/postos_3.png';

import Aguas1 from '../assets/services/agua_1.png';
import Aguas2 from '../assets/services/agua_2.png';
import Aguas3 from '../assets/services/agua_3.png';

import Contaminacao1 from '../assets/services/contaminacao_1.png';
import Contaminacao2 from '../assets/services/contaminacao_2.png';
import Contaminacao3 from '../assets/services/contaminacao_3.png';

import Vegetacao1 from '../assets/services/vegetacao_1.png';
import Vegetacao2 from '../assets/services/vegetacao_2.png';
import Vegetacao3 from '../assets/services/vegetacao_3.png';

import Rural1 from '../assets/services/rural_1.png';
import Rural2 from '../assets/services/rural_2.png';
import Rural3 from '../assets/services/rural_3.png';

import Residuos1 from '../assets/services/residuos_1.png';
import Residuos2 from '../assets/services/residuos_2.png';
import Residuos3 from '../assets/services/residuos_3.png';

import Industria1 from '../assets/services/industria_1.png';
import Industria2 from '../assets/services/industria_2.png';
import Industria3 from '../assets/services/industria_3.png';

import Madeira1 from '../assets/services/madeira_1.png';
import Madeira2 from '../assets/services/madeira_2.png';
import Madeira3 from '../assets/services/madeira_3.png';

import Ibama1 from '../assets/services/ibama_1.png';
import Ibama2 from '../assets/services/ibama_2.png';
import Ibama3 from '../assets/services/ibama_3.png';

import Orcamento1 from '../assets/services/orcamento_1.png';
import Orcamento2 from '../assets/services/orcamento_2.png';
import Orcamento3 from '../assets/services/orcamento_3.png';

import Padrao1 from '../assets/services/geral_1.png';
import Padrao2 from '../assets/services/geral_2.png';
import Padrao3 from '../assets/services/geral_3.png';

const imageBank: Record<string, string[]> = {
  bombeiros: [
    Bombeiros1.src,
    Bombeiros2.src,
    Bombeiros3.src
  ],
  postos: [
    Postos1.src,
    Postos2.src,
    Postos3.src
  ],
  agua: [
    Aguas1.src, 
    Aguas2.src, 
    Aguas3.src
  ],
  contaminacao: [
    Contaminacao1.src, 
    Contaminacao2.src, 
    Contaminacao3.src
  ],
  vegetacao: [
    Vegetacao1.src, 
    Vegetacao2.src, 
    Vegetacao3.src
  ],
  rural: [
    Rural1.src, 
    Rural2.src, 
    Rural3.src
  ],
  residuos: [
    Residuos1.src, 
    Residuos2.src, 
    Residuos3.src
  ],
  industria: [
    Industria1.src, 
    Industria2.src, 
    Industria3.src
  ],
  madeira: [
    Madeira1.src, 
    Madeira2.src, 
    Madeira3.src
  ],
  ibama: [
    Ibama1.src, 
    Ibama2.src, 
    Ibama3.src
  ],
  orcamento: [
    Orcamento1.src, 
    Orcamento2.src, 
    Orcamento3.src
  ],
  padrao: [
    Padrao1.src, 
    Padrao2.src, 
    Padrao3.src
  ]
};

const categoryMatchers = [
  { key: 'madeira', keywords: ['madeira', 'dof', 'sinaflor'] },
  { key: 'bombeiros', keywords: ['avcb', 'clcb', 'bombeiro', 'incêndio', 'estanqueidade'] }, // Pega "Bombeiros" e "Bombeiros SP"
  { key: 'postos', keywords: ['posto', 'combustível', 'anp', 'sasc', 'abastecimento'] },
  { key: 'agua', keywords: ['daee', 'outorga', 'água', 'poço', 'hídricos', 'rios', 'barramento', 'represa'] },
  { key: 'contaminacao', keywords: ['contaminada', 'passivo', 'gac', 'remediação', 'sondagem'] },
  { key: 'vegetacao', keywords: ['vegetação', 'árvore', 'supressão', 'laudo', 'tcra'] },
  { key: 'rural', keywords: ['rural', 'car', 'agronegócio', 'incra', 'georreferenciamento'] },
  { key: 'industria', keywords: ['indústria', 'fertilizante', 'química', 'mapa'] },
  { key: 'residuos', keywords: ['resíduos', 'cadri', 'efluentes'] },
  { key: 'ibama', keywords: ['ibama', 'ctf', 'rapp'] },
  { key: 'orcamento', keywords: ['orçamento', 'preço', 'custo'] },
];

export const getImagesByTags = (tags: string[] | undefined): string[] => {
  if (!tags || tags.length === 0) return imageBank.padrao;

  const normalizedTags = tags.map(t => t.toLowerCase());

  for (const category of categoryMatchers) {
    if (normalizedTags.some(tag => category.keywords.some(keyword => tag.includes(keyword)))) {
      return imageBank[category.key];
    }
  }

  return imageBank.padrao;
};
