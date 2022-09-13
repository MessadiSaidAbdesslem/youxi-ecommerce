const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const faker = require("faker");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

dotenv.config({ path: path.join(__dirname, "../config.env") });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connection successfull");
  });

let padsImages = [
  "https://cdn.coolermaster.com/media/assets/1005/mp511-l-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1006/mp510-pink-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1025/mp750-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1096/510_02-hover.png",
  "https://cdn.coolermaster.com/media/1045/mp860-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1052/ad02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1055/ym02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/trx02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1021/rrx02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1027/drx02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1060/rx02-hover.png",
];

let padsTitles = [
  "MP511 Gaming Mouse Pad",
  "MP510 Sakura",
  "MP750",
  "MP510",
  "MP860",
  "RGB Hard Gaming Mousepad",
  "Swift-RX",
  "SGS-4120-KMMM1 (SIZE M)",
  "Power-RX",
  "Speed-RX",
  "Control-RX",
];

let audioImages = [
  "https://cdn.coolermaster.com/media/assets/1004/mh752-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1009/mh630-380x380-1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1010/mh650-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1032/mh670-380x380-1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1010/ch321-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1002/mh710-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1031/mh703-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1050/mh752-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1044/mh751-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1175/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1159/2-hover.png",
  "https://cdn.coolermaster.com/media/1028/mh320-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1025/2-hover.png",
  "https://cdn.coolermaster.com/media/1063/masterplus-pro-380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1066/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1076/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1155/earw_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1114/500-02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1122/300-02-hover.png",
];

let audioTitles = [
  "MH752-ACB",
  "MH630",
  "MH650",
  "MH670",
  "CH321",
  "MH710",
  "MH703",
  "MH752",
  "MH751",
  "MasterPulse MH530",
  "MasterPulse MH750",
  "MasterPulse MH320",
  "MasterPulse White Edition",
  "MasterPulse Pro",
  "MasterPulse",
  "MasterPulse In-ear - Black",
  "MasterPulse In-ear - White",
  "Ceres-500",
  "Ceres-300",
];

let miceImages = [
  "https://cdn.coolermaster.com/media/1747/mm730-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1726/mm731-white-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/mm711-lite-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1007/mm711-retro-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1024/mm720-matte-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1008/mm831-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1016/mm711-blue-steel-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/m711-golden-red-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1026/mm711-white-glossy-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/mm710-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1012/cm110_380x380_2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/mm830-380x380_2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1030/531_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1142/cm01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1025/530_01-hover.png",
  "https://cdn.coolermaster.com/media/1050/mm520-380x380-2-1b-hover.png",
  "https://cdn.coolermaster.com/media/1047/mastermouse-s-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1108/1-hover.png",
  "https://cdn.coolermaster.com/media/1052/mastermouse-pro-l-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1135/1-hover.png",
  "https://cdn.coolermaster.com/media/1054/xornet-ii-380x380-1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1209/1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1073/ceii01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1084/ro-g01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1105/nce01-hover.png",
  "https://cdn.coolermaster.com/media/1057/mizar-380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1025/1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1069/hovac_1-hover.png",
  "https://cdn.coolermaster.com/media/1060/recon-380x380-1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1086/1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1154/spawn_380x380_1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1051/no01-hover.png",
];

let miceTitles = [
  "MM730 Gaming Mouse",
  "MM731 Gaming Mouse",
  "MM711 LITE",
  "MM711 Retro",
  "MM720",
  "MM831",
  "MM711 Blue Steel",
  "MM711 Golden Red",
  "MM711",
  "MM710",
  "CM110",
  "MM830",
  "MM531",
  "CM310",
  "MasterMouse MM530",
  "MasterMouse MM520",
  "MasterMouse S",
  "MasterMouse Lite S",
  "MasterMouse Pro L",
  "Sentinel III",
  "Xornet II",
  "Reaper",
  "Sentinel Advance II",
  "Sentinel Z3RO-G",
  "Sentinel Advance",
  "Mizar",
  "Alcor",
  "Havoc",
  "Recon",
  "Xornet",
  "Spawn",
  "Inferno",
];

