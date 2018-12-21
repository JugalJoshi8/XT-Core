
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



    addProfile() {
        const profileID = Math.floor((Math.random()*1000));
        this.profiles =  _.concat(this.profiles, [{
            'name': 'n' + profileID,
            'city': 'c2' + profileID,
            id: '' + profileID
        }]);
        this.renderProfiles();
    }

    deleteProfile(i) {
        this.profiles.splice(i, 1);
        this.renderProfiles();
    }

    renderProfiles() {
        document.getElementsByTagName('body')[0].innerHTML = '';
        const ul = document.createElement('ul');
        let li = null;
        for(let i =0; i< this.profiles.length; i++) {
            li = document.createElement('li');
            li.innerHTML = `Name: ${this.profiles[i].name}, City: ${this.profiles[i].city}`;
            li.onclick = () => {
                this.deleteProfile(i);
            };
            ul.appendChild(li);
        }
        document.getElementsByTagName('body')[0].appendChild(ul);
        const btn = document.createElement('button');
        btn.innerHTML = `Add Profile`;
        btn.onclick = () => {
            this.addProfile();
        };
        document.getElementsByTagName('body')[0].appendChild(btn);
    }
 }

 new ProfileComponent(profiles);

