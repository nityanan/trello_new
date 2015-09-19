var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test',function()
{
	console.log("successfully connection stablised ");
});
var usersSchema = mongoose.Schema({
		email:{type:String,unique:true},
        password:String,
        name:String,
        verify_token:Number,
        verify:Boolean,
        phoneno:Number,
        image:String,
        address:
        {
            line1:String,
            line2:String,
            city:String,
            state:String,
            country:String,
        },
        projects :[{project_id:String}]
    });
var taskSchema = mongoose.Schema({
        title : String,
        description : String,
        created_on : String,
        created_by : String,
        modified_on : String,
        modified_by : String,
        assigned_to : String,
        status : Boolean,
        sequence : Number,
        due_date : String,
        completion_date : String,
        project_id : String,
        comments:
        [
            {
                content : String,
                posted_by : String,
                posted_on : String
            }
         ]
        
});
var projectSchema = mongoose.Schema(
{
        project_id:{type:String,unique:true},
        title:String,
        description:String,
        users:[{"email":String}]
        
});
module.exports.project = mongoose.model("project",projectSchema,"project");
module.exports.user = mongoose.model("user" , usersSchema,"user");
module.exports.task = mongoose.model("task",taskSchema,"task");