let keyboardImages = [
  "https://cdn.coolermaster.com/media/assets/1025/sk653-black-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/sk652-black-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/1234/ck352-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/ck351-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1009/sk620-silver-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/sk622-black-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1005/sk622-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1024/ck350-v2-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1019/ck530-v2-380x380-2-0619-hover.png",
  "https://cdn.coolermaster.com/media/assets/1009/ck550-v2-380x380-2-0619-hover.png",
  "https://cdn.coolermaster.com/media/assets/1031/controlpad-380x380-v2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1005/sk631-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/sk651-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/mk110-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/sk621-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1008/sk650w-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/sk630w-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1041/sk621-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1002/mk850-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1032/sk650-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1021/mk730-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1037/ck530-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/1071/sk630-380x380-1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1167/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1088/ck550-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1015/mk750-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1095/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1117/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1120/masterkeys-s-section-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1022/masterkeys-pro-s-white-section-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1037/2-hover.png",
  "https://cdn.coolermaster.com/media/1027/masterkeys-lite-l-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/1018/masterkeys-pro-l-white-2-1-hover.png",
  "https://cdn.coolermaster.com/media/1017/masterkeys-pro-m-white-led-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1091/2-hover.png",
  "https://cdn.coolermaster.com/media/1013/masterkeys-pro-l-rgb_380x380_1-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1015/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1159/quickfire-tk-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1004/quickfire-ultimate-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1005/quick-fire-tk-stealth-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1131/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1142/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1008/quick-fire-rapid-i-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1183/2-hover.png",
  "https://cdn.coolermaster.com/media/1028/quickfire-rapid-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1031/2-hover.png",
  "https://cdn.coolermaster.com/media/1034/quickfire-xt-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1119/2-hover.png",
  "https://cdn.coolermaster.com/media/1033/quickfire-rapid-red-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1133/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1139/2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1063/2-hover.png",
  "https://cdn.coolermaster.com/media/1037/novatouch-tkl-380x380-2-hover.png",
];

let keyboardTitle = [
  "SK653 Full Mechanical Wireless Keyboard",
  "SK652 Full Mechanical Keyboard",
  "CK352 Gaming Mechanical Keyboard",
  "CK351 Gaming Keyboard",
  "SK620 Space Gray & Silver White",
  "SK622 Space Gray",
  "SK622 Silver",
  "CK350",
  "CK530 V2",
  "CK550 V2",
  "CONTROLPAD",
  "SK631",
  "SK651",
  "MK110",
  "SK621 White",
  "SK650",
  "SK630",
  "SK621",
  "MK850",
  "SK650",
  "MK730",
  "CK530",
  "SK630",
  "CK552",
  "CK550",
  "MasterKeys MK750",
  "MasterKeys Pro L - GeForce® GTX Edition",
  "MasterKeys L",
  "MasterKeys S",
  "MasterKeys Pro S White LEDs",
  "MasterKeys Pro M RGB",
  "MasterKeys Lite L",
  "Masterkeys Pro L White LEDs",
  "Masterkeys Pro M White LEDs",
  "Masterkeys Pro S RGB",
  "MasterKeys Pro L RGB",
  "Mech",
  "Quick Fire TK",
  "Quick Fire Ultimate",
  "Quick Fire TK Stealth",
  "Quick Fire XT STEALTH",
  "Quick Fire Pro",
  "Quick Fire RAPID-i",
  "Quick Fire Stealth",
  "QUICK FIRE RAPID",
  "Suppressor",
  "Quick Fire XT",
  "Quick Fire Rapid-Si",
  "Quick Fire Rapid(Red Switch)",
  "Trigger",
  "Trigger-Z",
  "Quick Fire XTi",
  "NovaTouch TKL",
];

let monitorsImages = [
  "https://cdn.coolermaster.com/media/assets/1007/gm34-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/gm27-cf-380x380-2-hover.png",
];

let monitorsTitles = ["GM34-CW", "GM27-CF"];

let chairsImages = [
  "https://cdn.coolermaster.com/media/1994/caliber-r2c-380x380-2-upd-hover.png",
  "https://cdn.coolermaster.com/media/1977/caliber-x1c-380x380-2-upd-hover.png",
  "https://cdn.coolermaster.com/media/assets/1030/caliber-r1s-darklight-camo-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/caliber-r1s-rose-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1387/caliber-r2s-kana-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/1389/caliber-x1-380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1034/ergo-380x380-2-1-hover.png",
  "https://cdn.coolermaster.com/media/1393/caliber-r1-380x380-2-1-hover.png",
];

