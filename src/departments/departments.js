const departmets = require('express').Router();

const _departmenst = [
    {
        id: 1,
        name: "CSE",
    },
    {
        id: 2,
        name: "MEC",
    },
    {
        id: 3,
        name: "ECE",
    }
]
departmets.get("/d", (req, res) => {
    res.status(200).send(_departmenst);
});










module.exports = departmets;