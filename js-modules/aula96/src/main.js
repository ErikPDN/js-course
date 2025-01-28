import { GenCPF } from './modules/GenCPF.js';

import './assets/css/style.css';

(function() {
  const genCpf = new GenCPF();
  let resCpf = document.querySelector('.cpf-result');
  resCpf.innerHTML = genCpf.generateCpf();
})();
