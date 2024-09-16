function showLoading() {
  document.getElementById('loading').style.display = 'block'

  setTimeout(function () {
    window.location.href = 'page2.html'
  }, 3000)
}

function redirectAfterDelay(url ) {
  setTimeout(function() {
    window.location.href = url; 
  } ); 
}
document.addEventListener('DOMContentLoaded', function() {
  const phoneInput = document.getElementById('phone');
  const submitBtn = document.getElementById('submitBtn');

  // Função para validar o número de telefone
  function validatePhoneNumber(number) {
      const phoneRegex = /^\d{10,15}$/; // Ajuste a regex conforme a necessidade
      return phoneRegex.test(number);
  }

  // Função para habilitar ou desabilitar o botão
  function toggleButton() {
      const phoneNumber = phoneInput.value;
      if (validatePhoneNumber(phoneNumber)) {
          submitBtn.classList.remove('hidden');
      } else {
          submitBtn.classList.add('hidden');
      }
  }
  phoneInput.addEventListener('input', toggleButton);
});