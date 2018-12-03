const ProfileComponent = require('./ProfileComponent');
const ProfileService = require('./ProfileService');
const AjaxService = require('./AjaxService');
const ErrorHandler = require('./ErrorHandler');

window.profileComponent = new ProfileComponent(new ProfileService(new AjaxService()), new ErrorHandler());