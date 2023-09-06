# Resources

### Read or watch:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
# Tasks

### Task 0: Keep every promise you make and only make promises you can keep (Mandatory)
**Score:** 50.0% (Checks completed: 100.0%)

### Description
In this task, you need to return a Promise using the provided prototype function `getResponseFromAPI()`.

### Example

```javascript
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
```
```bash
bob@dylan:~$
bob@dylan:~$ npm run dev 0-main.js
true
bob@dylan:~$
```
Repository Information

    GitHub repository: alx-backend-javascript
    Directory: 0x01-ES6_promise
    File: 0-promise.js


### Task 1. Don't make a promise...if you know you can't keep it

Using the prototype below, return a promise. The parameter is a boolean.

`getFullResponseFromAPI(success)`

When the argument is:

    true
        resolve the promise by passing an object with 2 attributes:
            status: 200
            body: 'Success'
    false
        reject the promise with an error object with the message The fake API is not working currently

Try testing it out for yourself
```javascript
bob@dylan:~$ cat 1-main.js
import getFullResponseFromAPI from './1-promise';

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
```
```bash
bob@dylan:~$ 
bob@dylan:~$ npm run dev 1-main.js 
Promise { { status: 200, body: 'Success' } }
Promise {
  <rejected> Error: The fake API is not working currently
    ...
    ...
bob@dylan:~$ 
```
