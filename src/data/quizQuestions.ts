import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Qual é a diferença fundamental entre uma Classe e um Objeto em Java?',
    options: [
      'A Classe é alocada na memória Heap e o Objeto fica no arquivo .java compilado.',
      'A Classe é o molde/especificação que define atributos e métodos, enquanto o Objeto é a instância concreta criada na memória com new.',
      'Uma Classe só pode ter atributos e um Objeto só pode ter métodos.',
      'Não há diferença real, ambos são termos sinônimos no Java.'
    ],
    correctIndex: 1,
    explanation: 'A classe é a planta ou modelo conceitual (o que tem e o que faz). O objeto é a instância física concreta com seu próprio estado e ciclo de vida alocado na memória.',
    category: 'Classes e Objetos'
  },
  {
    id: 'q2',
    question: 'Em relação aos modificadores de acesso, qual é o nível de visibilidade do modificador private?',
    options: [
      'Visível apenas para classes do mesmo pacote.',
      'Visível para o mesmo pacote e subclasses em qualquer pacote.',
      'Visível estritamente dentro da própria classe onde foi declarado.',
      'Visível para qualquer classe que utilize o comando import.'
    ],
    correctIndex: 2,
    explanation: 'O modificador private é o nível mais restrito do Java, garantindo que o atributo ou método seja acessível exclusivamente dentro da própria classe declarante.',
    category: 'Encapsulamento'
  },
  {
    id: 'q3',
    question: 'Considere a relação entre Pedido e ItemPedido. Se o Pedido for excluído e com isso todos os itens deixarem de existir, essa relação é classificada como:',
    options: [
      'Associação fraca',
      'Composição',
      'Agregação',
      'Polimorfismo'
    ],
    correctIndex: 1,
    explanation: 'Composição é uma relação do tipo todo-parte forte, onde as partes (itens) dependem existencialmente do todo (pedido). Se o pedido for excluído, os itens perdem o sentido e deixam de existir.',
    category: 'Relacionamentos'
  },
  {
    id: 'q4',
    question: 'Por que o uso do operador "==" para comparar duas variáveis do tipo String pode causar bugs sutis?',
    options: [
      'Porque "==" compara referências de memória (endereços), e não o valor textual real; para comparar texto deve-se usar .equals().',
      'Porque Strings são primitivos e "==" só funciona em classes.',
      'Porque o operador "==" inverte o resultado booleano.',
      'Porque a JVM não permite compilar o operador "==" com Strings.'
    ],
    correctIndex: 0,
    explanation: 'Em tipos por referência como String, "==" verifica se ambas as variáveis apontam para o mesmo endereço de memória. Para comparar o conteúdo textual, use sempre .equals() ou .equalsIgnoreCase().',
    category: 'Strings e Memória'
  },
  {
    id: 'q5',
    question: 'O que caracteriza a "Sobrecarga de Métodos" (Overloading) em Java?',
    options: [
      'Substituir um método da superclasse utilizando a anotação @Override.',
      'Ter múltiplos métodos com o mesmo nome na mesma classe, porém com parâmetros ou tipos diferentes.',
      'Executar um método em segundo plano com threads.',
      'Forçar um método a aceitar qualquer tipo de dado usando Object.'
    ],
    correctIndex: 1,
    explanation: 'Sobrecarga (Overloading) permite que uma classe possua vários métodos com o mesmo identificador, diferenciando-se pelas assinaturas (quantidade, tipo ou ordem dos parâmetros).',
    category: 'Métodos'
  },
  {
    id: 'q6',
    question: 'Qual a principal razão para priorizar "Alta Coesão e Baixo Acoplamento" no design de software Java?',
    options: [
      'Permitir que classes façam tudo em um só arquivo sem necessidade de pacotes.',
      'Garantir que cada classe tenha uma única responsabilidade clara e dependa o mínimo possível dos detalhes de outras classes.',
      'Aumentar o consumo de CPU para otimizar tempo de compilação.',
      'Dispensar o uso de interfaces e construtores.'
    ],
    correctIndex: 1,
    explanation: 'Alta coesão assegura que uma classe seja focada em fazer uma única tarefa com excelência. Baixo acoplamento reduz o impacto de mudanças em cascata quando o código é atualizado.',
    category: 'Arquitetura e Boas Práticas'
  }
];
