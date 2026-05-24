const words = [
    {
        word: "CPU",
        clue: "Componente principal de um computador, encarregado de executar instruções, realizar cálculos matemáticos e processar os dados dos programas."
    },

    {
        word: "ULA",
        clue: "Dentro da Unidade Central de Processamento (CPU), qual componente específico é responsável por realizar todas as operações aritméticas e lógicas?"
    },

    {
        word: "REGISTRADORES",
        clue: "Qual o termo utilizado para as pequenas e rápidas memórias internas, localizadas diretamente na CPU, que são usadas para armazenar dados temporários durante o processamento?"
    },

    {
        word: "RAM",
        clue: "Qual é a memória temporária onde os dados são armazenados enquanto o computador está ligado?"
    },

    {
        word: "ROM",
        clue: "Qual é a memória permanente que guarda dados essenciais para o funcionamento do sistema, como o BIOS?"
    },

    {
        word: "EPROM",
        clue: "Qual é a memória que mantém seus dados mesmo sem energia, mas permite ser apagada e reprogramada?"
    },

    {
        word: "FLASH",
        clue: "Qual é a memória em que o apagamento e a gravação são feitos por pulsos elétricos, dispensando a luz UV?"
    },

    {
        word: "DMA",
        clue: "Qual recurso permite que dispositivos periféricos acessem a memória RAM diretamente, sem a necessidade de intervenção constante do processador, otimizando o desempenho do sistema?"
    },

    {
        word: "CHIP SELECT",
        clue: "Em um sistema com barramentos compartilhados, como é denominada a linha de controle utilizada para habilitar ou desabilitar a comunicação com um periférico específico, evitando conflitos?"
    },

    {
        word: "ADDRESS BUS",
        clue: "Como é chamado o barramento responsável por transportar os endereços de memória?"
    },

    {
        word: "DATA BUS",
        clue: "Como é chamado o barramento responsável por transportar os dados entre os componentes do computador?"
    },

    {
        word: "CORE I5",
        clue: "Como é chamado o processador Intel de desempenho intermediário bastante utilizado em computadores?"
    },

    {
        word: "CORE I7",
        clue: "Como é chamado o processador Intel de alto desempenho utilizado em computadores?"
    },

    {
        word: "DUAL CORE",
        clue: "Como é chamado o processador que possui dois núcleos de processamento?"
    },

    {
        word: "QUAD CORE",
        clue: "Como é chamado o processador que possui quatro núcleos de processamento?"
    }
];

function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}

function getWord() {
    const index = Math.floor(Math.random() * words.length);
    return words[index];
}