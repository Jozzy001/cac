const display = document.querySelector('#display');
const buttons = document.querySelector('button');

button.forEach( (item) => {
    item.onclick = () => {
        if (item.id = 'clear') {
            display.innerText = '';
        } else if(item.id == 'backspace'){
            let string = display.innerText.tostring();
            display.innerText = string.substr(0, string.length -1);
        } else if (display.innerText != '' && item.id =='equal'){
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''),.2000);
        }else{
            display.innerText += item.id;
        }
    }
})