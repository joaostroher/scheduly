const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: true });

nightmare
  .goto('http://localhost:3000/customers/register')
  .wait(2000)
  .type('#name', 'nome')
  .type('#email', 'email@teste.com')
  .type('#cpf', '11111111111')
  .type('#phone', '51999999999')
  .evaluate(
    () => `  name: ${document.querySelector('#name').value}
  email: ${document.querySelector('#email').value}
  cpf: ${document.querySelector('#cpf').value}
  phone: ${document.querySelector('#phone').value}
  `
  )
  // .click('#search_button_homepage')
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Customer failed:', error);
  });
