# ⚖️ Calculadora de IMC

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-concluído-95dc97?style=for-the-badge)

Aplicação web simples para calcular o **Índice de Massa Corporal (IMC)** a partir do peso e da altura, exibindo a classificação correspondente segundo a tabela da Organização Mundial da Saúde (OMS).

> Projeto desenvolvido com **HTML, CSS e JavaScript puro**, sem frameworks ou bibliotecas, com foco em praticar manipulação do DOM, eventos e validação de formulários.

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tabela de classificação](#-tabela-de-classificação)
- [Tecnologias](#-tecnologias)
- [Como executar](#-como-executar)
- [Estrutura do projeto](#-estrutura-do-projeto)
- [Como funciona](#-como-funciona)
- [Melhorias futuras](#-melhorias-futuras)
- [Autor](#-autor)

## ✨ Funcionalidades

- Cálculo do IMC a partir de peso (kg) e altura (m)
- Classificação automática da faixa de IMC
- Validação de entradas inválidas, com mensagens de erro
- Feedback visual: resultado em verde (válido) e vermelho (erro)
- Layout responsivo e centralizado

## 📊 Tabela de classificação

| IMC            | Classificação        |
| -------------- | -------------------- |
| Menos de 18,5  | Abaixo do peso       |
| 18,5 a 24,9    | Peso normal          |
| 25 a 29,9      | Sobrepeso            |
| 30 a 34,9      | Obesidade grau I     |
| 35 a 39,9      | Obesidade grau II    |
| Mais de 40     | Obesidade grau III   |

Fórmula utilizada:

```
IMC = peso / (altura × altura)
```

## 🛠️ Tecnologias

- **HTML5**: estrutura semântica da página
- **CSS3**: Flexbox/Grid, variáveis CSS (`:root`) e estilização do formulário
- **JavaScript (ES6+)**: eventos, manipulação do DOM e funções puras para o cálculo
- **Google Fonts**: fonte [Open Sans](https://fonts.google.com/specimen/Open+Sans)

## 🚀 Como executar

Não é necessário instalar nada. Basta ter um navegador moderno.

```bash
# 1. Clone o repositório
git clone https://github.com/f-alexandre96/NOME-DO-REPOSITORIO.git

# 2. Acesse a pasta do projeto
cd NOME-DO-REPOSITORIO

# 3. Abra o index.html no navegador
```

Se preferir, use a extensão **Live Server** do VS Code para recarregar a página automaticamente.

## 📁 Estrutura do projeto

```
.
├── assets
│   ├── css
│   │   └── style.css
│   └── js
│       └── main.js
├── index.html
└── README.md
```

## 🧠 Como funciona

1. O evento `submit` do formulário é capturado e o comportamento padrão é bloqueado com `preventDefault()`.
2. Os valores de peso e altura são lidos e convertidos para `Number`.
3. Se algum valor for inválido (`NaN` ou vazio), uma mensagem de erro é exibida.
4. Caso contrário, `getImc()` calcula o índice e `getNivelImc()` retorna a classificação.
5. `setResultado()` renderiza a mensagem na tela, aplicando a classe de estilo adequada.

## 🔮 Melhorias futuras

- [ ] Aceitar vírgula como separador decimal (ex.: `1,75`)
- [ ] Impedir valores negativos ou irreais (peso e altura máximos/mínimos)
- [ ] Destacar a faixa correspondente na tabela de classificação
- [ ] Usar `type="number"` e atributos `min`/`max`/`step` nos campos
- [ ] Melhorar a acessibilidade (`aria-live` na área de resultado)

## 👨‍💻 Autor

**Fernando Alexandre da Silva**

[![GitHub](https://img.shields.io/badge/GitHub-f--alexandre96-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/f-alexandre96)

---

⭐ Se este projeto te ajudou ou te interessou, deixe uma estrela no repositório!
