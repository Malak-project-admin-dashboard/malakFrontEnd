const Contact = require('../models/contact');


exports.addContact = (req, res, next) => {
    const data = req.body;
 
   const myInquiry = new Contact({
    patientName: data.patientName,
    patientGmail: data.patientGmail,
    phoneNumber: data.phoneNumber,
    patientMsg: data.patientMsg
   });
 
   myInquiry
     .save()
     .catch((err) => console.log(err));
    res.json("create a new inquiry successfully");
 };
 


// this shoud delete it later 
 exports.getAllContacts = (req, res, next) => {
  Contact.find({})
  .then((contacts) => {
    res.status(200).json(contacts);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
 }
