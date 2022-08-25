
const Admission = require('../models/admissionModel')


const admissionController = {
  create: async (req, res) => {
    try {
      const { tag, title, detail, image } = req.body;
      const admission = new Admission({
        tag,
        title,
        detail,
        image,
      });
      await admission.save();
      res.status(200).json({ msg: "create admission success" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  info: async (req, res) => {
    try {
      const admission = await Admission.findOne({ tag: "admission1" });
      res.status(200).json(admission);
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { title, detail, image } = req.body;
      await Admission.findOneAndUpdate(
        { tag: "admission1" },
        { title, detail, image }
      );
      res.status(200).json({ msg: "Update success" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = admissionController;
