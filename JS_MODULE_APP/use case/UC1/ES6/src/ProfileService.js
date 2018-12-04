import Profile from './Profile';

export default class ProfileService {
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
