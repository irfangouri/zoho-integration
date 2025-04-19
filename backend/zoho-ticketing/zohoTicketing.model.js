const mongoose = require('mongoose');

const ZohoTicketingSchema = mongoose.Schema({
  student_name: {
    required: true,
    type: String,
  },
  tutor_name: {
    required: true,
    type: String,
  },
  class_id: {
    required: true,
    type: Number,
  },
  reason: {
    required: true,
    type: String,
  },
});

const ZohoTicketing = new mongoose.model('ZohoTicketing', ZohoTicketingSchema);
module.exports = ZohoTicketing;
