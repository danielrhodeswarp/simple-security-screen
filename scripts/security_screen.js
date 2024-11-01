//----main----------------

//This script toggles a blackout overlay

var extant = document.getElementById('simple-security-screen-chrome-extension');

if (extant !== null) {
    document.body.removeChild(extant);
} else {
    //add overlay with extension's saved opacity
    chrome.storage.local.get(
        'opacity',
        (items) => {
            addOverlayWithOpacity(items.opacity);
        }
    );
}

//
function addOverlayWithOpacity(opacity) {
    const overlay = createDomElement(`
        <div
            id="simple-security-screen-chrome-extension"
            style="
                pointer-events:none;
                width:100vw;
                height:100vh;
                background-color:rgba(0,0,0,${opacity});
                z-index:2000;
                position:fixed;
                top:0;
            ">
        </div>
    `);

    document.body.appendChild(overlay);
}

//----utility----------------

//
function createDomElement(html) {
    const dom = new DOMParser().parseFromString(html, 'text/html');

    return dom.body.firstElementChild;
}
