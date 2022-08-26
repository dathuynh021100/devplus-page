const Receive = require("../models/receiveModel");

const receiveController = {
  create: async (req, res) => {
    try {
      const { image, title, detail } = req.body;
      if (!detail || !image || !title) {
        res.status(400).json({ msg: "Content cannot be empty" });
        return;
      }
      const receive = new Receive({
        image,
        title,
        detail,
      });
      await receive.save();
      res.status(200).json({ msg: "Create receive success" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  infoAll: async (req, res) => {
    try {
      const receives = await Receive.find();
      res.status(200).json(receives);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  info: async (req, res) => {
    try {
      const id = req.params.id;
      const receive = await Receive.findById(id);
      res.status(200).json(receive);
    } catch (error) {
      res.status(200).json({ msg: error.message });
    }
  },
  edit: async (req, res) => {
    try {
      const id = req.params.id;
      const { image, title, detail } = req.body;
      await Receive.findByIdAndUpdate(id, { image, title, detail });
      res.status(200).json({ msg: "update success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const id = req.params.id;
      await Receive.findByIdAndDelete(id);
      res.status(200).json({ msg: "Delete success" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  },
};
module.exports = receiveController;
