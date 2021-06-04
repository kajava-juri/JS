let img = document.querySelector('img');

img.onclick = function()
    {
        let src = img.getAttribute('src');
        if(src === 'images/conflict.png')
        {
            img.setAttribute('src', 'images/firefox-icon.png');
        }
        else
        {
            img.setAttribute('src', 'images/conflict.png')
        }
    }
