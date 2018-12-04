import { name, age, isActive, Greeter } from './mylib';
import {Router} from './Router';
import {Router as BrowserRouter} from './BrowserRouter';


console.log(name, age, isActive);

let greeter = new Greeter();
let r1 = new Router();
let r2 = new BrowserRouter();
