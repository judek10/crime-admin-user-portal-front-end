import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { TestBed, waitForAsync } from "@angular/core/testing"
import { CSVConverter } from "src/app/classes/CSVConverter"

describe('User CSV file', () => {

    it('should return hello world', () => {
        const greeter = new CSVConverter();
        expect(greeter.sayHello()).toEqual("hello world");
    });

    // it('should parse csv file', () => {
    //     const greeter = new CSVConverter();
    //     expect(greeter.convertCSVtoArray()).toEqual("hello world");
    // });
})