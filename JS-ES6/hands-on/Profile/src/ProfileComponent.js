
export default class ProfileComponent {
    // use dependency injection
    constructor(profileService, errorHandler) {
        this.profileService = profileService;
        this.errorHandler = errorHandler;
        this.findAllProfiles();
    }

    addProfile(name, city) {
        this.profileService.add(name, city)
            .then((res) => console.log(res))
            .catch(err =>  this.errorHandler.showError(err));
    }

    findAllProfiles() {
        this.profileService.findAll()
            .then((profiles) => {
                const container = document.getElementsByClassName('container')[0];
                console.log(profiles);
                const ulElement = document.createElement('ul');
                const ulClasses = ['m-4', 'p-0', 'list-unstyled'];
                ulElement.className = ulClasses.join(' ');
                let liElement = null;
                const liClasses = ['p-2', 'profile'];
                profiles.forEach((profile, index) => {
                    liElement = document.createElement('li');
                    liElement.innerText = (index + 1) + ' - ' + profile.name;
                    liElement.className = liClasses.join(' ');
                    ulElement.appendChild(liElement);
                });
                container.appendChild(ulElement);
                //$(ulElement).selectpicker();
            })
            .catch(err =>  this.errorHandler.showError(err));
    }

    findProfileById(id) {
        this.profileService.findById(id)
            .then((res) => console.log(res))
            .catch(err =>  this.errorHandler.showError(err));
    }

    updateProfile(id, name, city) {
        this.profileService.update(id, name, city).then((res) => console.log(res))
        .catch(err =>  this.errorHandler.showError(err));
    }

    removeProfile(id) {
        this.profileService.remove(id)
            .then((res) => console.log(res))
            .catch(err =>  this.errorHandler.showError(err));
    }
}
