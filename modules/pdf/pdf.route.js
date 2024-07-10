const router = require("express").Router();
const pdfController = require("./pdf.controller");


//CRUD
router.get("/", (req, res) => {
  res.json({ msg: "All the data in the database" });
});

router.get("/:id", (req, res, next) => {
  try {
    const id = req.params.id;
    if (id === "Anjila") throw new Error("Anjila String provided");
    res.json({ msg: `we are reading ${id} from database` });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const data = await pdfController.createPdf(req.body);
    res.json({ data: data, msg: "Generating Pdf" });
  } catch (e) {
    next(e);
  }
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Updating ${id} from database` });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ data: req.body, msg: `Patching ${id} from database` });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ msg: `Deleting ${id} from database` });
});

module.exports = router;