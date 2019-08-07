const amI = (req, res, next) => {
  console.log('I am in amI');
  next();
};

module.exports = amI;
