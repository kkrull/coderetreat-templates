import Optional from "optional-js"
import GoodbyeWorld from "./goodbyeWorld"
import { expect } from 'chai'

describe("GoodbyeWorld", () => {
    it("returns default message when no name is passed", () => {
        expect(new GoodbyeWorld(Optional.empty()).message()).to.equal("Goodbye world")
    })

    it("returns message with name when name is passed", () => {
        expect(new GoodbyeWorld(Optional.of("user")).message()).to.equal("Goodbye user")
    })
})