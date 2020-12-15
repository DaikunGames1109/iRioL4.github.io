const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('あなたのMinecraftのゲーマータグ、またはIDを教えてください。');
  para.textContent = 'Player 1: ' + name;
}