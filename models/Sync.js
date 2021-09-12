const mongoose = require("mongoose");

const SyncSchema = mongoose.Schema({
  // System name
  system: {
    type: String,
    required: true,
  },
  // File with data to display in graph
  fileName: {
    type: String,
    default: "https://google.com",
  },
  // Last update date
  lastUpdateDate: {
    type: Date,
    default: Date.now,
  },
  // List of objects:
  // { updateDate: Date, fileName: String}
  updateDates: {
    type: Array,
  },
});

module.exports = mongoose.model("sync", SyncSchema);
