let soThichbandau = ["Doc sach", "Nghe Nhac"];
const soThichthem = "choi";
const mangthem = ["da bong", "xp"];
// soThichbandau = [...soThichbandau,"abc",soThichthem];
soThichbandau = ["abc", mangthem, ...soThichbandau];
console.log("danh sách sở thích sau khi thêm", soThichbandau);
var object1 = {
  ten: " Dat",
  sdt: 1234,
  dc: "kasdkosa",
  role: "baove",
};
var sotruong = {
  nangkhieu: "di an",
  sodoan: " cafe",
  role: "anmay",
};
object1 = { ...sotruong, object1 };
console.log(object1);
console.log(...sotruong);

/* phân biết spread và distructuring:
distructuring: var [, , ...rest] = Array;
spread: sothich = [...soThichbandau,"abc",...sotruong];  */
