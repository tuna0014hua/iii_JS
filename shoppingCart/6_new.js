// let storage = sessionStorage;
let storage = localStorage;

function doFirst() {
  newDiv = document.createElement("div");
  newTable = document.createElement("table");
  // 將 table 放進 div, 再將 div 放進 cartList
  newDiv.appendChild(newTable);
  document.getElementById("cartList").appendChild(newDiv);

  //==========================================
  let itemString = storage["addItemList"];
  let items = itemString.substr(0, itemString.length - 2).split(", "); //分割成陣列
  // console.log(items);  // ['A1005', 'A1006', 'A1007', 'A1008']印出陣列

  total = 0;
  for (let i = 0; i < items.length; i++) {
    let itemInfo = storage.getItem(items[i]);
    createCartList(items[i], itemInfo); //呼叫 createCartList() 建立 <tr>

    let itemPrice = parseInt(itemInfo.split("|")[2]);
    total += itemPrice;
  }
  document.getElementById("total").innerText = total;
}

function createCartList(itemId, itemValue) {
  // alert(`${itemId}: ${itemValue}`);
  let itemTitle = itemValue.split("|")[0];
  let itemImage = "imgs/" + itemValue.split("|")[1];
  let itemPrice = parseInt(itemValue.split("|")[2]);

  // 建立每個品項的清單區域 -- tr
  let trItemList = document.createElement("tr");
  trItemList.className = "item"; //trItemList.setAttribute('class', 'item');
  newTable.appendChild(trItemList);

  // 建立商品圖片 -- 第一個 td
  let tdImage = document.createElement("td");
  tdImage.style.width = "200px";

  let image = document.createElement("img");
  image.src = itemImage;
  image.width = 75;

  tdImage.appendChild(image);
  trItemList.appendChild(tdImage);

  // 建立商品名稱和刪除按鈕 -- 第二個 td
  let tdTitle = document.createElement("td");
  tdTitle.style.width = "280px";
  tdTitle.id = itemId;

  let pTitle = document.createElement("p");
  pTitle.innerText = itemTitle;

  let delButton = document.createElement("button");
  delButton.innerText = "Delete";
  delButton.addEventListener("click", deleteItem);

  tdTitle.appendChild(pTitle);
  tdTitle.appendChild(delButton);

  trItemList.appendChild(tdTitle);

  // 建立商品價格 -- 第三個 td
  let tdPrice = document.createElement("td");
  tdPrice.style.width = "170px";

  let pPrice = document.createElement("p");
  pPrice.innerText = `$${itemPrice}`;

  tdPrice.appendChild(pPrice);

  trItemList.appendChild(tdPrice);

  // 建立商品數量 -- 第四個 td
  let tdItmeCount = document.createElement("td");
  tdItmeCount.style.width = "60px";

  let pAlone = document.createElement("p");

  let inputItemCount = document.createElement("input");
  inputItemCount.type = "number";
  inputItemCount.value = 1;
  inputItemCount.min = 1;
  //通常會使用input事件
  inputItemCount.addEventListener("input", changeItemCount);

  pAlone.appendChild(inputItemCount);
  tdItmeCount.appendChild(pAlone);
  trItemList.appendChild(tdItmeCount);
}

function deleteItem() {
  //   alert(this.parentNode.id);
  let itemId = this.parentNode.id;

  // 1. 先扣除總金額 -- 若要完成作業，這裡也要修改
  let itemValue = storage.getItem(itemId);

  //   alert(
  //     this.parentNode.nextSibling.nextSibling.childNodes[0].childNodes[0].value
  //   );
  let itemQty =
    this.parentNode.nextSibling.nextSibling.childNodes[0].childNodes[0].value;

  //   total -= parseInt(itemValue.split("|")[2]); // 原本還未加數量與單價相乘後的總價，只有單一項目的總價
  total -= parseInt(itemValue.split("|")[2]) * itemQty;

  document.getElementById("total").innerText = total;

  // 2. 清除 storage
  storage.removeItem(itemId);
  //String.replace(子字串, 欲取代的字串);

  storage["addItemList"] = storage["addItemList"].replace(`${itemId}, `, ``);

  // 3. 再刪除該筆 <tr>
  // this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  newTable.removeChild(this.parentNode.parentNode);
}

function changeItemCount() {
  //先算出原本單一項目總價相加的總金額
  //   alert(total);

  //1. 先取得該項目的Id值
  //   alert(this.parentNode.parentNode.previousSibling.previousSibling.id);
  let itemId = this.parentNode.parentNode.previousSibling.previousSibling.id;
  /* 
  因為id是在前兩個td裡，需一直往上找尋
  該函式是對應input，this => 該i，this => input
   parentNode => p
   parentNode => td
   previousSibling => 前一個td
   previousSibling => 前一個td (要取得該td裡的id)  
  */

  // 2. 找到項目對應的單價
  //   alert(storage.getItem(itemId));
  let itemValue = storage.getItem(itemId); //因資料先暫存於storage裡，所以要先取得storage的值
  //   alert(parseInt(itemValue.split("|")[2]));
  let pPrice = parseInt(itemValue.split("|")[2]); //把字串裡分割出的值(取得值為價格)轉換成正數值

  // 3. input的value
  //先取input(inputItemCount)裡的value
  //   alert(this.value);
  let inputValue = this.value;

  //4. 計算修改後的項目價格
  //   alert(pPrice * inputValue);
  //   alert(this.parentNode.parentNode.previousSibling.childNodes[0].innerText);

  let multiplePrice = pPrice * inputValue; //相乘後新價格
  // 單一項目的總價
  let ppPrice =
    this.parentNode.parentNode.previousSibling.childNodes[0].innerText;

  //5. 總價計算
  total = total - parseInt(ppPrice.replace("$", "")) + multiplePrice;
  /*
  把ppPrice字串變成正數值，並將"$"給移除掉。因total未加$
  將單一項目的總價格(total)先減去元單一價格(ppPrice)後，加上單一項目相乘單一價格(multiplePrice)
  */
  //   alert(total);
  this.parentNode.parentNode.previousSibling.childNodes[0].innerText = `$${multiplePrice}`;
  // 把input<value>與單一價格相乘後，assign給原單一價格的原位

  //在讀回去文件裡的total
  document.getElementById("total").innerText = total;
  //   alert(ppPrice);
}

window.addEventListener("load", doFirst);
