export interface ServiceData {
  slug: string;
  title: string;
  description: string; 
  content: string; 
  images?: string[]; 
}

export const servicesData: ServiceData[] = [
  {
    slug: "autorizacao-para-uso-de-produtos-controlados",
    title: "Autorização para uso de produtos controlados",
    description: "Assessoria completa para obtenção de licenças junto à Polícia Civil, Polícia Federal e Exército. Regularize sua empresa com a Kato Ambiental.",
    content: `
      <h3>O que são Produtos Controlados?</h3>
      <p>Produtos controlados são substâncias químicas ou materiais que, devido à sua periculosidade ou possibilidade de uso ilícito, são fiscalizados rigorosamente pelo Estado. Empresas que fabricam, transportam, armazenam ou utilizam esses produtos precisam de licenças específicas para operar legalmente.</p>

      <h3>Como a Kato Ambiental ajuda sua empresa?</h3>
      <p>Atuamos na gestão burocrática completa, garantindo que sua empresa cumpra todas as exigências legais e evite sanções criminais ou administrativas. Monitoramos prazos e validades para que sua operação nunca pare.</p>

      <div class="mt-8">
        <h3 class="text-secondary text-2xl font-bold mb-4">Autorização junto aos órgãos competentes:</h3>

        <div class="mb-8">
          <h4 class="text-primary text-xl font-bold mb-2">Polícia Federal</h4>
          <p class="mb-2">Responsável pela concessão e renovação de autorizações relacionadas a produtos químicos controlados destinados a fins industriais, incluindo:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li>Comercialização</li>
            <li>Transporte</li>
            <li>Armazenamento</li>
            <li>Importação</li>
            <li>Exportação</li>
          </ul>
          <p><strong>Documentos envolvidos:</strong></p>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>CRC – Certificado de Registro Cadastral</li>
            <li>CLF – Certificado de Licença de Funcionamento</li>
          </ul>
        </div>

        <div class="mb-8">
          <h4 class="text-primary text-xl font-bold mb-2">Polícia Civil</h4>
          <p class="mb-2">Atua na concessão inicial e renovação de autorizações para produtos químicos controlados, abrangendo:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li>Fins industriais</li>
            <li>Comercialização</li>
            <li>Transporte</li>
            <li>Armazenamento</li>
          </ul>
          <p><strong>Documentos e exigências:</strong></p>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Alvará inicial</li>
            <li>Certificado de Vistoria</li>
          </ul>
        </div>

        <div class="mb-8">
          <h4 class="text-primary text-xl font-bold mb-2">Exército Brasileiro</h4>
          <p class="mb-2">Responsável pela concessão e gestão do Certificado de Registro (CR) para atividades envolvendo produtos controlados fins industriais incluindo:</p>
          <ul class="list-disc pl-5 space-y-1 mb-4">
            <li>Comercialização</li>
            <li>Armazenamento</li>
            <li>Transporte</li>
          </ul>
          <p><strong>Processos abrangidos:</strong></p>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Concessão do Registro (CR)</li>
            <li>Apostilamento ao Registro</li>
            <li>Renovação do CR</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    slug: "postos-combustiveis",
    title: "Postos de Combustíveis",
    description: "Licenciamento ambiental completo para Postos de Combustíveis. Regularização na CETESB, ANP e IBAMA. Projetos de instalação e operação.",
    content: `
      <h3>Regularização Ambiental para Postos</h3>
      <p class="mb-4">Postos de combustíveis são empreendimentos de alto potencial poluidor e risco ambiental. A regularização não é apenas uma exigência da CETESB, mas uma garantia de segurança para o proprietário e para a vizinhança.</p>

      <h3>Serviços Essenciais para o Setor:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>Licenciamento Trifásico:</strong> Acompanhamento das Licenças Prévia (LP), de Instalação (LI) e de Operação (LO) junto à CETESB.</li>
        <li><strong>Investigação de Passivos:</strong> Estudos de passivo ambiental para identificar contaminação de solo e água subterrânea.</li>
        <li><strong>Regularização ANP:</strong> Atualização cadastral junto à Agência Nacional do Petróleo.</li>
        <li><strong>CADRI:</strong> Certificado para destinação de resíduos perigosos (classe I), como areia e óleo da caixa separadora.</li>
        <li><strong>Relatórios de Automonitoramento:</strong> Entrega periódica de análises exigidas pelos órgãos ambientais.</li>
      </ul>
    `,
  },
  {
    slug: "consultoria-assessoria-ambiental",
    title: "Consultoria e Assessoria Ambiental",
    description: "Consultoria ambiental contínua em Ribeirão Preto. Gestão de condicionantes, prevenção de multas e suporte técnico especializado.",
    content: `
      <h3>Por que ter uma Assessoria Contínua?</h3>
      <p class="mb-4">A legislação ambiental muda constantemente. Ter a Kato Ambiental como parceira significa ter um departamento ambiental terceirizado, focado em manter seu negócio em conformidade, prevenindo multas e embargos.</p>

      <h3>Diferenciais da nossa Consultoria:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>Diagnóstico Preventivo:</strong> Identificamos riscos na sua operação antes que virem autuações.</li>
        <li><strong>Gestão de Prazos:</strong> Nós controlamos os vencimentos de todas as suas licenças, outorgas e laudos.</li>
        <li><strong>Acompanhamento de Condicionantes:</strong> Garantimos o cumprimento das exigências técnicas descritas na Licença de Operação (LO).</li>
        <li><strong>Defesa Técnica:</strong> Suporte jurídico e técnico em casos de autos de infração ou fiscalizações.</li>
      </ul>
      <p class="mt-4">Atendemos indústrias, agronegócios, condomínios e comércios em todo o estado de São Paulo.</p>
    `,
  },
  {
    slug: "licenciamento-ambiental",
    title: "Licenciamento Ambiental",
    description: "Obtenção de LP, LI e LO na CETESB. Estudos de impacto (EIA/RIMA, RAP) para indústrias e loteamentos.",
    content: `
      <h3>O Processo de Licenciamento</h3>
      <p class="mb-4">O Licenciamento Ambiental é obrigatório para atividades que utilizam recursos naturais ou que sejam potencialmente poluidoras. É o instrumento que autoriza a localização, instalação e operação do seu negócio.</p>

      <h3>Etapas do Licenciamento (CETESB/Municipal):</h3>
      <ol class="list-decimal pl-5 mt-4 space-y-3">
        <li><strong>Licença Prévia (LP):</strong> Aprovada na fase de planejamento. O órgão atesta a viabilidade ambiental do local escolhido.</li>
        <li><strong>Licença de Instalação (LI):</strong> Autoriza o início das obras e a instalação de equipamentos.</li>
        <li><strong>Licença de Operação (LO):</strong> Autoriza o funcionamento da atividade após verificação do cumprimento das exigências técnicas.</li>
      </ol>

      <p class="mt-4">Realizamos também o <strong>Licenciamento Simplificado</strong> para atividades de menor impacto, agilizando a regularização do seu empreendimento.</p>
    `,
  },
  {
    slug: "vistoria-corpo-bombeiros",
    title: "Vistoria do Corpo de Bombeiros",
    description: "Regularização de AVCB e CLCB. Projetos de segurança contra incêndio e renovação de licenças do Corpo de Bombeiros.",
    content: `
      <h3>AVCB e CLCB: Segurança Obrigatória</h3>
      <p class="mb-4">Estar em dia com o Corpo de Bombeiros é fundamental para a segurança das vidas, do patrimônio e para a validade do seguro do imóvel.</p>

      <h3>Nossas Soluções:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>Projeto Técnico de Segurança Contra Incêndio:</strong> Dimensionamento de hidrantes, extintores, sinalização e saídas de emergência.</li>
        <li><strong>AVCB (Auto de Vistoria):</strong> Para edificações maiores de 750m² ou de alto risco. Acompanhamos desde o projeto até a vistoria final.</li>
        <li><strong>CLCB (Certificado de Licença):</strong> Processo simplificado e mais rápido para edificações menores e de baixo risco.</li>
        <li><strong>Renovação de Licença:</strong> Monitoramos o vencimento para garantir que seu imóvel esteja sempre regular.</li>
        <li><strong>FAT (Formulário de Atendimento Técnico):</strong> Para pequenas alterações ou eventos temporários.</li>
      </ul>
    `,
  },
  {
    slug: "outorgas",
    title: "Outorgas de Uso da Água",
    description: "Regularização de poços artesianos e captação de água junto ao DAEE. Obtenha sua Outorga de Direito de Uso.",
    content: `
      <h3>O que é a Outorga de Uso da Água?</h3>
      <p class="mb-4">A água é um bem de domínio público. Para utilizar recursos hídricos (seja de rios, represas ou poços artesianos), é obrigatório obter uma autorização do poder público, chamada Outorga.</p>

      <h3>Quando a Outorga é necessária?</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li>Perfuração e uso de <strong>Poços Artesianos</strong> ou Tubulares Profundos.</li>
        <li>Captação direta em rios, lagos ou nascentes para irrigação ou processo industrial.</li>
        <li>Lançamento de efluentes tratados em corpos d'água.</li>
        <li>Obras hidráulicas como canalizações, barragens e travessias.</li>
      </ul>

      <p class="mt-4"><strong>Atuação no DAEE:</strong> Realizamos os estudos hidrológicos, testes de bombeamento e toda a tramitação junto ao Departamento de Águas e Energia Elétrica (DAEE) em São Paulo.</p>
    `,
  },
  {
    slug: "industriais",
    title: "Serviços Industriais",
    description: "Gestão ambiental para indústrias. Tratamento de efluentes, controle de emissões atmosféricas e resíduos (CADRI).",
    content: `
      <h3>Conformidade Ambiental na Indústria</h3>
      <p class="mb-4">O setor industrial enfrenta exigências ambientais complexas. A Kato Ambiental oferece suporte técnico para otimizar processos, reduzir desperdícios e garantir que sua fábrica opere dentro da lei.</p>

      <h3>Soluções Técnicas Especializadas:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>Efluentes Líquidos:</strong> Projetos e operação de Estações de Tratamento de Efluentes (ETE). Monitoramento de parâmetros de lançamento.</li>
        <li><strong>Emissões Atmosféricas:</strong> Inventário de fontes emissoras, monitoramento de qualidade do ar e adequação de filtros.</li>
        <li><strong>CADRI (Resíduos):</strong> Obtenção do certificado para movimentação e destinação de resíduos industriais perigosos ou não-inertes.</li>
        <li><strong>Ruído:</strong> Laudos de medição de pressão sonora para garantir o conforto da comunidade vizinha (NBR 10.151).</li>
      </ul>
    `,
  },
  {
    slug: "regularizacoes",
    title: "Regularizações Ambientais",
    description: "Resolução de passivos ambientais, CAR, PRA, TAC e defesa de multas. Regularização de imóveis rurais e urbanos.",
    content: `
      <h3>Regularização de Passivos</h3>
      <p class="mb-4">Se sua empresa ou propriedade rural foi autuada, embargada ou possui pendências antigas, nós temos a solução técnica e jurídica.</p>

      <h3>Principais Serviços de Regularização:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>CAR (Cadastro Ambiental Rural):</strong> Inscrição obrigatória e retificação de áreas de reserva legal e APP.</li>
        <li><strong>PRA (Programa de Regularização Ambiental):</strong> Projetos de recuperação de áreas degradadas (PRAD) e compensação ambiental.</li>
        <li><strong>Defesas Administrativas:</strong> Elaboração de defesas técnicas robustas contra autos de infração e multas da Polícia Ambiental ou CETESB.</li>
        <li><strong>TAC (Termo de Ajustamento de Conduta):</strong> Negociação e acompanhamento de acordos junto ao Ministério Público.</li>
      </ul>
    `,
  },
  {
    slug: "residuos-compostagem",
    title: "Resíduos e Compostagem",
    description: "PGRS (Plano de Gerenciamento de Resíduos Sólidos), MTR e projetos de Compostagem. Transforme resíduos em recursos.",
    content: `
      <h3>Gestão Inteligente de Resíduos</h3>
      <p class="mb-4">A Política Nacional de Resíduos Sólidos exige que grandes geradores (indústrias, comércios, saúde, construção civil) tenham um plano de gestão eficiente. Nós transformamos essa obrigação em oportunidade.</p>

      <h3>Nossas Soluções:</h3>
      <ul class="list-disc pl-5 mt-4 space-y-2">
        <li><strong>PGRS:</strong> Elaboração e implementação do Plano de Gerenciamento de Resíduos Sólidos, focando em redução, reuso e reciclagem.</li>
        <li><strong>Compostagem:</strong> Projetos técnicos para implementação de pátios de compostagem, transformando resíduos orgânicos em adubo rico e reduzindo custos com aterro sanitário.</li>
        <li><strong>MTR (Manifesto de Transporte de Resíduos):</strong> Gestão completa do sistema SIGOR/SINIR para garantir a rastreabilidade legal dos seus resíduos.</li>
        <li><strong>Logística Reversa:</strong> Estruturação de sistemas para o retorno de embalagens e produtos pós-consumo.</li>
      </ul>
    `,
  }
];