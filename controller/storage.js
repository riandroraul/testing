const testStorage = (req, res) => {
  try {
    res.status(200).json({ message: "test routes storage", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { testStorage };
