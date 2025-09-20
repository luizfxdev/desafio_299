# 🔥 A Sombra Rubra do Guardião Demoníaco

## 📖 Descrição do Projeto

No ápice do Grande Torneio Intergaláctico de Ordenação, um guardião ancestral, envolto em chamas vermelhas e sombras, desafia guerreiros de todas as galáxias para derrotá-lo em um duelo de inteligência. Sua força está na manipulação do caos: listas de números e palavras misturados que só podem ser derrotadas pelo verdadeiro mestre das ordenações.

Este é um desafio interativo de programação que testa suas habilidades de ordenação através de uma interface web moderna e imersiva.

## 🎯 Objetivo

O guerreiro que se impõe diante da criatura precisa provar sua maestria ordenando corretamente a lista, seguindo regras específicas. Qualquer erro resultará em ser engolido pela tempestade rubra!

## ⚔️ Regras do Desafio

1. **Números primeiro**: Todos os números devem aparecer no início, ordenados em **ordem crescente**
2. **Palavras depois**: As palavras vêm em seguida, ordenadas **alfabeticamente**
3. **Diferenciação de case**: Palavras com **maiúsculas vêm primeiro** que minúsculas na ordenação alfabética

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Arquivo de vídeo `background.mp4` (opcional, para o fundo animado)

### Estrutura de Arquivos
```
projeto/
├── index.html          # Interface principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica do desafio
├── README.md           # Este arquivo
└── assets/
    └── background.mp4  # Vídeo de fundo (coloque aqui)
```

### Executando o Projeto
1. Clone ou baixe todos os arquivos
2. Coloque seu vídeo de background na pasta `assets/` com o nome `background.mp4`
3. Abra o arquivo `index.html` em seu navegador
4. Digite os elementos no campo de entrada e clique em **ORDENAR**

## 💡 Exemplos de Entrada

### Exemplo 1: Lista Mista Básica
**Entrada:**
```
banana, apple, 3, 2, Cherry, apple, 1
```

**Saída Esperada:**
```
[1, 2, 3, 'Cherry', 'apple', 'apple', 'banana']
```

**Explicação:**
- Números: `1, 2, 3` (ordem crescente)
- Palavras: `'Cherry'` (maiúscula primeiro), depois `'apple', 'apple', 'banana'` (ordem alfabética)

---

### Exemplo 2: Números Decimais e Negativos
**Entrada:**
```
Zebra, -5, apple, 3.14, Cherry, -10, banana, 0
```

**Saída Esperada:**
```
[-10, -5, 0, 3.14, 'Cherry', 'Zebra', 'apple', 'banana']
```

**Explicação:**
- Números: `-10, -5, 0, 3.14` (ordem crescente, incluindo negativos e decimais)
- Palavras: `'Cherry'` (C maiúsculo), `'Zebra'` (Z maiúsculo), depois `'apple', 'banana'` (minúsculas)

---

### Exemplo 3: Case Sensitivity Complexo
**Entrada:**
```
dog, 42, Apple, cat, 7, Banana, zebra, 1, Cat
```

**Saída Esperada:**
```
[1, 7, 42, 'Apple', 'Banana', 'Cat', 'cat', 'dog', 'zebra']
```

**Explicação:**
- Números: `1, 7, 42` (ordem crescente)
- Palavras com maiúsculas primeiro: `'Apple', 'Banana', 'Cat'` (ordem alfabética)
- Palavras minúsculas depois: `'cat', 'dog', 'zebra'` (ordem alfabética)

---

### Exemplo 4: Apenas Números
**Entrada:**
```
100, -25, 0, 3.5, -1, 50
```

**Saída Esperada:**
```
[-25, -1, 0, 3.5, 50, 100]
```

**Explicação:**
- Apenas números presentes, ordenados em ordem crescente
- Inclui negativos, zero e decimais

---

### Exemplo 5: Apenas Palavras
**Entrada:**
```
Zebra, apple, Banana, cherry, Apple, dog
```

**Saída Esperada:**
```
['Apple', 'Banana', 'Zebra', 'apple', 'cherry', 'dog']
```

**Explicação:**
- Maiúsculas primeiro: `'Apple', 'Banana', 'Zebra'`
- Minúsculas depois: `'apple', 'cherry', 'dog'`

## 🎨 Características Técnicas

### Interface
- **Design responsivo** que se adapta a diferentes tamanhos de tela
- **Tema demoníaco** com cores vermelhas e animações de fogo
- **Container posicionado à esquerda** para melhor visualização
- **Botões com efeito glow** animado
- **Vídeo de background** em tela cheia

### Funcionalidades
- **Validação passo-a-passo** do processo de ordenação
- **Tratamento de erros** robusto
- **Suporte a números decimais e negativos**
- **Interface intuitiva** com feedback visual
- **Scrollbar personalizada** na seção de resultados

### Tecnologias
- **HTML5** semântico e acessível
- **CSS3** com animações e responsividade
- **JavaScript ES6+** com funções puras
- **Design patterns** bem estruturados

## 🔧 Personalização

### Alterando o Vídeo de Fundo
1. Substitua o arquivo `assets/background.mp4`
2. Recomendado: Resolução 1920x1080 ou superior
3. Formato: MP4 com codificação H.264

### Modificando as Cores
- Altere as variáveis de cor no arquivo `styles.css`
- Principais cores: `#ff0000` (vermelho principal), `#111` (fundo escuro)

### Adicionando Novos Exemplos
- Modifique o placeholder no arquivo `script.js`
- Linha: `dataInput.placeholder = "..."`

## 🐛 Solução de Problemas

### Vídeo não aparece
- Verifique se o arquivo `background.mp4` está na pasta `assets/`
- Confirme se o navegador suporta o formato MP4
- Alguns navegadores podem bloquear autoplay, isso é normal

### Layout quebrado em mobile
- Verifique se as media queries estão funcionando
- Teste em diferentes dispositivos e navegadores

### Botões não funcionam
- Verifique se o arquivo `script.js` está carregando corretamente
- Abra o console do navegador (F12) para ver possíveis erros

## 🎮 Como Jogar

1. **Digite os elementos** separados por vírgula no campo de entrada
2. **Clique em ORDENAR** para processar os dados
3. **Veja o resultado** com explicação passo-a-passo
4. **Clique em RETORNAR** para tentar novamente
5. **Desafie-se** com listas cada vez mais complexas!

## 📝 Licença

Este projeto é desenvolvido para fins educacionais e de demonstração.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Adicionar novos recursos
- Melhorar a documentação

---

**🔥 Que a força do guardião esteja com você, guerreiro! Derrote o caos e traga ordem ao universo!**
