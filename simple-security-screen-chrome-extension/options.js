let page = document.getElementById('buttonDiv');

const kButtonValues = [0.75, 0.80, 0.85, 0.90, 0.95];

function constructOptions(kButtonValues)
{
    for(let item of kButtonValues)
    {
        let button = document.createElement('button');
        button.innerHTML = item;
        button.style.width = 'auto';
        button.title = item;
        button.style.backgroundColor = 'rgba(0,0,0,'+item+')';
        
        button.addEventListener('click', function(){
            chrome.storage.sync.set({blockPercentage: item}, function() {
                console.log('blockPercentage is ' + item);
            })
        });
        page.appendChild(button);
    }
}

constructOptions(kButtonValues);
