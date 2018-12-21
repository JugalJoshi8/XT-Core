
import './styles.scss';
const profiles = [
    {
        'name': 'n1',
        'city': 'c1',
         id: '1'
    },
    {
        'name': 'n2',
        'city': 'c2',
         id: '2'
    },
    {
        'name': 'n3',
        'city': 'c3',
         id: '3'
    },
]

class ProfileComponent {
    constructor(profiles) {
        this.profiles = profiles;
        this.renderProfiles();
    }

    renderProfiles() {
        document.getElementsByTagName('body')[0].innerHTML = '';
        const ul = document.createElement('ul');
        let li = null;
        for(let i =0; i< this.profiles.length; i++) {
            li = document.createElement('li');
            li.innerHTML = `Name: ${this.profiles[i].name}, City: ${this.profiles[i].city}`;
            ul.appendChild(li);
        }
        document.getElementsByTagName('body')[0].appendChild(ul);
    }
 }

 new ProfileComponent(profiles);

