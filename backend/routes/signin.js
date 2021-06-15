const User = require('../models/user');
const router = require('express').Router();

// // router.post('/login',(req,res)=>{
// // console.log(req.body);

// // })

// router.post('/login',async (req,res)=>{
//     console.log(req.body)
//     const user = req.body;
//     console.log(user);
//    try{
//     const finduser = await User.findOne({email: user.email});
//     if(finduser.password !== user.password) return res.status(200).json({message: 'false password'});
//     res.status(200).json({message: true});
//    }catch(err){
//        res.status(500).json(false)
//    }
// })

router.post('/login',async (req,res)=>{
    console.log(req.body)
    var email =  req.body.email
    var password = req.body.password
    var compare = ''
    await User.findOne({email : email}, (err, data) =>{
        compare = data;
        
    })
    if(!compare){
        compare='';
        if(email === compare.email && password === compare.password){
            console.log('accepted data log')
            res.send({status: "success Logg", useremail: compare.email, username: compare.username});
        } else{
            console.log('wrong data');
        }
    }else {
        res.send('false')
    }
    
})
module.exports = router;