let chairsTitles = [
  "Caliber R2C",
  "Caliber X1C",
  "Caliber R1S CAMO",
  "Caliber R1S Rose",
  "Caliber R2",
  "Caliber X1",
  "Ergo L",
  "Caliber R1",
];

let coolerImages = [
  "https://cdn.coolermaster.com/media/assets/1003/masterair-ma612-stealth-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1006/masterair-ma612-stealth-argb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1057/masterair-ma624-stealth-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1029/masterair-ma610p-argb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/hyper-212-evo-v2-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/g200p-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1016/hyper-h410r-rgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1019/ma620m-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/hyper212-led-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1017/hyper-h410r-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/hyper-212-led-turbo-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1022/hyper-t200-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1002/hyper-t20-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/m6p_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/h212blacke-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1032/h212rgb-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1141/wr_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1016/410g_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/621e_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1061/620g_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1065/10r_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1027/410m_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1027/620_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1089/g110m-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1040/m4p_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1043/12r_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1054/11r_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1031/m5l_02-hover.png",
  "https://cdn.coolermaster.com/media/1013/x-dream-l115-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1012/2-1-hover.png",
  "https://cdn.coolermaster.com/media/1001/masterairpro4-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1005/masterairpro3-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1018/12l_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1033/12xe_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1132/24v_02-hover.png",
  "https://cdn.coolermaster.com/media/1016/x-dream-p115-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1054/03_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1136/12x_02-hover.png",
  "https://cdn.coolermaster.com/media/1048/hyper-212-evo-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1026/t4_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1035/x3e_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1019/x3f_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1067/m4_02-hover.png",
  "https://cdn.coolermaster.com/media/1073/vortex-211p-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1005/vortex-211q_2-hover.png",
  "https://cdn.coolermaster.com/media/1009/vortex-plus-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1019/x-dream-4-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1025/x-dream-i117-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1034/blizzard-t2-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1038/blizzard-t2-mini-380x380-2-hover.png",
];

let coolersNames = [
  "MasterAir MA612 Stealth",
  "MasterAir MA612 Stealth ARGB",
  "MasterAir MA624 Stealth",
  "MasterAir MA610P ARGB",
  "Hyper 212 EVO V2",
  "MasterAir G200P",
  "Hyper H410R RGB",
  "MasterAir MA620M",
  "Hyper 212 LED White Edition",
  "Hyper H410R White Edition",
  "Hyper 212 LED Turbo White Edition",
  "Hyper T200",
  "Hyper T20",
  "MasterAir MA610P with RGB Controller",
  "Hyper 212 Black Edition",
  "Hyper 212 RGB Black Edition",
  "Cooler Master Wraith Ripper",
  "MasterAir MA410M TUF Gaming Edition",
  "MasterAir MA621P TR4 Edition",
  "MasterAir MA620P TUF Gaming Edition",
  "Hyper H410R",
  "MasterAir MA410M",
  "MasterAir MA620P",
  "MasterAir G100M",
  "MasterAir MA410P",
  "Hyper H412R",
  "Hyper H411R",
  "GeminII M5 LED",
  "X Dream L115",
  "Hyper 212 LED Turbo",
  "MasterAir Pro 4",
  "MasterAir Pro 3",
  "Hyper 212 LED",
  "Hyper 212X (EU ver.)",
  "GeminII S524 Ver.2",
  "X Dream P115",
  "Hyper 103",
  "Hyper 212X",
  "Hyper 212 EVO",
  "Hyper T4",
  "Hyper TX3 EVO",
  "Hyper TX3 (Fan Bracket Version)",
  "GeminII M4",
  "Vortex 211P",
  "Vortex 211Q",
  "Vortex Plus",
  "X Dream 4",
  "X Dream I117",
  "Blizzard T2",
  "Blizzard T2 Mini",
];

