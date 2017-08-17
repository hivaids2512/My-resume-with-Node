var expect = require("chai").expect;
var should = require("chai").should();
var request = require("request");
var sampleResume;
var endPoint = "http://localhost:8080";
var token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNTk5NDIwNjlkZTE5NDE1MDEyMjE3OGExIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwiY3JlYXRlQXQiOiJpbml0IiwidXBkYXRlQXQiOiJpbml0Iiwicm9sZSI6ImluaXQiLCJfX3YiOiJpbml0IiwibGFzdE5hbWUiOiJpbml0IiwiZmlyc3ROYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiY3JlYXRlQXQiOnRydWUsInVwZGF0ZUF0Ijp0cnVlLCJyb2xlIjp0cnVlLCJsYXN0TmFtZSI6dHJ1ZSwiZmlyc3ROYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiY3JlYXRlQXQiOiIyMDE3LTA4LTE2VDEwOjM3OjI5LjczOFoiLCJ1cGRhdGVBdCI6IjIwMTctMDgtMTZUMTA6Mzc6MjkuNzM5WiIsInJvbGUiOiJDbGllbnQiLCJfX3YiOjAsImxhc3ROYW1lIjoiVnUiLCJmaXJzdE5hbWUiOiJRdXkiLCJwYXNzd29yZCI6IiQyYSQxMCR0M0dXUUw5aGRlR2czbXA4UGVGMnl1VGNYWS9RWURhaWRyOFdIMDZkaG9LcU1LMnhIV0hxeSIsImVtYWlsIjoidHJhbnF1eTI1MTJAZ21haWwuY29tIiwiX2lkIjoiNTk5NDIwNjlkZTE5NDE1MDEyMjE3OGExIn0sIiRpbml0Ijp0cnVlLCJpYXQiOjE1MDI5ODU1NDYsImV4cCI6MTUwMjk5NTYyNn0.7f8Vu2I8dxRY6zEZ7mAzQ5esB1KJ8pdQvbe9VgWnFIM"

describe("Resume api test", function() {
  before(done => {
    sampleResume = {
      name: "Test 2",
      description: "Test 2"
    };
    done();
  });

  describe("Create resume testing", function() {
    it("should be able to create new resume", function(done) {
      request.post(
        {
          url: endPoint + "/api/resumes",
          body: sampleResume,
          json: true,
          headers: {'content-type':'application/json', 'Authorization': token},
        },
        function(err, res, body) {
          expect(err).to.be.null
          expect(body.name).to.equal('Test 2')
          expect(res.statusCode).to.equal(200)
          done()
        }
      );
    });
  });
});
