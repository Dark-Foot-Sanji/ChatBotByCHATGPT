const Discord = require('discord.js');
const axios = require('axios');

const client = new Discord.Client();
const openai = axios.create({
  baseURL: 'https://api.openai.com/v1/engines/davinci/',
  headers: {
    'Authorization': `Bearer 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    `,
    'Content-Type': 'application/json'
  }
});

client.on('message', async message => {
  if (message.author.bot) return;

  const input = {
    prompt: message.content,
    max_tokens: 100
  };

  const response = await openai.post('jobs', {
    model: 'text-davinci-002',
    prompt: input
  });

  const generatedText = response.data.choices[0].text;

  message.channel.send(generatedText);
});

client.login('MTA0OTYxMTUxMTMxNzkyOTk4Ng.Gm7e1_.X-Iv2hJMvGEdG-K-bkYQXNZF0InyjBQbwilCzs');
