
const request = require('supertest');
const app = require('../routes/app');



describe('GET /products', function() {


    it('should return: 200', function(done) {
      request(app)
        .get('/products')
        .expect(200, done);
    });
    
    it('should return: 200', function(done) {
      request(app)
        .get('/products')
        .expect(200)
        .then(response => {
            // assert(response.body.email, 'foo@bar.com')
            console.log(response);
        })
    });




  });