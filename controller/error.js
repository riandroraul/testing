const reqError = (req, res) => {
  try {
    res
      .status(404)
      .json({ status: 404, message: "cannot request with this endpoint" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = reqError;
