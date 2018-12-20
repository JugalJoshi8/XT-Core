const profiles = require('./ProfileModel');

class ProfileDAL {
    getProfiles() {
        return profiles;
    }

    getProfile(id) {
       const profile = profiles.find(profile => profile.id === id);
       if(profile) {
           return profile;
       }
       return false;
    }

    editProfile(id, name, city) {
        const profile = profiles.find(profile => profile.id === id);
        if(profile) {
            profile.name = name;
            profile.city = city;
            return profile;
        }
        return false;
    }

    deleteProfile(id) {
        const profileIndex = profiles.findIndex(profile => profile.id === id);
        if(profileIndex > -1) {
            profiles.splice(profileIndex, 1);
            return profiles;
        }
        return false;
    }

    addProfile(profile) {
        profiles.push(profile);
        return profiles;
    }
}

module.exports = ProfileDAL;