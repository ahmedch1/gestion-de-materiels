const User = require('../models/user');
const router = require('express').Router();


// // // router.post('/signup',(req,res)=>{
// // //     console.log(req.body);
// // //     const newUser = new User({
// // //         email: req.body.email,
// // //         password: req.body.password
// // //     });
// // //     try{
// // //         const addUser = User.save(newUser);
// // //         res.status(200).json({signup: true});
// // //     }catch(err){
// // //         res.status(500).json({Message: err});
// // //     }
// // // })
router.post('/signup',(req,res)=>{
    
    var email = req.body.email;
    var password = req.body.password;
    User.create({
        email: email,
        password: password
    })
    console.log('data has been saved');
})

module.exports = router;

