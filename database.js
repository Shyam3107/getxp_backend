const mongoose=require("mongoose");
//getXpDb

mongoose.connect("mongodb+srv://getXpDb:getXpDb@getxp.fyqom.mongodb.net/getXpDb?retryWrites=true&w=majority",{ useNewUrlParser:true,useUnifiedTopology:true})
//mongoose.connect("mongodb://localhost:27017/getXp",{ useNewUrlParser:true,useUnifiedTopology:true});

const user= new mongoose.Schema({
    first_name:String,
    last_name:String,
    last_name:String,
    contact_number:String,
    year_of_graduation:Number,
    email_id:String,
    city:String
})

const colleges=new mongoose.Schema({
    college_name:String,
    users:[user]
})

const Student=mongoose.model("Student",user);
const College=mongoose.model("College",colleges);

module.exports= {College,Student};