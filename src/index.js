class People {
  constructor (name) {
    this.name = name
  }

  sayName () {
    console.log(`Hello world, I'm ${this.name}`)
  }
}

const lily = new People('Lily')
lily.sayName()