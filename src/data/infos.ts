export interface InfoData {
    slug: string;
    title: string;
    description: string;
    content: string; // HTML
    images?: string[];
    tags?: string[]; // Adicionei a propriedade tags conforme sugerido anteriormente
}

export const infosData: InfoData[] = [
    {
        slug: "alvara-bombeiro-valor",
        title: "Alvará de Bombeiro Valor",
        description: "Entenda como é calculado o valor do Alvará de Bombeiro, os documentos necessários e a importância para a regularização do seu imóvel.",
        images: [
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80", // Placa de Saída de Emergência (Contexto de sinalização obrigatória)
            "https://images.unsplash.com/photo-1533552026131-771146d6eb10?auto=format&fit=crop&w=800&q=80", // Extintores e Equipamentos (Contexto de adequação física)
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80"  // Engenheiro/Vistoria Técnica (Contexto de laudo e aprovação)
        ],
        content: `
            <h2>O Que é o Alvará de Bombeiro e seu Valor?</h2>
            <p>O <strong>alvará de bombeiro</strong> (também conhecido como AVCB ou CLCB) é um documento emitido pelo Corpo de Bombeiros que atesta que um estabelecimento comercial, industrial ou de serviços possui as condições de segurança contra incêndio e pânico exigidas pela legislação. Ele é obrigatório para todas as empresas que possuem um local físico e deve ser renovado periodicamente.</p>
            <p>O <strong>valor</strong> do processo varia dependendo da área construída, do grau de risco da atividade e das adequações necessárias (projeto técnico, instalação de hidrantes, extintores, etc.).</p>

            <h2>Como Funciona o Processo de Obtenção?</h2>
            <p>O primeiro passo para obter o alvará e entender o investimento necessário é realizar uma análise técnica do estabelecimento:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Vistoria Inicial:</strong> Análise das instalações e equipamentos (extintores, hidrantes, saídas de emergência).</li>
                <li><strong>Documentação:</strong> Projeto de prevenção e combate a incêndio (PPCI) e ARTs.</li>
                <li><strong>Aprovação:</strong> Após a vistoria, o Corpo de Bombeiros emite o AVCB ou CLCB se tudo estiver conforme.</li>
            </ul>

            <h3>Vantagens da Regularização</h3>
            <p>Além de evitar multas pesadas e interdições, possuir o alvará transmite segurança para clientes e colaboradores. Um imóvel regularizado também obtém descontos significativos no seguro empresarial, compensando o <strong>valor</strong> investido na adequação.</p>

            <h2>Aplicações e Obrigatoriedade</h2>
            <p>O documento é exigido para:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Comércios e Lojas;</li>
                <li>Indústrias e Galpões;</li>
                <li>Hospitais e Escolas;</li>
                <li>Hotéis e Shoppings;</li>
                <li>Igrejas e Locais de Reunião de Público;</li>
                <li>Condomínios Residenciais Multifamiliares.</li>
            </ul>
        `,
        tags: ["AVCB", "CLCB", "Segurança", "Regularização", "Bombeiros"]
    },
    {
        slug: "alvara-corpo-bombeiros-sp",
        title: "Alvará Corpo de Bombeiros SP",
        description: "Saiba tudo sobre o Alvará do Corpo de Bombeiros em SP. Processo de obtenção, vistoria e como a Kato Ambiental agiliza sua regularização.",
        images: [
            "https://images.unsplash.com/photo-1589578527966-817631b6b587?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1628135899933-2882a9db26c1?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>O Que é o Alvará Corpo de Bombeiros SP?</h2>
            <p>O <strong>Alvará do Corpo de Bombeiros em SP</strong> (conhecido tecnicamente como AVCB ou CLCB) é a certificação oficial emitida pelo Corpo de Bombeiros da Polícia Militar do Estado de São Paulo. Ele atesta que a edificação possui todas as condições de segurança contra incêndio e pânico previstas na legislação estadual vigente.</p>
            <p>Este documento é pré-requisito obrigatório para a emissão de outros licenciamentos, como o Alvará de Funcionamento da Prefeitura e a Licença da Vigilância Sanitária.</p>

            <h2>Como Funciona o Processo de Obtenção?</h2>
            <p>Em São Paulo, o processo segue etapas rigorosas que variam conforme o risco e tamanho do imóvel (Projeto Técnico ou Projeto Técnico Simplificado):</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>1. Solicitação Via Via Fácil:</strong> Cadastro inicial no sistema do Corpo de Bombeiros.</li>
                <li><strong>2. Elaboração de Projeto:</strong> Desenvolvimento das plantas e dimensionamento dos sistemas de segurança (hidrantes, alarmes, iluminação) por engenheiro especializado.</li>
                <li><strong>3. Adequação do Imóvel:</strong> Instalação física dos equipamentos.</li>
                <li><strong>4. Vistoria Oficial:</strong> Fiscalização do Corpo de Bombeiros no local.</li>
                <li><strong>5. Emissão do Alvará:</strong> Liberação do documento após aprovação (validade geralmente de 1 a 5 anos).</li>
            </ul>

            <h3>Por que manter o Alvará em dia?</h3>
            <p>A principal vantagem é a <strong>segurança da vida humana</strong> e a proteção do patrimônio. Além disso, empresas com o alvará vencido estão sujeitas a multas, interdição do local e, em caso de sinistro (incêndio), a seguradora pode se recusar a pagar a indenização.</p>

            <h2>Como a Kato Ambiental pode ajudar?</h2>
            <p>A Kato Ambiental simplifica a burocracia para você. Nossa equipe de engenheiros realiza:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Pré-vistoria técnica para identificar não-conformidades;</li>
                <li>Elaboração e aprovação do Projeto Técnico de Segurança Contra Incêndio;</li>
                <li>Emissão de ARTs (Anotação de Responsabilidade Técnica);</li>
                <li>Treinamento de Brigada de Incêndio;</li>
                <li>Gestão completa para renovação do AVCB ou CLCB.</li>
            </ul>
        `,
        tags: ["São Paulo", "AVCB", "Bombeiros", "Regularização", "Segurança"]
    },
    {
        slug: "assessoria-ambiental-posto-combustivel-sp",
        title: "Assessoria Ambiental para Posto de Combustível em SP",
        description: "Serviço especializado para regularização de postos em São Paulo. Monitoramento, licenciamento na CETESB, gestão de resíduos e prevenção de passivos ambientais.",
        images: [
            "https://images.unsplash.com/photo-1527018263374-5d6a3629b5f4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1621905252507-b35492cc7471?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>O Que é a Assessoria Ambiental para Postos em SP?</h2>
            <p>A <strong>assessoria ambiental para posto de combustível em SP</strong> é um serviço estratégico que visa auxiliar proprietários na gestão completa dos aspectos ambientais e legais do negócio. Em São Paulo, onde a fiscalização da CETESB é rigorosa, esse suporte é vital para manter o empreendimento operante.</p>
            <p>O trabalho envolve desde o monitoramento da qualidade do solo e da água subterrânea até o gerenciamento de resíduos perigosos e a renovação de licenças operacionais.</p>

            <h2>Como Funciona o Serviço?</h2>
            <p>A equipe da Kato Ambiental realiza um diagnóstico técnico do local (Due Diligence Ambiental), identificando possíveis passivos e avaliando a conformidade atual. O escopo inclui:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Diagnóstico Ambiental:</strong> Levantamento de riscos e conformidade legal;</li>
                <li><strong>Licenciamento:</strong> Gestão de Licença Prévia, Instalação e Operação junto à CETESB;</li>
                <li><strong>Monitoramento:</strong> Relatórios de qualidade de águas subterrâneas e efluentes;</li>
                <li><strong>Resíduos:</strong> Gestão de CADRI e MTR para descarte correto de óleo e areia.</li>
            </ul>

            <h3>Vantagens da Regularização</h3>
            <p>Investir em uma assessoria especializada traz benefícios imediatos:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Redução de Riscos:</strong> Prevenção eficaz contra multas, embargos e crimes ambientais;</li>
                <li><strong>Conformidade Legal:</strong> Tranquilidade durante fiscalizações da ANP e órgãos ambientais;</li>
                <li><strong>Redução de Custos:</strong> Gestão eficiente de recursos e resíduos evita desperdícios;</li>
                <li><strong>Reputação:</strong> Melhora a imagem da empresa perante a sociedade e investidores.</li>
            </ul>

            <h2>Recomendações e Boas Práticas</h2>
            <p>Para garantir a eficiência da gestão ambiental no seu posto, recomendamos:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Realizar avaliações periódicas do sistema de armazenamento subterrâneo de combustíveis (SASC);</li>
                <li>Manter treinamentos de NR-20 e emergências ambientais atualizados para a equipe;</li>
                <li>Ter um controle rígido do armazenamento e descarte de resíduos (embalagens, estopas, filtros);</li>
                <li>Investir em tecnologias limpas e sistemas de monitoramento eletrônico.</li>
            </ul>

            <p class="mt-6">Se você possui um posto de combustível em São Paulo, não corra riscos. A Kato Ambiental oferece a expertise técnica necessária para blindar sua operação.</p>
        `,
        tags: ["Posto de Combustível", "São Paulo", "Licenciamento", "CETESB", "Resíduos"]
    },
    {
        slug: "assessoria-ambiental-posto-combustivel",
        title: "Assessoria Ambiental para Posto de Combustível: Segurança e Conformidade",
        description: "Serviço completo para postos de combustíveis: licenciamento ambiental, monitoramento de passivos, gestão de resíduos e regularização junto à ANP e órgãos estaduais.",
        images: [
            "https://images.unsplash.com/photo-1626860073539-77053e16441b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>Por que a Assessoria Ambiental é vital para Postos?</h2>
            <p>Postos de combustíveis são classificados como empreendimentos com <strong>alto potencial poluidor</strong> devido ao armazenamento de substâncias inflamáveis e tóxicas no subsolo (SASC - Sistema de Armazenamento Subterrâneo de Combustíveis). Por isso, a fiscalização é rigorosa.</p>
            <p>A <strong>assessoria ambiental para postos</strong> não serve apenas para tirar licenças, mas para garantir que o solo e o lençol freático não estejam contaminados, evitando passivos ambientais que podem custar milhões em remediação e multas.</p>

            <h2>O que está incluso no serviço?</h2>
            <p>A Kato Ambiental oferece um escopo completo para revendedores de combustíveis, cobrindo todas as etapas da vida útil do empreendimento:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Licenciamento Ambiental:</strong> Obtenção e renovação das Licenças Prévia (LP), de Instalação (LI) e de Operação (LO).</li>
                <li><strong>Monitoramento Ambiental:</strong> Coleta e análise periódica de água subterrânea e solo para detectar vazamentos invisíveis.</li>
                <li><strong>Gestão de Resíduos:</strong> Emissão de CADRI para descarte correto de borras de óleo, estopas, filtros e areia da caixa separadora (CSAO).</li>
                <li><strong>Regularização ANP e IBAMA:</strong> Cadastro Técnico Federal (CTF) e cumprimento das normas da Agência Nacional do Petróleo.</li>
                <li><strong>Investigação de Passivos:</strong> Investigação Confirmatória e Detalhada em caso de suspeita de contaminação.</li>
            </ul>

            <h3>Riscos da Falta de Assessoria</h3>
            <p>Operar sem o devido suporte técnico expõe o proprietário a riscos severos:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Multas Pesadas:</strong> Órgãos como a CETESB aplicam multas diárias por descumprimento de normas.</li>
                <li><strong>Embargo da Atividade:</strong> Interdição das bombas ou fechamento total do posto.</li>
                <li><strong>Responsabilidade Criminal:</strong> Crimes ambientais podem levar à responsabilização penal dos sócios.</li>
                <li><strong>Desvalorização do Imóvel:</strong> Um terreno contaminado perde drasticamente seu valor de mercado.</li>
            </ul>

            <h2>Diferencial Kato Ambiental</h2>
            <p>Nossa equipe entende a dinâmica de um posto de combustível. Atuamos de forma preventiva, alertando sobre vencimentos de licenças e realizando auditorias para que você foque nas vendas, enquanto cuidamos da conformidade técnica e legal do seu negócio.</p>
        `,
        tags: ["Posto de Combustível", "ANP", "Licenciamento", "Monitoramento", "Resíduos"]
    },
    {
        slug: "assessoria-ambiental-preco",
        title: "Assessoria Ambiental: Preço e Valor do Investimento",
        description: "Entenda como é definido o preço de uma assessoria ambiental, o custo-benefício de contratar a Kato e como esse investimento previne multas que custam muito mais caro.",
        images: [
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>Como é calculado o preço da Assessoria Ambiental?</h2>
            <p>Uma dúvida comum de gestores é sobre o <strong>preço da assessoria ambiental</strong>. É importante entender que este valor não é fixo, pois varia de acordo com a complexidade do seu negócio. O investimento depende de fatores como:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Porte da Empresa:</strong> Micro, pequena, média ou grande empresa.</li>
                <li><strong>Potencial Poluidor:</strong> O grau de risco ambiental da atividade (baixo, médio ou alto).</li>
                <li><strong>Localização:</strong> Exigências específicas de leis municipais e estaduais (CETESB/SP).</li>
                <li><strong>Escopo:</strong> Se é uma consultoria pontual (para uma licença específica) ou contínua (mensal).</li>
            </ul>

            <h3>Custo x Benefício: Por que é um investimento?</h3>
            <p>Muitas empresas encaram a gestão ambiental como um custo, mas ela é, na verdade, uma proteção ao patrimônio. O <strong>preço</strong> de uma assessoria é infinitamente menor do que o custo de:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Multas ambientais (que podem chegar a milhões de reais);</li>
                <li>Interdição das atividades (lucros cessantes);</li>
                <li>Danos à imagem da marca perante a sociedade.</li>
            </ul>

            <h2>Diferenciais da Kato Ambiental</h2>
            <p>Ao contratar a Kato, você não está pagando apenas por documentos, mas por uma inteligência técnica que visa a eficiência do seu negócio. Nossos clientes obtêm vantagens como:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Redução de Custos Operacionais:</strong> Otimização no uso de água e energia e redução de desperdícios.</li>
                <li><strong>Segurança Jurídica:</strong> Garantia de que sua empresa está 100% dentro da lei.</li>
                <li><strong>Competitividade:</strong> Empresas regularizadas têm acesso a melhores linhas de crédito e podem participar de grandes licitações.</li>
                <li><strong>Certificações:</strong> Suporte para obtenção de selos verdes que valorizam o produto final.</li>
            </ul>

            <p class="mt-6">Não corra riscos desnecessários. Solicite um orçamento personalizado para a sua realidade e descubra que a regularização ambiental cabe no seu bolso.</p>
        `,
        tags: ["Consultoria", "Orçamento", "Gestão Ambiental", "Jurídico"]
    },
    {
        slug: "assessoria-ambiental-valor",
        title: "Assessoria Ambiental: Entenda o Valor e a Importância",
        description: "Descubra o valor real de uma assessoria ambiental para sua empresa: conformidade legal, redução de custos e sustentabilidade na prática.",
        images: [
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>O Que é Assessoria Ambiental e Qual seu Valor?</h2>
            <p>A <strong>assessoria ambiental</strong> é um serviço especializado que vai muito além de apenas "obter papéis". É uma parceria estratégica onde consultores técnicos (engenheiros ambientais, biólogos, geólogos) diagnosticam a realidade da sua empresa e propõem soluções para que ela opere dentro da lei, minimizando impactos e custos.</p>
            <p>O verdadeiro <strong>valor</strong> deste serviço está na segurança jurídica que ele proporciona: evitar multas milionárias, embargos de obra e danos irreversíveis à reputação da marca.</p>

            <h2>Como Funciona na Prática?</h2>
            <p>O trabalho começa com um Diagnóstico Ambiental completo. A partir daí, atuamos em três frentes:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Preventiva:</strong> Identificação de riscos antes que se tornem problemas (vazamentos, descartes incorretos).</li>
                <li><strong>Corretiva:</strong> Regularização de passivos ambientais antigos e defesa em autos de infração.</li>
                <li><strong>Estratégica:</strong> Implementação de tecnologias limpas e eficiência energética para reduzir custos operacionais.</li>
            </ul>

            <h3>Vantagens Competitivas</h3>
            <p>Empresas que investem em assessoria ambiental séria colhem frutos imediatos:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Economia Real:</strong> Redução no consumo de água, energia e gastos com destinação de resíduos.</li>
                <li><strong>Acesso a Crédito:</strong> Bancos exigem conformidade ambiental para liberar financiamentos com taxas melhores.</li>
                <li><strong>Imagem de Marca:</strong> O consumidor moderno valoriza empresas sustentáveis (ESG).</li>
                <li><strong>Paz de Espírito:</strong> A certeza de não ser surpreendido por uma fiscalização surpresa.</li>
            </ul>

            <h2>Aplicações Setoriais</h2>
            <p>A Kato Ambiental atende diversos segmentos com soluções personalizadas:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Indústrias:</strong> Gestão de efluentes, emissões e resíduos (CADRI).</li>
                <li><strong>Construção Civil:</strong> Licenciamento de obras e GRCC (Gerenciamento de Resíduos da Construção Civil).</li>
                <li><strong>Comércio e Serviços:</strong> Regularização de atividades e PGRS (Plano de Gerenciamento de Resíduos Sólidos).</li>
                <li><strong>Postos de Combustíveis:</strong> Monitoramento de passivos e renovação de licenças de operação.</li>
            </ul>
        `,
        tags: ["Consultoria", "ESG", "Sustentabilidade", "Licenciamento"]
    },
    {
        slug: "assessoria-ambiental",
        title: "Assessoria Ambiental",
        description: "Garanta a conformidade legal e a sustentabilidade do seu negócio. Saiba como a assessoria ambiental reduz custos e valoriza sua marca.",
        images: [
            "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>O Que é Assessoria Ambiental?</h2>
            <p>A <strong>assessoria ambiental</strong> é um serviço técnico especializado que auxilia empresas, órgãos públicos e pessoas físicas a adequarem suas atividades às rigorosas leis ambientais brasileiras. O objetivo principal não é apenas evitar multas, mas criar estratégias para preservar recursos naturais e otimizar processos produtivos.</p>
            <p>Na Kato Ambiental, atuamos como o braço direito da sua empresa, garantindo que todas as obrigações legais sejam cumpridas com eficiência.</p>

            <h2>Como Funciona o Serviço?</h2>
            <p>O trabalho começa com um diagnóstico profundo da operação. Nossa equipe analisa:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Fluxos de produção e geração de resíduos;</li>
                <li>Consumo de água e eficiência energética;</li>
                <li>Existência de passivos ambientais (contaminações antigas);</li>
                <li>Status da documentação legal (licenças vencidas ou inexistentes).</li>
            </ul>
            <p>Com base nisso, elaboramos um <strong>Plano de Ação</strong> personalizado com medidas corretivas e preventivas.</p>

            <h3>Vantagens Estratégicas</h3>
            <p>Contratar uma assessoria ambiental vai muito além da burocracia. Os benefícios reais incluem:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Segurança Jurídica:</strong> Blindagem contra sanções legais, multas pesadas e embargos de obra;</li>
                <li><strong>Redução de Custos:</strong> Menor desperdício de matéria-prima e gestão inteligente de resíduos;</li>
                <li><strong>Reputação da Marca:</strong> O mercado e os consumidores valorizam empresas com responsabilidade socioambiental (ESG);</li>
                <li><strong>Foco no Core Business:</strong> Deixe a complexidade técnica conosco e foque no crescimento do seu negócio.</li>
            </ul>

            <h2>Quem Precisa Contratar?</h2>
            <p>A assessoria é vital e muitas vezes obrigatória para diversos setores:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Indústrias:</strong> De todos os portes e segmentos;</li>
                <li><strong>Construção Civil:</strong> Construtoras, incorporadoras e obras de infraestrutura;</li>
                <li><strong>Postos de Combustíveis:</strong> Devido ao alto potencial poluidor e normas da ANP;</li>
                <li><strong>Agronegócio:</strong> Fazendas, cooperativas e agroindústrias;</li>
                <li><strong>Setor de Serviços:</strong> Hospitais, transportadoras, oficinas mecânicas e condomínios.</li>
            </ul>

            <p class="mt-6">Não espere a fiscalização bater à porta. A <strong>Kato Ambiental</strong> possui a expertise necessária para transformar a gestão ambiental da sua empresa em um diferencial competitivo.</p>
        `,
        tags: ["Consultoria", "Sustentabilidade", "Licenciamento", "ESG"]
    },
    {
        slug: "autorizacao-corte-arvore",
        title: "Autorização para Corte de Árvore: Guia Completo",
        description: "Saiba quando e como solicitar a autorização para supressão de árvores. Evite crimes ambientais e garanta a regularidade da sua obra ou imóvel.",
        images: [
            "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581094794329-cd2a1fb4ffa9?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>O Que é a Autorização para Corte de Árvore?</h2>
            <p>A <strong>autorização para corte de árvore</strong> (ou supressão de vegetação) é o documento legal emitido por órgãos ambientais (como Secretarias de Meio Ambiente ou CETESB) que permite a remoção de indivíduos arbóreos em áreas urbanas ou rurais. Este procedimento é obrigatório para garantir a preservação ambiental e o ordenamento urbano.</p>
            <p><strong>Atenção:</strong> O corte não autorizado de árvores (especialmente nativas) configura <strong>crime ambiental</strong>, sujeito a multas pesadas e embargo de obras.</p>

            <h2>Quando é Necessária?</h2>
            <p>A autorização deve ser solicitada em diversas situações, tais como:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Obras e Construção Civil:</strong> Para limpeza de terreno antes de iniciar a construção.</li>
                <li><strong>Risco de Queda:</strong> Árvores comprometidas que ameaçam pessoas ou patrimônio.</li>
                <li><strong>Danos a Estruturas:</strong> Raízes afetando fundações, tubulações ou calçadas.</li>
                <li><strong>Árvores Isoladas:</strong> Exemplares nativos situados fora de maciços florestais.</li>
            </ul>

            <h2>Como Funciona o Processo de Solicitação?</h2>
            <p>O processo é técnico e exige a comprovação da necessidade do corte. As etapas geralmente incluem:</p>
            <ol class="list-decimal pl-5 mt-4 space-y-2">
                <li><strong>Laudo Técnico:</strong> Elaborado por um biólogo ou engenheiro (agrônomo/florestal), identificando a espécie, o estado fitossanitário e a justificativa para o corte.</li>
                <li><strong>Protocolo no Órgão Ambiental:</strong> Submissão do pedido à Prefeitura ou órgão estadual competente.</li>
                <li><strong>Compensação Ambiental:</strong> Proposta de plantio de novas mudas (geralmente na proporção de 10:1 ou 25:1, dependendo da legislação local) ou doação de mudas ao viveiro municipal.</li>
                <li><strong>Vistoria e Emissão:</strong> O órgão fiscaliza e emite a autorização ou o TCA (Termo de Compromisso Ambiental).</li>
            </ol>

            <h3>Como a Kato Ambiental pode ajudar?</h3>
            <p>Para agilizar a aprovação e evitar indeferimentos, a Kato Ambiental oferece:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Elaboração de Laudo de Caracterização de Vegetação;</li>
                <li>Inventário Florestal para grandes áreas;</li>
                <li>Projeto de Compensação Ambiental e Plantio;</li>
                <li>Gestão de todo o trâmite burocrático até a emissão da autorização.</li>
            </ul>

            <p class="mt-6">Não corra riscos. Antes de ligar a motosserra, fale com a Kato Ambiental e garanta que sua intervenção seja legal e sustentável.</p>
        `,
        tags: ["Vegetação", "Laudo Técnico", "Compensação Ambiental", "Regularização"]
    },
    {
        slug: "autorizacao-corte-arvores-sp",
        title: "Autorização para Corte de Árvores em SP: Regras e Procedimentos",
        description: "Entenda como obter a autorização para supressão ou poda de árvores na cidade e estado de São Paulo. Evite multas e garanta a compensação ambiental correta.",
        images: [
            "https://images.unsplash.com/photo-1574587625640-54c7d0d0498a?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1555541819-0c653066a7b7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
        ],
        content: `
            <h2>Como funciona o Corte de Árvores em São Paulo?</h2>
            <p>Em São Paulo (Capital e Estado), o corte de árvores é regido por leis rigorosas para proteger a cobertura vegetal. A <strong>autorização para corte de árvores</strong> é um processo administrativo obrigatório junto à Prefeitura (Subprefeituras ou Secretaria do Verde e do Meio Ambiente - SVMA) ou à CETESB, dependendo da localização e do tipo de vegetação.</p>
            <p>Realizar o corte sem essa permissão é considerado <strong>crime ambiental</strong>, passível de multas pesadas e obrigação de reparação de danos.</p>

            <h2>Quando é necessário solicitar?</h2>
            <p>A autorização é exigida tanto para áreas públicas quanto privadas (dentro do seu terreno) nas seguintes situações:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Obras e Edificações:</strong> Quando a vegetação interfere na implantação de um projeto aprovado;</li>
                <li><strong>Risco Iminente:</strong> Árvores com risco de queda, doenças ou pragas irreversíveis;</li>
                <li><strong>Danos ao Patrimônio:</strong> Raízes ou galhos causando danos comprovados a estruturas;</li>
                <li><strong>Espécies Invasoras:</strong> Remoção de espécies que prejudicam a flora nativa.</li>
            </ul>

            <h2>O Processo e o TCA (Termo de Compromisso Ambiental)</h2>
            <p>Para obter a licença, é necessário apresentar um <strong>Laudo Técnico</strong> elaborado por um engenheiro agrônomo, florestal ou biólogo. Se o corte for aprovado, o órgão ambiental geralmente exige uma <strong>Compensação Ambiental</strong>.</p>
            <p>Isso é formalizado através do <strong>TCA (Termo de Compromisso Ambiental)</strong>, onde o requerente se compromete a plantar um número determinado de mudas nativas para compensar as árvores removidas (geralmente numa proporção superior a 1:1).</p>

            <h3>Por que contratar a Kato Ambiental?</h3>
            <p>A burocracia em SP pode ser complexa. Nossa equipe cuida de tudo:</p>
            <ul class="list-disc pl-5 mt-4 space-y-2">
                <li>Vistoria técnica e elaboração do laudo fotográfico;</li>
                <li>Protocolo e acompanhamento do processo nas Subprefeituras ou CETESB;</li>
                <li>Cálculo e projeto de compensação ambiental;</li>
                <li>Execução do plantio compensatório, se necessário.</li>
            </ul>

            <p class="mt-6">Garanta a regularidade do seu imóvel ou empreendimento em São Paulo. Fale com a Kato Ambiental e resolva seu manejo de vegetação com segurança técnica e jurídica.</p>
        `,
        tags: ["Vegetação", "São Paulo", "CETESB", "Prefeitura SP", "Laudo Técnico"]
    },
];