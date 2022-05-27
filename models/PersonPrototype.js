const mongoose = require ('mongoose')
const Schema = mongoose.Schema()
const PersonPrototype = {
name:{
    type:String ,required:true,
},
age:Number,
favoriteFoods:[String]

}
const Person =mongoose.model("Person",PersonPrototype)
module.exports = Person