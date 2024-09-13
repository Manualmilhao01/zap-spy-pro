const axios = require('axios'); // Se estiver usando Node.js, não esqueça de instalar com npm install axios

const token = 'https://newacademy-api.perfectpay.com.br/api/courseAccess';  // Substitua pelo seu token da API

const config = {
  headers: {
    'Authorization': `Bearer ${token}`,  // Autenticação com o token
    'Content-Type': 'application/json'
  }
};

// Endpoint para buscar transações
axios.get('https://api.perfectpay.com.br/v1/transactions', config)
  .then(response => {
    console.log(response.data);  // Exibe os dados das transações no console
  })
  .catch(error => {
    console.error('Erro:', error);  // Exibe erros, se houver
  });