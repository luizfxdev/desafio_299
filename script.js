// Elementos do DOM
const dataInput = document.getElementById('data-input');
const sortBtn = document.getElementById('sort-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Estado inicial
let originalInput = '';
let isResultVisible = false;

// Event Listeners
sortBtn.addEventListener('click', handleSort);
returnBtn.addEventListener('click', handleReturn);
dataInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    handleSort();
  }
});

/**
 * Função principal para processar e ordenar os dados
 */
function handleSort() {
  const inputValue = dataInput.value.trim();

  // Validação de entrada
  if (!inputValue) {
    showError('⚠️ Digite alguns elementos para derrotar o guardião!');
    return;
  }

  // Armazena o input original para o botão retornar
  originalInput = inputValue;

  try {
    // Parse dos dados de entrada
    const parsedData = parseInputData(inputValue);

    // Executa a ordenação com passos detalhados
    const sortingSteps = performDemonicSort(parsedData);

    // Exibe o resultado detalhado
    displayResult(parsedData, sortingSteps);

    // Mostra a seção de resultado e ajusta scroll
    showResultSection();
  } catch (error) {
    showError(`❌ Erro ao processar dados: ${error.message}`);
  }
}

/**
 * Função para retornar ao estado inicial
 */
function handleReturn() {
  dataInput.value = '';
  hideResultSection();
  dataInput.focus();
}

/**
 * Parse dos dados de entrada (strings e números)
 */
function parseInputData(input) {
  const elements = input.split(',').map(item => item.trim());
  const parsedElements = [];

  elements.forEach(element => {
    // Verifica se é um número
    const numValue = parseFloat(element);
    if (!isNaN(numValue) && isFinite(numValue)) {
      parsedElements.push(numValue);
    } else if (element.length > 0) {
      // É uma string
      parsedElements.push(element);
    }
  });

  if (parsedElements.length === 0) {
    throw new Error('Nenhum elemento válido encontrado');
  }

  return parsedElements;
}

/**
 * Função principal de ordenação seguindo as regras do desafio
 */
function performDemonicSort(data) {
  const steps = [];

  // Passo 1: Separação de números e strings
  const numbers = data.filter(item => typeof item === 'number');
  const strings = data.filter(item => typeof item === 'string');

  steps.push({
    title: '🔥 Passo 1: Separação dos Elementos',
    description: 'O guardião separa números de palavras',
    numbers: [...numbers],
    strings: [...strings]
  });

  // Passo 2: Ordenação dos números (crescente)
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  steps.push({
    title: '🔢 Passo 2: Ordenação dos Números',
    description: 'Números ordenados em ordem crescente',
    data: [...sortedNumbers]
  });

  // Passo 3: Ordenação das strings (alfabética, diferenciando maiúsculas)
  const sortedStrings = [...strings].sort((a, b) => {
    // Primeiro ordena por case (maiúsculas primeiro)
    const aIsUpper = a[0] === a[0].toUpperCase();
    const bIsUpper = b[0] === b[0].toUpperCase();

    if (aIsUpper && !bIsUpper) return -1;
    if (!aIsUpper && bIsUpper) return 1;

    // Se ambas são maiúsculas ou minúsculas, ordena alfabeticamente
    return a.localeCompare(b);
  });

  steps.push({
    title: '🔤 Passo 3: Ordenação das Palavras',
    description: 'Palavras ordenadas alfabeticamente (maiúsculas primeiro)',
    data: [...sortedStrings]
  });

  // Passo 4: Combinação final
  const finalResult = [...sortedNumbers, ...sortedStrings];

  steps.push({
    title: '⚔️ Passo 4: Combinação Final',
    description: 'Números primeiro, depois palavras - A vitória está próxima!',
    data: finalResult
  });

  return steps;
}

/**
 * Exibe o resultado detalhado na interface
 */
function displayResult(originalData, steps) {
  let html = '';

  // Dados originais
  html += `
        <div class="step">
            <h4>📝 Dados de Entrada Original</h4>
            <p>Os elementos caóticos enviados pelo guardião:</p>
            <div class="step-data">[${originalData.map(formatElement).join(', ')}]</div>
        </div>
    `;

  // Cada passo do processo
  steps.forEach((step, index) => {
    html += `<div class="step">`;
    html += `<h4>${step.title}</h4>`;
    html += `<p>${step.description}</p>`;

    if (step.numbers && step.strings) {
      html += `<p><strong>Números encontrados:</strong></p>`;
      html += `<div class="step-data">[${step.numbers.map(formatElement).join(', ') || 'nenhum'}]</div>`;
      html += `<p><strong>Palavras encontradas:</strong></p>`;
      html += `<div class="step-data">[${step.strings.map(formatElement).join(', ') || 'nenhuma'}]</div>`;
    } else if (step.data) {
      html += `<div class="step-data">[${step.data.map(formatElement).join(', ')}]</div>`;
    }

    html += `</div>`;
  });

  // Resultado final destacado
  const finalResult = steps[steps.length - 1].data;
  html += `
        <div class="final-result">
            <h4>🏆 VITÓRIA! Guardião Derrotado!</h4>
            <p>A ordenação mágica foi realizada com sucesso:</p>
            <div class="final-data">[${finalResult.map(formatElement).join(', ')}]</div>
        </div>
    `;

  resultContent.innerHTML = html;
}

/**
 * Formata elemento para exibição (adiciona aspas nas strings)
 */
function formatElement(element) {
  return typeof element === 'string' ? `'${element}'` : element;
}

/**
 * Exibe mensagem de erro
 */
function showError(message) {
  resultContent.innerHTML = `
        <div class="error-message">
            <h4>${message}</h4>
            <p>Tente novamente com dados válidos!</p>
        </div>
    `;
  showResultSection();
}

/**
 * Mostra a seção de resultado e ajusta scroll
 */
function showResultSection() {
  if (!isResultVisible) {
    resultSection.style.display = 'block';
    isResultVisible = true;

    // Scroll suave para a seção de resultado
    setTimeout(() => {
      resultSection.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
  }
}

/**
 * Esconde a seção de resultado
 */
function hideResultSection() {
  if (isResultVisible) {
    resultSection.style.display = 'none';
    isResultVisible = false;
    resultContent.innerHTML = '';
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Esconde a seção de resultado inicialmente
  resultSection.style.display = 'none';

  // Foca no input de entrada
  dataInput.focus();

  // Exemplo inicial no placeholder
  dataInput.placeholder = 'Ex: banana, apple, 3, 2, Cherry, apple, 1';

  console.log('🔥 Sistema do Guardião Demoníaco inicializado!');
});
