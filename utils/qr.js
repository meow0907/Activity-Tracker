//const QRCode = require("qrcode");
// let url = "youtube.com";
// const generate = (url) => {
//   QRCode.toString(url, { type: "terminal" }, function (err, url) {
//     console.log(url);
//   });
// };
// generate(url);

//sir code
const QRCode= require("qrcode");

const genQr = async (text) =>{
  const result = await QRCode.toDataURL(text);
  return result;
};

module.exports={genQr};