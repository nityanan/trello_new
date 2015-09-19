var db = require("./trellodb.js");

var calls = {
   user_Find: function(filters, projection, options, callback) {
       db.user.find(filters, projection, options, function(err, res) {          
           if (err) {
               callback(err, null);
           }
           callback(null, res);
       });
   },
   user_Save: function(data, callback) {

       if (data)
           db.user.create(data, function(err, res) {
               if (err) {
                   callback(err, null);
               }
               callback(null, res);
           });
       else {}
   },
   user_Update: function(match, update_data, options, callback) {
       db.user.update(match, update_data, options, function(err, res) {
           if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   },
   user_Delete: function(match, options, callback) {
   	console.log("w............",match);
       db.user.remove(match, options, function(err, res) {
           console.log("3............",err);
           if (err) {
            console.log("4............",err);
               callback(err, null);
           }
           console.log("1............",res);
           callback(null, err);
       });
   }
};

module.exports = calls;