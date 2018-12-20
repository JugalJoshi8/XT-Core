import './styles.css';
function component() {
    var ele = document.createElement('h1');
    ele.innerHTML = 'Welcome to Webpack';
    ele.classList.add('hello');
    return ele;
}

document.body.appendChild(component());