const router= require("express").Router()




//toutes will be here....
router.get("/",(req,res)=>{
    res.render("index")
})






module.exports=router
