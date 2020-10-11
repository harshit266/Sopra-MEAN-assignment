let aboutController = {}
const about = require('./about.model')

aboutController.add = (req,res)=>{
   
                    const u = new about();
                    u.firstName=req.body.firstName;
                    u.lastName=req.body.lastName;
                    u.email=req.body.email;
                    u.number=req.body.number;
                    u.intrest=req.body.intrest;
                    u.date=req.body.date;
                    
                    u.save(function(err, result){
                        if(err){
                            console.log("Error");
                        }
                        else{
                            console.log(" First Success");
                        }
                    })
                
                
    
   
        
 }

module.exports = aboutController;