import { RoadmapStep } from '../types';

export const ROADMAP_STEPS: RoadmapStep[] = [
  // ==========================================
  // ETAPA 01 — SINTAXE (⚽ FUTEBOL)
  // ==========================================
  {
    number: '01',
    title: 'Sintaxe',
    subtitle: 'Aprenda como escrever Java no mundo real',
    description: 'Entenda como um programa Java nasce: tipos primitivos para guardar números e textos, variáveis como caixas etiquetadas na memória, constantes seguras com final, leitura com Scanner e saída elegante com printf.',
    theme: '⚽ Futebol',
    color: '#10B981', // Verde campo
    estimatedMinutes: 25,
    relatedAreaId: 'fundamentos',
    pedagogy: {
      whatIsIt: 'A sintaxe é o vocabulário e a gramática do Java. É a forma como dizemos ao computador para reservar espaço na memória (variáveis) e manipular valores (números, letras e textos).',
      whatIsItFor: 'Serve para guardar informações que o seu programa precisa usar durante a partida: placar, nome de jogador, peso, camisa e minutos jogados.',
      whenToUse: 'Em absolutamente todo programa Java! É o primeiro degrau: sem variáveis e tipos, você não tem onde guardar nenhum dado.',
      problemSolved: 'Evita bagunça e perda de dados. O Java é fortemente tipado: se uma variável guarda a camisa do jogador (int), você nunca vai colocar acidentalmente o nome de um time lá dentro sem o compilador te avisar.',
      analogy: 'Pense nas variáveis como os armários do vestiário de um estádio: cada armário tem uma etiqueta com o nome do jogador e um tamanho específico para guardar apenas a chuteira e o uniforme certos.'
    },
    skills: [
      'Declaração de variáveis primitivas (int para números inteiros, double para decimais, boolean para verdadeiro/falso)',
      'Constantes imutáveis usando a palavra-chave final (valores que nunca mudam, como tempo regulamentar = 90 min)',
      'Operadores aritméticos (+, -, *, /) e cálculo de médias',
      'Leitura de dados do teclado usando a classe Scanner',
      'Saída de dados profissional e formatada usando System.out.printf com máscaras (%s, %d, %.2f)'
    ],
    codeSample: `import java.util.Scanner;

public class FichaJogadorExemplo {
    public static void main(String[] args) {
        final int TEMPO_PARTIDA_MINUTOS = 90;
        String jogador = "Neymar Jr";
        int numeroCamisa = 10;
        double salarioMilhoes = 3.5;
        boolean titular = true;

        System.out.printf("Craque: %s | Camisa: #%d | Titular: %b%n", jogador, numeroCamisa, titular);
        System.out.printf("Tempo Regulamentar Oficial: %d minutos%n", TEMPO_PARTIDA_MINUTOS);
    }
}`,
    quickTraining: [
      {
        id: 'treino-01-1',
        title: 'Calculadora de Média de Gols por Partida',
        difficulty: 'Iniciante',
        story: 'O atacante do time jogou 15 partidas nesta temporada e marcou 12 gols. O técnico quer saber a média exata de gols por jogo.',
        task: 'Declare duas variáveis inteiras: partidas = 15 e gols = 12. Calcule a média usando casting para double ((double) gols / partidas) e exiba com printf usando duas casas decimais.',
        hint: 'Se você dividir dois inteiros sem casting (12 / 15), o Java trunca o resultado para 0! Use (double) gols / partidas.',
        solutionCode: `public class MediaGols {
    public static void main(String[] args) {
        int partidas = 15;
        int gols = 12;
        
        // Casting explícito para não truncar a divisão inteira
        double media = (double) gols / partidas;
        
        System.out.printf("Total de jogos: %d | Total de gols: %d%n", partidas, gols);
        System.out.printf("Média por partida: %.2f gols/jogo%n", media);
    }
}`
      },
      {
        id: 'treino-01-2',
        title: 'Verificador de IMC do Atleta',
        difficulty: 'Iniciante',
        story: 'O departamento de fisiologia do clube precisa calcular o Índice de Massa Corporal (IMC) do lateral-direito.',
        task: 'Receba peso (kg) e altura (m). Calcule o IMC pela fórmula: peso / (altura * altura). Exiba a ficha médica formatada.',
        hint: 'Use variáveis do tipo double para peso e altura. Exemplo: peso = 74.5 e altura = 1.78.',
        solutionCode: `public class ImcAtleta {
    public static void main(String[] args) {
        String atleta = "Cafu";
        double peso = 74.5;
        double altura = 1.78;
        
        double imc = peso / (altura * altura);
        
        System.out.printf("Atleta: %s%n", atleta);
        System.out.printf("Peso: %.1f kg | Altura: %.2f m%n", peso, altura);
        System.out.printf("Índice de Massa Corporal (IMC): %.2f%n", imc);
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-01-1',
        title: 'Calculadora de Média de Gols por Partida',
        difficulty: 'Iniciante',
        story: 'O atacante do time jogou 15 partidas nesta temporada e marcou 12 gols. O técnico quer saber a média exata de gols por jogo.',
        task: 'Declare duas variáveis inteiras: partidas = 15 e gols = 12. Calcule a média usando casting para double ((double) gols / partidas) e exiba com printf usando duas casas decimais.',
        hint: 'Se você dividir dois inteiros sem casting (12 / 15), o Java trunca o resultado para 0! Use (double) gols / partidas.',
        solutionCode: `public class MediaGols {
    public static void main(String[] args) {
        int partidas = 15;
        int gols = 12;
        double media = (double) gols / partidas;
        System.out.printf("Média por partida: %.2f gols/jogo%n", media);
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Monte seu Time"',
      story: 'O treinador precisa escalar 3 jogadores com nome, número da camisa e posição (Goleiro, Zagueiro, Atacante). Além disso, precisa calcular a idade média do setor defensivo.',
      task: 'Crie um programa que declare os 3 atletas, imprima uma escalação alinhada em colunas com printf e calcule a idade média entre eles.',
      hints: [
        'Use System.out.printf("%-15s %-10s #%-4d%n", nome, posicao, camisa) para alinhar colunas perfeitamente.',
        'Some as três idades e divida por 3.0 para obter a média real com casas decimais.'
      ],
      solutionCode: `public class MonteSeuTime {
    public static void main(String[] args) {
        String j1Nome = "Alisson", j1Pos = "Goleiro"; int j1Camisa = 1, j1Idade = 31;
        String j2Nome = "Marquinhos", j2Pos = "Zagueiro"; int j2Camisa = 4, j2Idade = 29;
        String j3Nome = "Vini Jr", j3Pos = "Atacante"; int j3Camisa = 7, j3Idade = 23;

        System.out.println("=============================================");
        System.out.println("          ESCALAÇÃO OFICIAL DO TIME          ");
        System.out.println("=============================================");
        System.out.printf("%-15s %-12s %-8s %s%n", "JOGADOR", "POSIÇÃO", "CAMISA", "IDADE");
        System.out.println("---------------------------------------------");
        System.out.printf("%-15s %-12s #%-7d %d anos%n", j1Nome, j1Pos, j1Camisa, j1Idade);
        System.out.printf("%-15s %-12s #%-7d %d anos%n", j2Nome, j2Pos, j2Camisa, j2Idade);
        System.out.printf("%-15s %-12s #%-7d %d anos%n", j3Nome, j3Pos, j3Camisa, j3Idade);
        System.out.println("=============================================");

        double idadeMedia = (j1Idade + j2Idade + j3Idade) / 3.0;
        System.out.printf("Idade média da equipe: %.1f anos%n", idadeMedia);
    }
}`
    },
    portfolioProject: {
      title: 'Ficha de Jogador & Placar de Partida',
      tagline: 'Sistema de Cadastro de Atleta e Súmula de Partida de Futebol em Java',
      story: 'Você foi contratado pela federação de futebol para criar o sistema de emissão da ficha oficial do atleta e da súmula da partida. O programa coleta dados completos do atleta (nome, clube, idade, camisa, peso, altura), calcula o IMC do atleta, e gera um painel de placar final da partida com tempo total em minutos e status de vitória ou empate.',
      githubReadmeSnippet: '### ⚽ Soccer Player Card & Match Scoreboard (Java Core)\nProjeto desenvolvido para consolidar os fundamentos da sintaxe Java, tipos primitivos, constantes imutáveis (`final`), operações matemáticas de média/IMC e formatação profissional de saída com `System.out.printf`.',
      requirements: [
        'Utilizar tipos primitivos apropriados (int, double, boolean)',
        'Definir constantes imutáveis com final (TEMPO_REGULAMENTAR = 90)',
        'Calcular métricas reais: IMC do jogador e média de gols',
        'Imprimir a ficha do atleta e a súmula da partida com moldura e alinhamento',
        'Demonstrar boas práticas de nomenclatura em Java (camelCase para variáveis)'
      ],
      starterCode: `public class PlacarFutebolApp {
    public static void main(String[] args) {
        // TODO: Declare as informações do atleta (nome, clube, idade, camisa, peso, altura)
        // TODO: Declare as informações da partida (timeCasa, timeVisitante, golsCasa, golsVisitante)
        // TODO: Calcule o IMC e imprima a súmula formatada
    }
}`,
      fullSolutionCode: `import java.util.Scanner;

public class PlacarFutebolApp {
    public static void main(String[] args) {
        final int TEMPO_REGULAMENTAR = 90;
        final String COMPETICAO = "CAMPEONATO NACIONAL 2026";

        // Dados do Jogador Destaque
        String jogador = "Rodrygo Silva";
        String clube = "Santos FC";
        int idade = 23;
        int numeroCamisa = 11;
        double alturaMetros = 1.74;
        double pesoKg = 68.0;
        int golsMarcados = 2;
        boolean capitano = false;

        // Dados da Partida
        String timeCasa = "Santos FC";
        String timeVisitante = "Flamengo";
        int placarCasa = 3;
        int placarVisitante = 1;

        // Cálculos
        double imc = pesoKg / (alturaMetros * alturaMetros);
        boolean vitoriaCasa = placarCasa > placarVisitante;

        // Saída Formatada Profissional
        System.out.println("==========================================================");
        System.out.printf("       %s%n", COMPETICAO);
        System.out.println("==========================================================");
        System.out.printf(" PARTIDA: %s %d x %d %s%n", timeCasa, placarCasa, placarVisitante, timeVisitante);
        System.out.printf(" Duração Oficial: %d minutos | Status: %s%n", 
                          TEMPO_REGULAMENTAR, vitoriaCasa ? "Vitória do Mandante" : "Visitante Pontuou");
        System.out.println("----------------------------------------------------------");
        System.out.println("                  CRAQUE DA PARTIDA                       ");
        System.out.println("----------------------------------------------------------");
        System.out.printf(" Nome:        %-25s Camisa: #%d%n", jogador, numeroCamisa);
        System.out.printf(" Clube:       %-25s Idade:  %d anos%n", clube, idade);
        System.out.printf(" Altura/Peso: %.2f m / %.1f kg          IMC:    %.2f%n", alturaMetros, pesoKg, imc);
        System.out.printf(" Gols no Jogo: %-24d Capitão: %s%n", golsMarcados, capitano ? "SIM" : "NÃO");
        System.out.println("==========================================================");
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Gerador de Súmula Esportiva',
      difficulty: 'Iniciante / Prático',
      mission: 'Receba os dados de um jogador de futebol: nome (String), partidasJogadas (int = 8) e golsMarcados (int = 6). Calcule a taxa de eficiência (gols por partida em double) e o percentual de participação considerando que o time marcou 15 gols no campeonato. Imprima com printf onde a taxa de gols deve ter 2 casas decimais e o percentual 1 casa decimal com o símbolo %%.',
      starterCode: `public class SumulaEsportiva {
    public static void main(String[] args) {
        String craque = "Gabriel Barbosa";
        int partidas = 8;
        int gols = 6;
        int totalGolsTime = 15;

        // 1. Calcule a média de gols por partida (double)
        // 2. Calcule a porcentagem de gols do craque em relação ao time
        // 3. Imprima usando printf com as máscaras solicitadas
    }
}`,
      solutionCode: `public class SumulaEsportiva {
    public static void main(String[] args) {
        String craque = "Gabriel Barbosa";
        int partidas = 8;
        int gols = 6;
        int totalGolsTime = 15;

        double mediaGols = (double) gols / partidas;
        double percentual = ((double) gols / totalGolsTime) * 100.0;

        System.out.printf("Craque: %s%n", craque);
        System.out.printf("Média de Gols: %.2f gols/partida%n", mediaGols);
        System.out.printf("Participação nos Gols: %.1f%%%n", percentual);
    }
}`,
      hints: [
        'Lembre-se de fazer o casting (double) antes da divisão para não truncar o resultado.',
        'Em printf, para imprimir o símbolo de porcentagem %, escreva %%.'
      ],
      criteria: [
        'Realiza o cálculo da média com precisão double',
        'Calcula o percentual de gols em relação ao total do time',
        'Imprime a média com %.2f e a porcentagem com %.1f%%'
      ],
      expectedOutput: `Craque: Gabriel Barbosa\nMédia de Gols: 0.75 gols/partida\nParticipação nos Gols: 40.0%`
    }
  },

  // ==========================================
  // ETAPA 02 — CONTROLE DE FLUXO (🎮 GAMES)
  // ==========================================
  {
    number: '02',
    title: 'Controle de Fluxo',
    subtitle: 'Ensine seu programa a tomar decisões e repetir tarefas',
    description: 'Transforme linhas estáticas em um jogo interativo! Use if, else if e else para testar condições de vida e escudo, switch moderno (->) para menu de ações de combate, e laços while e for para gerenciar rodadas e ondas de adversários.',
    theme: '🎮 Games',
    color: '#06B6D4', // Ciano game
    estimatedMinutes: 30,
    relatedAreaId: 'controle-fluxo',
    pedagogy: {
      whatIsIt: 'Controle de fluxo é a capacidade de alterar o caminho que o código segue: fazer curvas (condicionais if/switch) ou voltar e repetir um trecho (loops for/while).',
      whatIsItFor: 'Serve para reagir a situações dinâmicas do jogo: se o HP chegou a 0, dar Game Over; enquanto o monstro estiver vivo, continuar a rodada.',
      whenToUse: 'Sempre que o seu programa precisar escolher entre duas ou mais opções, validar entradas do jogador ou processar uma sequência de repetições.',
      problemSolved: 'Sem controle de fluxo, um programa seria apenas uma lista de compras que executa de cima a baixo uma única vez e morre. Com ele, criamos sistemas interativos, menus e regras de jogos.',
      analogy: 'Imagine um semáforo de trânsito ou um livro-jogo ("Se você quer atacar o troll, vá para a página 42; se quer fugir, vá para a página 15").'
    },
    skills: [
      'Tomada de decisão com if, else if e else (ex: verificar se o herói ainda tem vida)',
      'Switch Expressions modernas (Java 14+) com padrão seta (->) e sem risco de esquecer o break',
      'Laço for para contar turnos e rodadas definidas',
      'Laço while e do-while para ciclos com sentinela (ex: enquanto a vida > 0)',
      'Controle antecipado com break (interromper luta) e continue (pular turno)'
    ],
    codeSample: `int hp = 100;
String acao = "ATACAR";

// Switch moderno com retorno direto
int danoCausado = switch (acao) {
    case "ATACAR" -> 25;
    case "ESPECIAL" -> 60;
    case "DEFENDER" -> 0;
    default -> 5;
};

// Laço de 3 turnos de veneno
for (int turno = 1; turno <= 3; turno++) {
    hp -= 10;
    System.out.printf("Turno %d: Veneno causou dano! HP atual: %d%n", turno, hp);
}`,
    quickTraining: [
      {
        id: 'treino-02-1',
        title: 'Classificador de Rank de Jogador por XP',
        difficulty: 'Iniciante',
        story: 'Em um jogo de aventura, o jogador acumula pontos de experiência (XP) e recebe uma patente (Bronze, Prata, Ouro ou Mestre).',
        task: 'Dado um valor de int xp = 2400, use if / else if / else para imprimir: "Bronze" (< 1000), "Prata" (1000 a 2999), "Ouro" (3000 a 4999) ou "Mestre" (>= 5000).',
        hint: 'Use a sequência encadeada if (xp < 1000) ... else if (xp < 3000) ...',
        solutionCode: `public class RankJogador {
    public static void main(String[] args) {
        int xp = 2400;
        String patente;

        if (xp < 1000) {
            patente = "Bronze";
        } else if (xp < 3000) {
            patente = "Prata";
        } else if (xp < 5000) {
            patente = "Ouro";
        } else {
            patente = "Mestre Lendário";
        }

        System.out.printf("XP: %d | Categoria: %s%n", xp, patente);
    }
}`
      },
      {
        id: 'treino-02-2',
        title: 'Contador de Vidas e Poções com While',
        difficulty: 'Iniciante',
        story: 'O herói entra em uma sala tóxica. A cada segundo ele perde 15 de HP, a menos que use uma poção que recupera vida.',
        task: 'Crie um loop while que reduz a vida de 100 em 15 a cada rodada até que a vida chegue a 0 ou menos, exibindo cada rodada.',
        hint: 'while (vida > 0) { vida -= 15; System.out.println("Vida: " + vida); }',
        solutionCode: `public class SalaToxica {
    public static void main(String[] args) {
        int vida = 60;
        int segundo = 1;

        while (vida > 0) {
            vida -= 15;
            System.out.printf("Segundo %d: Sofreu dano! Vida restante: %d%n", segundo, Math.max(0, vida));
            segundo++;
        }
        System.out.println("O herói precisou recuar!");
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-02-1',
        title: 'Classificador de Rank de Jogador por XP',
        difficulty: 'Iniciante',
        story: 'Em um jogo de aventura, o jogador acumula pontos de experiência (XP) e recebe uma patente (Bronze, Prata, Ouro ou Mestre).',
        task: 'Dado um valor de int xp = 2400, use if / else if / else para imprimir a patente do jogador.',
        hint: 'Use if (xp < 1000) ... else if (xp < 3000) ...',
        solutionCode: `public class RankJogador {
    public static void main(String[] args) {
        int xp = 2400;
        String patente = (xp >= 5000) ? "Mestre" : (xp >= 3000) ? "Ouro" : (xp >= 1000) ? "Prata" : "Bronze";
        System.out.printf("XP: %d | Categoria: %s%n", xp, patente);
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Modo Sobrevivência"',
      story: 'O jogador está em uma arena e deve enfrentar uma sequência de 5 monstros. Cada monstro tem um poder de ataque diferente. O jogador começa com 100 de vida e 2 poções de cura (cada poção cura 25 de vida). Se a vida cair abaixo de 30 e o jogador ainda tiver poção, ele usa a poção automaticamente.',
      task: 'Use um array de danos dos monstros { 20, 35, 15, 40, 25 } e um laço for para simular a luta rodada a rodada, aplicando a cura defensiva e verificando se o jogador sobreviveu até o fim.',
      hints: [
        'Dentro do for, reduza a vida pelo dano do monstro.',
        'Em seguida, verifique: if (vida < 30 && pocoes > 0) { vida += 25; pocoes--; }',
        'Se a vida for <= 0, use break para interromper com derrota.'
      ],
      solutionCode: `public class ModoSobrevivencia {
    public static void main(String[] args) {
        int vida = 100;
        int pocoes = 2;
        int[] danoMonstros = { 20, 35, 15, 40, 25 };
        boolean sobreviveu = true;

        System.out.println("⚔️ INÍCIO DO MODO SOBREVIVÊNCIA!");
        for (int i = 0; i < danoMonstros.length; i++) {
            int dano = danoMonstros[i];
            vida -= dano;
            System.out.printf("Monstro #%d atacou causando %d de dano! Vida: %d%n", i + 1, dano, vida);

            // Regra de cura automática
            if (vida < 30 && pocoes > 0) {
                vida += 25;
                pocoes--;
                System.out.printf("🧪 Poção usada na emergência! +25 HP (Vida: %d | Poções restam: %d)%n", vida, pocoes);
            }

            if (vida <= 0) {
                System.out.println("💀 O herói foi derrotado na arena.");
                sobreviveu = false;
                break;
            }
        }

        if (sobreviveu) {
            System.out.printf("🏆 VITÓRIA! O herói sobreviveu a todas as ondas com %d de vida restante!%n", vida);
        }
    }
}`
    },
    portfolioProject: {
      title: 'Jogo de Batalha por Turnos (Boss Fight Engine)',
      tagline: 'Simulador de Combate Estratégico em Console com Ações, Crítico e IA',
      story: 'Construa um jogo completo de batalha por turnos onde o jogador enfrenta um Chefão de fase (Golem de Pedra). O jogador escolhe entre Ataque Básico, Magia Pesada e Defender. O programa simula as decisões do jogador e a resposta do chefe, controlando vida, dano com chance de acerto crítico, turnos e condições de vitória ou derrota.',
      githubReadmeSnippet: '### 🎮 Java Turn-Based Battle Engine\nSimulador de batalha por turnos completo utilizando switch expressions, laços while controlados por sentinela de vida e lógica de acerto crítico para portfólio de jogos 2D/Console.',
      requirements: [
        'Laço principal de batalha rodando enquanto herói e chefe tiverem HP > 0',
        'Menu de opções com Switch Expression moderna (->)',
        'Cálculo de acerto crítico (dano dobrado se um sorteio for favorável)',
        'Ação defensiva que reduz o dano recebido no próximo golpe',
        'Detecção clara de vitória ou derrota com encerramento limpo'
      ],
      starterCode: `public class BatalhaTurnosApp {
    public static void main(String[] args) {
        int heroiHp = 100;
        int bossHp = 120;
        // TODO: Implemente o loop da batalha em turnos
    }
}`,
      fullSolutionCode: `import java.util.Scanner;

public class BatalhaTurnosApp {
    public static void main(String[] args) {
        int heroiHp = 100;
        int heroiMana = 40;
        int bossHp = 130;
        int rodada = 1;
        boolean defendendo = false;

        Scanner teclado = new Scanner(System.in);
        System.out.println("=================================================");
        System.out.println("     BATALHA ÉPICA: GUERREIRO VS GOLEM DE PEDRA   ");
        System.out.println("=================================================");

        while (heroiHp > 0 && bossHp > 0) {
            System.out.printf("%n--- RODADA %d ---%n", rodada);
            System.out.printf("Herói: [HP: %d | MP: %d]  vs  Golem: [HP: %d]%n", heroiHp, heroiMana, bossHp);
            System.out.println("1: Espadada | 2: Golpe Flamejante (15 MP) | 3: Postura Defensiva");
            System.out.print("Escolha sua tática: ");
            int escolha = teclado.hasNextInt() ? teclado.nextInt() : 1;

            defendendo = false;

            // Turno do Jogador com Switch Expression
            switch (escolha) {
                case 1 -> {
                    int dano = 18 + (int)(Math.random() * 8);
                    boolean critico = Math.random() > 0.75;
                    if (critico) {
                        dano *= 2;
                        System.out.println("💥 GOLPE CRÍTICO!");
                    }
                    bossHp -= dano;
                    System.out.printf("🗡️ Você acertou a espada causando %d de dano!%n", dano);
                }
                case 2 -> {
                    if (heroiMana >= 15) {
                        heroiMana -= 15;
                        int dano = 35 + (int)(Math.random() * 12);
                        bossHp -= dano;
                        System.out.printf("🔥 Chama mágica atingiu o Golem causando %d de dano!%n", dano);
                    } else {
                        System.out.println("❌ Sem mana suficiente! O ataque falhou.");
                    }
                }
                case 3 -> {
                    defendendo = true;
                    heroiMana = Math.min(40, heroiMana + 10);
                    System.out.println("🛡️ Você ergueu o escudo! Dano da próxima rodada reduzido à metade.");
                }
                default -> System.out.println("Você hesitou e perdeu o tempo do ataque!");
            }

            // Checagem de vitória do jogador
            if (bossHp <= 0) {
                System.out.println("\\n🎉 VITÓRIA! O Golem de Pedra ruiu em pedaços!");
                break;
            }

            // Turno do Chefe
            int danoBoss = 15 + (int)(Math.random() * 10);
            if (defendendo) {
                danoBoss /= 2;
                System.out.println("🛡️ O escudo absorveu metade do impacto!");
            }
            heroiHp -= danoBoss;
            System.out.printf("🗿 O Golem esmagou o chão causando %d de dano a você!%n", danoBoss);

            if (heroiHp <= 0) {
                System.out.println("\\n💀 GAME OVER! Você foi derrotado pelo Golem.");
            }

            rodada++;
        }
        teclado.close();
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Simulador de Combate Automático',
      difficulty: 'Médio',
      mission: 'Crie um loop que simula 4 rodadas de um combate. O herói tem 80 de vida. Um adversário ataca a cada rodada com dano = 18. Se a rodada for par, o herói contra-ataca causando 25 de dano no adversário (que começa com 60 de HP). Use um loop for de 1 a 4. Ao final, imprima o HP final de ambos.',
      starterCode: `public class CombateSimulado {
    public static void main(String[] args) {
        int heroiHp = 80;
        int monstroHp = 60;

        // Implemente o loop for de 4 rodadas
        // Em cada rodada: heroiHp -= 18
        // Se a rodada for par (rodada % 2 == 0): monstroHp -= 25
        // Imprima o resultado final
    }
}`,
      solutionCode: `public class CombateSimulado {
    public static void main(String[] args) {
        int heroiHp = 80;
        int monstroHp = 60;

        for (int rodada = 1; rodada <= 4; rodada++) {
            heroiHp -= 18;
            if (rodada % 2 == 0) {
                monstroHp -= 25;
            }
        }

        System.out.println("--- FIM DO COMBATE ---");
        System.out.printf("Herói HP Final: %d%n", heroiHp);
        System.out.printf("Monstro HP Final: %d%n", monstroHp);
    }
}`,
      hints: [
        'Use o operador módulo (rodada % 2 == 0) para identificar se a rodada é par.',
        'Em 4 rodadas, o herói toma dano 4 vezes (4 * 18 = 72) e contra-ataca nas rodadas 2 e 4 (2 * 25 = 50).'
      ],
      criteria: [
        'Utiliza laço for de 1 a 4 para processar as rodadas',
        'Usa operador módulo para verificar rodadas pares',
        'Calcula corretamente o HP final de ambos os combatentes'
      ],
      expectedOutput: `--- FIM DO COMBATE ---\nHerói HP Final: 8\nMonstro HP Final: 10`
    }
  },

  // ==========================================
  // ETAPA 03 — ARRAYS E COLEÇÕES (🏥 SAÚDE PÚBLICA / SUS)
  // ==========================================
  {
    number: '03',
    title: 'Estruturas',
    subtitle: 'Arrays e Coleções: guarde e organize muitos dados',
    description: 'Aprenda a trabalhar com múltiplos dados em um sistema essencial de utilidade pública: vetores fixos para lotes com Arrays.sort, listas dinâmicas com ArrayList para retirada de remédios, HashSet para princípios ativos únicos sem duplicatas e HashMap para busca instantânea de estoque pelo código do medicamento.',
    theme: '🏥 Saúde Pública / SUS',
    color: '#0284C7', // Azul SUS / Saúde
    estimatedMinutes: 35,
    relatedAreaId: 'colecoes',
    pedagogy: {
      whatIsIt: 'Coleções e arrays são estruturas que guardam múltiplos valores agrupados em uma única variável.',
      whatIsItFor: 'Serve para gerenciar o estoque de medicamentos da Farmácia Popular, a fila de retirada de receitas e o catálogo de princípios ativos do SUS.',
      whenToUse: 'Sempre que o número de informações for variável ou quando precisar pesquisar, ordenar e agrupar elementos sem criar dezenas de variáveis isoladas.',
      problemSolved: 'Elimina a bagunça manual de variáveis e resolve problemas concretos: ArrayList (tamanho flexível de medicamentos entregues), HashSet (impede que um mesmo princípio ativo seja cadastrado duas vezes com nomes diferentes) e HashMap (localiza a quantidade em estoque pelo nome do remédio em tempo O(1)).',
      analogy: 'Um array é como uma gaveta com 10 divisórias fixas de ampolas. Um ArrayList é como o armário da farmácia que cresce conforme novas caixas chegam. Um HashSet é como o cadastro nacional de substâncias ativas (sem duplicatas). E um HashMap é o leitor de código de barras: escaneia o remédio e diz na hora quantas caixas restam.'
    },
    skills: [
      'Arrays primitivos de tamanho fixo e utilitário Arrays.sort() para ordenar lotes',
      'Uso da interface List e classe concreta ArrayList para fila cronológica de retiradas',
      'Uso da interface Set e HashSet para catalogar princípios ativos únicos sem duplicatas',
      'Uso da interface Map e HashMap para associar Medicamento → Quantidade em Estoque (busca O(1))',
      'Iteração com laço for-each para percorrer estoques com legibilidade e segurança'
    ],
    codeSample: `import java.util.*;

// 1. List: ordem de entrega de medicamentos aos cidadãos
List<String> retiradas = new ArrayList<>();
retiradas.add("Dipirona 500mg");
retiradas.add("Amoxicilina 250mg");

// 2. Set: garante princípios ativos únicos no compêndio
Set<String> principiosAtivos = new HashSet<>();
principiosAtivos.add("Paracetamol");
principiosAtivos.add("Ibuprofeno");
principiosAtivos.add("Paracetamol"); // Duplicata descartada automaticamente!

// 3. Map: busca O(1) Nome do Medicamento -> Caixas em Estoque
Map<String, Integer> estoque = new HashMap<>();
estoque.put("Dipirona 500mg", 450);
System.out.println("Estoque de Dipirona: " + estoque.get("Dipirona 500mg") + " caixas");`,
    quickTraining: [
      {
        id: 'treino-03-1',
        title: 'Ordenação de Lotes por Validade com Arrays.sort',
        difficulty: 'Iniciante',
        story: 'O farmacêutico da UBS tem 5 lotes de vacina identificados pelos meses de vencimento e precisa priorizar a aplicação dos lotes mais próximos do vencimento.',
        task: 'Crie um array int[] mesesVencimento = { 11, 4, 8, 2, 6 };. Ordene com Arrays.sort() e exiba o lote mais urgente (primeiro) e o mais distante (último).',
        hint: 'Após Arrays.sort(), o menor mês estará na posição 0 e o mais distante em length - 1.',
        solutionCode: `import java.util.Arrays;

public class OrdenadorLotesSus {
    public static void main(String[] args) {
        int[] mesesVencimento = { 11, 4, 8, 2, 6 };
        
        Arrays.sort(mesesVencimento);
        
        System.out.printf("Lote mais urgente: mês %d%n", mesesVencimento[0]);
        System.out.printf("Lote mais distante: mês %d%n", mesesVencimento[mesesVencimento.length - 1]);
        System.out.println("Fila ordenada de lotes: " + Arrays.toString(mesesVencimento));
    }
}`
      },
      {
        id: 'treino-03-2',
        title: 'Cadastro de Princípios Ativos Únicos com HashSet',
        difficulty: 'Iniciante',
        story: 'Ao cadastrar receitas, médicos prescreveram princípios ativos repetidos. O sistema do SUS precisa saber quantos compostos farmacológicos únicos foram solicitados.',
        task: 'Crie um Set<String> e adicione: "Dipirona", "Paracetamol", "Dipirona", "Ibuprofeno", "Paracetamol". Exiba o total de princípios ativos distintos.',
        hint: 'O HashSet ignora elementos duplicados automaticamente através do método add().',
        solutionCode: `import java.util.Set;
import java.util.HashSet;

public class PrincipiosAtivosSus {
    public static void main(String[] args) {
        Set<String> substancias = new HashSet<>();
        substancias.add("Dipirona");
        substancias.add("Paracetamol");
        substancias.add("Dipirona"); // Ignorada
        substancias.add("Ibuprofeno");
        substancias.add("Paracetamol"); // Ignorada

        System.out.println("Total de princípios ativos únicos: " + substancias.size());
        System.out.println("Substâncias cadastradas: " + substancias);
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-03-1',
        title: 'Ordenação de Lotes por Validade com Arrays.sort',
        difficulty: 'Iniciante',
        story: 'O farmacêutico da UBS precisa priorizar lotes pelo vencimento.',
        task: 'Ordene o array int[] com Arrays.sort() e imprima o lote mais urgente.',
        hint: 'O menor mês estará no índice 0.',
        solutionCode: `import java.util.Arrays;

public class OrdenadorLotesSus {
    public static void main(String[] args) {
        int[] lotes = { 11, 4, 8, 2, 6 };
        Arrays.sort(lotes);
        System.out.println("Mais urgente: mês " + lotes[0]);
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Alerta de Desabastecimento na Farmácia Popular"',
      story: 'A central de distribuição de medicamentos precisa verificar o estoque de 4 remédios essenciais. Se qualquer remédio estiver com menos de 20 caixas disponíveis, o sistema deve disparar um alerta prioritário de reposição imediata para o Ministério da Saúde.',
      task: 'Crie um Map<String, Integer> com o medicamento e a quantidade em estoque. Percorra o mapa e exiba os remédios críticos que precisam de compra urgente.',
      hints: [
        'Use Map<String, Integer> estoque = new HashMap<>();',
        'Percorra com for (Map.Entry<String, Integer> item : estoque.entrySet()) e teste if (item.getValue() < 20).'
      ],
      solutionCode: `import java.util.*;

public class AlertaDesabastecimento {
    public static void main(String[] args) {
        Map<String, Integer> estoque = new LinkedHashMap<>();
        estoque.put("Insulina NPH 100UI", 14);     // Crítico!
        estoque.put("Losartana Potássica 50mg", 150);
        estoque.put("Metformina 850mg", 18);       // Crítico!
        estoque.put("Sinvastatina 20mg", 90);

        System.out.println("🏥 RELATÓRIO DO MONITOR DE ABASTECIMENTO - SUS");
        System.out.println("-------------------------------------------------");
        
        List<String> comprasUrgentes = new ArrayList<>();
        for (Map.Entry<String, Integer> item : estoque.entrySet()) {
            if (item.getValue() < 20) {
                comprasUrgentes.add(item.getKey());
                System.out.printf("⚠️ ALERTA: %-28s | Apenas %d caixas!%n", 
                                  item.getKey(), item.getValue());
            } else {
                System.out.printf("✅ NORMAL: %-28s | %d caixas%n", 
                                  item.getKey(), item.getValue());
            }
        }
        
        System.out.println("-------------------------------------------------");
        System.out.println("Itens enviados para reposição urgente: " + comprasUrgentes);
    }
}`
    },
    portfolioProject: {
      title: 'Controle de Medicamentos da Farmácia Popular (FarmaSUS Core)',
      tagline: 'Sistema de Dispensação e Controle de Estoque com List, Set e Map Integrados',
      story: 'Desenvolva o módulo de dispensação da Farmácia Popular do SUS. O sistema gerencia a lista de medicamentos retirados pelos cidadãos no dia (ArrayList), mantém o catálogo oficial de princípios ativos sem duplicidades (HashSet) e indexa o estoque em tempo real de cada remédio pelo nome com busca instantânea O(1) (HashMap).',
      githubReadmeSnippet: '### 🏥 FarmaSUS - Public Health Inventory Core (Java Collections)\nSistema de controle farmacêutico público demonstrando o uso correto das estruturas de dados do Java: `ArrayList` para histórico cronológico de dispensação, `HashSet` para garantir unicidade de princípios ativos e `HashMap` para consulta em tempo constante O(1) de estoque.',
      requirements: [
        'Utilizar ArrayList para registrar as saídas de medicamentos do dia',
        'Utilizar HashSet para cadastrar princípios ativos sem permitir duplicatas',
        'Utilizar HashMap para associar Nome do Remédio -> Caixas em Estoque',
        'Implementar método de dispensação que valida se há estoque antes de liberar o remédio',
        'Emitir relatório consolidado de estoque remanescente'
      ],
      starterCode: `public class FarmaSusApp {
    public static void main(String[] args) {
        // TODO: Crie a lista de dispensação, catálogo de princípios ativos e mapa de estoque
    }
}`,
      fullSolutionCode: `import java.util.*;

public class FarmaSusApp {
    public static void main(String[] args) {
        // 1. Histórico de dispensação no dia (List preserva ordem)
        List<String> dispensadosHoje = new ArrayList<>();

        // 2. Princípios ativos cadastrados no SUS (Set descarta duplicatas)
        Set<String> principiosAtivos = new HashSet<>(Set.of(
            "Amoxicilina", "Dipirona", "Losartana", "Dipirona" // Duplicata ignorada
        ));

        // 3. Estoque em tempo real (Map Chave -> Quantidade O(1))
        Map<String, Integer> estoque = new HashMap<>();
        estoque.put("Amoxicilina 500mg", 30);
        estoque.put("Dipirona 500mg", 120);
        estoque.put("Losartana 50mg", 85);

        System.out.println("==================================================");
        System.out.println("       FARMÁCIA POPULAR DO BRASIL - SUS           ");
        System.out.println("==================================================");
        System.out.printf("Princípios ativos credenciados: %d%n", principiosAtivos.size());
        System.out.println("Catálogo farmacológico: " + principiosAtivos);
        System.out.println("--------------------------------------------------");

        // Simulação de atendimento com receita médica
        String remedioReceitado = "Amoxicilina 500mg";
        int quantidadePrescrita = 2;

        if (estoque.containsKey(remedioReceitado)) {
            int disponivel = estoque.get(remedioReceitado);
            if (disponivel >= quantidadePrescrita) {
                estoque.put(remedioReceitado, disponivel - quantidadePrescrita);
                dispensadosHoje.add(remedioReceitado + " (" + quantidadePrescrita + " cx)");
                System.out.printf("✅ DISPENSADO: %d cx de '%s'%n", quantidadePrescrita, remedioReceitado);
                System.out.printf("📦 Saldo restante no estoque: %d caixas%n", estoque.get(remedioReceitado));
            } else {
                System.out.println("❌ Saldo insuficiente na unidade!");
            }
        } else {
            System.out.println("❌ Medicamento não padronizado nesta UBS.");
        }

        System.out.println("--------------------------------------------------");
        System.out.println("Dispensações registradas hoje: " + dispensadosHoje);
        System.out.println("==================================================");
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Verificador de Estoque Crítico na UBS',
      difficulty: 'Médio',
      mission: 'Crie um HashMap com 4 medicamentos e suas quantidades: "Dipirona" (120), "Insulina" (8), "Omeprazol" (45) e "Amoxicilina" (12). Percorra o mapa para encontrar e exibir qual é o medicamento com o menor estoque disponível e qual a quantidade.',
      starterCode: `import java.util.Map;
import java.util.HashMap;

public class EstoqueCriticoFinder {
    public static void main(String[] args) {
        Map<String, Integer> estoque = new HashMap<>();
        estoque.put("Dipirona", 120);
        estoque.put("Insulina", 8);
        estoque.put("Omeprazol", 45);
        estoque.put("Amoxicilina", 12);

        // Percorra o mapa e encontre o remédio com menor estoque
    }
}`,
      solutionCode: `import java.util.Map;
import java.util.HashMap;

public class EstoqueCriticoFinder {
    public static void main(String[] args) {
        Map<String, Integer> estoque = new HashMap<>();
        estoque.put("Dipirona", 120);
        estoque.put("Insulina", 8);
        estoque.put("Omeprazol", 45);
        estoque.put("Amoxicilina", 12);

        String remedioCritico = "";
        int menorQuantidade = Integer.MAX_VALUE;

        for (Map.Entry<String, Integer> item : estoque.entrySet()) {
            if (item.getValue() < menorQuantidade) {
                menorQuantidade = item.getValue();
                remedioCritico = item.getKey();
            }
        }

        System.out.printf("Medicamento Mais Crítico: %s com apenas %d caixas%n", 
                          remedioCritico, menorQuantidade);
    }
}`,
      hints: [
        'Inicie menorQuantidade com Integer.MAX_VALUE para que qualquer item menor seja capturado.',
        'Itere com for (Map.Entry<String, Integer> item : estoque.entrySet()).'
      ],
      criteria: [
        'Utiliza HashMap para indexar remédio e estoque',
        'Percorre as entradas com entrySet()',
        'Identifica "Insulina" com apenas 8 caixas como o item mais crítico'
      ],
      expectedOutput: `Medicamento Mais Crítico: Insulina com apenas 8 caixas`
    }
  },

  // ==========================================
  // ETAPA 04 — MÉTODOS (🚗 MOBILIDADE URBANA)
  // ==========================================
  {
    number: '04',
    title: 'Métodos',
    subtitle: 'Organize responsabilidades e divida problemas grandes em partes pequenas',
    description: 'Aprenda a modularizar seu código em um sistema do cotidiano: métodos com parâmetros e retornos bem definidos, métodos utilitários estáticos (static), sobrecarga de métodos (mesmo nome, parâmetros diferentes) para calcular tarifas com ou sem horário de pico e cláusulas de guarda (guard clauses) para rejeitar distâncias inválidas.',
    theme: '🚗 Mobilidade Urbana',
    color: '#F59E0B', // Âmbar mobilidade
    estimatedMinutes: 30,
    relatedAreaId: 'metodos',
    pedagogy: {
      whatIsIt: 'Um método é um bloco de comandos com nome próprio que executa uma tarefa específica. Ele recebe dados de entrada (parâmetros), processa e devolve um resultado (retorno).',
      whatIsItFor: 'Serve para organizar o sistema de mobilidade: um método calcula o valor por km, outro calcula a taxa de bandeira, outro valida se o passageiro é estudante para aplicar desconto.',
      whenToUse: 'Sempre que você perceber que um cálculo ou lógica está se repetindo, ou quando o método main começar a ficar extenso e desorganizado.',
      problemSolved: 'Acaba com a duplicação de regras. Se a tarifa do transporte urbano mudar de R$ 4,40 para R$ 4,60, você altera em uma única linha no método de cálculo e o aplicativo inteiro se atualiza.',
      analogy: 'Imagine o taxímetro ou o aplicativo de transporte (Uber/Bicicletário): você informa o ponto de partida e o destino (parâmetros); o motor de cálculo processa a rota e exibe o preço final na tela (retorno).'
    },
    skills: [
      'Declaração de métodos com tipo de retorno específico (double, int, String ou void quando não retorna nada)',
      'Passagem de parâmetros e escopo local de variáveis',
      'Uso da cláusula de guarda (guard clause) para rejeitar distâncias negativas antes do cálculo',
      'Sobrecarga de Métodos (Overloading: calcularTarifa com diferentes combinações de regras)',
      'Métodos utilitários reutilizáveis com modificador static'
    ],
    codeSample: `public class TarifasMobilidade {
    // 1. Tarifa básica por km
    public static double calcularCorrida(double km) {
        if (km <= 0) return 0.0; // Guard clause
        return 5.00 + (km * 2.50); // Bandeirada + valor por km
    }

    // 2. Sobrecarga: com adicional de horário de pico
    public static double calcularCorrida(double km, boolean horarioPico) {
        double valorBase = calcularCorrida(km);
        return horarioPico ? valorBase * 1.30 : valorBase; // +30% no pico
    }

    // 3. Sobrecarga: com desconto de estudante
    public static double calcularCorrida(double km, boolean horarioPico, boolean estudante) {
        double valor = calcularCorrida(km, horarioPico);
        return estudante ? valor * 0.50 : valor; // 50% de desconto
    }
}`,
    quickTraining: [
      {
        id: 'treino-04-1',
        title: 'Formatador de Moeda para Transporte',
        difficulty: 'Iniciante',
        story: 'O painel do passageiro precisa exibir qualquer valor em dinheiro formatado no padrão oficial brasileiro: "R$ 15,50".',
        task: 'Crie um método estático formatarReais(double valor) que retorna uma String formatada com duas casas decimais precedida de "R$ ".',
        hint: 'Use String.format("R$ %.2f", valor);.',
        solutionCode: `public class MoedaUtils {
    public static String formatarReais(double valor) {
        return String.format("R$ %.2f", Math.max(0.0, valor));
    }

    public static void main(String[] args) {
        System.out.println(formatarReais(14.8)); // R$ 14.80
        System.out.println(formatarReais(5.0));  // R$ 5.00
    }
}`
      },
      {
        id: 'treino-04-2',
        title: 'Calculadora de Tempo de Viagem com Guard Clause',
        difficulty: 'Intermediário',
        story: 'O aplicativo precisa estimar quantos minutos levará um trajeto de ônibus considerando a velocidade média do tráfego.',
        task: 'Crie o método estimarMinutos(double distanciaKm, double velocidadeKmH). Se a velocidade for menor ou igual a zero, retorne 0 com guard clause. Calcule: (distancia / velocidade) * 60.',
        hint: 'No início do método: if (velocidadeKmH <= 0 || distanciaKm <= 0) return 0;',
        solutionCode: `public class EstimadorTempo {
    public static int estimarMinutos(double distanciaKm, double velocidadeKmH) {
        if (distanciaKm <= 0 || velocidadeKmH <= 0) {
            return 0; // Guard clause defensiva
        }
        double horas = distanciaKm / velocidadeKmH;
        return (int) Math.round(horas * 60);
    }

    public static void main(String[] args) {
        System.out.println("Tempo estimado: " + estimarMinutos(15.0, 30.0) + " minutos"); // 30 min
        System.out.println("Tempo com erro: " + estimarMinutos(15.0, 0.0) + " minutos");  // 0 min
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-04-1',
        title: 'Formatador de Moeda para Transporte',
        difficulty: 'Iniciante',
        story: 'Formate valores em dinheiro para R$ 0,00.',
        task: 'Crie formatarReais(double valor).',
        hint: 'Use String.format("R$ %.2f", valor);',
        solutionCode: `public class MoedaUtils {
    public static String formatarReais(double valor) {
        return String.format("R$ %.2f", valor);
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "O Otimizador de Baldeação e Integração Tarifária"',
      story: 'No sistema de transporte público metropolitano, se o passageiro trocar de linha de ônibus em menos de 120 minutos (2 horas), a segunda passagem sai com 100% de gratuidade (R$ 0,00). Se passar de 120 minutos, ele paga a tarifa integral de R$ 4,50.',
      task: 'Crie um método calcularBaldeacao(double tarifaBase, int minutosEntreViagens) que use guard clauses e retorne o valor que o passageiro deve pagar na catraca.',
      hints: [
        'Se minutosEntreViagens <= 120, o retorno é 0.0.',
        'Se for maior que 120, retorne o valor da tarifaBase.'
      ],
      solutionCode: `public class IntegracaoTransporte {
    public static double calcularBaldeacao(double tarifaBase, int minutosEntreViagens) {
        if (minutosEntreViagens < 0) return tarifaBase;
        
        // Regra de integração metropolitana
        if (minutosEntreViagens <= 120) {
            System.out.printf("✨ Integração gratuita aplicada! (%d min desde o 1º embarque)%n", minutosEntreViagens);
            return 0.0;
        }

        System.out.printf("⚠️ Tempo de integração expirado (%d min > 120 min). Tarifa cheia.%n", minutosEntreViagens);
        return tarifaBase;
    }

    public static void main(String[] args) {
        double passagem = 4.50;
        System.out.printf("Valor pago na catraca: R$ %.2f%n%n", calcularBaldeacao(passagem, 45));
        System.out.printf("Valor pago na catraca: R$ %.2f%n", calcularBaldeacao(passagem, 140));
    }
}`
    },
    portfolioProject: {
      title: 'Motor de Tarifas da Mobilidade Urbana (MoveCity Engine)',
      tagline: 'Módulo de Cálculo Tarifário com Sobrecarga de Métodos, Descontos e Guard Clauses',
      story: 'Construa o motor de tarifação da MoveCity, a plataforma integrada de mobilidade urbana da prefeitura. O projeto implementa métodos modulares com responsabilidade única: calcular corridas por quilometragem, aplicar multiplicadores dinâmicos de horário de pico via sobrecarga, conceder descontos para estudantes e idosos, e validar dados com guard clauses para garantir que valores zerados ou negativos nunca corrompam o caixa do sistema.',
      githubReadmeSnippet: '### 🚗 MoveCity Fare & Routing Engine (Java Methods)\nMódulo de regras de negócio de mobilidade urbana demonstrando Clean Code: métodos com responsabilidade única, sobrecarga limpa de parâmetros (overloading) e validação preventiva com guard clauses.',
      requirements: [
        'Método calcularTarifa(double distanciaKm) com taxa de embarque fixa',
        'Sobrecarga de calcularTarifa para aceitar horário de pico (+25%)',
        'Sobrecarga de calcularTarifa para aplicar gratuidade ou desconto social',
        'Método utilitário static formatarMoeda(double valor)',
        'Guard clauses no topo de todos os métodos para barrar distâncias ou valores inválidos'
      ],
      starterCode: `public class MoveCityApp {
    public static void main(String[] args) {
        // TODO: Implemente os métodos sobrecarregados de tarifas de transporte
    }
}`,
      fullSolutionCode: `public class MoveCityApp {

    // Constantes de Mobilidade
    public static final double BANDEIRADA_INICIAL = 4.80;
    public static final double CUSTO_POR_KM = 2.40;

    // Método utilitário de formatação
    public static String formatarReais(double valor) {
        return String.format("R$ %.2f", Math.max(0.0, valor));
    }

    // 1. Método básico: apenas distância
    public static double calcularTarifa(double distanciaKm) {
        if (distanciaKm <= 0) return 0.0; // Guard clause
        return BANDEIRADA_INICIAL + (distanciaKm * CUSTO_POR_KM);
    }

    // 2. Sobrecarga: distância + horário de pico (+25%)
    public static double calcularTarifa(double distanciaKm, boolean horarioPico) {
        double tarifaBase = calcularTarifa(distanciaKm);
        if (horarioPico) {
            return tarifaBase * 1.25;
        }
        return tarifaBase;
    }

    // 3. Sobrecarga: distância + horário de pico + categoria do passageiro
    public static double calcularTarifa(double distanciaKm, boolean horarioPico, String categoriaPassageiro) {
        double valor = calcularTarifa(distanciaKm, horarioPico);
        if (categoriaPassageiro == null) return valor;

        return switch (categoriaPassageiro.toUpperCase()) {
            case "ESTUDANTE" -> valor * 0.50; // 50% de desconto
            case "IDOSO", "PCD" -> 0.00;      // Gratuidade por lei
            default -> valor;
        };
    }

    public static void main(String[] args) {
        double trajetoKm = 12.5;

        System.out.println("==================================================");
        System.out.println("      MOVECITY - SISTEMA DE MOBILIDADE URBANA     ");
        System.out.println("==================================================");
        System.out.printf("Trajeto simulado: %.1f km%n", trajetoKm);
        System.out.println("--------------------------------------------------");

        double v1 = calcularTarifa(trajetoKm);
        System.out.printf("1. Tarifa Normal:                  %s%n", formatarReais(v1));

        double v2 = calcularTarifa(trajetoKm, true);
        System.out.printf("2. Horário de Pico (+25%%):         %s%n", formatarReais(v2));

        double v3 = calcularTarifa(trajetoKm, true, "ESTUDANTE");
        System.out.printf("3. Estudante no Pico (Meia):       %s%n", formatarReais(v3));

        double v4 = calcularTarifa(trajetoKm, false, "IDOSO");
        System.out.printf("4. Passe Livre Cidadão (Idoso):    %s%n", formatarReais(v4));
        System.out.println("==================================================");
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Calculador de Custo por Passageiro',
      difficulty: 'Médio',
      mission: 'Crie uma classe com o método estático calcularCustoIndividual(double custoTotal, int passageiros). Se o número de passageiros for menor ou igual a zero, ou se o custo for negativo, use guard clause para retornar 0.0. Calcule a divisão do custo igualmente e retorne o valor double. No método main, exiba o resultado formatado.',
      starterCode: `public class DivisorCorrida {
    public static double calcularCustoIndividual(double custoTotal, int passageiros) {
        // Implemente com guard clause para passageiros <= 0 ou custo <= 0
        return 0.0;
    }

    public static void main(String[] args) {
        double corrida = 48.0;
        int amigos = 4;
        System.out.printf("Custo por passageiro: R$ %.2f%n", calcularCustoIndividual(corrida, amigos));
        // Esperado: 48.0 / 4 = R$ 12.00
    }
}`,
      solutionCode: `public class DivisorCorrida {
    public static double calcularCustoIndividual(double custoTotal, int passageiros) {
        if (custoTotal <= 0 || passageiros <= 0) {
            return 0.0; // Guard clause
        }
        return custoTotal / passageiros;
    }

    public static void main(String[] args) {
        double corrida = 48.0;
        int amigos = 4;
        System.out.printf("Custo por passageiro: R$ %.2f%n", calcularCustoIndividual(corrida, amigos));
    }
}`,
      hints: [
        'Use: if (custoTotal <= 0 || passageiros <= 0) return 0.0;',
        'A divisão é simples: return custoTotal / passageiros;'
      ],
      criteria: [
        'Implementa a guard clause para evitar divisão por zero',
        'Calcula a divisão do valor total entre os passageiros',
        'Retorna exatamente R$ 12,00 para 48.0 dividido por 4'
      ],
      expectedOutput: `Custo por passageiro: R$ 12.00`
    }
  },

  // ==========================================
  // ETAPA 05 — ORIENTAÇÃO A OBJETOS (🏛️ CIDADÃO DIGITAL / POUPATEMPO)
  // ==========================================
  {
    number: '05',
    title: 'POO',
    subtitle: 'Modele o mundo real em objetos com regras e responsabilidades claras',
    description: 'O coração do desenvolvimento Java corporativo e governamental! Aprenda a espelhar o mundo real no código com o sistema de agendamentos do Poupatempo: classes como modelos de atendimento, objetos instanciados com new, construtores que blindam dados essenciais com this, encapsulamento estrito com private para impedir alterações arbitrárias em protocolos, composição entre Agendamento e Cidadão/Serviço, e regras de negócio legítimas para controle de vagas.',
    theme: '🏛️ Cidadão Digital / Poupatempo',
    color: '#8B5CF6', // Roxo Poupatempo / Cidadão
    estimatedMinutes: 45,
    relatedAreaId: 'poo',
    pedagogy: {
      whatIsIt: 'A Programação Orientada a Objetos (POO) é a maneira de organizar o software pensando em entidades do mundo real. Agrupamos as características (atributos) e o que o objeto sabe fazer (métodos) numa mesma unidade chamada Objeto.',
      whatIsItFor: 'Serve para construir sistemas reais e organizados — como o Poupatempo, o Detran ou o INSS — onde cidadãos, guichês, senhas e serviços públicos interagem seguindo regras rígidas de segurança.',
      whenToUse: 'Em praticamente todo sistema corporativo, bancário ou governamental. Sempre que seu problema envolver entidades com identidade, estado e comportamentos próprios.',
      problemSolved: 'Evita o caos das variáveis soltas. Com encapsulamento (private), ninguém de fora consegue forjar um protocolo de atendimento, mudar a data do agendamento sem validação ou marcar um serviço em um guichê sem capacidade.',
      analogy: 'A classe é o formulário em branco da ficha cadastral do Poupatempo; o objeto é o formulário preenchido com a foto e a assinatura de um cidadão de carne e osso. O construtor é o funcionário da triagem que confere os documentos antes de carimbar e emitir a senha.'
    },
    skills: [
      'Criação de classes, atributos de estado e instanciação de objetos com a palavra-chave new',
      'Construtores parametrizados e uso consciente da referência this',
      'Encapsulamento estrito com modificador private e métodos de acesso e mutação controlada',
      'Composição: uma UnidadePoupatempo é composta por múltiplos Agendamentos confirmados',
      'Associação: cada Agendamento referencia diretamente o Cidadão solicitante e o Serviço desejado',
      'Regras de negócio dentro da própria classe (validação de documentos, cálculo de prioridade e vagas restantes)'
    ],
    codeSample: `public class AgendamentoPoupatempo {
    private String protocolo;
    private String servico;
    private boolean compareceu;

    public AgendamentoPoupatempo(String protocolo, String servico) {
        this.protocolo = protocolo;
        this.servico = servico;
        this.compareceu = false;
    }

    public boolean registrarPresenca() {
        if (!compareceu) {
            this.compareceu = true;
            return true;
        }
        return false; // Já havia sido atendido!
    }

    public String getProtocolo() { return protocolo; }
    public String getServico() { return servico; }
    public boolean isCompareceu() { return compareceu; }
}`,
    quickTraining: [
      {
        id: 'treino-05-1',
        title: 'Classe Cidadão com CPF Blindado e Encapsulamento',
        difficulty: 'Iniciante',
        story: 'Na triagem do Poupatempo, os dados do cidadão precisam estar protegidos para que ninguém altere o CPF indevidamente após o cadastro.',
        task: 'Crie uma classe Cidadao com atributos privados: nome (String), cpf (String) e idade (int). Implemente o construtor e um método temPrioridadeLegal() que retorna true se a idade for >= 60 anos (Estatuto da Pessoa Idosa).',
        hint: 'Use modificador private em todos os atributos e forneça métodos getters.',
        solutionCode: `public class Cidadao {
    private String nome;
    private String cpf;
    private int idade;

    public Cidadao(String nome, String cpf, int idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = Math.max(0, idade);
    }

    public boolean temPrioridadeLegal() {
        return this.idade >= 60;
    }

    public String getNome() { return nome; }
    public String getCpf() { return cpf; }
    public int getIdade() { return idade; }

    public static void main(String[] args) {
        Cidadao cidadao = new Cidadao("Dona Sebastiana", "123.456.789-00", 68);
        System.out.printf("Cidadão: %s | Idade: %d%n", cidadao.getNome(), cidadao.getIdade());
        System.out.println("Atendimento Prioritário: " + (cidadao.temPrioridadeLegal() ? "SIM (Guichê Preferencial)" : "NÃO"));
    }
}`
      },
      {
        id: 'treino-05-2',
        title: 'Associação de Agendamento ao Serviço Público',
        difficulty: 'Intermediário',
        story: 'Ao emitir um protocolo no sistema do Poupatempo, o agendamento guarda o serviço solicitado (RG, CNH) e o cidadão que fez o pedido.',
        task: 'Crie uma classe ServicoPublico e vincule-a a um Agendamento que contém o Cidadão.',
        hint: 'A classe Agendamento terá atributos privados: private Cidadao cidadao; e private ServicoPublico servico;.',
        solutionCode: `class ServicoPublico {
    private String nome;
    private int duracaoMinutos;

    public ServicoPublico(String nome, int duracaoMinutos) {
        this.nome = nome;
        this.duracaoMinutos = duracaoMinutos;
    }
    public String getNome() { return nome; }
}

public class ProtocoloAtendimento {
    private String codigoProtocolo;
    private ServicoPublico servico;
    private String nomeCidadao;

    public ProtocoloAtendimento(String codigoProtocolo, ServicoPublico servico, String nomeCidadao) {
        this.codigoProtocolo = codigoProtocolo;
        this.servico = servico;
        this.nomeCidadao = nomeCidadao;
    }

    public void exibirComprovante() {
        System.out.printf("🏛️ PROTOCOLO: %s%n", codigoProtocolo);
        System.out.printf("👤 Cidadão: %s | Serviço: %s%n", nomeCidadao, servico.getNome());
    }

    public static void main(String[] args) {
        ServicoPublico rg = new ServicoPublico("1ª Via do RG / CIN", 20);
        ProtocoloAtendimento agendamento = new ProtocoloAtendimento("SP-2026-8941", rg, "Beatriz Souza");
        agendamento.exibirComprovante();
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-05-1',
        title: 'Classe Cidadão com CPF Blindado e Encapsulamento',
        difficulty: 'Iniciante',
        story: 'Crie a classe Cidadao com atributos privados e método para verificar prioridade legal.',
        task: 'Implemente temPrioridadeLegal() checando idade >= 60.',
        hint: 'Use atributos private e crie o getter correspondente.',
        solutionCode: `public class Cidadao {
    private String nome;
    private int idade;
    public Cidadao(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    public boolean temPrioridadeLegal() { return idade >= 60; }
    public String getNome() { return nome; }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Controle de Vagas da Agência"',
      story: 'Uma unidade do Poupatempo tem capacidade diária de 5 agendamentos para o serviço de Renovação de CNH. Quando a 5ª vaga for reservada, qualquer solicitação seguinte no mesmo dia deve ser recusada com a mensagem "VAGAS ESGOTADAS PARA HOJE: Tente outro posto de atendimento!". Além disso, a unidade deve relatar quantas vagas ainda restam em tempo real.',
      task: 'Crie a classe AgenciaPoupatempo com vagasMax = 5, contador de agendamentos efetuados e método boolean agendar(String servico). Teste preenchendo as vagas e tentando exceder a cota diária.',
      hints: [
        'Use uma variável int agendamentosRealizados = 0.',
        'Se agendamentosRealizados >= vagasMax, imprima a recusa e retorne false.'
      ],
      solutionCode: `public class AgenciaPoupatempo {
    private String unidade;
    private int vagasTotais;
    private int agendamentosRealizados;

    public AgenciaPoupatempo(String unidade, int vagas) {
        this.unidade = unidade;
        this.vagasTotais = vagas;
        this.agendamentosRealizados = 0;
    }

    public boolean agendar(String cidadao, String servico) {
        if (agendamentosRealizados >= vagasTotais) {
            System.out.printf("❌ VAGAS ESGOTADAS na unidade '%s' para hoje!%n", unidade);
            return false;
        }
        agendamentosRealizados++;
        int vagasRestantes = vagasTotais - agendamentosRealizados;
        System.out.printf("✅ Agendamento #%d confirmado para %s (%s). Vagas restantes: %d%n", 
                          agendamentosRealizados, cidadao, servico, vagasRestantes);
        return true;
    }

    public static void main(String[] args) {
        AgenciaPoupatempo posto = new AgenciaPoupatempo("Poupatempo Sé", 3);
        posto.agendar("Carlos Silva", "Renovação CNH");
        posto.agendar("Mariana Costa", "Emissão RG");
        posto.agendar("João Ribeiro", "Carteira de Trabalho");
        posto.agendar("Ana Paula", "Título de Eleitor"); // Deve ser barrado!
    }
}`
    },
    portfolioProject: {
      title: 'Cidadão Digital Pro (Sistema de Agendamentos & Protocolos do Poupatempo)',
      tagline: 'Modelagem Orientada a Objetos com Cidadão, Serviço Público, Agendamento e Emissão de Protocolos',
      story: 'Desenvolva o núcleo do Poupatempo Digital para agendamento e triagem de serviços cívicos essenciais (Emissão de RG, Renovação de CNH e Seguro-Desemprego). O sistema modela a classe Cidadao (com nome, CPF e idade), a classe ServicoPublico (com nome, duração e cota diária de vagas) e a classe Agendamento (com protocolo gerado, data e status). A integridade do serviço público é assegurada por encapsulamento estrito e regras de negócio: validação de prioridade legal para idosos e bloqueio automático de agendamentos quando a cota do serviço for atingida.',
      githubReadmeSnippet: '### 🏛️ Cidadão Digital Pro - Poupatempo Scheduling Core (Java OOP)\nModelagem robusta de Orientação a Objetos aplicada a serviços públicos governamentais: encapsulamento rigoroso com atributos `private`, relação de Composição entre Unidade e Agendamentos, Associação com Cidadão e regras de negócio com controle de vagas e prioridade legal.',
      requirements: [
        'Criar classes bem encapsuladas: Cidadao, ServicoPublico e Agendamento',
        'Composição: a UnidadePoupatempo gerencia sua lista interna de Agendamentos confirmados',
        'Associação: cada Agendamento referencia o Cidadão solicitante e o Serviço Público',
        'Geração de protocolo padronizado no formato "SP-[SERVICO]-[ANO]-[NUM]"',
        'Método agendar(Cidadao c, ServicoPublico s, String data) com controle de vagas e prioridade',
        'Método emitirRelatorioDiario() com atendimentos normais, prioritários e vagas restantes'
      ],
      starterCode: `public class PoupatempoApp {
    public static void main(String[] args) {
        // TODO: Modele Cidadao, ServicoPublico, Agendamento e UnidadePoupatempo
    }
}`,
      fullSolutionCode: `import java.util.*;

// 1. Entidade Cidadão com Encapsulamento
class Cidadao {
    private String nome;
    private String cpf;
    private int idade;

    public Cidadao(String nome, String cpf, int idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = Math.max(0, idade);
    }
    public String getNome() { return nome; }
    public String getCpf() { return cpf; }
    public int getIdade() { return idade; }
    public boolean isPrioridadeLegal() { return this.idade >= 60; }
}

// 2. Entidade Serviço Público
class ServicoPublico {
    private String codigo;
    private String descricao;
    private int vagasDisponiveis;

    public ServicoPublico(String codigo, String descricao, int vagas) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.vagasDisponiveis = Math.max(0, vagas);
    }
    public String getCodigo() { return codigo; }
    public String getDescricao() { return descricao; }
    public int getVagas() { return vagasDisponiveis; }

    public boolean reservarVaga() {
        if (vagasDisponiveis > 0) {
            vagasDisponiveis--;
            return true;
        }
        return false;
    }
}

// 3. Entidade Agendamento (Associação com Cidadão e Serviço)
class Agendamento {
    private String protocolo;
    private Cidadao cidadao;
    private ServicoPublico servico;
    private String data;
    private boolean prioritario;

    public Agendamento(String protocolo, Cidadao cidadao, ServicoPublico servico, String data) {
        this.protocolo = protocolo;
        this.cidadao = cidadao;
        this.servico = servico;
        this.data = data;
        this.prioritario = cidadao.isPrioridadeLegal();
    }
    public String getProtocolo() { return protocolo; }
    public Cidadao getCidadao() { return cidadao; }
    public ServicoPublico getServico() { return servico; }
    public boolean isPrioritario() { return prioritario; }
}

// 4. Unidade do Poupatempo (Composição)
public class PoupatempoApp {
    private String nomeUnidade;
    private List<Agendamento> agendamentos = new ArrayList<>(); // Composição
    private int sequencialProtocolo = 1001;

    public PoupatempoApp(String nomeUnidade) {
        this.nomeUnidade = nomeUnidade;
    }

    public boolean realizarAgendamento(Cidadao cidadao, ServicoPublico servico, String data) {
        if (!servico.reservarVaga()) {
            System.out.printf("⛔ Agendamento RECUSADO: Vagas esgotadas para o serviço '%s'!%n", 
                              servico.getDescricao());
            return false;
        }

        String protocolo = String.format("SP-%s-2026-%d", servico.getCodigo(), sequencialProtocolo++);
        Agendamento agendamento = new Agendamento(protocolo, cidadao, servico, data);
        this.agendamentos.add(agendamento);

        String badgePrioridade = cidadao.isPrioridadeLegal() ? " ⭐ [PREFERENCIAL 60+]" : " [CONVENCIONAL]";
        System.out.printf("✅ Agendamento emitido! Protocolo: %s para %s%s%n", 
                          protocolo, cidadao.getNome(), badgePrioridade);
        return true;
    }

    public void emitirRelatorioDiario() {
        System.out.println("==================================================");
        System.out.printf("       POUPATEMPO DIGITAL - UNIDADE %s%n", nomeUnidade.toUpperCase());
        System.out.println("==================================================");
        System.out.printf(" Total de Agendamentos: %d%n", agendamentos.size());

        long prioritarios = agendamentos.stream().filter(Agendamento::isPrioritario).count();
        System.out.printf(" Atendimentos Preferenciais: %d | Convencionais: %d%n", 
                          prioritarios, agendamentos.size() - prioritarios);
        System.out.println("--------------------------------------------------");
        for (Agendamento a : agendamentos) {
            System.out.printf(" • %s | %-16s | Cidadão: %s%n", 
                              a.getProtocolo(), a.getServico().getDescricao(), a.getCidadao().getNome());
        }
        System.out.println("==================================================");
    }

    public static void main(String[] args) {
        PoupatempoApp unidadeCentral = new PoupatempoApp("Central Sé");

        ServicoPublico rg = new ServicoPublico("RG", "Emissão de RG", 2);
        ServicoPublico cnh = new ServicoPublico("CNH", "Renovação de CNH", 3);

        Cidadao c1 = new Cidadao("Dona Yolanda", "111.222.333-44", 72);
        Cidadao c2 = new Cidadao("Lucas Mendes", "555.666.777-88", 29);
        Cidadao c3 = new Cidadao("Marcos Silveira", "999.888.777-66", 35);

        unidadeCentral.realizarAgendamento(c1, rg, "15/10/2026");
        unidadeCentral.realizarAgendamento(c2, rg, "15/10/2026");
        unidadeCentral.realizarAgendamento(c3, rg, "15/10/2026"); // Deve falhar: limite de 2 vagas do RG

        unidadeCentral.realizarAgendamento(c3, cnh, "15/10/2026"); // Sucesso na CNH

        unidadeCentral.emitirRelatorioDiario();
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Emissor de Protocolos do Poupatempo',
      difficulty: 'Médio',
      mission: 'Crie uma classe GuichePoupatempo com atributos privados numeroGuiche e atendimentosRealizados (iniciado em 0). Crie o método boolean atenderCidadao(int limiteMaximo). A cada chamada, se atendimentosRealizados < limiteMaximo, incremente atendimentosRealizados e retorne true. Quando atingir o limite, retorne false sem ultrapassar o teto.',
      starterCode: `public class GuichePoupatempo {
    private int numeroGuiche;
    private int atendimentosRealizados;

    public GuichePoupatempo(int numeroGuiche) {
        this.numeroGuiche = numeroGuiche;
        this.atendimentosRealizados = 0;
    }

    public boolean atenderCidadao(int limiteMaximo) {
        // Implemente a verificação e incremento seguro
        return false;
    }

    public int getAtendimentosRealizados() { return atendimentosRealizados; }

    public static void main(String[] args) {
        GuichePoupatempo guiche = new GuichePoupatempo(1);
        System.out.println("Atendimento 1: " + guiche.atenderCidadao(2)); // true
        System.out.println("Atendimento 2: " + guiche.atenderCidadao(2)); // true
        System.out.println("Atendimento 3: " + guiche.atenderCidadao(2)); // false (limite atingido)
        System.out.println("Total atendido: " + guiche.getAtendimentosRealizados()); // 2
    }
}`,
      solutionCode: `public class GuichePoupatempo {
    private int numeroGuiche;
    private int atendimentosRealizados;

    public GuichePoupatempo(int numeroGuiche) {
        this.numeroGuiche = numeroGuiche;
        this.atendimentosRealizados = 0;
    }

    public boolean atenderCidadao(int limiteMaximo) {
        if (atendimentosRealizados < limiteMaximo) {
            atendimentosRealizados++;
            return true;
        }
        return false;
    }

    public int getAtendimentosRealizados() { return atendimentosRealizados; }

    public static void main(String[] args) {
        GuichePoupatempo guiche = new GuichePoupatempo(1);
        System.out.println("Atendimento 1: " + guiche.atenderCidadao(2));
        System.out.println("Atendimento 2: " + guiche.atenderCidadao(2));
        System.out.println("Atendimento 3: " + guiche.atenderCidadao(2));
        System.out.println("Total atendido: " + guiche.getAtendimentosRealizados());
    }
}`,
      hints: [
        'Teste a condição if (atendimentosRealizados < limiteMaximo).',
        'Se for verdade, incremente atendimentosRealizados++ e retorne true; senão, retorne false.'
      ],
      criteria: [
        'Respeita o teto de atendimentos sem permitir incrementos além do limite',
        'Retorna true para os atendimentos autorizados e false para o atendimento excedente',
        'Mantém os atributos encapsulados com modificador private'
      ],
      expectedOutput: `Atendimento 1: true\nAtendimento 2: true\nAtendimento 3: false\nTotal atendido: 2`
    }
  },

  // ==========================================
  // ETAPA 06 — EXCEÇÕES (🏪 SISTEMAS COMERCIAIS)
  // ==========================================
  {
    number: '06',
    title: 'Exceções',
    subtitle: 'Proteja seu sistema contra situações inesperadas e falhas do mundo real',
    description: 'Um sistema de caixa de loja não pode fechar sozinho quando o cliente digita um valor errado! Aprenda a interceptar e tratar situações anômalas com try-catch-finally, criar exceções personalizadas de negócio (EstoqueInsuficienteException) e disparar erros com throw.',
    theme: '🏪 Sistemas Comerciais',
    color: '#F43F5E', // Vermelho comercial
    estimatedMinutes: 30,
    relatedAreaId: 'excecoes',
    pedagogy: {
      whatIsIt: 'Uma exceção é um sinal de que algo deu errado durante a execução do programa (um produto não existe, o valor pago foi insuficiente, uma letra foi digitada onde se esperava número).',
      whatIsItFor: 'Serve para interceptar o erro no ar, exibir uma mensagem amigável para o atendente e continuar o sistema funcionando sem derrubar o caixa.',
      whenToUse: 'Sempre que você estiver lidando com entradas de usuários, regras de estoque, transações financeiras ou arquivos externos.',
      problemSolved: 'Impede o "crash" ou travamento súbito do programa com a famosa tela vermelha de erro no console.',
      analogy: 'Imagine o airbag de um carro ou o disjuntor elétrico da sua casa: se houver uma sobrecarga de energia, o disjuntor cai para proteger os aparelhos, em vez de queimar a casa inteira.'
    },
    skills: [
      'Blocos try, catch e finally para proteção e limpeza de recursos',
      'Diferença entre Checked Exceptions (exceções checadas em compilação) e Unchecked Exceptions',
      'Disparo manual de erros com throw para fazer valer regras de negócio',
      'Declaração de possíveis falhas na assinatura do método com throws',
      'Criação de classes de exceções customizadas herdando de Exception'
    ],
    codeSample: `public class CaixaLoja {
    public static void processarPagamento(double total, double valorPago) throws Exception {
        if (valorPago < total) {
            // Dispara um erro de negócio caso o valor seja menor
            throw new Exception("Valor insuficiente! Faltam R$ " + (total - valorPago));
        }
        double troco = valorPago - total;
        System.out.printf("Pagamento aprovado! Troco: R$ %.2f%n", troco);
    }
}`,
    quickTraining: [
      {
        id: 'treino-06-1',
        title: 'Tratamento de Código de Barras com Try-Catch',
        difficulty: 'Iniciante',
        story: 'O leitor de código de barras leu um texto corrompido "ABC12" quando o sistema esperava um código numérico.',
        task: 'Crie um método que tenta converter a String com Integer.parseInt(). Use try-catch para capturar NumberFormatException e exibir: "Código inválido! Digite apenas números."',
        hint: 'Use try { int codigo = Integer.parseInt(texto); } catch (NumberFormatException e) { ... }',
        solutionCode: `public class LeitorCodigoBarras {
    public static void lerCodigo(String entrada) {
        try {
            int codigo = Integer.parseInt(entrada);
            System.out.println("✅ Código de barras aceito: " + codigo);
        } catch (NumberFormatException e) {
            System.out.println("❌ Código inválido! Digite apenas números.");
        }
    }

    public static void main(String[] args) {
        lerCodigo("7891000"); // Válido
        lerCodigo("ABC12");   // Inválido
    }
}`
      },
      {
        id: 'treino-06-2',
        title: 'Exceção de Estoque Insuficiente',
        difficulty: 'Intermediário',
        story: 'Uma papelaria tem 5 cadernos em estoque. O cliente quer comprar 8. O sistema deve barrar a venda disparando uma exceção de negócio.',
        task: 'Crie uma classe EstoqueInsuficienteException extends Exception e dispare se a quantidade solicitada for maior que o estoque.',
        hint: 'class EstoqueInsuficienteException extends Exception { public EstoqueInsuficienteException(String msg) { super(msg); } }',
        solutionCode: `class EstoqueInsuficienteException extends Exception {
    public EstoqueInsuficienteException(String msg) {
        super(msg);
    }
}

public class ControleEstoque {
    private int estoque = 5;

    public void vender(int quantidade) throws EstoqueInsuficienteException {
        if (quantidade > estoque) {
            throw new EstoqueInsuficienteException(
                String.format("Estoque insuficiente! Disponível: %d, Solicitado: %d", estoque, quantidade)
            );
        }
        estoque -= quantidade;
        System.out.printf("Venda realizada! Estoque restante: %d%n", estoque);
    }

    public static void main(String[] args) {
        ControleEstoque loja = new ControleEstoque();
        try {
            loja.vender(8);
        } catch (EstoqueInsuficienteException e) {
            System.err.println("ALERTA DE ESTOQUE: " + e.getMessage());
        }
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-06-1',
        title: 'Tratamento de Código de Barras com Try-Catch',
        difficulty: 'Iniciante',
        story: 'Capture NumberFormatException ao ler um código de barras.',
        task: 'Implemente lerCodigo com try-catch.',
        hint: 'Use try { Integer.parseInt(s); } catch (NumberFormatException e) { ... }',
        solutionCode: `public class LeitorCodigoBarras {
    public static void lerCodigo(String s) {
        try {
            System.out.println("OK: " + Integer.parseInt(s));
        } catch (NumberFormatException e) {
            System.out.println("Inválido!");
        }
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Caixa Não Pode Quebrar"',
      story: 'No caixa de uma loja de conveniência movimentada, clientes e operadores frequentemente cometem erros de digitação: digitam letras no valor recebido, tentam passar preços zerados ou solicitam troco impossível. O sistema precisa processar uma lista de 4 transações problemáticas seguidas sem interromper a execução do programa em nenhuma delas.',
      task: 'Crie um loop que receba pares de valores (total, valorPago) onde algumas entradas são propositalmente erradas. Trate IllegalArgumentException e exiba uma mensagem de alerta mantendo o caixa aberto.',
      hints: [
        'Coloque o bloco try-catch dentro do laço de repetição.',
        'Se a exceção for capturada dentro do loop, o laço continua normalmente para o próximo cliente.'
      ],
      solutionCode: `public class CaixaResiliente {
    public static void registrarPagamento(double total, double valorPago) {
        if (total <= 0) {
            throw new IllegalArgumentException("Total da compra não pode ser zero ou negativo!");
        }
        if (valorPago < total) {
            throw new IllegalArgumentException(String.format("Faltam R$ %.2f para completar o pagamento!", total - valorPago));
        }
        System.out.printf("✅ Compra de R$ %.2f paga com R$ %.2f. Troco: R$ %.2f%n", 
                          total, valorPago, (valorPago - total));
    }

    public static void main(String[] args) {
        double[][] compras = {
            { 50.0, 60.0 },   // Sucesso
            { 80.0, 50.0 },   // Erro: valor insuficiente
            { -10.0, 20.0 },  // Erro: total negativo
            { 120.0, 150.0 }  // Sucesso
        };

        for (int i = 0; i < compras.length; i++) {
            try {
                registrarPagamento(compras[i][0], compras[i][1]);
            } catch (IllegalArgumentException e) {
                System.out.printf("⚠️ Cliente #%d: Operação recusada: %s%n", i + 1, e.getMessage());
            } finally {
                System.out.println("   [Caixa pronto para a próxima leitura]");
            }
        }
    }
}`
    },
    portfolioProject: {
      title: 'Sistema de Caixa & PDV Comercial com Exceções de Domínio',
      tagline: 'Mecanismo de Ponto de Venda (PDV) Resiliente com Tratamento de Falhas Comerciais',
      story: 'Desenvolva o mecanismo do Caixa Registrador de uma loja de departamentos. O sistema lida com validações reais: produto não cadastrado no catálogo (ProdutoNaoEncontradoException), tentativa de vender além do estoque da prateleira (EstoqueInsuficienteException) e valor de pagamento inferior ao total (PagamentoInvalidoException). O PDV captura cada falha com clareza sem quebrar o caixa.',
      githubReadmeSnippet: '### 🏪 Retail Point-of-Sale (PDV) Exception Architecture\nImplementação profissional de arquitetura defensiva em Java: criação de Checked Exceptions personalizadas para regras de comércio, blocos `try-catch-finally` estruturados e prevenção de inconsistências de estoque.',
      requirements: [
        'Criar exceções customizadas herdando de Exception',
        'Simular catálogo de produtos e controle de estoque de loja',
        'Validar estoque antes de debitar mercadoria',
        'Validar pagamento e calcular troco correto',
        'Garantir bloco finally para emitir comprovante e registrar auditoria'
      ],
      starterCode: `public class PdvLojaApp {
    public static void main(String[] args) {
        // TODO: Crie as exceções de negócio e simule as operações do caixa
    }
}`,
      fullSolutionCode: `import java.util.*;

// 1. Exceções de Domínio Comercial
class ProdutoNaoEncontradoException extends Exception {
    public ProdutoNaoEncontradoException(String msg) { super(msg); }
}

class EstoqueInsuficienteException extends Exception {
    public EstoqueInsuficienteException(String msg) { super(msg); }
}

class PagamentoInvalidoException extends Exception {
    public PagamentoInvalidoException(String msg) { super(msg); }
}

// 2. Modelo de Produto
class Produto {
    private String nome;
    private double preco;
    private int quantidadeEstoque;

    public Produto(String nome, double preco, int estoque) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = estoque;
    }
    public String getNome() { return nome; }
    public double getPreco() { return preco; }
    public int getEstoque() { return quantidadeEstoque; }
    public void debitarEstoque(int qtd) { this.quantidadeEstoque -= qtd; }
}

public class PdvLojaApp {
    private Map<String, Produto> inventario = new HashMap<>();

    public PdvLojaApp() {
        inventario.put("CAMISA", new Produto("Camisa Polo", 89.90, 4));
        inventario.put("TENIS", new Produto("Tênis Esportivo", 249.90, 2));
    }

    public void realizarVenda(String codigo, int quantidade, double valorEntregue) 
            throws ProdutoNaoEncontradoException, EstoqueInsuficienteException, PagamentoInvalidoException {
        
        Produto prod = inventario.get(codigo.toUpperCase());
        if (prod == null) {
            throw new ProdutoNaoEncontradoException("Produto com código '" + codigo + "' não existe no catálogo!");
        }

        if (quantidade > prod.getEstoque()) {
            throw new EstoqueInsuficienteException(
                String.format("Estoque insuficiente para '%s'! Disponível: %d | Solicitado: %d", 
                              prod.getNome(), prod.getEstoque(), quantidade)
            );
        }

        double valorTotal = prod.getPreco() * quantidade;
        if (valorEntregue < valorTotal) {
            throw new PagamentoInvalidoException(
                String.format("Valor pago insuficiente! Total: R$ %.2f | Entregue: R$ %.2f | Faltam: R$ %.2f", 
                              valorTotal, valorEntregue, (valorTotal - valorEntregue))
            );
        }

        // Se chegou até aqui, tudo está validado!
        prod.debitarEstoque(quantidade);
        double troco = valorEntregue - valorTotal;

        System.out.println("==================================================");
        System.out.println("             CUPOM FISCAL DE VENDA                ");
        System.out.println("==================================================");
        System.out.printf(" Item:       %-25s x%d%n", prod.getNome(), quantidade);
        System.out.printf(" Total:      R$ %.2f%n", valorTotal);
        System.out.printf(" Pago:       R$ %.2f%n", valorEntregue);
        System.out.printf(" Troco:      R$ %.2f%n", troco);
        System.out.println(" Status:     VENDA FINALIZADA COM SUCESSO!        ");
        System.out.println("==================================================");
    }

    public static void main(String[] args) {
        PdvLojaApp caixa = new PdvLojaApp();

        // Tentativa 1: Produto inexistente
        try {
            caixa.realizarVenda("MOCHILA", 1, 100.0);
        } catch (Exception e) {
            System.err.println("❌ Falha na Venda 1: " + e.getMessage());
        }

        // Tentativa 2: Estoque insuficiente (pedindo 5 camisas, só tem 4)
        try {
            caixa.realizarVenda("CAMISA", 5, 500.0);
        } catch (Exception e) {
            System.err.println("❌ Falha na Venda 2: " + e.getMessage());
        }

        // Tentativa 3: Venda com sucesso!
        try {
            caixa.realizarVenda("TENIS", 1, 300.0);
        } catch (Exception e) {
            System.err.println("❌ Falha na Venda 3: " + e.getMessage());
        }
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Caixa Seguro contra Valores Nulos e Negativos',
      difficulty: 'Médio',
      mission: 'Crie um método validarPreco(Double preco) que dispara IllegalArgumentException com a mensagem "Preço não pode ser nulo!" se o valor for null, ou "Preço deve ser positivo!" se for <= 0. Se estiver correto, retorne o próprio preço. No método main, capture a exceção e imprima a mensagem de erro.',
      starterCode: `public class ValidadorPreco {
    public static double validarPreco(Double preco) {
        // Implemente a validação e disparo de exceções
        return preco;
    }

    public static void main(String[] args) {
        try {
            validarPreco(-15.0);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro capturado: " + e.getMessage());
        }
    }
}`,
      solutionCode: `public class ValidadorPreco {
    public static double validarPreco(Double preco) {
        if (preco == null) {
            throw new IllegalArgumentException("Preço não pode ser nulo!");
        }
        if (preco <= 0) {
            throw new IllegalArgumentException("Preço deve ser positivo!");
        }
        return preco;
    }

    public static void main(String[] args) {
        try {
            validarPreco(-15.0);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro capturado: " + e.getMessage());
        }
    }
}`,
      hints: [
        'Faça a checagem de if (preco == null) primeiro para evitar NullPointerException.',
        'Em seguida, verifique if (preco <= 0).'
      ],
      criteria: [
        'Dispara IllegalArgumentException quando o preço for negativo',
        'Dispara IllegalArgumentException quando o preço for null',
        'Captura a exceção no main exibindo a mensagem descritiva'
      ],
      expectedOutput: `Erro capturado: Preço deve ser positivo!`
    }
  },

  // ==========================================
  // ETAPA 07 — ARQUIVOS / NIO.2 (📋 PORTAL DA TRANSPARÊNCIA)
  // ==========================================
  {
    number: '07',
    title: 'Arquivos',
    subtitle: 'Persistência no disco: registre dados permanentes e emita relatórios oficiais',
    description: 'Transforme código volátil em um sistema com registros duradouros e auditáveis! Use a moderna API NIO.2 (Path e Files) para registrar empenhos orçamentários, ler históricos de despesas da prefeitura com Files.readAllLines, registrar novas compras sem apagar o passado (APPEND) e exportar relatórios de prestação de contas em formato Markdown (.md).',
    theme: '📋 Portal da Transparência',
    color: '#0D9488', // Teal cívico / transparência pública
    estimatedMinutes: 35,
    relatedAreaId: 'arquivos',
    pedagogy: {
      whatIsIt: 'Persistência em arquivos é a capacidade do Java de gravar e ler dados diretamente no armazenamento físico (SSD/HD) do computador, garantindo que tudo continue existindo após o programa ser fechado.',
      whatIsItFor: 'Serve para guardar os livros fiscais e lançamentos de despesas públicas do município, emitir relatórios de auditoria e garantir que os dados governamentais fiquem permanentemente arquivados para fiscalização da sociedade.',
      whenToUse: 'Sempre que as informações precisarem ser salvas entre sessões de execução, para exportação de dados em lote (.csv, .md, .txt) ou registros de auditoria (logs fiscais).',
      problemSolved: 'Acaba com o risco de perda de dados voláteis da memória RAM e cria registros oficiais auditáveis que qualquer cidadão ou órgão de controle (Tribunal de Contas) pode inspecionar.',
      analogy: 'A memória RAM é como anotar as contas no quadro branco: ao passar o apagador no fim do dia, tudo some. Gravar em arquivo é como lavrar o diário oficial no livro de atas ou no cartório: fica registrado para sempre.'
    },
    skills: [
      'Representação moderna e imutável de caminhos com Path.of()',
      'Escrita atômica com Files.writeString() e StandardOpenOption.APPEND para acumular notas sem sobrescrever',
      'Leitura de registros orçamentários salvos com Files.readAllLines() e Files.lines()',
      'Verificação prévia de segurança e existência com Files.exists()',
      'Geração e exportação de relatórios auditáveis em Markdown (.md) e planilhas CSV'
    ],
    codeSample: `import java.nio.file.*;
import java.io.IOException;
import java.util.List;

Path arquivo = Path.of("empenhos_transparencia.csv");

// 1. Gravar novo empenho no disco sem apagar os anteriores (APPEND)
String novoRegistro = "2026-04-12;Saude;Medicamentos UBS;18500.00\\n";
Files.writeString(arquivo, novoRegistro, 
                  StandardOpenOption.CREATE, StandardOpenOption.APPEND);

// 2. Ler todos os empenhos arquivados
List<String> empenhos = Files.readAllLines(arquivo);
for (String e : empenhos) {
    System.out.println("📋 Registro: " + e);
}`,
    quickTraining: [
      {
        id: 'treino-07-1',
        title: 'Registrador de Empenho Orçamentário com Files.writeString',
        difficulty: 'Iniciante',
        story: 'A tesouraria municipal realizou uma compra de computadores escolares e precisa registrar essa despesa no livro contábil no disco.',
        task: 'Crie uma classe com o método registrarDespesa(String secretaria, double valor). Use Files.writeString com StandardOpenOption.CREATE e StandardOpenOption.APPEND para registrar a linha no arquivo despesas.log.',
        hint: 'Use Path.of("despesas.log") e adicione System.lineSeparator() ao final da linha.',
        solutionCode: `import java.nio.file.*;
import java.io.IOException;

public class RegistradorDespesa {
    public static void registrarDespesa(String secretaria, double valor) {
        Path arquivo = Path.of("despesas.log");
        String linha = String.format("%s - R$ %.2f%n", secretaria, valor);
        try {
            Files.writeString(arquivo, linha, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            System.out.println("✅ Empenho arquivado com sucesso no Portal!");
        } catch (IOException e) {
            System.err.println("Erro de gravação: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        registrarDespesa("Secretaria de Educação", 45000.00);
    }
}`
      },
      {
        id: 'treino-07-2',
        title: 'Auditor e Contador de Registros Públicos',
        difficulty: 'Intermediário',
        story: 'O Tribunal de Contas precisa auditar o arquivo registros_licitacao.txt e verificar quantos atos administrativos foram lavrados.',
        task: 'Verifique se o arquivo existe com Files.exists(). Se existir, leia todas as linhas com Files.readAllLines() e exiba a quantidade total de lançamentos.',
        hint: 'List<String> linhas = Files.readAllLines(caminho); int total = linhas.size();.',
        solutionCode: `import java.nio.file.*;
import java.io.IOException;
import java.util.List;

public class AuditorRegistros {
    public static int auditar(Path caminho) throws IOException {
        if (!Files.exists(caminho)) {
            System.out.println("⚠️ Nenhum registro contábil encontrado!");
            return 0;
        }
        List<String> linhas = Files.readAllLines(caminho);
        return linhas.size();
    }

    public static void main(String[] args) throws IOException {
        Path temp = Path.of("atos_teste.txt");
        Files.writeString(temp, "Ato #01: Reforma UBS\\nAto #02: Merenda Escolar\\nAto #03: Asfalto");
        System.out.println("Total de atos auditados: " + auditar(temp));
        Files.deleteIfExists(temp);
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-07-1',
        title: 'Registrador de Empenho Orçamentário com Files.writeString',
        difficulty: 'Iniciante',
        story: 'Grave um lançamento orçamentário no arquivo despesas.log com APPEND.',
        task: 'Implemente registrarDespesa(String sec, double v).',
        hint: 'Use StandardOpenOption.CREATE e StandardOpenOption.APPEND.',
        solutionCode: `import java.nio.file.*;
import java.io.IOException;

public class RegistradorDespesa {
    public static void registrarDespesa(String sec, double v) throws IOException {
        Files.writeString(Path.of("despesas.log"), sec + ": " + v + "\\n",
                          StandardOpenOption.CREATE, StandardOpenOption.APPEND);
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Auditoria de Dispensa de Licitação"',
      story: 'No portal de transparência municipal, compras de emergência e dispensa de licitação possuem um teto legal de R$ 50.000,00. A equipe de auditoria precisa inspecionar uma lista de lançamentos brutos no formato "Item;Secretaria;Valor" e gerar um arquivo de alerta chamado alertas_auditoria.log contendo apenas as compras que ultrapassaram o teto permitido.',
      task: 'Percorra um array com linhas de compras públicas. Quebre cada linha com split(";"), converta o valor para double, e se for > 50000.0, grave um aviso no arquivo de auditoria com a secretaria infratora.',
      hints: [
        'Use Double.parseDouble(partes[2]) para obter o valor monetário.',
        'Use Files.writeString(caminhoAlerta, aviso, StandardOpenOption.CREATE, StandardOpenOption.APPEND);'
      ],
      solutionCode: `import java.nio.file.*;
import java.io.IOException;

public class AuditoriaLicitacao {
    public static void main(String[] args) throws IOException {
        String[] compras = {
            "Compra de Papelaria;Educacao;12000.00",
            "Reforma Viaduto;Obras;148000.00", // Ultrapassa!
            "Insumos Hospitalares;Saude;35000.00",
            "Manutencao Iluminacao;Infraestrutura;72000.00" // Ultrapassa!
        };

        Path alertaArquivo = Path.of("alertas_auditoria.log");
        int alertasGerados = 0;

        for (String c : compras) {
            String[] partes = c.split(";");
            String item = partes[0];
            String secretaria = partes[1];
            double valor = Double.parseDouble(partes[2]);

            if (valor > 50000.00) {
                String alerta = String.format("🚨 ALERTA DE LICITAÇÃO: [%s] Item '%s' no valor de R$ %.2f excede o teto!%n", 
                                              secretaria, item, valor);
                Files.writeString(alertaArquivo, alerta, StandardOpenOption.CREATE, StandardOpenOption.APPEND);
                alertasGerados++;
            }
        }

        System.out.printf("Auditoria concluída! %d compras acima do teto registradas em alertas_auditoria.log.%n", 
                          alertasGerados);
        if (Files.exists(alertaArquivo)) {
            System.out.println(Files.readString(alertaArquivo));
            Files.deleteIfExists(alertaArquivo);
        }
    }
}`
    },
    portfolioProject: {
      title: 'Portal da Transparência: Auditoria de Gastos Públicos (PublicAudit Engine)',
      tagline: 'Sistema de Auditoria Fiscal e Exportação de Relatórios Orçamentários com Java NIO.2',
      story: 'Construa o motor de persistência e prestação de contas do Portal da Transparência Municipal. O sistema processa lançamentos de despesas públicas (Data, Secretaria, Favorecido, Valor e Justificativa), grava as notas de empenho em disco usando Files.writeString com APPEND sem sobrescrever os registros anteriores, e gera um balancete consolidado em formato Markdown (prestacao_contas_2026.md) calculando o total investido por secretaria (Saúde, Educação, Obras).',
      githubReadmeSnippet: '### 📋 PublicAudit Engine - Portal da Transparência (Java NIO.2)\nSistema governamental de auditoria cívica e persistência em arquivos com Java moderno (NIO.2): manipulação atômica de arquivos via `Path` e `Files`, gravação cumulativa com `StandardOpenOption.APPEND`, leitura estruturada e geração automática de relatórios de auditoria em Markdown (.md).',
      requirements: [
        'Gravar registros de empenho no arquivo "empenhos_municipais.csv" com APPEND',
        'Ler e auditar os registros salvos com Files.readAllLines()',
        'Calcular o somatório total de gastos do município e por secretaria',
        'Exportar automaticamente um relatório oficial em Markdown ("relatorio_auditoria.md")',
        'Tratamento preventivo de falhas de I/O com blocos try-catch estruturados'
      ],
      starterCode: `public class PortalTransparenciaApp {
    public static void main(String[] args) {
        // TODO: Implemente a persistência de empenhos e geração do balancete em Markdown
    }
}`,
      fullSolutionCode: `import java.nio.file.*;
import java.io.IOException;
import java.util.*;

record EmpenhoPublico(String data, String secretaria, String credor, double valor) {}

public class PortalTransparenciaApp {
    private static final Path ARQUIVO_EMPENHOS = Path.of("empenhos_municipais.csv");
    private static final Path ARQUIVO_RELATORIO = Path.of("relatorio_transparencia.md");

    public static void registrarEmpenho(EmpenhoPublico e) {
        String linhaCsv = String.format("%s;%s;%s;%.2f%n", 
                                        e.data(), e.secretaria(), e.credor(), e.valor());
        try {
            Files.writeString(ARQUIVO_EMPENHOS, linhaCsv, 
                              StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            System.out.printf("✅ Empenho registrado: [%s] R$ %.2f (%s)%n", 
                              e.secretaria(), e.valor(), e.credor());
        } catch (IOException err) {
            System.err.println("❌ Falha ao gravar empenho: " + err.getMessage());
        }
    }

    public static void gerarBalanceteTransparencia() {
        if (!Files.exists(ARQUIVO_EMPENHOS)) {
            System.out.println("Nenhum lançamento encontrado para gerar o balancete.");
            return;
        }

        try {
            List<String> linhas = Files.readAllLines(ARQUIVO_EMPENHOS);
            double totalGeral = 0.0;
            Map<String, Double> gastosPorSecretaria = new LinkedHashMap<>();

            for (String l : linhas) {
                if (l.trim().isEmpty()) continue;
                String[] p = l.split(";");
                if (p.length >= 4) {
                    String sec = p[1];
                    double valor = Double.parseDouble(p[3].replace(",", "."));
                    totalGeral += valor;
                    gastosPorSecretaria.put(sec, gastosPorSecretaria.getOrDefault(sec, 0.0) + valor);
                }
            }

            // Monta o Relatório Oficial em Markdown
            StringBuilder md = new StringBuilder();
            md.append("# 🏛️ PREFEITURA MUNICIPAL - PORTAL DA TRANSPARÊNCIA\\n");
            md.append("## Balancete Oficial de Auditoria Contábil (Exercício 2026)\\n\\n");
            md.append(String.format("**Total Geral de Despesas Empenhadas:** R$ %,.2f\\n\\n", totalGeral));
            md.append("### Detalhamento por Secretaria\\n\\n");
            md.append("| Secretaria | Total Empenhado (R$) | Participação |\\n");
            md.append("| :--- | :--- | :--- |\\n");

            for (Map.Entry<String, Double> entry : gastosPorSecretaria.entrySet()) {
                double perc = (entry.getValue() / totalGeral) * 100.0;
                md.append(String.format("| %s | R$ %,.2f | %.1f%% |%n", 
                                        entry.getKey(), entry.getValue(), perc));
            }

            md.append("\\n*Relatório emitido automaticamente em conformidade com a Lei de Acesso à Informação.*\\n");

            Files.writeString(ARQUIVO_RELATORIO, md.toString());
            System.out.println("\\n📄 Relatório Markdown exportado com sucesso: 'relatorio_transparencia.md'!");

        } catch (IOException err) {
            System.err.println("❌ Falha na geração do relatório: " + err.getMessage());
        }
    }

    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("     PORTAL DA TRANSPARÊNCIA - SISTEMA DE AUDITORIA");
        System.out.println("==================================================");

        // Simulando lançamentos contábeis
        registrarEmpenho(new EmpenhoPublico("2026-03-01", "Saúde", "Distribuidora FarmaBR", 145000.00));
        registrarEmpenho(new EmpenhoPublico("2026-03-02", "Educação", "Editora Livro Aberto", 82000.00));
        registrarEmpenho(new EmpenhoPublico("2026-03-03", "Infraestrutura", "Pavimentadora Vias do Sol", 210000.00));
        registrarEmpenho(new EmpenhoPublico("2026-03-04", "Saúde", "Laboratório Diagnóstico Sul", 48000.00));

        gerarBalanceteTransparencia();
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Gerador de Despachos do Diário Oficial',
      difficulty: 'Médio',
      mission: 'Crie uma classe com o método estático lerArquivoOuPadrao(Path caminho). Se o arquivo existir no disco, leia seu conteúdo com Files.readString(caminho). Se não existir, crie o arquivo gravando o texto padrão "TRANSPARÊNCIA PÚBLICA ATIVA" e retorne essa mesma string.',
      starterCode: `import java.nio.file.*;
import java.io.IOException;

public class LeitorResiliente {
    public static String lerArquivoOuPadrao(Path caminho) {
        // Implemente a verificação com Files.exists e gravação/leitura
        return "";
    }

    public static void main(String[] args) {
        Path teste = Path.of("status_transparencia.txt");
        System.out.println("Resultado: " + lerArquivoOuPadrao(teste));
        try { Files.deleteIfExists(teste); } catch (Exception e) {}
    }
}`,
      solutionCode: `import java.nio.file.*;
import java.io.IOException;

public class LeitorResiliente {
    public static String lerArquivoOuPadrao(Path caminho) {
        try {
            if (Files.exists(caminho)) {
                return Files.readString(caminho);
            } else {
                String padrao = "TRANSPARÊNCIA PÚBLICA ATIVA";
                Files.writeString(caminho, padrao);
                return padrao;
            }
        } catch (IOException e) {
            return "Erro de I/O";
        }
    }

    public static void main(String[] args) {
        Path teste = Path.of("status_transparencia.txt");
        System.out.println("Resultado: " + lerArquivoOuPadrao(teste));
        try { Files.deleteIfExists(teste); } catch (Exception e) {}
    }
}`,
      hints: [
        'Use Files.exists(caminho) para verificar se o arquivo já está no disco.',
        'Use Files.readString(caminho) para ler e Files.writeString(caminho, texto) para gravar.'
      ],
      criteria: [
        'Verifica a existência do arquivo com Files.exists',
        'Grava o texto padrão caso o arquivo não exista',
        'Retorna a string esperada sem quebrar a execução'
      ],
      expectedOutput: `Resultado: TRANSPARÊNCIA PÚBLICA ATIVA`
    }
  },

  // ==========================================
  // ETAPA 08 — GENERICS, LAMBDAS, STREAMS E OPTIONAL (📊 CENSO / VACINÔMETRO NACIONAL)
  // ==========================================
  {
    number: '08',
    title: 'Avançado',
    subtitle: 'Processe grandes volumes demográficos e de saúde com Streams, Lambdas e Optional',
    description: 'O padrão de ouro do Java moderno em análise de dados em larga escala! Deixe para trás laços for manuais e acumuladores imperativos. Processe estatísticas do Censo e do Vacinômetro Nacional com a Stream API funcional (filter, map, sorted, reduce, Collectors), expressões lambda concisas e proteção absoluta contra NullPointerException usando Optional.',
    theme: '📊 Censo / Vacinômetro Nacional',
    color: '#E11D48', // Carmim estatístico / nacional
    estimatedMinutes: 40,
    relatedAreaId: 'avancado',
    pedagogy: {
      whatIsIt: 'A Stream API é uma ferramenta funcional que processa listas de dados como uma esteira de dados. Em vez de escrever laços for manuais dizendo como iterar passo a passo, você escreve de forma declarativa o que quer filtrar, transformar e somar.',
      whatIsItFor: 'Serve para analisar grandes bases de dados governamentais — como 5.570 municípios do Censo do IBGE ou milhões de doses de vacinas aplicadas — com altíssima performance, legibilidade e elegância.',
      whenToUse: 'Sempre que precisar extrair relatórios, médias, filtros múltiplos, agrupamentos por região ou buscar registros de destaque em grandes coleções.',
      problemSolved: 'Elimina centenas de linhas de código repetitivo de loops e variáveis acumuladoras temporárias. E com Optional, você nunca mais terá o sistema derrubado por NullPointerException ao buscar um registro que não existe.',
      analogy: 'Imagine uma esteira de triagem de um centro de distribuição nacional do Ministério da Saúde: os dados das cidades passam pela esteira, o leitor óptico (filter) seleciona as cidades com baixa cobertura, o sistema de etiquetagem (map) adiciona o alerta de reforço, e o empacotador final (reduce/collect) gera a planilha de distribuição de imunizantes.'
    },
    skills: [
      'Expressões Lambda e referências de métodos concisas (Municipio::getCobertura, String::toUpperCase)',
      'Operações intermediárias de Stream: filter (seleção), map (transformação), sorted (ordenação com Comparator)',
      'Operações terminais: toList(), count(), mapToDouble().average(), reduce() e Collectors.groupingBy()',
      'Uso legítimo de Optional<T> para representar valores que podem ou não existir sem retornar null',
      'Modelagem imutável com Java Records para entidades de dados demográficos'
    ],
    codeSample: `import java.util.*;

record Municipio(String nome, String uf, int populacao, double coberturaVacinal) {}

List<Municipio> cidades = List.of(
    new Municipio("Campinas", "SP", 1200000, 88.5),
    new Municipio("Niterói", "RJ", 515000, 92.0),
    new Municipio("Sobral", "CE", 210000, 78.4)
);

// Pipeline com Stream: Cidades com cobertura >= 80%, ordenadas por cobertura decrescente
List<String> destaque = cidades.stream()
    .filter(c -> c.coberturaVacinal() >= 80.0)
    .sorted(Comparator.comparingDouble(Municipio::coberturaVacinal).reversed())
    .map(c -> String.format("%s/%s (%.1f%%)", c.nome(), c.uf(), c.coberturaVacinal()))
    .toList();

System.out.println("💉 Cidades Modelo de Vacinação: " + destaque);`,
    quickTraining: [
      {
        id: 'treino-08-1',
        title: 'Filtro de Municípios Críticos no Vacinômetro com Stream',
        difficulty: 'Iniciante',
        story: 'O Ministério da Saúde quer identificar com rapidez apenas os municípios cuja taxa de imunização esteja abaixo de 70% para envio de lotes de emergência.',
        task: 'Dada a lista List<Double> taxas = List.of(85.0, 62.5, 94.0, 58.0, 79.5);, use .stream().filter(t -> t < 70.0).sorted().toList() e exiba as taxas críticas.',
        hint: 'Use a operação intermediária .filter(t -> t < 70.0) e .sorted().',
        solutionCode: `import java.util.List;

public class VacinometroCritico {
    public static void main(String[] args) {
        List<Double> taxas = List.of(85.0, 62.5, 94.0, 58.0, 79.5);

        List<Double> criticas = taxas.stream()
            .filter(t -> t < 70.0)
            .sorted()
            .toList();

        System.out.println("🚨 Municípios com cobertura crítica (< 70%): " + criticas);
    }
}`
      },
      {
        id: 'treino-08-2',
        title: 'Busca Segura do Município Destaque com Optional',
        difficulty: 'Intermediário',
        story: 'Encontre a cidade com a maior taxa de vacinação do estado sem risco de NullPointerException caso a base de dados esteja temporariamente vazia.',
        task: 'Dada uma lista de taxas, use .stream().max(Double::compareTo) que retorna um Optional<Double>. Exiba o valor com ifPresentOrElse().',
        hint: 'Optional<Double> maximo = taxas.stream().max(Double::compareTo); maximo.ifPresentOrElse(...);',
        solutionCode: `import java.util.*;

public class DestaqueVacinalOptional {
    public static void main(String[] args) {
        List<Double> coberturas = List.of(76.5, 98.2, 84.0, 91.5);

        Optional<Double> maiorIndice = coberturas.stream()
            .max(Double::compareTo);

        maiorIndice.ifPresentOrElse(
            taxa -> System.out.printf("🏆 Maior cobertura vacinal registrada: %.1f%%%n", taxa),
            () -> System.out.println("Nenhum dado registrado na base do Ministério.")
        );
    }
}`
      }
    ],
    funExercises: [
      {
        id: 'treino-08-1',
        title: 'Filtro de Municípios Críticos no Vacinômetro com Stream',
        difficulty: 'Iniciante',
        story: 'Filtre índices de vacinação abaixo de 70% com Streams.',
        task: 'Use stream().filter(t -> t < 70.0).toList().',
        hint: 'Use a operação intermediária .filter.',
        solutionCode: `import java.util.List;

public class VacinometroCritico {
    public static void main(String[] args) {
        List<Double> t = List.of(85.0, 62.5, 94.0, 58.0);
        System.out.println(t.stream().filter(x -> x < 70.0).toList());
    }
}`
      }
    ],
    logicalChallenge: {
      title: 'Desafio Lógico: "Painel Epidemiológico do Estado"',
      story: 'A Secretaria Estadual de Saúde monitora municípios com população e total de doses aplicadas. O gestor precisa de um resumo em tempo real: (1) calcular a média estadual de doses aplicadas por município usando mapToInt().average(), e (2) verificar com anyMatch se algum município aplicou menos de 5.000 doses para receber apoio logístico.',
      task: 'Crie uma lista com objetos MunicipioRecord, use Streams para calcular a média e use anyMatch para emitir um alerta sanitário se houver cidade com menos de 5000 doses.',
      hints: [
        'Use lista.stream().mapToInt(MunicipioRecord::doses).average().orElse(0.0) para calcular a média.',
        'Use lista.stream().anyMatch(m -> m.doses() < 5000) para retornar um booleano de alerta.'
      ],
      solutionCode: `import java.util.*;

record MunicipioRecord(String nome, int doses) {}

public class PainelEpidemiologico {
    public static void main(String[] args) {
        List<MunicipioRecord> cidades = List.of(
            new MunicipioRecord("Campinas", 45000),
            new MunicipioRecord("Santos", 28000),
            new MunicipioRecord("Ribeirão Preto", 32000),
            new MunicipioRecord("Vila Esperança", 3800) // Abaixo de 5000!
        );

        // 1. Média de doses aplicadas
        double mediaDoses = cidades.stream()
            .mapToInt(MunicipioRecord::doses)
            .average()
            .orElse(0.0);

        // 2. Checagem de alerta com anyMatch
        boolean precisaApoio = cidades.stream()
            .anyMatch(m -> m.doses() < 5000);

        System.out.printf("📊 Média de vacinas aplicadas por município: %,.0f doses%n", mediaDoses);
        System.out.println("🚨 Há municípios que necessitam de apoio emergencial? " + 
                           (precisaApoio ? "SIM (Ação Prioritária Necessária)" : "NÃO (Metas Cumpridas)"));
    }
}`
    },
    portfolioProject: {
      title: 'Vacinômetro & Censo Nacional Analytics Engine',
      tagline: 'Motor Funcional de Análise de Dados Demográficos e Imunização Pública com Java Streams & Optional',
      story: 'Construa o motor analítico do Vacinômetro Nacional do Ministério da Saúde. O sistema processa dados demográficos de múltiplos municípios (Nome, UF, População, Doses Aplicadas e Meta Vacinal). Utilizando o paradigma funcional da Stream API, o motor calcula a taxa percentual de cobertura de cada cidade, filtra os municípios abaixo da meta de segurança, ranqueia os municípios modelos do maior para o menor índice e localiza com Optional a cidade campeã de imunização com total proteção contra falhas de referência nula.',
      githubReadmeSnippet: '### 📊 Vacinômetro & Censo Nacional Analytics (Java Streams & Lambdas)\nProcessador declarativo de métricas de saúde pública e demografia utilizando Java Records, Streams (`filter`, `map`, `sorted`, `reduce`) e `Optional` para cálculo de médias, identificação de municípios críticos e premiação sanitária sem loops tradicionais.',
      requirements: [
        'Utilizar Java Record para modelar a entidade Município de forma imutável',
        'Processar dados com Stream API sem recorrer a laços for e ifs acumuladores imperativos',
        'Calcular cobertura média nacional, total de doses e municípios acima da meta',
        'Utilizar Optional para encontrar o município líder com segurança contra NullPointerException',
        'Código conciso com method references (ex: Municipio::dosesAplicadas)'
      ],
      starterCode: `public class VacinometroApp {
    public static void main(String[] args) {
        // TODO: Crie a lista de municípios e processe com Streams e Optional
    }
}`,
      fullSolutionCode: `import java.util.*;
import java.util.stream.Collectors;

record CidadeCenso(String nome, String uf, int populacao, int dosesAplicadas, int metaDoses) {
    public double getPercentualCobertura() {
        return ((double) dosesAplicadas / metaDoses) * 100.0;
    }
}

public class VacinometroApp {
    public static void main(String[] args) {
        List<CidadeCenso> dadosNacionais = List.of(
            new CidadeCenso("Curitiba", "PR", 1963000, 1850000, 1900000),
            new CidadeCenso("Belo Horizonte", "MG", 2530000, 2400000, 2500000),
            new CidadeCenso("Florianópolis", "SC", 516000, 510000, 500000),
            new CidadeCenso("Salvador", "BA", 2900000, 2100000, 2800000),
            new CidadeCenso("Fortaleza", "CE", 2700000, 2550000, 2600000)
        );

        System.out.println("==================================================");
        System.out.println("     MINISTÉRIO DA SAÚDE - VACINÔMETRO NACIONAL   ");
        System.out.println("==================================================");

        // 1. Ranking de Municípios por Cobertura Decrescente
        List<String> ranking = dadosNacionais.stream()
            .sorted(Comparator.comparingDouble(CidadeCenso::getPercentualCobertura).reversed())
            .map(c -> String.format("%-15s/%s | Doses: %,9d | Cobertura: %6.1f%%", 
                                    c.nome(), c.uf(), c.dosesAplicadas(), c.getPercentualCobertura()))
            .toList();

        System.out.println("🏆 RANKING NACIONAL DE COBERTURA VACINAL:");
        ranking.forEach(r -> System.out.println("  • " + r));

        // 2. Encontrar o Município Campeão com Optional
        Optional<CidadeCenso> lider = dadosNacionais.stream()
            .max(Comparator.comparingDouble(CidadeCenso::getPercentualCobertura));

        System.out.println("--------------------------------------------------");
        lider.ifPresent(c -> 
            System.out.printf("🌟 MUNICÍPIO LÍDER NACIONAL: %s/%s atingiu %.1f%% da meta vacinal!%n", 
                              c.nome(), c.uf(), c.getPercentualCobertura())
        );

        // 3. Indicadores Gerais Consolidados com Streams
        double mediaNacional = dadosNacionais.stream()
            .mapToDouble(CidadeCenso::getPercentualCobertura)
            .average()
            .orElse(0.0);

        long totalDosesNacionais = dadosNacionais.stream()
            .mapToLong(CidadeCenso::dosesAplicadas)
            .sum();

        long cidadesAcimaNoventa = dadosNacionais.stream()
            .filter(c -> c.getPercentualCobertura() >= 95.0)
            .count();

        System.out.println("--------------------------------------------------");
        System.out.printf("Média Nacional de Cobertura:   %.2f%%%n", mediaNacional);
        System.out.printf("Total de Doses Aplicadas:      %,d doses%n", totalDosesNacionais);
        System.out.printf("Cidades com Cobertura >= 95%%:  %d municípios%n", cidadesAcimaNoventa);
        System.out.println("==================================================");
    }
}`
    },
    challengeLab: {
      title: 'Laboratório Desafio: O Somador de Doses com Stream API',
      difficulty: 'Avançado',
      mission: 'Dada uma lista de doses diárias aplicadas por um posto de saúde: List<Integer> doses = List.of(120, 450, 80, 600, 250);. Crie um método com Stream API que filtra apenas os dias de alta demanda (doses > 100), calcula a soma total usando mapToInt(Integer::intValue).sum() e retorna o valor inteiro. Imprima o resultado no console.',
      starterCode: `import java.util.List;

public class SomadorStream {
    public static int somarDosesAltas(List<Integer> doses) {
        // Implemente com doses.stream().filter(...).mapToInt(...).sum()
        return 0;
    }

    public static void main(String[] args) {
        List<Integer> doses = List.of(120, 450, 80, 600, 250);
        System.out.println("Total de doses de alta demanda: " + somarDosesAltas(doses));
        // Doses > 100: 120, 450, 600, 250 -> Total = 1420
    }
}`,
      solutionCode: `import java.util.List;

public class SomadorStream {
    public static int somarDosesAltas(List<Integer> doses) {
        if (doses == null || doses.isEmpty()) return 0;

        return doses.stream()
            .filter(d -> d != null && d > 100)
            .mapToInt(Integer::intValue)
            .sum();
    }

    public static void main(String[] args) {
        List<Integer> doses = List.of(120, 450, 80, 600, 250);
        System.out.println("Total de doses de alta demanda: " + somarDosesAltas(doses));
    }
}`,
      hints: [
        'Use .filter(d -> d > 100) para selecionar apenas dias com mais de 100 doses.',
        'Use .mapToInt(Integer::intValue).sum() para obter a soma direta sem loops manuais.'
      ],
      criteria: [
        'Filtra os elementos estritamente maiores que 100 (descarta o 80)',
        'Soma 120 + 450 + 600 + 250 totalizando 1420',
        'Usa operações de Stream API de forma declarativa'
      ],
      expectedOutput: `Total de doses de alta demanda: 1420`
    }
  }
];
