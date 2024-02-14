const sendEmailController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error sending the email",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
