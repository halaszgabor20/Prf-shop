const Stuff = require("../models/stuff.schema");

exports.createStuff = async (req, res, next) => {
  try {
    if (
      req.body.name === undefined ||
      req.body.quantity === undefined ||
      req.body.quantity === undefined
    ) {
      return res.status(400).send();
    }

    if (
      await Stuff.exists({ name: req.body.name, quality: req.body.quality })
    ) {
      return res.status(409).send();
    }

    const stuff = new Stuff({
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
      quality: req.body.quality ?? "C",
    });

    // Save the stuff.
    await stuff.save();

    return res.status(201).send("Stuff saved successfully");
  } catch (error) {
    res.status(500).send();
  }
};

exports.getStuff = async (req, res, next) => {
  try {
    Stuff.find((err, stuff) => {
      if (err) return res.status(500).send("Error, while searching for stuff");
      return res.status(200).send(stuff);
    });
  } catch (error) {
    res.status(500).send();
  }
};

// exports.getStuffById = async (req, res, next) => {};
