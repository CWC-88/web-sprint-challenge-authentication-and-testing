const db = require('../database/dbConfig')
const request = require('supertest')
const server = require('../api/server')


//  route
describe('test route', () => {
    it(' 200 status code', async () => {
        const code = 200
        const response = await request(server).get('/')
        expect(response.status).toEqual(code)
    })
})

// regsiter 
describe("register user", () => {



    // it('201 is good', async () => {
    //     const payload = { username: "b5", password: "b5" }
    //     const response = await request(server)
    //         .post("/api/auth/register")
    //         .send(payload)
    //     expect(response.statusCode).toBe(201)
    // })
 




    it('returns 500 ', async () => {
        const payload = { badusername: "abccc", badpassword: "abccc" }
        const response = await request(server)
            .post("/api/auth/register")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})


// login 
describe("login user", () => {
    it(' 200 login ', async () => {
        const payload = { username: "b6", password: "b6" }
        const response = await request(server)
            .post("/api/auth/login")
            .send(payload)
        expect(response.statusCode).toBe(200)
    })


    it('returns 500', async () => {
        const payload = { NOTusername: "bad2", NOTpassword: "bad2" }
        const response = await request(server)
            .post("/api/auth/login")
            .send(payload)
        expect(response.statusCode).toBe(500)
    })
})



// joke 
describe('jokes route', () => {
    it(' 401 status not logged in', async () => {
        const expected = 401
        const response = await request(server).get('/api/jokes')
        expect(response.status).toBe(expected)
    })
    it(' 200 ig goof', async () => {
        const payload = { username: "b6", password: "b6" }
        const response = await request(server)
            .post("/api/auth/login")
            .send(payload)
            .then(await request(server)
            .get('/api/jokes')
            )
        expect(response.statusCode).toBe(200)
    })


})
