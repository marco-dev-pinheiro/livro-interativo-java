export interface PooSection {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  color: string;
  summary: string;
  subsections: {
    id: string;
    title: string;
    content: string[];
    code?: string;
    table?: {
      caption?: string;
      headers: string[];
      rows: string[][];
    };
    callout?: {
      label: string;
      text: string;
    };
    diagram?: string;
  }[];
}

export const POO_MINDMAP_DATA = [
  {
    id: 'classes',
    title: 'Classes e objetos',
    color: '#A855F7',
    topics: [
      'Classe: o molde',
      'Atributos: o estado',
      'Métodos: as ações',
      'Construtor: new e this',
      'Objeto: a instância',
      'Uma responsabilidade'
    ]
  },
  {
    id: 'encapsulamento',
    title: 'Encapsulamento',
    color: '#06B6D4',
    topics: [
      'Atributos private',
      'Controle de acesso',
      'Getters: consulta',
      'Setters: com validação',
      'Benefícios'
    ]
  },
  {
    id: 'relacionamentos',
    title: 'Relacionamentos',
    color: '#10B981',
    topics: [
      'Associação',
      'Composição',
      'Agregação',
      'Colaboração',
      'Cardinalidade'
    ]
  },
  {
    id: 'organizacao',
    title: 'Organização',
    color: '#F59E0B',
    topics: [
      'Um arquivo por classe',
      'Pacotes',
      'Coesão',
      'Acoplamento'
    ]
  },
  {
    id: 'praticas',
    title: 'Boas práticas',
    color: '#F43F5E',
    topics: [
      'Convenções de nomes',
      'Erros comuns',
      'Os 4 pilares da POO',
      'Próximos passos'
    ]
  }
];

