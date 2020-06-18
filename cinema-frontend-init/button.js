const remote = require('electron').remote
const main = remote.require('main.js')

const button = document.createElement('button');
button.textContent = 'Second Page'
button.addEventListener('click', () => {
    main.openWindow('secondPage.html')
}, false)