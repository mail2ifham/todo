import express from "express";

const app = express();
const port = 3000;
const workList = []; //work list array
const todayList = []; //today list array

app.use(express.static("public")); //set static file's folder
app.use(express.urlencoded({ extended: true })); // set bodyParser

// home route which is handle today list
app.get("/", (req, res) => {
  // render index.ejs file with todayList
  res.render("index.ejs", { itemList: todayList });
});
// work route which is handle work list
app.get("/work", (req, res) => {
  // render work.ejs file with workList
  res.render("work.ejs", { itemList: workList });
});

// route for add item
app.post("/addItem", (req, res) => {
  const key = Object.keys(req.body)[0]; // get the name felid value
  const newItem = req.body[key]; // get the new item
  if (newItem !== "") {  //avoid empty entry
    if (key === "today-add-felid") {
      todayList.push(newItem); //add to todayList array
      res.redirect("/"); // go back to todayList
    } else {
      //   console.log("work",newItem);
      workList.push(newItem); //add to workList array
      res.redirect("/work"); //go back to workList array
    }
  }else {
    if (key === "today-add-felid") {
        res.redirect("/"); // go back to todayList
      } else {
        //   console.log("work",newItem);
        res.redirect("/work"); //go back to workList array
      }
  
  }
});

app.listen(port, () => {
  console.log(`Listen to port ${port}...`);
});
