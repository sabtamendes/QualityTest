### 📄👀 Documentação de teste de qualidade

Esta é a documentação apresentada para o planejamento, automação e execução do teste de qualidade utilizando o cypress.


<details>
  <summary><strong>Instalação</strong></summary>

  ## 🛠️💻 Instalação 
Para rodar o projeto, primeiro clone este repositório usando o comando:

- HTTPS
``` bash
git clone https://github.com/sabtamendes/QualityTest.git
```
- SSH 
``` bash
git clone git@github.com:sabtamendes/QualityTest.git
```
Em seguida, instale as dependências usando o gerenciador de pacotes de sua escolha. Recomendo o uso do npm:
  
``` bash
npm install
```
</details>

<details>
<summary><strong>Utilização</strong></summary>
  
 ## 🚀💡 Utilização
  
Para executar o cypress, digite o seguinte comando no terminal:

``` bash
npx cypress run
```

Para abrir o cypress, digite o seguinte comando no terminal:
``` bash
npx cypress open
```
ou 
``` bash
./node_modules/.bin/cypress open
```
</details>


<details>
  <summary><strong>Estrutura</strong></summary>

## 🌳📂 A estrutura do documento é organizada da seguinte maneira:
```bash

  - `1-plannning/`: contém o planejamento dos testes.  
    - `document-test.pdf`

  - `2-execution/`: contém o arquivo de execução dos testes. 
    - `document-execution.pdf`

  - `3-automation/`: contém a automação dos testes 
   - `cypress`: 
     - `e2e`:  
       - comparar_smartphones.spec.js
  -`cypress/`
  - `.gitignore`
  - `cypress.config.js`
  -`package-lock.json`
  - `package.json`
  -`README.md`
``` 
</details>