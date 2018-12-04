import ProfileComponent from './ProfileComponent';
import ProfileService from './ProfileService';
import ErrorHandler from './ErrorHandler';
import AjaxService from './AjaxService';

window.profileComponent = new ProfileComponent(new ProfileService(new AjaxService()), new ErrorHandler());