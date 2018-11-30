Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 800)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 500)),
]).then(res => console.log('res', res))
.catch(res => console.log('error', res));

Promise.all([12,2323,19]).then(res => console.log('res', res));

Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 800)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 500)),
]).then(res => console.log('res', res))
.catch(res => console.log('error', res));;