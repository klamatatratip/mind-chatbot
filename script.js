async function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');
  const userText = input.value;
  if (!userText) return;
  const userBubble = document.createElement('div');
  userBubble.className = 'bubble user';
  userBubble.innerText = userText;
  chat.appendChild(userBubble);
  input.value = '';

  const botBubble = document.createElement('div');
  botBubble.className = 'bubble bot';
  botBubble.innerText = '...';
  chat.appendChild(botBubble);

  const res = await fetch('/.netlify/functions/chat', {
    method: 'POST',
    body: JSON.stringify({ message: userText }),
  });
  const data = await res.json();
  botBubble.innerText = data.reply;
}