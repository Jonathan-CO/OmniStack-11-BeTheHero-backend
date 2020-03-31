const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set('Authorization', '15131as')
            .send({
                name: "Asilo Frederico",
                email: "asilo.diamantina@gmail.com",
                whatsapp: "11223456890",
                city: "Diamantina",
                uf: "MG"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)

    })
}) 