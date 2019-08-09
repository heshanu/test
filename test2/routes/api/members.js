const express=require('express');
const router=express.Router(); 
const members=require('../../Members');
const  uuid=require('uuid');


//get single
router.get('/:id',(req,res)=>{
    // res.send(req.params.id);
    const found=members.some(member=>member.id===parseInt(req.params.id));
     if(found){
         res.json(members.filter(member=>member.id=== parseInt( req.params.id)));
     }
     else{
         res.status(400).json({msg:`member not found ${req.params.id}`});
     }
   
 });

//create member
 router.post('/',(req,res)=>{
    const newmember={
        id:uuid.v4(),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    }

    if(!newmember.name || !newmember.email){
        return  res.status(400).json({msg:'please include name and email'})
    }
    members.status(newmember);
    members.push(newmember);
    res.json(members);
 });

 //update member
 router.put('/:id',(req,res)=>{
    // res.send(req.params.id);
    const found=members.some(member=>member.id===parseInt(req.params.id));
     if(found){
      const updatemeber=req.body;
      members.forEach(member=>{
          if(member.id===parseInt(req.params.id)){
            member.name=updatemeber.name ? updatemeber.name:member.name;
            member.email=updatemeber.email ? updatemeber.email:member.email;;

            res.json({msg:"member is updated",member});
          }
        }); 
     }
     else{
         res.status(400).json({msg:`member not found ${req.params.id}`});
     }
   
 });


 //get all mem
 router.get('/',(req,res)=>{
     res.json(members);
 });

//create member
router.post('/',(req,res)=>{
    res.send(req.body);
});
//delete
router.delete('/:id',(req,res)=>{
    // res.send(req.params.id);
    const found=members.some(member=>member.id===parseInt(req.params.id));
     if(found){
        res.json({msg:'member deleted',members:members.filter(member=>member.id !==parseInt(req.params.id))}) 
     }
     else{
         res.status(400).json({msg:`member not found ${req.params.id}`});
     }
   
 });




 module.exports=router;

