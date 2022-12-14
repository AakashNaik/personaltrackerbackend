const express = require('express');
//const Model = require('../models/model');
const router = express.Router()



//Post Method
router.post('/post', async (req, res) => {
    // const data = new Model({
    //     name: req.body.name,
    //     age: req.body.age
    // })
    // console.log('error1');
    // try {
    //     const dataToSave = await data.save();
    //     res.status(200).json(dataToSave)
    // }
    // catch (error) {
    //     console.log('error');
    //     res.status(400).json({message: error.message})
    // }
    res.send({'output':'post'})
})

//Get all Method
router.get('/getAll', async(req, res) => {
    // try{
    //     const data = await Model.find();
    //     res.json(data)
    // }
    // catch(error){
    //     res.status(500).json({message: error.message})
    // }
    res.send({'output':'get All called'})
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;