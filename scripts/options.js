//update preview on opacity change by user
let opacityRadios = document.querySelectorAll('input[name="opacity"]');

let preview = document.getElementById('preview');

opacityRadios.forEach((radio) => {
    radio.addEventListener('click', (event) => {
        preview.style.backgroundColor = 'rgba(0, 0, 0,' + event.target.value + ')';
    })
});

//save selected opacity to chrome.storage
const saveOptions = () => {
    let selectedRadio = document.querySelector('input[name="opacity"]:checked');

    chrome.storage.local.set(
        {opacity: selectedRadio.value},
        () => {
            //update message to let user know opacity was saved
            const message = document.getElementById('message');
            message.textContent = 'Opacity saved';
            setTimeout(() => {
                message.textContent = '';
            }, 750);
        }
    );
};
  
//preselect opacity radio from value in chrome.storage
const restoreOptions = () => {
    chrome.storage.local.get(
        'opacity',
        (items) => {
            let radio = document.querySelector(`input[name="opacity"][value="${items.opacity}"]`);
            radio.checked = true;
            radio.click();  //update preview
        }
    );
};

//set event handling
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
