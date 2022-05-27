const { request } = require('express')
const express = require ('express') 
const router = express.Router()
const Person = require ("../models/PersonPrototype")

//ajouter Person
router.post("/newPerson",(req,res)=>{
   const {name,age,favoriteFoods}= req.body;
let newPerson = new Person({name,age,favoriteFoods})    
newPerson.save((err,data)=>{
    if(err) throw err 
    else res.send({msg:"Person added"})
})
})
// recherhce person by id
router.get("/getPerson/:id",(req,res)=>{
    Person.findById({_id:req.params.id},
        (err,data)=>{
        if (err) throw err
        else res.json(data)
    })        
})
//find by id  and update 
router.put("/updatePerson/:id", (req, res) => {
   
Person.findByIdAndUpdate({_id:req.params.id},{ ...req.body },
    // (err,data)=>{}) 
    )
.then (res.status(200).json({msg:"person updated",
    body:req.body
}))
.catch((err)=>res.status(500).send(err))
    
        // if (err) throw err
        // else res.send(`Person updated`,req.body) 
    
        
        //,{msg:"Person updated"}
    })
     
    router.delete("/deletePerson/:id", (req, res) => {
        Person.findByIdAndDelete({_id:req.params.id},{ ...req.body },
        (err,data)=>{
            if (err) throw err
            else res.json({msg:"Person deleted"})
        })
    })

    const foodToSearch = "burrito";
    Person.find({favoriteFoods:foodToSearch})
    .sort({name : "desc"})
    .limit(2)
    .select("-age")
    .exec((err, data) => {
        if(err) console.log(err);
        console.log(null, data);
    })


      
module.exports = router

