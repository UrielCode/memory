const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 6;

// link text
playerLivesCount.textContent = playerLives;

// Generete the data
const getData = () => [
  {imgSrc: '../img/beatles.jpeg', name: 'beatles'},
  {imgSrc: '../img/blink182.jpeg', name: 'blink 82'},
  {imgSrc: '../img/fkatwigs.jpeg', name: 'blink 82'},
  {imgSrc: '../img/fleetwood.jpeg', name: 'fleetwood'},
  {imgSrc: '../img/joy-division.jpeg', name: 'joy division'},
  {imgSrc: '../img/ledzep.jpeg', name: 'ledzep'},
  {imgSrc: '../img/metallica.jpeg', name: 'metallica'},
  {imgSrc: '../img/pinkfloyd.jpeg', name: 'pinkfloyd'},
  {imgSrc: '../img/beatles.jpeg', name: 'beatles'},
  {imgSrc: '../img/blink182.jpeg', name: 'blink 82'},
  {imgSrc: '../img/fkatwigs.jpeg', name: 'blink 82'},
  {imgSrc: '../img/fleetwood.jpeg', name: 'fleetwood'},
  {imgSrc: '../img/joy-division.jpeg', name: 'joy division'},
  {imgSrc: '../img/ledzep.jpeg', name: 'ledzep'},
  {imgSrc: '../img/metallica.jpeg', name: 'metallica'},
  {imgSrc: '../img/pinkfloyd.jpeg', name: 'pinkfloyd'},
]

// Randomize

const randomize =() => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
}

// Card generator

const cardGenerator = ()  =>{
  const cardData = randomize();
  
  // generate HTML
  

  cardData.forEach((item) =>{
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';
    // Attack the info to the cards
    face.src = item.imgSrc;
    card.setAttribute('name', item.name)
    
    // Attack the card to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back)

    card.addEventListener('click', (e)=>{
      card.classList.toggle('toggleCard');
      checkCards(e);

    })
  });
};

// check cards
const checkCards = (e)=>{
  console.log(e)
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flipperCard = document.querySelectorAll('.flipped')

  if (flipperCard.length === 2) {
    if (flipperCard[0].getAttribute('name') === flipperCard[1].getAttribute('name')) {
      console.log('match')
      flipperCard.forEach(card =>{
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      })
    }else{
      console.log('wrong')
      flipperCard.forEach( card =>{
        card.classList.remove('flipped');
        setTimeout(() => {
          card.classList.remove('toggleCard')
        }, 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;

      if (playerLives === 0) {
        restar('👎try agian');
      }
    }
  }

  // run a check to see if we the game
  if(toggleCard.length === 16){
    restar('you wong👍');
  }

}
// Restart
const restar = (text) =>{
  let cardData = randomize();
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');

  section.style.pointerEvents = 'none';

  cardData.forEach((item,index) =>{
    cards[index].classList.remove('toggleCard')
    // randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = 'all';
      faces[index].src = item.imgSrc;
      cards[index].setAttribute('name', item.name);
      section.style.pointerEvents = 'all';
    }, 1000);
  })

  playerLives = 6;
  playerLivesCount.textContent = playerLives;
  setTimeout(() => {
    window.alert(text)
  }, 1000);
}

cardGenerator();