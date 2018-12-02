const express=require('express');
const router=express.Router();

//Model Item

const Item=require('../../model/Item')


//Get method for products

router.get('/',(req,res)=>{

    Item.find()
        .sort({date:-1})
        .then((items)=>res.json(items))

})

//Post method for products

router.post('/',(req,res)=>{


        const newItem=new Item({
            name:req.body.name
        })

        newItem.save().then((item)=>res.json(item))

})

//Delete method for products

router.delete('/:id',(req,res)=>{


    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>{res.json({success:true})})

        ).catch(err=>res.status(404).json({success:false}))


  //  newItem.save().then((item)=>res.json(item))

})



module.exports=router;