export const POO_SECTIONS: PooSection[] = [
  {
    id: 'classes',
    title: 'Classes, objetos e responsabilidades',
    badge: '🧱 FUNDAÇÃO',
    subtitle: 'Modelar o mundo real em entidades de software com estado e comportamento coesos',
    color: '#A855F7',
    summary: 'A base da Orientação a Objetos reside na distinção entre a planta conceitual (a classe) e as instâncias concretas alocadas na memória (os objetos).',
    subsections: [
      {
        id: 'classe-def',
        title: 'Classe: O Molde',
        content: [
          'Uma classe é o molde, gabarito ou planta arquitetural para criar objetos.',
          'Ela define o que o objeto tem (seus atributos/dados) e o que o objeto faz (seus métodos/ações).',
          'A planta de um carro não anda nem consome gasolina; o carro de verdade que sai da fábrica, sim!'
        ]
      },
      {
        id: 'atributos-def',
        title: 'Atributos: O Estado',
        content: [
          'São características ou campos que guardam os dados e o estado momentâneo de cada objeto na memória.',
          'Cada objeto terá seus próprios valores armazenados nesses atributos.'
        ],
        code: `public class Carro {
    String modelo = "Opala";
    int ano = 1985;
    String motor = "4.1";
}`
      },
      {
        id: 'metodos-def',
        title: 'Métodos: Os Comportamentos',
        content: [
          'Métodos são as ações que o objeto executa para operar sobre seus próprios dados ou interagir com o sistema.',
          'Exemplos: acelerar() (aumenta velocidade), frear() (reduz velocidade), abastecer() (adiciona combustível).',
          'Sobrecarga (Overloading) ocorre quando criamos métodos com o mesmo nome na classe, mas com listas ou tipos de parâmetros diferentes:'
        ],
        code: `public void abastecer() {
    this.combustivel = 100.0; // tanque cheio
}

public void abastecer(double litros) {
    this.combustivel += litros; // abastecimento parcial
}`
      },
      {
        id: 'construtor-def',
        title: 'Construtor: Inicialização Confiável',
        content: [
          'O construtor é um método especial invocado no momento do nascimento do objeto através da palavra-chave new.',
          'Regras: tem exatamente o mesmo nome da classe e não possui tipo de retorno (nem mesmo void).',
          'A palavra-chave this faz referência ao próprio objeto em construção ou execução.',
          'Se você não escrever nenhum construtor explícito, o compilador do Java cria automaticamente um construtor padrão (vazio sem argumentos).'
        ],
        code: `public Carro(String modelo, int ano) {
    this.modelo = modelo;
    this.ano = ano;
}

// Criando a instância concreta
Carro opala = new Carro("Opala", 1985);`
      },
      {
        id: 'objeto-def',
        title: 'Objeto (Instância Concreta)',
        content: [
          'Elemento concreto alocado na memória Heap a partir da classe.',
          'Uma mesma classe pode gerar centenas de objetos distintos, cada um com seu próprio ciclo de vida e estado: opala, fusca, chevette.'
        ]
      },
      {
        id: 'responsabilidades-def',
        title: 'Responsabilidades de uma Classe',
        content: [
          'O que a classe SABE: Dados e contexto sob sua custódia. Exemplo: Cliente conhece seu próprio nome, e-mail e telefone.',
          'O que a classe FAZ: Regras de negócio e operações legítimas. Exemplo: Cliente atualiza endereço ou autoriza pagamento.'
        ],
        callout: {
          label: 'Regra de Ouro',
          text: 'Uma classe, uma responsabilidade. Evite a "God Class" (classe faz-tudo) que acumula centenas de responsabilidades desconexas.'
        }
      }
    ]
  },
  {
    id: 'encapsulamento',
    title: 'Encapsulamento e controle de estado',
    badge: '🔒 PROTEÇÃO',
    subtitle: 'Blindar os dados internos e expor apenas operações seguras e validadas',
    color: '#06B6D4',
    summary: 'O encapsulamento impede acessos diretos e indevidos aos atributos de um objeto, garantindo que o objeto sempre permaneça em um estado válido e consistente.',
    subsections: [
      {
        id: 'atributos-privados',
        title: 'Atributos Privados (private)',
        content: [
          'O modificador private restringe o acesso direto ao atributo estritamente à própria classe onde ele foi declarado.',
          'Isso impede que código externo atribua valores absurdos (ex: um saldo negativo indevido ou uma idade de -50).'
        ],
        code: `public class Conta {
    private double saldo;   // atributo blindado

    public double getSaldo() {
        return saldo;
    }
}`
      },
      {
        id: 'modificadores-acesso',
        title: 'Modificadores de Acesso no Java',
        content: [
          'Java disponibiliza 4 níveis de visibilidade estruturados do mais aberto ao mais fechado:'
        ],
        table: {
          caption: 'Tabela comparativa de visibilidade',
          headers: ['Modificador', 'Quem enxerga'],
          rows: [
            ['public', 'Qualquer lugar de qualquer pacote do projeto'],
            ['protected', 'Mesmo pacote e subclasses (mesmo em outros pacotes)'],
            ['default (package-private)', 'Apenas classes no mesmo pacote (sem palavra-chave)'],
            ['private', 'Exclusivo da própria classe declarante']
          ]
        }
      },
      {
        id: 'getters-setters',
        title: 'Getters e Setters com Validação',
        content: [
          'Getters (Consulta): Retornam o valor do atributo sem expor a referência interna direta. Convenção: getNome(), isAtivo() para booleanos.',
          'Setters (Alteração): Modificam o valor aplicando regras de validação preventiva.',
          'Dica de ouro em design de software: Prefira criar métodos expressivos com nomes do domínio do negócio (como depositar(), sacar(), fecharConta()) do que setters automáticos "cegos".'
        ],
        code: `public void depositar(double valor) {
    if (valor > 0) {
        this.saldo += valor;
    } else {
        throw new IllegalArgumentException("O valor do depósito deve ser positivo.");
    }
}`
      },
      {
        id: 'beneficios-encap',
        title: 'Benefícios do Encapsulamento',
        content: [
          '1. Integridade Absoluta: Os dados do objeto nunca ficam corrompidos.',
          '2. Facilidade de Manutenção: Você pode mudar a implementação interna sem quebrar nenhum código cliente.',
          '3. Centralização: Regras e validações ficam concentradas em um único lugar.'
        ]
      }
    ]
  },
  {
    id: 'relacionamentos',
    title: 'Relacionamentos entre classes',
    badge: '🔗 CONEXÕES',
    subtitle: 'Como objetos colaboram, delegam tarefas e formam sistemas complexos',
    color: '#10B981',
    summary: 'Nenhum objeto vive isolado. Os relacionamentos expressam como classes cooperam, desde referências soltas até dependências existenciais fortes.',
    subsections: [
      {
        id: 'tipos-relacionamento',
        title: 'Associação vs Composição vs Agregação',
        content: [
          'Associação: Relação do tipo "usa um". Um objeto faz uso de outro, mas ambos possuem ciclos de vida independentes. Exemplo: Pedido → Cliente. Se o pedido for cancelado ou apagado, o cliente continua existindo no cadastro!',
          'Composição: Relação do tipo "tem um / parte-todo forte". A parte depende existencialmente do todo! Exemplo: Pedido ◆── ItemPedido. Ao apagar o Pedido, seus itens deixam de existir. Teste mental: "A parte faz sentido existindo sozinha sem o todo?". Se não, é Composição!',
          'Agregação: Relação parte-todo fraca. A parte sobrevive sem o todo. Exemplo: Um Time tem Jogadores; se o time acabar, o jogador continua existindo profissionalmente.'
        ]
      },
      {
        id: 'visao-geral-dominio',
        title: 'Visão Geral do Domínio & Cardinalidade',
        content: [
          'Observe como os objetos conversam e dividem tarefas: ItemPedido referencia um Produto do catálogo. O Pedido não gerencia produtos diretamente: ele administra sua coleção de itens e a percorre para calcular o valor total.'
        ],
        diagram: `Cliente    ──(associação 1..N)──► Pedido
Pedido     ◆──(composição 1..N)── ItemPedido
ItemPedido ──(referência N..1)──► Produto`,
        table: {
          headers: ['De', 'Relação / Cardinalidade', 'Para', 'Explicação'],
          rows: [
            ['Cliente', '1 ── N', 'Pedido', 'Um cliente pode fazer vários pedidos'],
            ['Pedido', '1 ── N', 'ItemPedido', 'Um pedido contém vários itens (composição)'],
            ['ItemPedido', 'N ── 1', 'Produto', 'Cada item referencia um produto do catálogo']
          ]
        }
      },
      {
        id: 'codigo-relacionamento',
        title: 'Implementação em Código Java',
        content: [
          'Veja como a colaboração entre Pedido e ItemPedido calcula o subtotal e o total delegando responsabilidades:'
        ],
        code: `import java.util.List;
import java.util.ArrayList;

public class Pedido {
    private Cliente cliente;               // Associação (Cliente vive independente)
    private List<ItemPedido> itens;        // Composição (Itens pertencem a este pedido)

    public Pedido(Cliente cliente) {
        this.cliente = cliente;
        this.itens = new ArrayList<>();
    }

    public void adicionarItem(Produto produto, int quantidade) {
        ItemPedido item = new ItemPedido(produto, quantidade);
        this.itens.add(item);
    }

    public double calcularTotal() {
        double total = 0;
        for (ItemPedido item : itens) {
            total += item.getSubtotal(); // delega o cálculo do subtotal para o item
        }
        return total;
    }
}`
      }
    ]
  },
  {
    id: 'organizacao',
    title: 'Organização em arquivos e pacotes',
    badge: '🗂️ ARQUITETURA',
    subtitle: 'Estruturação de pacotes, coesão e acoplamento em projetos reais',
    color: '#F59E0B',
    summary: 'A organização física de código em pastas reflete a arquitetura lógica do sistema, permitindo que times colaborem com clareza.',
    subsections: [
      {
        id: 'um-arquivo-classe',
        title: 'Um Arquivo por Classe',
        content: [
          'Em Java, cada classe pública deve residir em seu próprio arquivo com o nome exatamente idêntico ao da classe acompanhado da extensão .java.',
          'Exemplos: Cliente.java, Pedido.java, ItemPedido.java, Produto.java.'
        ]
      },
      {
        id: 'pacotes-arquitetura',
        title: 'Pacotes (Packages)',
        content: [
          'Pacotes agrupam classes logicamente por responsabilidade arquitetural no domínio:',
          '• models / entities: Representam dados e regras essenciais de negócio.',
          '• services: Orquestram regras de negócios, validações e fluxos de processos.',
          '• repositories: Responsáveis pela persistência e consulta em banco de dados.'
        ],
        code: `src/
├── models/
│   ├── Cliente.java
│   ├── Pedido.java
│   └── ItemPedido.java
├── repositories/
│   └── PedidoRepository.java
└── services/
    └── PedidoService.java`
      },
      {
        id: 'coesao-acoplamento',
        title: 'Alta Coesão e Baixo Acoplamento',
        content: [
          'Alta Coesão: Cada classe tem um propósito focado e bem definido ("faz uma coisa muito bem feita").',
          'Baixo Acoplamento: As classes dependem o mínimo possível dos detalhes internos umas das outras, comunicando-se através de contratos claros e interfaces.'
        ]
      }
    ]
  },
  {
    id: 'praticas',
    title: 'Boas práticas e próximos passos',
    badge: '🌟 EXCELÊNCIA',
    subtitle: 'Padrões de mercado, convenções da comunidade e os 4 pilares fundamentais',
    color: '#F43F5E',
    summary: 'Boas práticas diferenciam código amador de código sustentável e pronto para produção corporativa.',
    subsections: [
      {
        id: 'convencoes-nomes',
        title: 'Convenções e Boas Práticas',
        content: [
          '• Atributos sempre com visibilidade private.',
          '• Nomes de Classes e Interfaces sempre em PascalCase: ItemPedido, ContaCorrente.',
          '• Nomes de Métodos e Atributos sempre em camelCase: getSaldo(), calcularTotal().',
          '• Mantenha classes pequenas e focadas em uma única razão para mudar (Single Responsibility Principle).',
          '• Valide dados preventivamente dentro da própria classe antes de persistir estado.'
        ]
      },
      {
        id: 'erros-comuns',
        title: 'Erros Comuns de Iniciantes para Evitar',
        content: [
          '❌ Deixar atributos como public ou com visibilidade aberta.',
          '❌ Gerar getters e setters automaticamente para absolutamente tudo sem critério de negócio.',
          '❌ Criar "God Classes" gigantescas com milhares de linhas que fazem todo o trabalho.',
          '❌ Confundir a Classe (o molde conceitual) com o Objeto (a instância física alocada).'
        ]
      },
      {
        id: 'quatro-pilares',
        title: 'Os 4 Pilares da Programação Orientada a Objetos',
        content: [
          'Estes quatro pilares formam a base indispensável de qualquer engenheiro de software Java:'
        ],
        table: {
          headers: ['Pilar', 'Ideia Central', 'Situação Neste Guia'],
          rows: [
            ['Encapsulamento', 'Proteger e blindar o estado interno do objeto', 'Abordado em detalhes no capítulo 2'],
            ['Abstração', 'Modelar somente as características relevantes para o domínio', 'Abordado em detalhes no capítulo 1'],
            ['Herança', 'Reaproveitar código através da palavra extends', 'Próximo passo na trilha de estudos'],
            ['Polimorfismo', 'Mesma mensagem disparada gera comportamentos diferentes', 'Próximo passo na trilha de estudos']
          ]
        },
        callout: {
          label: 'Próximos Passos',
          text: 'Após dominar estes conceitos, avance para Interfaces, Classes Abstratas, Design Patterns (GoF) e os princípios SOLID!'
        }
      }
    ]
  }
];
