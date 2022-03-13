// 為尺寸與角度作初始化
let size = 1;
let deg = 0;

function doFirst() {
  //先跟畫面產生關聯，再建事件聆聽功能
  image = document.getElementById("image");
  image.addEventListener("dragstart", startDrag);
  image.addEventListener("dragend", endDrag);

  // rightbox = document.getElementById('rightbox');
  rightbox.addEventListener("dragenter", function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  rightbox.addEventListener("drop", dropped);

  // 為rightbox 的img綁定id，取得跟畫面產生關連
  let changeImg = document.getElementById("changeImg"); //get element by id 通過 id 獲取元素

  // 先取得 放大、縮小、左轉、右轉、刪除的 ID
  let zoomIn = document.getElementById("zoomIn");
  let zoomOut = document.getElementById("zoomOut");
  let undoLeft = document.getElementById("undoLeft");
  let redoRight = document.getElementById("redoRight");
  let deleteImg = document.getElementById("deleteImg");

  // 建立事件聆聽功能
  zoomIn.addEventListener("click", scaleBig);
  zoomOut.addEventListener("click", scaleSmall);
  undoLeft.addEventListener("click", rotateLeft);
  redoRight.addEventListener("click", rotateRight);
  deleteImg.addEventListener("click", delImg);
}
function startDrag(e) {
  // 新增id = "changeImg"
  let data =
    '<img src="../dragImage/images/tim_teddy_bear.jpg" id="changeImg">';
  e.dataTransfer.setData("image/jpg", data);
}
function endDrag() {
  image.style.visibility = "hidden";
}
function dropped(e) {
  e.preventDefault();
  rightbox.innerHTML = e.dataTransfer.getData("image/jpg");
}

// 放大
function scaleBig() {
  size += 0.5;
  //    console.log(size)
  changeImg.style.transform = `scale(${size})`;
  // console.log('scaleBig') //先查看有無抓到icon
}

// 縮小
function scaleSmall() {
  size -= 0.5;
  changeImg.style.transform = `scale(${size})`;
  // console.log('scaleSmall') //先查看有無抓到icon
}

// 左轉
function rotateLeft() {
  deg -= 90;
  // console.log(ang)
  // 沒有抓size的話，會變成只有原圖大小做旋轉。 所以要加入size與 rotate一起旋轉
  changeImg.style.transform = `scale(${size}) rotate(${deg}deg)`;
  // console.log('rotateLeft') //先查看有無抓到icon
}

// 右轉
function rotateRight() {
  deg += 90;
  // console.log(ang)
  // 沒有抓size的話，會變成只有原圖大小做旋轉。 所以要加入size與 rotate一起旋轉
  changeImg.style.transform = `scale(${size}) rotate(${deg}deg)`;

  // console.log('rotateRight') //先查看有無抓到icon
}

// 刪除
function delImg() {
  changeImg.remove();
  // changeImg.style.display = `none`;
  // console.log('delImg')  //先查看有無抓到icon
}

window.addEventListener("load", doFirst);
/*
//設定兩個值
p物件.setAttribute('class', 'myClass');
//但取值只取一個
let ans = p物件.getAttribute('class');
//set & get type要一樣
*/
