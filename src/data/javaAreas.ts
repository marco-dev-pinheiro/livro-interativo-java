import { JavaArea } from '../types';

export const JAVA_AREAS: JavaArea[] = [
  {
    id: 'fundamentos',
    number: '01',
    title: 'Fundamentos',
    tagline: 'A base da sintaxe, tipos primitivos e entrada/saída',
    icon: 'Terminal',
    color: '#38BDF8', // Cyan / Sky
    summary: 'Compreensão essencial de como a JVM executa código, tipos de dados primitivos vs objetos, declaração de variáveis, constantes imutáveis com final e I/O padrão com Scanner e System.out.',
    topics: [
      { id: 'tipos-dados', name: 'Tipos de dados (int, double, boolean, char)' },
      { id: 'variaveis', name: 'Variáveis (declaração, atribuição e inferência var)' },
      { id: 'constantes', name: 'Constantes (final)' },
      { id: 'operadores', name: 'Operadores aritméticos, lógicos e ternário' },
      { id: 'entrada-dados', name: 'Entrada de dados (Scanner, BufferedReader)' },
      { id: 'saida-dados', name: 'Saída de dados (System.out.println, printf)' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Variáveis, Constantes e Scanner',
      description: 'Estrutura típica de um programa Java clássico recebendo dados e imprimindo resultado formatado.',
      code: `import java.util.Scanner;

public class FundamentosJava {
    public static void main(String[] args) {
        // Constante com final
        final double PI = 3.14159;

        // Tipos primitivos e inferência var (Java 10+)
        int idade = 28;
        double salario = 4500.50;
        var cidade = "São Paulo";

        // Entrada pelo terminal
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();

        // Saída de dados formatada
        System.out.printf("Olá %s! Idade: %d, Cidade: %s, Salário: R$ %.2f%n", 
                          nome, idade, cidade, salario);
        scanner.close();
    }
}`
    },
    keyTakeaway: 'Em Java, tudo é fortemente tipado. Tipos primitivos guardam valores diretamente na Stack, enquanto referências a objetos guardam endereços na Heap.'
  },
  {
    id: 'controle-fluxo',
    number: '02',
    title: 'Controle de Fluxo',
    tagline: 'Tomada de decisões e repetição condicional',
    icon: 'GitFork',
    color: '#06B6D4',
    summary: 'Comandos que direcionam a execução do programa com base em expressões booleanas e laços repetitivos controlados.',
    topics: [
      { id: 'if-else', name: 'if / else / else if' },
      { id: 'switch', name: 'switch (clássico e switch expressions com ->)' },
      { id: 'for', name: 'for (tradicional com contador e for-each iterável)' },
      { id: 'while', name: 'while (avaliação no início)' },
      { id: 'do-while', name: 'do while (garantia de pelo menos uma execução)' },
      { id: 'break-continue', name: 'break / continue (interrupção e salto)' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Switch Moderno e For-Each',
      description: 'Uso de switch expressions moderno e iteração elegante sobre coleções.',
      code: `public class ControleFluxo {
    public static void main(String[] args) {
        String diaSemana = "TERCA";

        // Switch Expression moderna (Java 14+)
        String tipoDia = switch (diaSemana) {
            case "SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA" -> "Dia útil";
            case "SABADO", "DOMINGO" -> "Final de semana";
            default -> "Dia inválido";
        };

        System.out.println(diaSemana + " é " + tipoDia);

        // Laço for-each
        int[] notas = { 8, 9, 7, 10 };
        for (int nota : notas) {
            if (nota < 7) continue; // pula abaixo da média
            System.out.println("Nota aprovada: " + nota);
        }
    }
}`
    },
    keyTakeaway: 'Prefira switch expressions com -> para evitar erros de esquecimento de break e produzir código limpo e conciso.'
  },
  {
    id: 'arrays',
    number: '03',
    title: 'Arrays',
    tagline: 'Estruturas de tamanho fixo e utilitários da classe java.util.Arrays',
    icon: 'Layers',
    color: '#3B82F6',
    summary: 'Vetores homogêneos de tamanho fixo em memória contígua. Acesso em tempo constante O(1) pelo índice e manipulação rápida com a classe utilitária Arrays.',
    topics: [
      { id: 'criacao-arrays', name: 'Criação e inicialização de arrays' },
      { id: 'indices-arrays', name: 'Índices baseados em zero e propriedade length' },
      { id: 'acesso-arrays', name: 'Acesso e modificação direta de elementos' },
      { id: 'arrays-tostring', name: 'Arrays.toString()', isMethod: true },
      { id: 'arrays-sort', name: 'Arrays.sort()', isMethod: true },
      { id: 'arrays-binarysearch', name: 'Arrays.binarySearch()', isMethod: true },
      { id: 'arrays-copyof', name: 'Arrays.copyOf()', isMethod: true },
      { id: 'arrays-fill', name: 'Arrays.fill()', isMethod: true }
    ],
    deepDiveCode: {
      title: 'Exemplo: Utilitários essenciais de java.util.Arrays',
      description: 'Como ordenar, preencher e buscar elementos em arrays.',
      code: `import java.util.Arrays;

public class ExemploArrays {
    public static void main(String[] args) {
        int[] numeros = { 42, 13, 89, 7, 25 };

        // 1. Imprimir array de forma legível
        System.out.println("Original: " + Arrays.toString(numeros));

        // 2. Ordenar o array
        Arrays.sort(numeros);
        System.out.println("Ordenado: " + Arrays.toString(numeros));

        // 3. Busca binária (exige array previamente ordenado)
        int index = Arrays.binarySearch(numeros, 25);
        System.out.println("Posição do 25: " + index);

        // 4. Copiar e redimensionar
        int[] expandido = Arrays.copyOf(numeros, 7);
        System.out.println("Cópia expandida: " + Arrays.toString(expandido));
    }
}`
    },
    keyTakeaway: 'Arrays têm tamanho imutável após a criação. Se você precisa de flexibilidade de tamanho dinâmico, utilize ArrayList na camada de Coleções.'
  },
  {
    id: 'string',
    number: '04',
    title: 'String',
    tagline: 'Manipulação de textos e métodos fundamentais',
    icon: 'Type',
    color: '#818CF8',
    summary: 'Objetos String em Java são imutáveis e armazenados no String Constant Pool para otimização de memória. Cada modificação gera uma nova instância.',
    topics: [
      { id: 'str-length', name: 'length() - Retorna quantidade de caracteres', isMethod: true },
      { id: 'str-charat', name: 'charAt(int index) - Caractere no índice', isMethod: true },
      { id: 'str-equals', name: 'equals() e equalsIgnoreCase() - Comparação por conteúdo', isMethod: true },
      { id: 'str-contains', name: 'contains(CharSequence s) - Verificação de ocorrência', isMethod: true },
      { id: 'str-substring', name: 'substring(inicio, fim) - Extração de recorte', isMethod: true },
      { id: 'str-replace', name: 'replace(alvo, substituto) - Troca de trechos', isMethod: true }
    ],
    deepDiveCode: {
      title: 'Exemplo: Imutabilidade e Métodos Chave de String',
      description: 'Comparação correta de Strings com .equals() e manipulações comuns.',
      code: `public class ExemploString {
    public static void main(String[] args) {
        String texto = "  Aprender Java é Fantástico!  ";

        // Métodos de limpeza e inspeção
        String limpo = texto.trim();
        System.out.println("Tamanho: " + limpo.length()); // 27
        System.out.println("Primeira letra: " + limpo.charAt(0));

        // Comparação de valor (NUNCA use == para comparar conteúdo de String!)
        String s1 = new String("Java");
        String s2 = "Java";
        System.out.println("s1.equals(s2): " + s1.equals(s2)); // true

        // Busca e substituição
        if (limpo.contains("Java")) {
            String novaFrase = limpo.replace("Fantástico", "Poderoso");
            System.out.println("Resultado: " + novaFrase);
        }
    }
}`
    },
    keyTakeaway: 'NUNCA use "==" para comparar texto em Java! O operador "==" compara endereços de memória, enquanto .equals() compara o conteúdo textual.'
  },
  {
    id: 'metodos',
    number: '05',
    title: 'Métodos',
    tagline: 'Modularização de ações, passagem de parâmetros e escopo',
    icon: 'Cpu',
    color: '#10B981',
    summary: 'Blocos de instruções reutilizáveis que executam ações, manipulam dados e retornam valores. Métodos definem o comportamento dos objetos.',
    topics: [
      { id: 'parametros', name: 'Parâmetros (por valor em primitivos e por referência de endereço em objetos)' },
      { id: 'retorno', name: 'Tipo de Retorno (void, primitivos ou tipos de classes)' },
      { id: 'escopo', name: 'Escopo de variáveis locais e tempo de vida' },
      { id: 'palavra-return', name: 'A palavra-chave return e encerramento prematuro' },
      { id: 'sobrecarga', name: 'Sobrecarga (Overloading: mesmo nome, assinaturas diferentes)' },
      { id: 'modificador-static', name: 'O modificador static (membro da classe vs instância)' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Métodos de Instância vs Métodos Static e Sobrecarga',
      description: 'Como estruturar métodos com parâmetros, retorno e sobrecarga.',
      code: `public class CalculadoraServico {

    // Método estático (pertence à classe, não precisa de new)
    public static double somar(double a, double b) {
        return a + b;
    }

    // Sobrecarga: mesmo nome, 3 parâmetros
    public static double somar(double a, double b, double c) {
        return a + b + c;
    }

    // Método de instância (depende do estado de um objeto)
    private double memoria = 0;

    public void adicionarNaMemoria(double valor) {
        if (valor <= 0) return; // guarda rápida
        this.memoria += valor;
    }

    public double getMemoria() {
        return this.memoria;
    }
}`
    },
    keyTakeaway: 'Em métodos, cada responsabilidade deve ser pontual. Métodos pequenos e coesos facilitam testes de unidade e reutilização.',
    relatedPooSectionId: 'classes'
  },
  {
    id: 'colecoes',
    number: '06',
    title: 'Coleções',
    tagline: 'O Java Collections Framework: List, Set, Map e Queue',
    icon: 'Database',
    color: '#F59E0B',
    summary: 'Estruturas de dados dinâmicas da biblioteca padrão. Compreender quando usar List (ordenada por índice), Set (sem duplicatas) ou Map (dicionário chave-valor) é vital.',
    topics: [
      { id: 'col-list', name: 'List: Interface para sequências ordenadas com acesso indexado' },
      { id: 'col-arraylist', name: 'ArrayList: Redimensionamento automático baseado em array' },
      { id: 'col-set', name: 'Set: Interface que não aceita elementos duplicados' },
      { id: 'col-hashset', name: 'HashSet: Performance O(1) usando hashCode e equals' },
      { id: 'col-map', name: 'Map: Estrutura associativa de pares chave → valor' },
      { id: 'col-hashmap', name: 'HashMap: Implementação de Map mais utilizada no mercado' },
      { id: 'col-queue', name: 'Queue: Fila com política FIFO (First In, First Out)' }
    ],
    deepDiveCode: {
      title: 'Exemplo: ArrayList e HashMap em Ação',
      description: 'Manipulação de listas dinâmicas e mapas associativos.',
      code: `import java.util.*;

public class ExemploColecoes {
    public static void main(String[] args) {
        // 1. Lista dinâmica (ArrayList)
        List<String> linguagens = new ArrayList<>();
        linguagens.add("Java");
        linguagens.add("TypeScript");
        linguagens.add("Python");
        System.out.println("Lista: " + linguagens);

        // 2. Conjunto sem duplicatas (HashSet)
        Set<Integer> codigos = new HashSet<>();
        codigos.add(101);
        codigos.add(102);
        codigos.add(101); // Ignorado! Não permite duplicados
        System.out.println("Total de códigos únicos: " + codigos.size()); // 2

        // 3. Mapa Chave-Valor (HashMap)
        Map<String, Double> precos = new HashMap<>();
        precos.put("Notebook", 4500.0);
        precos.put("Mouse", 120.0);
        System.out.println("Preço Mouse: R$ " + precos.get("Mouse"));
    }
}`
    },
    keyTakeaway: 'Sempre declare a variável com o tipo da Interface (ex: List<String> lista = new ArrayList<>()) para garantir baixo acoplamento.',
    relatedPooSectionId: 'relacionamentos'
  },
  {
    id: 'poo',
    number: '07',
    title: 'Programação Orientada a Objetos',
    tagline: 'O coração do desenvolvimento Java: classes, objetos e os 4 pilares',
    icon: 'Boxes',
    color: '#A855F7', // Purple
    summary: 'Paradigma fundamental onde problemas do mundo real são modelados em classes que encapsulam estado e comportamento. Abrange os 4 pilares: Abstração, Encapsulamento, Herança e Polimorfismo.',
    topics: [
      { id: 'poo-classe', name: 'Classe: O molde que define atributos e métodos' },
      { id: 'poo-objeto', name: 'Objeto: Instância concreta criada com new' },
      { id: 'poo-construtor', name: 'Construtor: Método especial de inicialização e this' },
      { id: 'poo-encapsulamento', name: 'Encapsulamento: Modificador private e integridade' },
      { id: 'poo-heranca', name: 'Herança: Reutilização de código através de extends' },
      { id: 'poo-polimorfismo', name: 'Polimorfismo: Mesma mensagem, comportamentos distintos' },
      { id: 'poo-abstracao', name: 'Abstração: Focar no essencial e omitir detalhes' },
      { id: 'poo-interface', name: 'Interface: Contratos formais de comportamento' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Objeto com Encapsulamento e Regra de Negócio',
      description: 'Classe ContaBancaria protegendo seu estado interno e disponibilizando métodos com regras.',
      code: `public class ContaBancaria {
    private String titular;
    private double saldo;

    // Construtor
    public ContaBancaria(String titular, double saldoInicial) {
        this.titular = titular;
        if (saldoInicial >= 0) {
            this.saldo = saldoInicial;
        }
    }

    // Regra de negócio em vez de setter ingênuo
    public void depositar(double valor) {
        if (valor <= 0) {
            throw new IllegalArgumentException("Valor deve ser positivo!");
        }
        this.saldo += valor;
    }

    public boolean sacar(double valor) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
            return true;
        }
        return false;
    }

    public double getSaldo() {
        return this.saldo;
    }
}`
    },
    keyTakeaway: 'Consulte o nosso Livro Completo de POO na aba dedicada para explorar diagramas, mapa mental e relacionamentos.',
    relatedPooSectionId: 'classes'
  },
  {
    id: 'excecoes',
    number: '08',
    title: 'Exceções',
    tagline: 'Tratamento robusto de erros e controle de fluxo anômalo',
    icon: 'AlertTriangle',
    color: '#F43F5E', // Rose
    summary: 'Mecanismo da linguagem para interceptar situações anômalas em tempo de execução sem derrubar a aplicação. Diferenciação entre Checked Exceptions e Unchecked (RuntimeException).',
    topics: [
      { id: 'exc-try', name: 'try: Bloco protegido onde o código arriscado é executado' },
      { id: 'exc-catch', name: 'catch: Captura e tratamento específico de falhas' },
      { id: 'exc-finally', name: 'finally: Bloco sempre executado (fechamento de recursos)' },
      { id: 'exc-throw', name: 'throw: Disparo manual de uma exceção' },
      { id: 'exc-throws', name: 'throws: Declaração de lançamento na assinatura do método' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Try-Catch-Finally e Try-with-resources',
      description: 'Captura de exceções específicas e gerenciamento automático de recursos.',
      code: `public class TratamentoExcecoes {
    public static double dividir(int numerador, int denominador) {
        if (denominador == 0) {
            // Disparando explicitamente
            throw new ArithmeticException("Impossível dividir por zero!");
        }
        return (double) numerador / denominador;
    }

    public static void main(String[] args) {
        try {
            double res = dividir(10, 0);
            System.out.println("Resultado: " + res);
        } catch (ArithmeticException ex) {
            System.err.println("Erro capturado: " + ex.getMessage());
        } finally {
            System.out.println("Operação finalizada (bloco de limpeza).");
        }
    }
}`
    },
    keyTakeaway: 'Sempre capture exceções específicas (como IOException ou NumberFormatException) em vez do genérico Exception.'
  },
  {
    id: 'arquivos',
    number: '09',
    title: 'Arquivos',
    tagline: 'A API moderna java.nio.file: Path, Files e I/O de disco',
    icon: 'FolderOpen',
    color: '#14B8A6', // Teal
    summary: 'A API NIO.2 introduzida no Java 7 revolucionou o manuseio de arquivos com as interfaces Path e a classe utilitária Files, substituindo a antiga classe java.io.File.',
    topics: [
      { id: 'arq-path', name: 'Path: Representação imutável de caminhos no sistema de arquivos' },
      { id: 'arq-files', name: 'Files: Métodos estáticos de alta performance para ler e gravar' },
      { id: 'arq-leitura', name: 'Leitura: Files.readAllLines e Files.lines (com Stream)' },
      { id: 'arq-escrita', name: 'Escrita: Files.writeString e StandardOpenOption' },
      { id: 'arq-manipulacao', name: 'Manipulação: Criação, cópia, exclusão e verificação de arquivos' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Leitura e Escrita Moderna com java.nio.file.Files',
      description: 'Manipulação de arquivos texto em pouquíssimas linhas de código com Java moderno.',
      code: `import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class ArquivosNIO {
    public static void main(String[] args) {
        Path caminho = Path.of("estudos_java.txt");

        try {
            // 1. Escrever texto no arquivo
            Files.writeString(caminho, "1. Orientação a Objetos\\n2. Streams API\\n3. Spring Boot");
            System.out.println("Arquivo gravado em: " + caminho.toAbsolutePath());

            // 2. Ler todas as linhas
            List<String> linhas = Files.readAllLines(caminho);
            for (String linha : linhas) {
                System.out.println("Item: " + linha);
            }
        } catch (IOException e) {
            System.err.println("Falha de I/O: " + e.getMessage());
        }
    }
}`
    },
    keyTakeaway: 'Use Path.of() e Files.readString() / Files.writeString() para manipular arquivos de forma rápida e segura sem vazar descritores.'
  },
  {
    id: 'avancado',
    number: '10',
    title: 'Recursos Avançados',
    tagline: 'Generics, Lambdas, Stream API e Optional',
    icon: 'Sparkles',
    color: '#EC4899', // Pink
    summary: 'Ferramentas de programação funcional e tipagem genérica que tornam o código Java moderno expressivo, seguro contra NullPointerException e declarativo.',
    topics: [
      { id: 'adv-generics', name: 'Generics: Parametrização de tipos para segurança em tempo de compilação' },
      { id: 'adv-enum', name: 'Enum: Tipos seguros para conjuntos fixos de constantes com métodos' },
      { id: 'adv-lambda', name: 'Expressões Lambda: Funções anônimas para interfaces funcionais' },
      { id: 'adv-streams', name: 'Stream API: Processamento declarativo em pipeline (filter, map, collect)' },
      { id: 'adv-optional', name: 'Optional<T>: Container que elimina o temido NullPointerException' }
    ],
    deepDiveCode: {
      title: 'Exemplo: Pipeline de Streams e Expressões Lambda',
      description: 'Filtrando, transformando e coletando dados de forma funcional.',
      code: `import java.util.*;
import java.util.stream.Collectors;

public class JavaAvancado {
    public static void main(String[] args) {
        List<String> nomes = List.of("Ana", "Carlos", "Beatriz", "Daniel", "Amanda");

        // Pipeline com Stream: Filtrar nomes com 'A', colocar em maiúsculas e ordenar
        List<String> resultado = nomes.stream()
            .filter(n -> n.startsWith("A"))
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());

        System.out.println("Filtrados e ordenados: " + resultado);

        // Optional para proteção contra null
        Optional<String> primeiro = nomes.stream()
            .filter(n -> n.length() > 6)
            .findFirst();

        primeiro.ifPresentOrElse(
            n -> System.out.println("Encontrado: " + n),
            () -> System.out.println("Nenhum nome longo encontrado!")
        );
    }
}`
    },
    keyTakeaway: 'A Stream API não altera a coleção de origem; ela processa um fluxo de dados de forma declarativa e sob demanda.'
  }
];
