# Teste prático de programação com API Text to Spreech IBM Watson

## Objetivo

Desenvolver uma aplicação web em **Node.js** com banco de dados **MySQL**. A aplicação consistirá somente de uma página com dois painéis: no painel posicionado a esquerda, o usuário poderá cadastrar novos comentários. No painel da direita todos os comentários cadastrados devem ser listados, com um botão ao lado de cada um que ao ser clicado executará um áudio de leitura do comentário.

Para realizar a conversão do comentário de texto para áudio, o será utilizada a API [Text to Speech do IBM Watson](https://www.ibm.com/cloud/watson-text-to-speech).

As operações de cadastro e atualização da lista de comentários devem ser realizadas via **AJAX**.
 
 ## O que preparar para rodar em uma maquina local
 
 * Ter o Nodejs
 * Baixar o projeto
 * Criar uma tabela no Mysql com os campos mensagem | caminho
 * Trocar os dados de **nome da tabela** e **senha** no arquivo db.js
 * Instalar handlebars dentro da pasta do projeto

## Como rodar o projeto

* Inicie o arquivo index.js pelo cmd usando ```node index.js``` 
* Abra no navegador no caminho indicado no cmd 

## Funcionamento esperado

Você conseguirá escrever comentários que vão aparecer na tela e será criado um arquivo de áudio, com a gravação feita pela API, do conteúdo desse comentário dentro da pasta audios.
