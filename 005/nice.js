const htmlBody = document.querySelector('body');
const color = document.querySelector('[type=color]');//spalvu pasirinkties kvadratui
//priskiriama paskirta spalva
const size = document.querySelector('[type=range]');


//e - eventas, surirandame., kuriame ivyko ir paimame value - spalva ir
// viska uzmaunam ant tos spalvos
color.addEventListener('change', e => {
    htmlBody.style.backgroundColor = e.target.value;
    settings.color = e.target.value;

    localStorage.setItem('bc', JSON.stringify(settings));
});

size.addEventListener('change', e => {
    htmlBody.style.backgroundColor = e.target.value + px;
    settings.size = e.target.value;

    localStorage.setItem('bc', JSON.stringify(settings));
});

// pirmiausia paklausiam, kokia spalva nustatyta ir ideta i local storage

let settings = localStorage.getItem('bc');
if (null === settings) {
    settings = {
        color: '#ffffff',
        size: 16
    }
    localStorage.setItem('bc', JSON.stringify(settings));
} else {
    settings = JSON.parse(settings);
}

htmlBody.style.backgroundColor = settings.color;
color.value = settings.color;
htmlBody.style.fontSize = settings.size + px;
size.value = settings.size;

// reacte state, component, props