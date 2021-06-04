let img = document.querySelector('img');

img.onclick = function()
    {
        let src = img.getAttribute('src');
        if(src === 'images/conflict.png')
        {
            img.setAttribute('src', 'beginner-html-site-styled-gh-pages/images/firefox-icon.png');
        }
        else
        {
            img.setAttribute('src', 'beginner-html-site-styled-gh-pages/images/conflict.png')
        }
    }
