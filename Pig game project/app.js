
let scores, roundScore, activePlayer, dice;

init();



//Event for Roll dice
document.querySelector('.btn-roll').addEventListener('click', function () {
  dice = Math.floor((Math.random() * 6)) + 1;

  // scores[activePlayer] += dice;
  roundScore += dice;
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').setAttribute('src', 'images/dice-' + dice + '.png');

  if (dice === 1) {
    nextPlayer();
  }
})

//Event for Hold button
document.querySelector('.btn-hold').addEventListener('click', function () {
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

  nextPlayer();


})

// New Game
document.querySelector('.btn-new').addEventListener('click', function () {
  init();
})

function nextPlayer() {
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
  document.querySelector('.dice').style.display = 'none';
  roundScore = 0;

}


function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  document.querySelector('.dice').style.display = 'none';
}
