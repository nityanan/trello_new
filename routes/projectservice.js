
var express=require("express");
var router=express.Router();
var project=require("./../db/projectdb");
var url=require("url");

router.get("/view_project", function(req,res,next){
  var query=url.parse(req.url,true).query;
  var filters=query.filters ? JSON.parse(query.filters): {};
  var projection=query.projection ? JSON.parse(query.projection): {};
  var options=query.options ? JSON.parse(query.options): {};
  project.project_Find(filters,projection,options,function(err,result){
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });
});
router.put("/add_project", function(req,res,next){
  var data=req.body;
  project.project_Save(data,function(err,result){
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });
});
router.delete('/remove_project',function(req,res,next)
{ 
  var data = req.body;
  var match = data.match ? data.match: {};
  var options = data.options ? data.options : {};
  project.project_Delete(match, function(err, result)
  {
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });

 });
router.post('/update_project',function(req,res,next)
{
   var data = req.body;
   var match = data.match ? data.match : {};
   var update_data = data.update_data ? data.update_data : {};
   var options = data.options ? data.options : {};
  project.project_Update(match, update_data, options ,function(err,result)
  {
    if(err)
    {
      res.send(err);
    }
    res.send(result);
  });
});
module.exports=router;