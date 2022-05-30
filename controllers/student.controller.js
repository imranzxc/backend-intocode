const Student = require("../models/Student.model");


module.exports.studentController = {

  postStudent: async (req, res) => {
    try {
      await Student.create({
        name: req.body.name,
        group: req.body.group,
        payment: req.body.payment,
        status: req.body.status,
        offer: req.body.offer
      });
      res.json("Student has been added");
    } catch (err) {
      res.json("Issues when creating student");
    }
  },

  getAllStudent: async (req, res) => {
    try {
      const allStudents = await Student.find({}).populate("group offer");
      res.json(allStudents);
    } catch (err) {
      res.json("Issue when getting all students");
    }
  },

  getStudentById: async (req, res) => {
    try {
      const oneStudent = await Student.findById(req.params.id).populate(
        "group offer"
      );
      res.json(oneStudent);
    } catch (err) {
      res.json("Issue when getting student by id");
    }
  },

  patchStudent: async (req, res) => {
    try {
      const patchS = await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        group: req.body.group,
        payment: req.body.payment,
        status: req.body.status,
      },{ new: true });
      res.json(patchS);
    } catch (err) {
      res.json("Issues when changing student");
    }
  },

  deleteStudentById: async (req, res) => {
    try {
      await Student.findByIdAndRemove(req.params.id);
      res.json("Student has been removed");
    } catch (err) {
      res.json("Issues when removing student");
    }
  },

  getStudentByGroup: async (req, res) => {
    try {
      const groupStudent = await Student.find({group: req.params.id }).populate(
        "group offer"
      );
      res.json(groupStudent);
    } catch (err) {
      res.json("Issue when getting student by group");
    }
  },
  fullPayment: async (req, res) => {
    try {
      const payment = await Student.find({payment: 100}).populate(
        "group"
      );
      res.json(payment);
    } catch (err) {
      res.json("Issue when getting note of student");
    }
  },
  halfPayment: async (req, res) => {
    try {
      const payment = await Student.find({payment: 50}).populate(
        "group"
      );
      res.json(payment);
    } catch (err) {
      res.json("Issue when getting note of student");
    }
  },

  unPayment: async (req, res) => {
    try {
      const payment = await Student.find({payment: 0}).populate(
        "group"
      );
      res.json(payment);
    } catch (err) {
      res.json("Issue when getting note of student");
    }
  },


};