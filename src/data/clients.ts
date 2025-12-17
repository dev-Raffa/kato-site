import { type ImageMetadata } from 'astro';

// Import all client images (Updated paths based on Step 51)
import CocaColaLogo from '../assets/clients/Coca-Cola.png';
import DSMLogo from '../assets/clients/DSM.webp';
import FrancaBoiLogo from '../assets/clients/Franca-Boi.jpeg';
import AnhangueraLogo from '../assets/clients/anhaguera.png';
import BemDaTerraLogo from '../assets/clients/bemdaterrabiologicos_logo.jpg';
import CorreaLogo from '../assets/clients/correa.jpeg';
import GrupoCetricLogo from '../assets/clients/grupo-cetric.webp';
import IbiataLogo from '../assets/clients/ibiatã.png';
import IguatemiLogo from '../assets/clients/iguatemi.png';
import LaponiaLogo from '../assets/clients/laponia.avif';
import NanoQuimicaLogo from '../assets/clients/nanoquimica.webp';
import NitroLogo from '../assets/clients/nitro.webp';
import PassaroMarronLogo from '../assets/clients/passaro-marron.jpg'; // Banner/Partner?
import PrefCajuruLogo from '../assets/clients/prefeitura-cajuru.jpeg';
import PrefBoaEsperancaLogo from '../assets/clients/prefeitura-de-boa-esperanca-do-sul.png';
import PrefCampinasLogo from '../assets/clients/prefeitura-de-campinas.png';
import PrefMococaLogo from '../assets/clients/prefeitura-de-mococa.jpg';
import PrefPederneirasLogo from '../assets/clients/prefeitura-de-perdeneiras.png';
import PrefGuaribaLogo from '../assets/clients/prefeitura-guariba.png';
import ProdesteLogo from '../assets/clients/prodeste.webp';
import RedeAraujoLogo from '../assets/clients/rede-araujo.webp';
import RevprolLogo from '../assets/clients/revprol.webp';
import RflLogo from '../assets/clients/rfl.webp';
import RodomeuLogo from '../assets/clients/rodomeu.png';
import SantaCruzLogo from '../assets/clients/santa-cruz.png';
import SertranLogo from '../assets/clients/sertran.png';
import SucosSpresLogo from '../assets/clients/sucos-spres.webp';
import ViacaoCometaLogo from '../assets/clients/viacao-cometa.png';

export interface Client {
  name: string;
  logo: ImageMetadata;
}

// All clients for the main page
export const clients: Client[] = [
  { name: "Coca-Cola", logo: CocaColaLogo },
  { name: "Anhanguera", logo: AnhangueraLogo },
  { name: "Grupo Cetric", logo: GrupoCetricLogo },
  { name: "Sertran", logo: SertranLogo },
  { name: "Santa Cruz", logo: SantaCruzLogo },
  { name: "Nanoquímica", logo: NanoQuimicaLogo },
  { name: "Prodeste", logo: ProdesteLogo },
  { name: "DSM", logo: DSMLogo },
  { name: "Nitro", logo: NitroLogo },
  { name: "Revpról", logo: RevprolLogo },
  { name: "RFL", logo: RflLogo },
  { name: "Sucos Spres", logo: SucosSpresLogo },
  { name: "Bem da Terra", logo: BemDaTerraLogo },
  { name: "Viação Cometa", logo: ViacaoCometaLogo },
  { name: "Rodomeu", logo: RodomeuLogo },
  { name: "Ibiatã", logo: IbiataLogo },
  { name: "Franca Boi", logo: FrancaBoiLogo },
  { name: "Iguatemi", logo: IguatemiLogo },
  { name: "Laponia", logo: LaponiaLogo },
  { name: "Rede Araujo", logo: RedeAraujoLogo },
  { name: "Correa", logo: CorreaLogo },
  { name: "Pássaro Marron", logo: PassaroMarronLogo },
  // Prefeituras
  { name: "Prefeitura de Cajuru", logo: PrefCajuruLogo },
  { name: "Prefeitura de Boa Esperança do Sul", logo: PrefBoaEsperancaLogo },
  { name: "Prefeitura de Campinas", logo: PrefCampinasLogo },
  { name: "Prefeitura de Mococa", logo: PrefMococaLogo },
  { name: "Prefeitura de Pederneiras", logo: PrefPederneirasLogo },
  { name: "Prefeitura de Guariba", logo: PrefGuaribaLogo },
];

// Specific list for Homepage Slider
// Coca-cola, todas as prefeituras, setran, nanoquimica, prodeste, anhaguera, santa-cruz
export const homepageClients: Client[] = [
  { name: "Coca-Cola", logo: CocaColaLogo },
  { name: "Prefeitura de Campinas", logo: PrefCampinasLogo },
  { name: "Prefeitura de Cajuru", logo: PrefCajuruLogo },
  { name: "Prefeitura de Boa Esperança do Sul", logo: PrefBoaEsperancaLogo },
  { name: "Prefeitura de Mococa", logo: PrefMococaLogo },
  { name: "Prefeitura de Pederneiras", logo: PrefPederneirasLogo },
  { name: "Prefeitura de Guariba", logo: PrefGuaribaLogo },
  { name: "Sertran", logo: SertranLogo },
  { name: "Nanoquímica", logo: NanoQuimicaLogo },
  { name: "Prodeste", logo: ProdesteLogo },
  { name: "Anhanguera", logo: AnhangueraLogo },
  { name: "Santa Cruz", logo: SantaCruzLogo },
];
