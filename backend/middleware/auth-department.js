const {
    models: { User, Department, User_Department },
  } = require("../models");
  
module.exports = {
    check: (req, res) =>{
        User_Department.findOne({where: { user_id}}).then((user_department) => {
            if(!user_department){
              return res.status(403).send("User department not found");
            }
            
        });

    },

}