let liquidCoolerImages = [
  "https://cdn.coolermaster.com/media/assets/1005/masterliquid-ml360-illusion-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1025/masterliquid-ml240-illusion-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1261/masterliqu…-ml240-illusion-white-edition-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1051/ml360-mirror-tr4-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1008/ml240l-v2-rgb-white-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1011/masterliquid-ml360-zero-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1054/ml240-mirror-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/ml280-mirror-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1037/ml360-mirror-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/masterliquid-ml120l-v2-rgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1027/masterliquid-ml240l-v2-rgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1018/ml360p-silver-380x380-2-hover.jpg",
  "https://cdn.coolermaster.com/media/assets/1003/2-ml240p-mirage-380x380-hover.png",
  "https://cdn.coolermaster.com/media/1057/ml240rrgbpge-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1006/ml120ltufge-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1029/ml280rgbtr4-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/1053/ml240rsrgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1068/ml120rsrgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1030/ml360rrgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1021/mlpro280rgb-380x380-1-hover.png",
  "https://cdn.coolermaster.com/media/1006/mlpro240rgb-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1034/ml240r_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1029/ml120r_02-hover.png",
  "https://cdn.coolermaster.com/media/1002/ml360rgbtr4-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1002/ml240rgbtr4-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1068/120l_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1089/240l_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1038/ll240_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1099/m240_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1013/ll120_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1059/ml240_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1047/ml120_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1171/p240n_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1156/p120n_02-hover.png",
  "https://cdn.coolermaster.com/media/1030/mlpro120rgb-380x380-1-hover.png",
];

let liquidCoolerTitles = [
  "MasterLiquid ML360 Illusion",
  "MasterLiquid ML240 Illusion",
  "MasterLiquid ML240 Illusion White Edition",
  "Masterliquid ML360 Mirror TR4 Edition",
  "MasterLiquid ML240L V2 RGB White Edition",
  "MasterLiquid ML360 SUB-ZERO",
  "Masterliquid ML240 Mirror (AMAZON ONLY)",
  "MasterLiquid ML280 Mirror (AMAZON ONLY)",
  "Masterliquid ML360 Mirror (AMAZON ONLY)",
  "MasterLiquid ML120L V2 RGB",
  "MasterLiquid ML240L V2 RGB",
  "MasterLiquid ML360P Silver Edition",
  "MASTERLIQUID ML240P MIRAGE",
  "MasterLiquid ML240R RGB Phantom Gaming Edition",
  "MasterLiquid ML120L RGB TUF Gaming Edition",
  "MasterLiquid ML280 RGB TR4 Edition with RGB Controller",
  "MasterLiquid ML240RS RGB",
  "MasterLiquid ML120RS RGB",
  "MasterLiquid ML360R RGB",
  "MasterLiquid Pro 280 RGB",
  "MasterLiquid Pro 240 RGB",
  "MasterLiquid ML240R RGB",
  "MasterLiquid ML120R RGB",
  "MasterLiquid ML360 RGB TR4 Edition with RGB Controller",
  "MasterLiquid ML240 RGB TR4 Edition with RGB Controller",
  "MasterLiquid ML120L RGB",
  "MasterLiquid ML240L RGB",
  "MasterLiquid Lite 240",
  "MasterLiquid Maker 240",
  "MasterLiquid Lite 120",
  "MasterLiquid 240",
  "MasterLiquid 120",
  "MasterLiquid Pro 240 (Non-Sleeve Version)",
  "MasterLiquid Pro 120 (Non-Sleeve Version)",
  "MasterLiquid Pro 120 RGB",
];

let fullTowerImages = [
  "https://cdn.coolermaster.com/media/assets/1003/mf700_webpage_380x380_overviewimage-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/product-detail-overview-hover-hover.png",
  "https://cdn.coolermaster.com/media/1002/c700m-380x380-2-2-hover.png",
];

let fullTowerTitles = [
  "MasterFrame 700",
  "COSMOS C700P Black Edition",
  "COSMOS C700M",
];

