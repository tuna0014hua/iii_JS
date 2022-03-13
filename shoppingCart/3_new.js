// let storage = sessionStorage;

let storage = localStorage;

function doFirst() {

    //防呆寫法
    if(storage['addItemList'] == null) {
         //字串串接要給空字串
        storage['addItemList'] = ''; //給初值
    }

    //幫每個 Add Cart 建立事件聆聽功能
    let addCartList = document.querySelectorAll('.addButton');  //addCartList 表示陣列
    //陣列的話要使用for loop
    for (let i = 0; i < addCartList.length; i++) {
        // addCartList[i].addEventListener('click', function(e) {
        //有寫function下
        //     // alert(e.target.id); //--V
        //     // alert(this.id); //--V
        // });

        //箭頭函式
        // addCartList[i].addEventListener('click', (e) => alert(e.target.id));
        //箭頭函式使用this小心使用(裡面外面都是指相同的東西與JS本身的this不同)
        // addCartList[i].addEventListener('click', () => alert(this.id)); -//-xx

        addCartList[i].addEventListener('click', (e) => {
            let teddyInfo = document.querySelector(`#${e.target.id} input`).value;
            // alert(teddyInfo);
            addItem(e.target.id, teddyInfo);
        });
    }
}

//先把資料秀出來(功能先出來)，在去優化
function addItem(itemId, itemValue) {
    // alert(`${itemId}: ${itemValue}`); //先確認資料在不在

    //新建好標籤
    let image = document.createElement('img');
    //把建好的標籤值給他
    image.src = 'imgs/' + itemValue.split('|')[1];

    let title = document.createElement('span');
    title.innerText = itemValue.split('|')[0];

    let price = document.createElement('span');
    price.innerText = `$${itemValue.split('|')[2]}`;

    //在找爸爸，爸爸在就使用get
    let newItem = document.getElementById('newItem');
    //先判斷此處是否已物件，如果有要先刪除
    // alert(newItem.childNodes.length);
    if (newItem.hasChildNodes()) {
        while (newItem.childNodes.length >= 1) {
            newItem.removeChild(newItem.firstChild);
        }
    }

    //再顯示新物件
    newItem.appendChild(image);
    newItem.appendChild(title);
    newItem.appendChild(price);

    //存入 storage
    if (storage[itemId]) {
        alert('You have checked.');
    } else {
        storage.setItem(itemId, itemValue);
        storage['addItemList'] += `${itemId}, `;
    }


    //計算購買數量和小計
    let itemString = storage['addItemList'];
    let items = itemString.substr(0, itemString.length-2).split(', '); //分割成陣列
    // alert(items);
    // console.log(items);  // ['A1005', 'A1006', 'A1007', 'A1008']印出陣列

    subtotal = 0;
    for(let i = 0; i < items.length; i++) {
        let itemInfo = storage.getItem(items[i]);
        let itemPrice = parseInt(itemInfo.split('|')[2]);
        // let itemPrice = Number(itemInfo.split('|')[2]);

        subtotal += itemPrice;
    }

    document.getElementById('itemCount').innerText = items.length;
    document.getElementById('subtotal').innerText = subtotal;
}

window.addEventListener('load', doFirst);

/*
string.substr(index from count)
    string.substr(3, 5) -> index 3, 4, 5, 6 ,7
    string.substr(0, 5) -> index 0, 1, 2, 3,,4
string.slice(index from, index to)
    string.slice(3, 5) -> index 3, 4
    string.slice(0, 5) -> index 0, 1, 2, 3, 4
*/    