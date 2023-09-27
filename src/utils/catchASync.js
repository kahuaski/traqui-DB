const catchAsync = (...args) => {
    return async (req, res, next) => {
      await args[0](req, res, next);
    };
  };
  
  module.exports = catchAsync;