let midTowerImages = [
  "https://cdn.coolermaster.com/media/2443/mastercase-mc500-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1282/elite500_webpage_380x380_overviewimage-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1019/cmp510_webpage_380x380_overviewimage-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1132/mb600l_webpage_380x380_overviewimage-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1129/mb540_webpage_380x380_overviewimage-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1064/masterbox_pro_5_argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1037/mb511argb_00_02_380-hover.png",
  "https://cdn.coolermaster.com/media/assets/1001/mb520argb_00_02_380-hover.png",
  "https://cdn.coolermaster.com/media/assets/1015/mb530p-upgrade-2021_new-overview-picture-hover.png",
  "https://cdn.coolermaster.com/media/assets/1004/td500m_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1076/td500argb_00_02_380-hover.png",
  "https://cdn.coolermaster.com/media/assets/1013/mb-td500-crystal-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1036/380_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/nr600p_00_overview_image_02-hover.png",
  "https://cdn.coolermaster.com/media/1190/mbk500_webpage_380x380_overviewimage-1-hover.png",
  "https://cdn.coolermaster.com/media/assets/1028/masterbox_lite_5_argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1018/mb500argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1121/h500_argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1020/h500p_argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1035/h500p_mesh_argb_00_0-hover.png",
  "https://cdn.coolermaster.com/media/assets/1050/h500p_mesh_white_argb_00_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/sl600mbe_detail_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1056/380_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1030/380_01-hover.png",
  "https://cdn.coolermaster.com/media/assets/1011/product-detail-overview-hover-hover.png",
  "https://cdn.coolermaster.com/media/1019/mb-q500l-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1141/masterbox-nr600-380x380-w-odd-2-hover.png",
  "https://cdn.coolermaster.com/media/1139/masterbox-nr600-380x380-wo-odd-2-hover.png",
  "https://cdn.coolermaster.com/media/1058/e500-product-detail-overview-hover-hover.png",
  "https://cdn.coolermaster.com/media/1023/sl600m-380x380-img2-hover.png",
  "https://cdn.coolermaster.com/media/1028/mb520rgb-380x380-img1-hover.png",
  "https://cdn.coolermaster.com/media/1032/mb511rgb-380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1015/mb530p-upgrade-2021_new-overview-picture-hover.png",
  "https://cdn.coolermaster.com/media/1072/b520_02-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1021/mb520-tg-v2-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1034/ms600-380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1155/h5m_02-hover.png",
  "https://cdn.coolermaster.com/media/1070/mb5_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1071/mb510l_380x380-2-2-hover.png",
  "https://cdn.coolermaster.com/media/1070/mb5_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1074/td5_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1005/masterbox-k500_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1073/mb5t_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1075/td5l_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1077/e5l_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1078/e5ls_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1079/mb500_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1062/mc500-380x380-02-2-hover.png",
  "https://cdn.coolermaster.com/media/1080/mb6l_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1081/p5r_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1083/l5r_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1002/l5_02-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/n400-hover-hover.png",
  "https://cdn.coolermaster.com/media/1026/n300_380x380_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1057/cmforce500_380x380_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1034/k280_380x380_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1033/k280-dualusb3_380x380_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1032/k281_380x380_2-2-hover.png",
  "https://cdn.coolermaster.com/media/1028/k380_380x380_02-2-hover.png",
  "https://cdn.coolermaster.com/media/1031/k282_380x380_02-2-hover.png",
];

let midTowerTitles = [
  "MasterCase MC500 High Storage Edition",
  "Elite 500 / Elite 500 ODD",
  "CMP 510",
  "MasterBox MB600L V2",
  "MasterBox 540",
  'MasterBox Pro 5 ARGB "2021 Upgrade"',
  'MasterBox MB511 ARGB "2021 Upgrade"',
  'MasterBox MB520 ARGB "2021 Upgrade"',
  'MasterBox MB530P "2021 Upgrade"',
  'MasterBox TD500 Mesh / Mesh White "2021 Upgrade"',
  'MasterBox TD500 ARGB "2021 Upgrade"',
  'MasterBox TD500 Crystal "2021 Upgrade"',
  "MasterBox K501L & K501L RGB",
  "MasterBox NR600P",
  "MasterBox K500 ARGB",
  "MasterBox Lite 5 ARGB",
  "MasterBox MB500 ARGB",
  "MasterCase H500 ARGB",
  "MasterCase H500P ARGB",
  "MasterCase H500P Mesh ARGB",
  "MasterCase H500P Mesh White ARGB",
  "MasterCase SL600M Black Edition",
  "MasterBox E501L",
  "Silencio S600",
  "MasterBox CM694",
  "MasterBox Q500L",
  "MasterBox NR600 with ODD",
  "MasterBox NR600 without ODD",
  "MasterBox E500 with ODD",
  "MasterCase SL600M",
  "MasterBox MB520 RGB",
  "MASTERBOX MB511 RGB",
  "MasterBox MB530P",
  "MASTERBOX MB520",
  "MASTERBOX MB520 TG",
  "MasterBox MS600",
  "MasterCase H500M",
  "MasterBox MB511",
  "MasterBox MB501L",
  "MasterBox MB511 TG",
  "MasterBox TD500",
  "MasterBox K500",
  "MASTERBOX MB500 TUF GAMING EDITION",
  "MasterBox TD500L",
  "MasterBox E500L",
  "MasterBox E500L (Side Window Panel Version)",
  "MasterBox MB500",
  "MASTERCASE MC500",
  "MasterBox MB600L",
  "MasterBox Pro 5 RGB",
  "MasterBox Lite 5 RGB",
  "MasterBox Lite 5",
  "N400",
  "N300",
  "CM Force 500",
  "K280",
  "K280 (Dual USB 3)",
  "K281",
  "K380",
  "K282",
];

