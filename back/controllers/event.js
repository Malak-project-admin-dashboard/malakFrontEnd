const Event = require('../models/event')

exports.addEvent = (req, res, next) => {
   const data = req.body;

  const myNewEvent = new Event({
    eventTitle: data.eventTitle,
    eventDesc: data.eventDesc
  });

  myNewEvent
    .save()
    .catch((err) => console.log(err));
   res.json("create a new event successfully");
};


exports.getAllEvents = (req, res, next) => {
  Event.find({})
  .then((events) => {
      res.status(200).json(events);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};
