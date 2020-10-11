
const aboutRouter = require ( './about_us/about.routes')


x= (app)=>{
    console.log("initiallizing routes")
    app.use('',aboutRouter)  
 
}
module.exports =x;
