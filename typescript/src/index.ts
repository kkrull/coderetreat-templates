import HelloWorld from "./helloWorld"
import GoodbyeWorld from "./nested/goodbyeWorld"
import Optional from "optional-js"

console.log(new HelloWorld(Optional.of("user")).message())
console.log(new GoodbyeWorld(Optional.empty()).message())