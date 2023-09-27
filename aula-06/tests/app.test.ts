import supertest from "supertest";

import app from "../src/app";

const api = supertest(app);

describe("API test", () => {
  it("/event", async ()=>{
    const {body} = await api.get("/event")
    expect(body).toEqual({
      id: expect.any(Number),
      title: expect.any(String),
      image: expect.any(String),
      date: expect.any(String)
    })
  })
});