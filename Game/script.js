let playerState = 'deitar';
const dropdown = document.querySelector('select#animacoes');
dropdown.addEventListener('change',function(e){
    playerState = e.target.value;
})

const canvas = document.querySelector('canvas#canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_LARGURA = canvas.width = 600;
const CANVAS_ALTURA = canvas.height = 600;

const imagemDoJogador = new Image();
imagemDoJogador.src = 'shadow_dog.png';
const larguraDoSprite = 575;
const alturaDoSprite = 523;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'parar',
        frames: 7,
    },
    {
        name: 'pular',
        frames: 7,
    },
    {
        name: 'cair',
        frames: 7,
    },
    {
        name: 'correr',
        frames: 9,
    },
    {
        name: 'atordoado',
        frames: 11,
    },
    {
        name: 'sentar',
        frames: 5,
    },
    {
        name: 'rolar',
        frames: 7,
    },
    {
        name: 'morder',
        frames: 7,
    },
    {
        name: 'deitar',
        frames: 12,
    },
    {
        name: 'tomardano',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++){
        let positionX = j * larguraDoSprite;
        let positionY = index * alturaDoSprite;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations)

function animar() {
    ctx.clearRect(0,0,CANVAS_LARGURA,CANVAS_ALTURA);
    let posicao = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = larguraDoSprite * posicao;
    let frameY = spriteAnimations[playerState].loc[posicao].y;
    ctx.drawImage(imagemDoJogador, frameX, frameY, larguraDoSprite, alturaDoSprite, 0, 0, larguraDoSprite, alturaDoSprite);
    

    gameFrame++;
    requestAnimationFrame(animar);
};
animar();