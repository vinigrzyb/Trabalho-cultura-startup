// Função para simular o efeito de digitação
function typeMessage(element, message, speed, fontSize) {
    let text = "";
    let index = 0;
    function type() {
        if (index < message.length) {
            text += message.charAt(index);
            element.innerHTML = text;
            element.style.fontSize = fontSize; // Definindo o tamanho da fonte
            index++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Selecionando o elemento da mensagem
const typingText = document.querySelector('.typing-text');

// Chamando a função para adicionar o efeito de digitação com o tamanho da fonte aumentado
typeMessage(typingText, 'Somos a melhor plataforma de interação entre usuário e desenvolvedor!', 100, '24px');
