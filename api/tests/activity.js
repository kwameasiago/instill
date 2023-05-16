import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp);
let expect = chai.expect;


describe('Activities', () => {
    it('should return 200 status on sync endpoint', async () => {
        const response = await chai.request(app)
            .post('/activity/sync')
            .set('content-type', 'application/json');

            expect(response.status).to.equal(200);
    });

    it('should return 200 status on get activities endpoint', async () => {
        const response = await chai.request(app)
            .get('/activity')
            .set('content-type', 'application/json');

            expect(response.status).to.equal(200);
    });
})