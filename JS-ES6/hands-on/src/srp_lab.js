class Profile {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

class ErrorHandler {
    showError(err) {
        console.log(err.message);
    }
}

class AjaxService {
    constructor() {

    }

    async get(serviceUrl) {
        try {
            const response = await fetch(serviceUrl);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async post(serviceUrl, body) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async put(serviceUrl, body) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async delete(serviceUrl) {
        try {
            const response = await fetch(serviceUrl, {
                method: 'DELETE'
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (err) {
            throw (err);
        }
    }

}

class ProfileService {
    constructor(ajaxService) {
        this.serviceUrl = 'http://localhost:3000/profiles';
        this.ajaxService = ajaxService;
    }

     add(name, city) {
        try {
            const id = Math.floor(Math.random() * 1000);
            const profile = new Profile(id, name, city);
            return this.ajaxService.post(`${this.serviceUrl}`, profile);
        }
        catch (err) {
            throw (err);
        }
    }

    // return all profiles
     findAll() {
        try {
            return this.ajaxService.get(this.serviceUrl);
        }
        catch (err) {
            throw (err);
        }
    }

     findById(id) {
        try {
            return  this.ajaxService.get(`${this.serviceUrl}?id=${id}`);
        } catch (err) {
            throw (err);
        }
    }

     update(id, name, city) {
        try {
            const profile = new Profile(id, name, city);
            return this.ajaxService.put(`${this.serviceUrl}/${id}`, profile);
        } catch (err) {
            throw (err);
        }
    }

     remove(id) {
        try {
            return  this.ajaxService.delete(`${this.serviceUrl}/${id}`);
        } catch (err) {
            throw (err);
        }
    }
}

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


const profileComponent = new ProfileComponent(new ProfileService(new AjaxService()), new ErrorHandler());