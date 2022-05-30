const Status = require("../models/Status.model");

module.exports.statusController = {

  postStatus: async (req, res) => {
    try {
      await Status.create({
        text: req.body.text
      });
      res.json("Status has been added");
    } catch (err) {
      res.json("Issues when creating status");
    }
  }
}