import { QuickReferenceItem } from '../types';

export const QUICK_REFERENCE_ITEMS: QuickReferenceItem[] = [
  {
    id: 'mostrar-info',
    action: 'Mostrar informação no console',
    targetJavaFeature: 'System.out.println()',
    description: 'Exibe dados, textos ou valores formatados na saída padrão do terminal.',
    category: 'I/O',
    code: `System.out.println("Olá, Mundo Java!");\nSystem.out.printf("Nome: %s, Pontos: %d%n", "Marco", 100);`
  },
  {
    id: 'receber-info',
    action: 'Receber informação do usuário',
    targetJavaFeature: 'Scanner',
    description: 'Lê dados primitivos e textos fornecidos pelo usuário via console (System.in).',
    category: 'I/O',
    code: `Scanner scanner = new Scanner(System.in);\nSystem.out.print("Digite seu nome: ");\nString nome = scanner.nextLine();`
  },
  {
    id: 'ordenar-array',
    action: 'Ordenar um array em ordem crescente',
    targetJavaFeature: 'Arrays.sort()',
    description: 'Ordena os elementos de um array primitivo ou de objetos usando Dual-Pivot Quicksort / TimSort.',
    category: 'Estruturas',
    code: `int[] numeros = { 5, 2, 8, 1, 9 };\nArrays.sort(numeros);\n// Resultado: [1, 2, 5, 8, 9]`
  },
  {
    id: 'buscar-array',
    action: 'Buscar elemento em array com alta performance',
    targetJavaFeature: 'Arrays.binarySearch()',
    description: 'Busca binária em tempo O(log n). Atenção: o array precisa estar previamente ordenado!',
    category: 'Estruturas',
    code: `int[] ordenados = { 10, 20, 30, 40, 50 };\nint indice = Arrays.binarySearch(ordenados, 30); // Retorna 2`
  },
  {
    id: 'guardar-lista',
    action: 'Guardar lista com tamanho dinâmico',
    targetJavaFeature: 'ArrayList',
    description: 'Estrutura que redimensiona dinamicamente e preserva a ordem de inserção indexada.',
    category: 'Coleções',
    code: `List<String> lista = new ArrayList<>();\nlista.add("Elemento A");\nlista.add("Elemento B");\nString primeiro = lista.get(0);`
  },
  {
    id: 'chave-valor',
    action: 'Associar chave → valor (dicionário / mapa)',
    targetJavaFeature: 'HashMap',
    description: 'Relaciona uma chave exclusiva a um valor associado com acesso em tempo constante O(1).',
    category: 'Coleções',
    code: `Map<String, Double> notas = new HashMap<>();\nnotas.put("Matemática", 9.5);\nnotas.put("História", 8.0);\ndouble nota = notas.get("Matemática");`
  },
  {
    id: 'criar-objeto',
    action: 'Criar e instanciar um objeto na memória',
    targetJavaFeature: 'new',
    description: 'Aloca espaço na memória Heap para a classe e invoca o método construtor correspondente.',
    category: 'POO',
    code: `Carro meuCarro = new Carro("Opala", 1985);`,
    relatedPooId: 'classes'
  },
  {
    id: 'proteger-atributo',
    action: 'Proteger atributo contra acesso externo',
    targetJavaFeature: 'private',
    description: 'Implementa o encapsulamento, forçando acessos a passarem por métodos com validação.',
    category: 'POO',
    code: `public class Conta {\n    private double saldo;\n    public double getSaldo() { return saldo; }\n}`,
    relatedPooId: 'encapsulamento'
  },
  {
    id: 'herdar-classe',
    action: 'Herdar características e métodos de outra classe',
    targetJavaFeature: 'extends',
    description: 'Estabelece uma relação hierárquica de herança entre uma superclasse e uma subclasse.',
    category: 'POO',
    code: `public class Gerente extends Funcionario {\n    private double bonus;\n}`,
    relatedPooId: 'praticas'
  },
  {
    id: 'definir-contrato',
    action: 'Definir contrato que classes devem implementar',
    targetJavaFeature: 'interface',
    description: 'Especifica um conjunto de métodos que qualquer classe que implementar deve fornecer.',
    category: 'POO',
    code: `public interface Autenticavel {\n    boolean autenticar(String senha);\n}`,
    relatedPooId: 'praticas'
  },
  {
    id: 'tratar-erros',
    action: 'Interceptar e tratar erros sem quebrar o app',
    targetJavaFeature: 'try / catch',
    description: 'Captura exceções em tempo de execução e executa ações de recuperação ou diagnóstico.',
    category: 'Controle & Erros',
    code: `try {\n    int valor = Integer.parseInt(texto);\n} catch (NumberFormatException e) {\n    System.err.println("Formato numérico inválido!");\n}`
  },
  {
    id: 'processar-colecoes',
    action: 'Processar e filtrar coleções de forma declarativa',
    targetJavaFeature: 'Stream API',
    description: 'Permite operações funcionais como filter, map, sorted e collect em pipelines limpos.',
    category: 'Avançado',
    code: `List<Integer> pares = numeros.stream()\n    .filter(n -> n % 2 == 0)\n    .map(n -> n * 2)\n    .toList();`
  }
];
