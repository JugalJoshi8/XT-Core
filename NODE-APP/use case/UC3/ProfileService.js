class ProfileService {
    constructor(profileDAL) {
        this.profileDAL = profileDAL;
    }

    getProfiles() {
        return this.profileDAL.getProfiles();
    }

    getProfile(id) {
        return this.profileDAL.getProfile(id);
    }

    editProfile(id, name, city) {
        return this.profileDAL.editProfile(id, name, city);
    }

    deleteProfile(id) {
        return this.profileDAL.deleteProfile(id);
    }

    addProfile(profile) {
        return this.profileDAL.addProfile(profile);
    }
}

module.exports = ProfileService