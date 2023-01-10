const pianoKeys = document.querySelectorAll('.piano-keys .key')
volumeSlider = document.querySelector('.volume-slider input')
keysCheckbox = document.querySelector('.keys-checkbox input')

let allkeys = [],
 audio = new Audio('tunes/a.wav');

const playtune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedkey = document.querySelector(`[data-key="${key}]"`);
    clickedkey.classList.add('active');
    setTimeout(()=>{
        clickedkey.classList.remove('active');
    },150);
}

pianoKeys.forEach(key =>{
    allkeys.push(key.dataset.key);
    key.addEventListener('click', () => playtune(key.dataset.key));
})

const showHideKeys = () =>{
    pianoKeys.forEach(key => key.classList.toggle('hide'));
}

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const pressedKey = (e) =>{
   if(allkeys.includes(e.key)) playtune(e.key);
}

keysCheckbox.addEventListener('click', showHideKeys)
volumeSlider.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)