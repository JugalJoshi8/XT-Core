class ProfileComponent {
    // use dependency injection
    constructor(profileService, errorHandler) {
        this.profileService = profileService;
        this.errorHandler = errorHandler;
    }

    addProfile(name, city) {
        this.profileService.add(name, city)
            .then((res) => console.log(res))
            .catch(err =>  this.errorHandler.showError(err));
    }

    findAllProfiles() {
        this.profileService.findAll()
            .then((res) => console.log(res))
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

module.exports = ProfileComponent;