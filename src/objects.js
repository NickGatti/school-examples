import Person from './class';
import uuid from 'uuid';

const name = 'nick gatti';
const address = '4554 E Paradise';
const sex = 'male';
const race = 'white';
const age = '34';
const height = '5-9';
let likes = 'girls, computers, dogs';

let personId = uuid();
let personObj = {};

personObj[personId] = new Person(name, address, sex, race, age, height, likes);

console.log(personObj);

personObj[personId].speaks('I like teaching');

personObj[personId].get('name');
personObj[personId].set('name', 'nick eric gatti');