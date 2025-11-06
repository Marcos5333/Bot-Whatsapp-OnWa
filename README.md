# Bot-Whatsapp-OnWa

🌦️ WeatherBot – Consulta Meteorológica Automatizada

Um bot desenvolvido em Node.js para consultar dados meteorológicos em tempo real a partir de APIs públicas de clima.
O projeto tem como objetivo automatizar o processo de verificação do tempo, possibilitando o envio de relatórios ou notificações automáticas com base nas condições atuais.

Funcionalidades

Consulta de temperatura, umidade, sensação térmica e condições do tempo em tempo real.

Suporte a busca por cidade, estado ou coordenadas geográficas (latitude/longitude).

Integração com APIs de meteorologia (ex: OpenWeatherMap).

Possibilidade de agendar consultas automáticas periódicas.

Retorno formatado em JSON ou mensagens legíveis, ideal para integração com bots ou dashboards.

Tecnologias Utilizadas

Node.js – ambiente de execução principal.

Axios – para consumo de APIs REST.

Dotenv – gerenciamento seguro de variáveis de ambiente (chaves da API).

JavaScript (ES6) – lógica e manipulação dos dados retornados.

 Como Executar

Clone este repositório:

git clone https://github.com/SeuUsuario/weather-bot.git
cd weather-bot


Instale as dependências:

npm install


Crie um arquivo .env e adicione sua chave da API:

API_KEY=suachaveaqui


 Execute o bot:

node index.js

Exemplo de Retorno
{
  "cidade": "São Paulo",
  "temperatura": "26°C",
  "sensacao_termica": "28°C",
  "umidade": "70%",
  "condicao": "Parcialmente nublado"
}

 Possíveis Extensões

Integração com WhatsApp ou Telegram para alertas automáticos.

Criação de interface web para exibir dados em tempo real.

Armazenamento histórico em Firebase ou MongoDB para análise de padrões climáticos.

Desenvolvido por Marcos Souza
