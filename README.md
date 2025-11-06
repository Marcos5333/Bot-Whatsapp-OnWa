# Bot-Whatsapp-OnWa

Obs , quando instalar as dependencias ela ira criar os arquivos necessario na pasta Raiz 
Instalar as dependencias na pasta raiz exemplo C:\Users\servi\Desktop\Bot-Whatsapp-OnWa
iremos fazer a seguinte forma

cd Bot-Whatsapp-OnWa
e depois iremos instalar as dependencias , ou simplesmente clicando com o botao direito e apertando em Abrir terminal na pasta 


🌦️ WeatherBot – Consulta Meteorológica Automatizada

Um bot desenvolvido em Node.js para consultar dados meteorológicos em tempo real a partir de APIs públicas de clima.
O projeto tem como objetivo automatizar o processo de verificação do tempo, possibilitando o envio de relatórios ou notificações automáticas com base nas condições atuais.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Funcionalidades

Consulta de temperatura, umidade, sensação térmica e condições do tempo em tempo real.
Suporte a busca por cidade, estado ou coordenadas geográficas (latitude/longitude).
Integração com APIs de meteorologia (ex: OpenWeatherMap).
Possibilidade de agendar consultas automáticas periódicas.
Retorno formatado em JSON ou mensagens legíveis, ideal para integração com bots ou dashboards.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Tecnologias Utilizadas

Node.js – ambiente de execução principal.
Axios – para consumo de APIs REST.
Dotenv – gerenciamento seguro de variáveis de ambiente (chaves da API).
JavaScript (ES6) – lógica e manipulação dos dados retornados.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Como Executar

Clone este repositório:
git clone https://github.com/Marcos5333/Bot-Whatsapp-OnWa

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Instale as dependências:

npm install

npm init

npm install axios puppeteer dotenv @open-wa/wa-automate node-schedule

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Alterar sua key no codigo , Pegar uma gratuita no site  https://openweathermap.org/api
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 Execute o bot:
 
node index.js
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Exemplo de Retorno

  "cidade": "São Paulo",
  "temperatura": "26°C",
  "sensacao_termica": "28°C",
  "umidade": "70%",
  "condicao": "Parcialmente nublado"
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Possíveis Extensões

Integração com WhatsApp ou Telegram para alertas automáticos.
Criação de interface web para exibir dados em tempo real.
Armazenamento histórico em Firebase ou MongoDB para análise de padrões climáticos.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📚 Explicação de cada pacote

axios =	Faz as requisições HTTP para consumir a API de meteorologia (ex: OpenWeatherMap).
puppeteer =	Controla o navegador (modo headless) caso precise automatizar login ou interações visuais.
dotenv =	Gerencia as variáveis de ambiente no arquivo .env (como a chave da API).
@open-wa/wa-automate =	Permite criar um cliente WhatsApp Web automatizado, enviar e receber mensagens.
node-schedule =	(Opcional) Permite agendar tarefas automáticas, como enviar o clima todo dia às 8h.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Desenvolvido por Marcos Souza
