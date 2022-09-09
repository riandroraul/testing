const testItem = (req, res) => {
  try {
    res.status(200).json({ message: "test routes item", status: 200 });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { testItem };
