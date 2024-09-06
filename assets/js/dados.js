const livrosAsimov = [
    {
        titulo: 'Fundação',
        sinopse: 'Em um futuro distante, o Império Galáctico, após milênios de domínio, caminha para sua ruína. O psicólogo Hari Seldon, utilizando a psico-história, prevê essa queda e cria a Fundação, uma organização destinada a preservar o conhecimento humano e encurtar a era de barbárie que se seguirá. A obra de Asimov, inspirada em Gibbon, explora a dinâmica do poder, a natureza humana e o impacto da ciência em um cenário galáctico, oferecendo uma visão complexa e fascinante do futuro da humanidade.',
        anoDeLancamento: 1951,
        linkAmazon: 'https://www.amazon.com.br/Funda%C3%A7%C3%A3o-1-Isaac-Asimov/dp/8576574837'
    },
    {
        titulo: 'Fundação e Império',
        sinopse: 'A Fundação, erguida para preservar o conhecimento humano em um futuro sombrio, enfrenta uma nova ameaça: o Mulo. Essa entidade enigmática, com poderes mentais incompreensíveis, manipula as massas e desafia as previsões de Hari Seldon, o arquiteto da Fundação. Asimov, mestre da ficção científica, explora aqui as limitações da ciência em prever o imprevisível, mostrando que o destino da humanidade pode ser moldado por forças além da compreensão humana, como a própria natureza do indivíduo.',
        anoDeLancamento: 1952,
        linkAmazon: 'https://www.amazon.com.br/Funda%C3%A7%C3%A3o-e-Imp%C3%A9rio-2-Isaac-Asimov/dp/8576574845'
    },
    {
        titulo: 'Segunda Fundação',
        sinopse: 'A busca pela Segunda Fundação, a lendária instituição criada por Hari Seldon para guiar a humanidade, se intensifica. Escondida nos confins da galáxia, ela guarda os segredos da psico-história e o destino da civilização. Quando a jovem Arcádia Darell embarca em uma jornada para desvendar os mistérios da Segunda Fundação, ela se torna um peça fundamental no jogo cósmico. Em um final surpreendente, Asimov encerra a trilogia original, revelando os segredos mais profundos da Fundação e o verdadeiro propósito da psico-história.',
        anoDeLancamento: 1953,
        linkAmazon: 'https://www.amazon.com.br/Segunda-Funda%C3%A7%C3%A3o-3-Isaac-Asimov/dp/8576574853'
    },
    {
        titulo: 'Eu, Robô',
        sinopse: 'Publicado em 1950, "Eu, Robô" de Isaac Asimov é um marco da ficção científica. A obra, que inspirou o filme de Will Smith, é composta por nove contos que exploram a evolução dos robôs e introduzem as famosas Três Leis da Robótica. Através de uma série de relatos, a Dra. Susan Calvin, uma especialista em robótica, guia o leitor por um universo onde a relação entre humanos e máquinas é cada vez mais complexa, levantando questões éticas e filosóficas sobre a natureza da inteligência artificial.',
        anoDeLancamento: 1950,
        linkAmazon: 'https://www.amazon.com.br/Eu-Robo-Isaac-Asimov/dp/8576572001'
    },
    {
        titulo: 'O Homem Bicentenário',
        sinopse: 'Em "O Homem Bicentenário", de Isaac Asimov, acompanhamos a jornada de Andrew Martin, um robô que, com o passar dos anos, desenvolve uma consciência e um desejo cada vez mais intenso de ser humano. Sua busca por uma identidade própria o leva a desafiar as leis da robótica e a buscar a aceitação da sociedade. Através de cirurgias e modificações em seu corpo, Andrew busca se aproximar cada vez mais da humanidade, em uma jornada emocionante e repleta de reflexões sobre o que significa ser humano. A obra, um clássico da ficção científica, explora temas como identidade, livre-arbítrio e o significado da vida, e continua a encantar leitores de todas as idades.',
        anoDeLancamento: 1976,
        linkAmazon: 'https://www.amazon.com.br/homem-bicenten%C3%A1rio-Isaac-Asimov/dp/8576575868'
    },
    {
        titulo: 'O Fim da Eternidade',
        sinopse: 'Em um futuro onde a humanidade domina o tempo, um agente especial é enviado para uma missão perigosa: alterar o passado para garantir o futuro da civilização. Manipulando eventos históricos, ele se vê preso em um dilema ético e existencial, questionando o livre-arbítrio e o papel da humanidade no universo.',
        anoDeLancamento: 1955,
        linkAmazon: 'https://www.amazon.com.br/Fim-Eternidade-Isaac-Asimov/dp/8576574225'
    },
    {
        titulo: 'As Cavernas de Aço',
        sinopse: 'Em um futuro onde a humanidade vive em cidades gigantescas e os robôs são comuns, o detetive Elijah Baley é chamado para investigar um crime aparentemente impossível: o assassinato de um robótico. Ao lado do robô R. Daneel Olivaw, Baley precisa desvendar o mistério e lidar com o preconceito humano contra os robôs, enquanto explora a complexidade da relação entre homem e máquina.',
        anoDeLancamento: 1954,
        linkAmazon: 'https://www.amazon.com.br/As-Cavernas-A%C3%A7o-Isaac-Asimov/dp/8576574535'
    },
    {
        titulo: 'O Sol Desvelado',
        sinopse: 'Continuação de "As Cavernas de Aço", o detetive Elijah Baley e o robô R. Daneel Olivaw são enviados para um planeta habitado apenas por humanos, onde um novo crime envolvendo um robô os aguarda. Em um ambiente hostil e preconceituoso, Baley e Daneel precisam não apenas solucionar o caso, mas também lidar com as diferenças culturais e os conflitos entre humanos e robôs.',
        anoDeLancamento: 1956,
        linkAmazon: 'https://www.amazon.com.br/Sol-Desvelado-2-Isaac-Asimov/dp/8576574594'
    },
    {
        titulo: 'Os Robôs da Alvorada',
        sinopse: 'Nesta obra, Asimov explora a origem da robótica e as primeiras leis que regem o comportamento dos robôs. A história se passa em um passado distante, onde um cientista cria o primeiro robô positônico e se depara com as complexidades de criar uma inteligência artificial. O livro explora questões filosóficas sobre a natureza da consciência e o lugar dos robôs na sociedade.',
        anoDeLancamento: 1983,
        linkAmazon: 'https://www.amazon.com.br/Rob%C3%B4s-Alvorada-im%C3%A3-Isaac-Asimov/dp/8576574608'
    },
    {
        titulo: 'Robôs e Império',
        sinopse: 'Em um futuro distante, o Império Galáctico está em declínio e os robôs, criados para servir à humanidade, começam a questionar seu papel. Elijah Baley e R. Daneel Olivaw, agora centenários, são chamados para mais uma missão, desta vez para impedir uma guerra entre humanos e robôs e garantir a sobrevivência da civilização. O livro conclui a trilogia dos robôs, explorando temas como a evolução da inteligência artificial e o futuro da humanidade.',
        anoDeLancamento: 1985,
        linkAmazon: 'https://www.amazon.com.br/Rob%C3%B4s-Imp%C3%A9rio-4-Isaac-Asimov/dp/8576573199' 
    }
];