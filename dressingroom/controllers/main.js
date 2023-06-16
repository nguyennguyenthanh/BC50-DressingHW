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
function btnTry(id,srcImage) {
  document.getElementsByClassName("trycloth")[0].style.display = "block";
  const changeSrc = document.getElementsByClassName("trycloth");
  const arrProduct = Data.tabPanes.find(product => product.id === id);
  changeSrc.src = arrProduct.imgSrc_png;
  renderUIClothes();
}
window.btnTry = btnTry;

// đổi tên class giống nhau hết,display theo thứ tự class, truyền param (class,product.type)