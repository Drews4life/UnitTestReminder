const utils = require("./utils.js");
const expect = require("expect");


describe("Utils", () => {


    
    it("should add two numbers", () => {
        var res = utils.add(33,7);
        
        //console.log("\nJust a test passing through\n");
    
        // if(res !== 40){
        //     throw new Error(`Smth went wrong, value is: ${res} `);
        // }
    
        expect(res).toBe(40).toBeA("number");
    });
    
    it("Should square the number", () => {
        var res = utils.square(5);
    
        // if(res !== 25){
        //     throw new Error(`Invalid value, we have ${res}`)
        // }
    
        //expect(res).toBe(25);
        var user = {
            age: "25",
            location: "Kyiv"
        };
    
        var fullNameProperty = utils.setName(user, "Andrew Melnikoff");
    
        expect(fullNameProperty).toInclude({
            firstName: "Andrew",
            lastName: "Melnikoff"
        }).toBeA("object");
    
        expect(user).toEqual(fullNameProperty);
    });
    
    it("Should complete async task", (done) => {
        utils.asyncSome(5, 6, (sum) => {
            expect(sum).toBe(11).toBeA("number");
            done();
        });
    });
    
    it("Should asynchroniously square a number", (done) => {
        utils.asyncSquare(5, (square)=>{
            expect(square).toBe(25).toBeA("number");
            done();
        });
    });

});


