const EXTENSION_DEFAULT_OPACITY = '0.6';

//onInstalled
//extension is installed or updated
//one-off inits
chrome.runtime.onInstalled.addListener(({reason}) => {
    //or, we could skip this .set() and simply call .get() with a default in options.js::restoreOptions()
    if (reason === 'install') {
        chrome.storage.local.set({
            opacity: EXTENSION_DEFAULT_OPACITY
        });
    }
    
    //cement to users whether overlay is ON or OFF - default to OFF
    chrome.action.setBadgeText({
        text: "OFF",
    });
});

//onClicked
//extension's icon button is clicked
chrome.action.onClicked.addListener(async (tab) => {
    //ON / OFF state handling
    const prevState = await chrome.action.getBadgeText({tabId: tab.id});
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    //show if ON / OFF
    await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState
    });

    //NOTE: combining insert/removeCSS() (for the overlay styles) and executeScript() (to toggle the overlay) does not work.
    //Timing / rendering issues?

    // if (nextState === "ON") {
    //     await chrome.scripting.insertCSS({
    //         files: ['styles/security_screen.css'],
    //         target: { tabId: tab.id}
    //     });
    // } else if (nextState === "OFF") {
    //     await chrome.scripting.removeCSS({
    //         files: ['styles/security_screen.css'],
    //         target: { tabId: tab.id}
    //     });
    // }

    //NOTE: This script handles the toggling of the overlay itself - we don't need the ON / OFF state
    await chrome.scripting.executeScript({
        target : {tabId : tab.id},
        files : [ "scripts/security_screen.js" ],
    });
});
