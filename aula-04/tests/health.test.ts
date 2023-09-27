import app from "index"
import supertest from "supertest"

const server = supertest(app)

describe("Health",()=>{
    it("get",async ()=>{
      const result = await server.get("/health")
      expect(result.status).toBe(200)
    })
})