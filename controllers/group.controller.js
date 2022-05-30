const Group = require("../models/Group.model");
const Student = require("../models/Student.model");

module.exports.groupController = {
  postGroup: async (req, res) => {
    try {
      await Group.create({
        group: req.body.group,
        week: req.body.week,
        finished: req.body.finished,
      });
      res.json("Group has been added");
    } catch (err) {
      res.json("Issues when creating group");
    }
  },

  getAllGroup: async (req, res) => {
    try {
      const allGroup = await Group.find();
      res.json(allGroup);
    } catch (err) {
      res.json("Issue when getting all group");
    }
  },

  getGroupById: async (req, res) => {
    try {
      const oneGroup = await Group.findById(req.params.id);
      res.json(oneGroup);
    } catch (err) {
      res.json("Issue when getting group by id");
    }
  },

  patchGroup: async (req, res) => {
    try {
      const patchGroup = await Group.findByIdAndUpdate(
        req.params.id,
        {
          group: req.body.group,
          week: req.body.week,
          finished: req.body.finished,
        },
        { new: true }
      );
      res.json(patchGroup);
    } catch (err) {
      res.json("Issues when changing group");
    }
  },

  deleteGroupById: async (req, res) => {
    try {
      await Group.findByIdAndRemove(req.params.id);
      res.json("Group has been removed");
    } catch (err) {
      res.json("Issues when removing group");
    }
  },
  getWeekGroup: async (req, res) => {
    try {
      const weekGroup = await Group.find({ week: req.params.id });
      res.json(weekGroup);
    } catch (err) {
      res.json("issues when getting week group");
    }
  },
  getFinishedGroup: async (req, res) => {
    try {
      const fGroup = await Group.find({ finished: req.params.id });
      res.json(fGroup);
    } catch (err) {
      res.json("issues when getting finished group");
    }
  },
  studentOffer: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id });
      const offer = students.filter(i => i.offer)
      
      const percent = Math.floor((offer.length * 100) / students.length);
      res.json(` Percent of people who getting offer: ${percent}%`);
    } catch (err) {
      res.json(err);
    }
  },
};
