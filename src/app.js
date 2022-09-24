const express = require("express");
const model = require("./controller/index");

const app = express();

app.use(express.json());

const PORT = 8081;
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));

//CRUD
//GET   POST   DELETE   PUT
//CREATE
app.post("/create", async (req, res) => {
  // const name = req.body.name
  const { name, apellido, edad } = req.body;
  await model.create(name, apellido, edad);
  res.status(200).json("CHARACTERS CREATED");
  try {
  } catch (err) {
    res.status(400).json(err);
  }
});

app.get("/read", async (req, res) => {
  try {
    let data = await model.read();
    res.status(200).json({ data: data });
  } catch (err) {
    // console.log(err.message)
    res.status(400).json(err);
  }
});

//DELETE
//query
//params<=
app.delete("/delete/:id", async (req, res) => {
  //sin destructuring
  //const id = req.params.id
  //destructuring
  const { id } = req.params;
  try {
    await model.delete(id);
    res.status(200).json({ succes: "delete character" });
  } catch (err) {
    res.status(400).json(err);
  }
});

app.put("/upload/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await model.upload(id, req.body);
    res.status(200).json("upload characters");
  } catch (err) {
    res.status(400).json(err);
  }
});
