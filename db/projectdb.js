var db = require("./trellodb.js");

var calls = {
   project_Find: function(filters, projection, options, callback) {
       db.project.find(filters, projection, options, function(err, res) {
                      if (err) {
               callback(err, null);
           }
           callback(null, res);
       });
   },
   project_Save: function(data, callback) {

       if (data)
           db.project.create(data, function(err, res) {
               if (err) {
                   callback(err, null);
               }
               callback(null, res);
           });
       else {}
   },
   project_Update: function(match, update_data, options, callback) {
       db.project.update(match, update_data, options, function(err, res) {
           if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   },
   project_Delete: function(match, options, callback) {
       db.project.remove(match, options, function(err, res) {
             if (err) {
               callback(err, null);
           }

           callback(null, res);
       });
   }
};

module.exports = calls;