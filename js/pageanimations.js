import barba from '/@barba/core';

barba.init({
    transitions: [{
        name: 'default-transition',
        leave() {
        // create your stunning leave animation here
        },
        enter() {
        // create your amazing enter animation here
        }
    }]
});

console.log("helloooooo");
