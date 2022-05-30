const mongoose = require("mongoose");
const groupSchema = mongoose.Schema({
group: String,
week: Number,
finished: {
  type: Boolean,
  default: false
}
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;