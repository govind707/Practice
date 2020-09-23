//const { TestScheduler } = require('jest');
const multiply = require('./app');
//import React from 'react';

//import * as Multiply from './app';

test ("Unit testing ", () => {
    expect(multiply(1,7)).toBe(7);
});