let miniTowerImages = [
  "https://cdn.coolermaster.com/media/1643/masterbox-q300l-retro-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/assets/1026/mb311l_argb_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1071/mb320l_argb_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/mb400l_odd_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/mb400l_00_overview_image_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1003/mb311l_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1026/mb311l_argb_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1050/mb320l_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1071/mb320l_argb_00_overview_02-hover.png",
  "https://cdn.coolermaster.com/media/assets/1002/s400_380_02-hover.png",
  "https://cdn.coolermaster.com/media/1126/masterbox-nr400-380x380-w-odd-2-hover.png",
  "https://cdn.coolermaster.com/media/1128/masterbox-nr400-380x380-wo-odd-2-hover.png",
  "https://cdn.coolermaster.com/media/1051/masterbox-q300l-tuf-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1048/masterbox-e300l-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1022/mb-q300p-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1049/masterbox-q300l-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1042/masterbox-lite-3-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1024/n200-380x380-2-hover.png",
  "https://cdn.coolermaster.com/media/1028/elite344-380x380-2-hover.png",
];

let miniTowerTitles = [
  "MasterBox Q300L Retro",
  'MasterBox MB311L ARGB "2021 Upgrade"',
  'MasterBox MB320L ARGB "2021 Upgrade"',
  "MasterBox MB400L with ODD",
  "MasterBox MB400L without ODD",
  "MasterBox MB311L",
  "MasterBox MB311L ARGB",
  "MasterBox MB320L",
  "MasterBox MB320L ARGB",
  "Silencio S400",
  "MasterBox NR400 with ODD",
  "MasterBox NR400 without ODD",
  "MasterBox Q300L TUF",
  "MasterBox E300L",
  "MasterBox Q300P",
  "MasterBox Q300L",
  "MasterBox Lite 3",
  "N200",
  "Elite 344 USB3",
];

const seedProducts = async function (titlesArr, imgsArr, categStr) {
  try {
    const categ = await Category.findOne({ name: categStr });
    for (let i = 0; i < titlesArr.length; i++) {
      let prod = new Product({
        quantity: faker.datatype.number({ min: 0, max: 50 }),
        name: titlesArr[i],
        imageCover: imgsArr[i],
        description: faker.lorem.paragraph(),
        price: faker.datatype.number({ min: 1000, max: 5000 }),
      });
      categ.products.push(prod._id);
      await prod.save();
      await categ.save();
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

const addRandomQuanity = async function () {
  let productList = await Product.find();
  productList.forEach(async (el) => {
    el.quantity = faker.datatype.number({ min: 10, max: 100 });
    el.save();
  });
};

const getThePriceRight = async () => {
  let productList = await Product.find();
  productList.forEach((el) => {
    if (el.price < 100) {
      el.price = el.price * 100;
      el.save();
    }
  });
};

// seedProducts(miniTowerTitles, miniTowerImages, "Mini Tower");
// seedProducts(midTowerTitles, midTowerImages, "Mid Tower");
// seedProducts(fullTowerTitles, fullTowerImages, "Full Tower");
// seedProducts(liquidCoolerTitles, liquidCoolerImages, "Liquid Cooler");
// seedProducts(chairsTitles, chairsImages, "Chairs");
// seedProducts(coolersNames, coolerImages, "Air Cooler");
// seedProducts(monitorsTitles, monitorsImages, "Monitors");
// seedProducts(padsTitles, padsImages, "Pads");
// seedProducts(audioTitles, audioImages, "Audio");
// seedProducts(miceTitles, miceImages, "Mice");
// seedProducts(keyboardTitle, keyboardImages, "Keyboards");
// seedProducts(monitorsTitles, monitorsImages, "Monitors");
// setting the quantity of the products to a random value each
// addRandomQuanity();

// getThePriceRight().then(() => {
//   console.log("finished");
// });
