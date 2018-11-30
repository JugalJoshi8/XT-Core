class Profile {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
}

class ProfileService {
    constructor() {
        this.serviceUrl = 'http://localhost:3000/profiles';
    }

    async add(name, city) {
        try {
            const id = Math.floor(Math.random() * 1000);
            const profile = new Profile(id, name, city);
            const response = await fetch(this.serviceUrl, {
                method: 'POST',
                body: JSON.stringify(profile),
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

    // return all profiles
    async findAll() {
        try {
            const response = await fetch(this.serviceUrl);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        }
        catch (err) {
            throw (err);
        }
    }

    async findById(id) {
        try {
            const response = await fetch(`${this.serviceUrl}?id=${id}`);
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (err) {
            throw (err);
        }
    }

    async update(id, name, city) {
        try {
            const profile = new Profile(id, name, city);
            const response = await fetch(`${this.serviceUrl}/${id}`, {
                method: 'PUT',
                body: JSON.stringify(profile),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.statusText);
            }
            return await response.json();
        } catch (err) {
            throw (err);
        }
    }

    async remove(id) {
        try {
            const response = await fetch(`${this.serviceUrl}/${id}`, {
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

class ProfileComponent {
    // use dependency injection
    constructor(profileService) {
        this.profileService = profileService;
    }

    addProfile(name, city) {
        this.profileService.add(name, city)
            .then((res) => console.log(res))
            .catch(err => console.log(err.message));
    }

    findAllProfiles() {
        this.profileService.findAll()
            .then((res) => console.log(res))
            .catch(err => console.log(err.message));
    }

    findProfileById(id) {
        this.profileService.findById(id)
            .then((res) => console.log(res))
            .catch(err => console.log(err.message));
    }

    updateProfile(id, name, city) {
        this.profileService.update(id, name, city).then((res) => console.log(res))
            .catch(err => console.log(err.message));
    }

    removeProfile(id) {
        this.profileService.remove(id)
            .then((res) => console.log(res))
            .catch(err => console.log(err.message));
    }
}


const profileComponent = new ProfileComponent(new ProfileService());