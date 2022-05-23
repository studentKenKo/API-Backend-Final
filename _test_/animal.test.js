const request =require('supertest')
const app = require('./common/app.test.js')

const expected = {
        "id": 1,
        "title": "title 1",
        "alltext": "some stuff",
        "summary": null,
        "datecreated": "0022-01-01T00:00:00.000Z",
        "datemodified": "0022-01-01T00:00:00.000Z",
        "imageurl": null,
        "published": null,
        "authorid": 1
    }


describe('Animals Testing Cases', ()=> {
  xit('Check the status code is correct', async() => {
    const res = await request(app.callback())
      .get('/api/v1/animals')
      .send({})
  })

  it('Return all articles', async() => {
    const res = await request(app.callback())
      .get('/api/v1/articles')
      .send({})
    expect(res.statusCode).toEqual(200)
    expect(res.type).toEqual("application/json")

    //body json use toContainEqual
    expect(res.body).toContainEqual(expected)
}) 

})