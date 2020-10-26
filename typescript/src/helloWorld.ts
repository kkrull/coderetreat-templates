import Optional from 'optional-js';

export default class HelloWorld {
  name: Optional<string>

  constructor(name: Optional<string>){
    this.name = name
  }

  message() {
      return `Hello ${this.name.orElse("world")}`
  }
}