const { USER, COMPANY } = require('../models');

exports.registerUser = async (req, res, next) => {
  try {
    const data = req.body;
    console.log({ data })
    const response = await USER.create(data)
    console.log({ response })
    return next({
      code: 200,
      success: true,
      message: 'User Created Successfully'
    })
  } catch (err) {
    console.log({ err })
    return next({
      code: err.code,
      success: false,
      message: err.message
    })
  }
};

exports.addState = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await USER.findOne({ email: data?.email })
    user.stateName = data?.stateName;
    user.stateCode = data?.stateCode;
    const respose = await user.save();
    console.log({ respose })
    return next({
      code: 200,
      success: true,
      message: 'State Added Successfully'
    })
  } catch (err) {
    return next({
      code: err.code,
      success: false,
      message: err.message
    })
  }
};

exports.addCity = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await USER.findOne({ email: data?.email })
    user.cityName = data?.cityName;
    user.cityCode = data?.cityCode;
    const respose = await user.save();
    console.log({ respose })
    return next({
      code: 200,
      success: true,
      message: 'City Added Successfully'
    })
  } catch (err) {
    return next({
      code: err.code,
      success: false,
      message: err.message
    })
  }
};

exports.addCompany = async (req, res, next) => {
  try {
    const respose = await COMPANY.create(req.body);
    console.log({ respose })
    return next({
      code: 200,
      success: true,
      message: 'Company Added Successfully'
    })
  } catch (err) {
    return next({
      code: err.code,
      success: false,
      message: err.message
    })
  }
};