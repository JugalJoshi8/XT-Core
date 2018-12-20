const express = require('express');
const ProfileService = require('./ProfileService')
const ProfielController = express.Router();
const ProfileDAL = require('./ProfileDAL');
const Profile = require('./Profile');

const profileService = new ProfileService(new ProfileDAL());

ProfielController.get('/:id', (req, res) => {
    console.log(req.params);
    const profile = profileService.getProfile(req.params.id);
    if(profile) {
        res.status(200).json(profile);
    }
    else {
        res.status(404).json({err: 'Profile Not Found'});
    }
});

ProfielController.get('/', (req, res) => {
    const profiles = profileService.getProfiles();
    res.status(200).json(profiles);
});

ProfielController.post('/', (req, res) => {
    const profiles = profileService.addProfile(new Profile(req.body.id, req.body.name, req.body.city));
    res.status(201).json(profiles);
})

ProfielController.put('/:id', (req, res) => {
    const profile = profileService.editProfile(req.params.id, req.body.name, req.body.city);
    if(profile) {
        res.status(200).json(profile);
    }
    else {
        res.status(404).json({err: 'Profile Not Found'});
    }
})

ProfielController.delete('/:id', (req, res) => {
    const profiles = profileService.deleteProfile(req.params.id);
    if(profiles) {
        res.status(200).json(profiles);
    }
    else {
        res.status(404).json({err: 'Profile Not Found'});
    }
})

module.exports = ProfielController;