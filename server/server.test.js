const expect = require("expect");

const request = require("supertest");

var app = require("./server").app;

describe("Server-express", () => {

  
    describe("GET /", () => {

        

        it("Should return Drews running", (done) => {

            request(app.listen())
                .get("/")
                .expect(404)
                .expect((res) => {
        
                    expect(res.body).toInclude({
                        error: "Page not found."
                    });
                    
                })
                .end(done);
        
        });

    });

    
    describe("GET /USERS", () => {
        
       
    

        it("Should return a names from GET request", (done) => {
            request(app.listen())
                .get("/users")
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                            name: "Andrew",
                            age: "19"
                        });
                })
                .end(done);
        });

    });
  

});

