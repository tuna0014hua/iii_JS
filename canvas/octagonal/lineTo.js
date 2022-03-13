function doFirst() {
  //先與HTML的canvas取得聯繫
  let canvas = document.getElementById("canvas");
  //規劃2D繪圖環境
  context = canvas.getContext("2d");

  // 格線開始
  // for (let i = 0; i < 50; i++) {
  //   let interval = i * 20;

  //   //水平線
  //   context.moveTo(0, interval);
  //   context.lineTo(canvas.width, interval);
  //   context.fillText(interval, 0, interval);

  //   //垂直線
  //   context.moveTo(interval, 0);
  //   context.lineTo(interval, canvas.height);
  //   context.fillText(interval, interval, 10);
  // }
  // context.strokeStyle = "rgba(0, 0, 0, .3)";
  // context.stroke();
  // 格線結束

  //讀入圖片
  // let pic = new Image();
  // pic.src = "../image/octagon.png";
  // pic.addEventListener("load", function () {
  //   context.drawImage(pic, 300, 200, 400, 400);
  // });

  //-----------作業區 繪製正八角形---------------//
  //第一層手裡飛鏢型
  context.beginPath();
  context.moveTo(500, 220);
  context.lineTo(450, 350);
  context.lineTo(320, 400);
  context.lineTo(450, 450);
  context.lineTo(500, 580);
  context.lineTo(550, 450);
  context.lineTo(680, 400);
  context.lineTo(550, 350);
  context.lineTo(500, 220);
  context.closePath();

  context.strokeStyle = "pink";
  // context.lineWidth = 3;
  context.fillStyle = "pink";
  context.fill();
  context.stroke();

  //第二層手裡飛鏢型
  context.beginPath();
  context.moveTo(500, 330);
  context.lineTo(370, 280);
  context.lineTo(420, 400);
  context.lineTo(370, 530);
  context.lineTo(500, 470);
  context.lineTo(620, 530);
  context.lineTo(580, 400);
  context.lineTo(620, 280);
  context.lineTo(500, 330);
  context.closePath();

  context.strokeStyle = "pink";
  // context.lineWidth = 3;
  context.fillStyle = "pink";
  context.fill();
  context.stroke();

  //-----------自行增加區  粉花----------------//
  //內層白底
  context.beginPath();
  context.moveTo(500, 350);
  context.lineTo(463, 315); //1
  context.lineTo(453, 370); //2
  context.lineTo(406, 365); //3
  context.lineTo(445, 400); //4
  context.lineTo(407, 433); //5
  context.lineTo(457, 443); //6
  context.lineTo(463, 487); //7
  context.lineTo(500, 463); //8
  context.lineTo(537, 487); //9
  context.lineTo(543, 443); //10
  context.lineTo(590, 433); //11
  context.lineTo(557, 400); //12
  context.lineTo(593, 365); //13
  context.lineTo(543, 370); //14
  context.lineTo(537, 315); //15
  context.lineTo(500, 350); //16
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "#fff";
  context.fill();
  context.stroke();

  //花朵中心~
  context.beginPath();
  // context.moveTo(500, 420);
  context.arc(500, 405, 56, 0, Math.PI * 2);
  // context.strokeStyle = "black";
  // context.stroke();
  context.fillStyle = "yellow";
  context.fill();

  //花瓣1
  context.beginPath();
  context.moveTo(500, 220);
  context.lineTo(500, 350);
  context.lineTo(463, 315);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣2
  context.beginPath();
  context.moveTo(370, 280);
  context.lineTo(453, 370);
  context.lineTo(407, 367);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣3
  context.beginPath();
  context.moveTo(443, 400);
  context.lineTo(320, 400);
  context.lineTo(407, 433);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣4
  context.beginPath();
  context.moveTo(369, 530);
  context.lineTo(457, 443);
  context.lineTo(463, 487);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣5
  context.beginPath();
  context.moveTo(500, 463);
  context.lineTo(500, 580);
  context.lineTo(537, 489);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣6
  context.beginPath();
  context.moveTo(620, 529);
  context.lineTo(543, 443);
  context.lineTo(592, 434);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣7
  context.beginPath();
  context.moveTo(680, 400);
  context.lineTo(558, 400);
  context.lineTo(593, 367);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();

  //花瓣8
  context.beginPath();
  context.moveTo(620, 280);
  context.lineTo(543, 370);
  context.lineTo(538, 313);
  context.closePath();

  context.strokeStyle = "#fff";
  context.fillStyle = "rgb(255, 65, 130)";
  context.fill();
  context.stroke();
}

window.addEventListener("load", doFirst);
