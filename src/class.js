function Person (name, address, sex, race, age, height, likes) {
    likes = likes.toString();
    
    this.name = name;
    this.initials = name.split(' ');
    this.address = address;
    this.sex = sex;
    this.likes = likes.replace(/\s/g, '').split(',');
    this.race = race;
    this.age = age;
    this.height = height;
    this.email = '';
    
    for (let i = 0; i < this.initials.length; i++){
        this.initials[i] = this.initials[i].slice(0, 1);
    }
    
    this.initials = this.initials.toString().replace(',', '').toUpperCase();
    
    this.speaks = function (says) {
        console.log(`${this.name} ${says}`);
    }
    this.get = function (prop) {
        return console.log(this[prop]);
    }
    this.set = function (prop, value) {
        this[prop] = value;
        console.log(this[prop]);
    }
    
}

export default Person;