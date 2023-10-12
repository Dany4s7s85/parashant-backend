const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    userId: { type: mongoose?.Schema?.Types?.ObjectId, ref: 'user' },
    company: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    state: {
        type: String,
    },
    panNumber: {
        type: String,
    },
    establish: {
        type: String,
    },
    financialYear: {
        type: String,
    },
    ownerName: {
        type: String,
    },
    businessEmail: {
        type: String,
    },
    city: {
        type: String,
    },
    gstNumber: {
        type: String,
    },
    sinNumber: {
        type: String,
    },
    boxStartingDate: {
        type: String,
    },
    maintainStock: {
        type: String,
    }
});

const Company = mongoose.model('company', companySchema);

module.exports = Company;