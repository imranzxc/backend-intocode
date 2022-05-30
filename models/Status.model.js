const mongoose = require("mongoose");
const statusSchema = mongoose.Schema({
text: String
});

const Status = mongoose.model("Status", statusSchema);
module.exports = Status;