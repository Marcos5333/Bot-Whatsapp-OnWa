import { create, Client } from '@open-wa/wa-automate';
import fetch from 'node-fetch';
import cron from 'node-cron';
import path from 'path';

// 🌦️ Configurações do clima
const WEATHER_API_KEY = '7880228c22943e6bdfce61b44fac186c';
const CITY = 'São José dos Campos,BR';

// Inicializa o bot
create({
  useChrome: true,
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: false,
  skipBrokenMethodsCheck: true,
  browserArgs: [
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-software-rasterizer'
  ],
  disableSpawns: true,
  sessionDataPath: path.resolve('./session'),
  cacheEnabled: true
}).then(async (client) => {
  console.log('🤖 Bot iniciado!');

 // 🔍 Mostra todos os grupos e IDs
const grupos = await client.getAllGroups();
console.log('\n📋 LISTA DE GRUPOS DISPONÍVEIS:\n');
grupos.forEach(g => {
  console.log(`${g.name} => ${g.id}`);
});
console.log('\n👉 Copie o ID do grupo desejado e substitua no array "contatos"\n');

// ❗ Coloque o ID do grupo aqui depois de copiar do terminal
const contatos = [
  '120363403321873475@g.us' // exemplo, substitua pelo ID que aparecer
];


  // 🌦️ Função para pegar previsão do tempo
  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${WEATHER_API_KEY}&lang=pt_br`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod !== 200) return `Erro: ${data.message}`;

      const clima = data.weather[0].description.toLowerCase();
      const chuva = clima.includes('chuva') || clima.includes('tempestade') || clima.includes('garoa');

      let mensagem = `🌤 *Previsão do tempo para ${data.name}:*
🌡 Temperatura: ${data.main.temp.toFixed(1)}°C
🤔 Sensação térmica: ${data.main.feels_like.toFixed(1)}°C
☁️ Clima: ${data.weather[0].description}
💧 Umidade: ${data.main.humidity}%
🌬 Vento: ${data.wind.speed} m/s`;

      if (chuva) {
        mensagem += `

⚠️ *Alerta de chuva!* 🌧
Leve guarda-chuva ou capa de chuva se for sair de casa! ☔`;
      }

      return mensagem;
    } catch (err) {
      return `Erro ao consultar o clima: ${err.message}`;
    }
  }

  // 📤 Função para enviar mensagem
  async function sendWeather() {
    const mensagem = await getWeather();
    for (const numeroDestino of contatos) {
      console.log('📤 Tentando enviar para:', numeroDestino);
      try {
        await client.sendText(numeroDestino, mensagem);
        console.log('✅ Mensagem enviada com sucesso para', numeroDestino);
      } catch (err) {
        console.error('❌ Erro ao enviar mensagem para', numeroDestino, err.message);
      }
    }
  }

  // Envia imediatamente
  await sendWeather();

  // Cron — a cada 3 horas
  cron.schedule('0 */3 * * *', async () => {
    console.log('⏰ Enviando previsão automática...');
    await sendWeather();
  });
});
