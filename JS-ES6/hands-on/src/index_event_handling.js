const component = {
    sayHello: function(name) {
        alert(name);
    }
}

const btnNew = document.querySelector('#hello');
btnNew.onclick = component.sayHello.bind(component, 'JJ');