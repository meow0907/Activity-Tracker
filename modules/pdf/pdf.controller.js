const { genPdf } = require("../../utils/pdf");
const createPdf = async (payload) => {
  const { content } = payload;
  if (!content || typeof content !== "string")
    throw new Error("Invalid content");
  const result = await genPdf(content);
  return result;
};
module.exports = { createPdf };