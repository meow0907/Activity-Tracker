const router = require("express").Router();
const currencyController = require("./currency.controller");

// CRUD
router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database" });
});

router.get("/:id", (req, res, next) => {
  try {
    const { id } = req.params;
    if (id === "Anjila") throw new Error("Anjila String provided");
    res.json({ msg: `We are reading ${id} from the database` });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await currencyController.cc(req.body);
    res.json({ data, msg: "Converting currency" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ data: req.body, msg: `Updating ${id} in the database` });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ data: req.body, msg: `Patching ${id} in the database` });
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({ msg: `Deleting ${id} from the database` });
  } catch (e) {
    next(e);
  }
});

// Centralized error handling
router.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = router;