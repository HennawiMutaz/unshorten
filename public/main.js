const input = document.querySelector('#input');
const btn = document.querySelector('#expand-btn');
const res = document.querySelector('#result');



btn.addEventListener('click', () => {
    res.innerText = 'Loading ...';
    if (input.value == '') {
        res.innerText = 'Please enter valid URL.';
        return;
    }
    fetch(`/expand?shortUrl=${input.value}`)
        .then(res => res.text())
        .then(text => {
            res.innerText = text;
            text == 'ERROR' ? res.setAttribute("href", '')  : res.setAttribute("href", text);
        })
        .catch(err => {
            console.log(err);
            res.innerText = 'Error';
        })
})
