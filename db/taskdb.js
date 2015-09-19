var db = require("./trellodb.js");
var calls : 
{
  task_find : function(filters, projection, options, callback)
  {
  	db.task.find(filters, projection, options, function(err,res)
  	{
  		if(err)
  		{
  			callback(err,null);
  		}
  		  callback(null,res);
  	});
  },
  task_save : function(data, callback)
  {
  	db.task.create(data, function(err,res)
  	{
  		if(err)
  		{
  			callback(err,null);
  		}
  		  callback(null,res);
  	});
  },
  task_update : function(match, update_data, options, callback)
  {
  	db.task.update(match, update_data, options, function(err,res)
  	{
  		if(err)
  		{
  			callback(err,null);
  		}
  		  callback(null,res);
  		});
  },
  task_delete : function(match, options, callback)
  {
  	db.task.remove(match, options, function(err,res)
  	{
  		if(err)
  		{
  			callback(err,null);
  		}
  		  callback(null,res);
  	});
  }

}
module.export = calls;
