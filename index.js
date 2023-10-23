import express from "express";

const app = express();
const port = 3000;
const workList = [];
const todayList = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { itemList: todayList });
});
app.get("/work", (req, res) => {
  res.render("work.ejs", { itemList: workList });
});


app.post("/addItem", (req, res) => {
  const key = Object.keys(req.body)[0];
  const newItem = req.body[key];
  if (key === "today-add-felid") {
    todayList.push(newItem);
    res.redirect("/");
  } else {
    workList.push(newItem);
    res.redirect("/work");
  }
});

app.listen(port, () => {
  console.log(`Listen to port ${port}...`);
});
