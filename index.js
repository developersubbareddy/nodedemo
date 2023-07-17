const express = require("express");
const cors = require('cors');
const departments = require("./src/departments/departments");
const app = express();
app.use(cors({ origin: true }));
app.use("/departments",departments);
app.get("/", (req, res) => {
    console.log(req)
    res.status(200).send({
        app_name: "Student Management",
        version: "1.0.0",
        message: "Welcome to Veda technologies"
    })
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`)
})
