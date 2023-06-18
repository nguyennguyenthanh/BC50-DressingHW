import Data from "./../data/Data.json" assert {type: 'json'};
let getEle = (id) => document.getElementById(id);

/**RENDER Clothes -> UI */
const renderUIClothes = (type) => {
  let content = "";
  // Data.tabPanes lúc đầu duyệt mảng này để lấy thông tin sản phẩm, sau tìm kiếm sp và trả về 1 mảng mới thì phải duyệt mảng mới (type) để lấy giá trị trong mảng type -> render UI
  type.forEach((product) => {
    content += `
    <div class ="col-sm-3">
      <img src="${product.imgSrc_png}"  alt="Ao" width="120px" height="250px">
      <p>${product.name}</p>
      <button class="btn btn-success" onclick="btnTry('${product.id}')">Thử</button>
    </div>
  `
  });
  getEle("loopCloth").innerHTML = content;
}

/**
 * HIỂN THỊ DANH SÁCH ÁO QUẦN THEO MENU TAB
 */
//data này dùng cho btnChose(đại diện 'ao' 'quan'...)
function btnChose(data) {
  switch (data) {
    case 'ao':
      var type = Data.tabPanes.filter(product => product.type === "topclothes");
      renderUIClothes(type);
      break;
    case "quan":
      var type = Data.tabPanes.filter(product => product.type === "botclothes");
      renderUIClothes(type);
      break;
    case "giay dep":
      var type = Data.tabPanes.filter(product => product.type === "shoes");
      renderUIClothes(type);
      break;
    case "tui xach":
      var type = Data.tabPanes.filter(product => product.type === "handbags");
      renderUIClothes(type);
      break;
    case "day chuyen":
      var type = Data.tabPanes.filter(product => product.type === "necklaces");
      renderUIClothes(type);
      break;
    case "kieu toc":
      var type = Data.tabPanes.filter(product => product.type === "hairstyle");
      renderUIClothes(type);
      break;
    case "nen":
      var type = Data.tabPanes.filter(product => product.type === "background");
      renderUIClothes(type);
      break;
    default:
      break;
  }
}
window.btnChose = btnChose;


/***
 * Thử Hàng
 */
function  btnTry(id) {
  // 1. Find product clicked
   const productClicked = Data.tabPanes.find(product => product.id === id); 
  // 2. Change src
  if (productClicked.type === "topclothes") {
    let topclothesHTML = "";
    topclothesHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("bikinitop")[0].innerHTML = topclothesHTML;
  }
  if (productClicked.type === "botclothes") {
    let botclothesHTML = "";
    botclothesHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("bikinibottom")[0].innerHTML = botclothesHTML;
  }
  if (productClicked.type === "shoes") {
    let shoesHTML = "";
    shoesHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("feet")[0].innerHTML = shoesHTML;
  }
  if (productClicked.type === "handbags") {
    let handbagsHTML = "";
    handbagsHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("handbag")[0].innerHTML = handbagsHTML;
  }
  if (productClicked.type === "necklaces") {
    let necklacesHTML = "";
    necklacesHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("necklace")[0].innerHTML = necklacesHTML;
  }
  if (productClicked.type === "hairstyle") {
    let hairstyleHTML = "";
    hairstyleHTML += `<img src="${productClicked.imgSrc_png}" width="110%" height="155%"/>`;
    document.getElementsByClassName("hairstyle")[0].innerHTML = hairstyleHTML;
  }
  if (productClicked.type === "background") {
    let backgroundHTML = "";
    backgroundHTML += `<img src="${productClicked.imgSrc_png}" width="100%" height="100%"/>`;
    document.getElementsByClassName("background")[0].innerHTML = backgroundHTML;
  }
}
window.btnTry = btnTry;


// đổi tên class giống nhau hết,display theo thứ tự class, truyền param (class,product.type)