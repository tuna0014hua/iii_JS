//物件、事件、處理函數

function doFisrt() {
    //先與HTML的canvas取得聯繫
    let canvas = document.getElementById('canvas');
    //規劃2D繪圖環境
    context = canvas.getContext('2d');

    //格線開始
    // for(let i = 0; i < 50; i++) {
    //     //間隔
    //     let interval = i * 50;
    //     // let interval = i * 25;

    //     //水平線
    //     context.moveTo(0, interval);
    //     context.lineTo(canvas.width, interval);
    //     context.fillText(interval, 0, interval);
        

    //     //垂直線
    //     context.moveTo(interval, 0);
    //     context.lineTo(interval, canvas.height);
    //     context.fillText(interval, interval, 10);   
    
    // }
    context.strokeStyle='rgba(0, 0, 0, .3)';    
    context.stroke();
    //格線結束

     //切1/4線 start
     context.beginPath();
     context.strokeStyle='rgba(0, 0, 0, 0.7)';
 
     //水平線
     context.moveTo(0, canvas.height / 2);
     context.lineTo(canvas.width, canvas.height / 2);
     context.stroke();
     
     //垂直線
     context.moveTo(canvas.width / 2, 0);
     context.lineTo(canvas.width / 2, canvas.height);
     context.stroke();
      //切1/4線 end

    // ============喜==============
    // 臉//
    context.save();
    context.beginPath();
    context.moveTo(186, 169);
    context.bezierCurveTo(186, 169, 150, 191, 156, 244);
    context.bezierCurveTo(159, 266, 170, 300, 300, 286);
    context.bezierCurveTo(328, 280, 382, 230, 316, 169);
    context.bezierCurveTo(298, 155, 241, 131, 186, 169);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 2.0;
    context.stroke();

    // 嘴巴//
    context.beginPath();
    context.moveTo(267, 219);
    context.bezierCurveTo(267, 228, 260, 235, 253, 235);
    context.bezierCurveTo(245, 235, 239, 228, 239, 219);
    context.bezierCurveTo(239, 210, 245, 202, 253, 202);
    context.bezierCurveTo(260, 202, 267, 210, 267, 219);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 舌頭//
    context.beginPath();
    context.moveTo(253, 218);
    context.bezierCurveTo(253, 218, 251, 211, 246, 215);
    context.bezierCurveTo(240, 220, 247, 230, 253, 230);
    context.bezierCurveTo(257, 230, 262, 227, 262, 219);
    context.bezierCurveTo(262, 213, 253, 212, 253, 218);
    context.closePath();
    context.fillStyle = "rgb(208, 71, 109)";
    context.fill();

    // 左耳//
    context.beginPath();
    context.moveTo(227, 153);
    context.bezierCurveTo(227, 153, 228, 104, 204, 104);
    context.bezierCurveTo(179, 105, 168, 165, 194, 172);
    context.bezierCurveTo(199, 172, 215, 171, 212, 132);
    context.bezierCurveTo(212, 132, 214, 150, 210, 158);
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.stroke();

    // 右耳//
    context.beginPath();
    context.moveTo(271, 153);
    context.bezierCurveTo(271, 153, 271, 104, 295, 104);
    context.bezierCurveTo(319, 105, 330, 165, 305, 172);
    context.bezierCurveTo(299, 172, 284, 171, 286, 132);
    context.bezierCurveTo(286, 132, 285, 150, 288, 158);
    context.fill();
    context.stroke();

    // 鼻子//
    context.beginPath();
    context.moveTo(248, 190);
    context.lineTo(259, 190);
    context.bezierCurveTo(259, 190, 260, 190, 259, 191);
    context.bezierCurveTo(257, 193, 253, 199, 253, 201);
    context.bezierCurveTo(254, 203, 252, 194, 247, 191);
    context.bezierCurveTo(247, 191, 247, 190, 248, 190);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 左腮紅//
    context.beginPath();
    context.moveTo(208, 212);
    context.bezierCurveTo(208, 221, 201, 228, 192, 228);
    context.bezierCurveTo(182, 228, 175, 221, 175, 212);
    context.bezierCurveTo(175, 203, 182, 195, 192, 195);
    context.bezierCurveTo(201, 195, 208, 203, 208, 212);
    context.closePath();
    context.fillStyle = "rgb(245, 222, 235)";
    context.fill();

    // 右腮紅//
    context.beginPath();
    context.moveTo(331, 212);
    context.bezierCurveTo(331, 221, 323, 228, 314, 228);
    context.bezierCurveTo(305, 228, 297, 221, 297, 212);
    context.bezierCurveTo(297, 203, 305, 195, 314, 195);
    context.bezierCurveTo(323, 195, 331, 203, 331, 212);
    context.closePath();
    context.fill();

    // 左下巴往下線1//
    context.beginPath();
    context.moveTo(224, 206);
    context.bezierCurveTo(224, 206, 223, 214, 224, 220);
    context.stroke();

    // 左下巴往下線2//
    context.beginPath();
    context.moveTo(228, 233);
    context.bezierCurveTo(228, 233, 228, 237, 230, 240);
    context.stroke();

    // 右下巴往下線1//
    context.beginPath();
    context.moveTo(281, 206);
    context.bezierCurveTo(281, 206, 282, 214, 281, 220);
    context.stroke();

    // 右下巴往下線2//
    context.beginPath();
    context.moveTo(274, 232);
    context.bezierCurveTo(274, 232, 274, 236, 273, 238);
    context.stroke();

    // 下巴線//
    context.beginPath();
    context.moveTo(245, 245);
    context.bezierCurveTo(245, 245, 250, 249, 253, 249);
    context.bezierCurveTo(256, 249, 259, 249, 262, 245);
    context.stroke();

    // 左眼眶//
    context.beginPath();
    context.moveTo(232, 185);
    context.bezierCurveTo(232, 193, 225, 199, 217, 199);
    context.bezierCurveTo(209, 199, 203, 193, 203, 185);
    context.bezierCurveTo(203, 177, 209, 171, 217, 171);
    context.bezierCurveTo(225, 171, 232, 177, 232, 185);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.stroke();

    // 左嘴唇//
    context.beginPath();
    context.moveTo(253, 201);
    context.bezierCurveTo(253, 209, 246, 216, 238, 216);
    context.bezierCurveTo(229, 216, 222, 209, 222, 201);
    context.bezierCurveTo(222, 193, 229, 187, 238, 187);
    context.bezierCurveTo(246, 187, 253, 193, 253, 201);
    context.closePath();
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 右眼眶//
    context.beginPath();
    context.moveTo(302, 184);
    context.bezierCurveTo(303, 192, 297, 199, 289, 199);
    context.bezierCurveTo(281, 200, 274, 194, 274, 186);
    context.bezierCurveTo(273, 178, 279, 171, 287, 171);
    context.bezierCurveTo(295, 170, 302, 176, 302, 184);
    context.closePath();
    context.fill();
    context.lineWidth = 2.0;
    context.stroke();

    // 右嘴唇//
    context.beginPath();
    context.moveTo(284, 201);
    context.bezierCurveTo(284, 209, 277, 216, 269, 216);
    context.bezierCurveTo(260, 216, 254, 209, 254, 201);
    context.bezierCurveTo(254, 193, 260, 187, 269, 187);
    context.bezierCurveTo(277, 187, 284, 193, 284, 201);
    context.closePath();
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 左眼珠//
    context.beginPath();
    context.moveTo(226, 185);
    context.bezierCurveTo(226, 189, 222, 193, 217, 193);
    context.bezierCurveTo(213, 193, 209, 189, 209, 185);
    context.bezierCurveTo(209, 180, 213, 177, 217, 177);
    context.bezierCurveTo(222, 177, 226, 180, 226, 185);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 右眼珠//
    context.beginPath();
    context.moveTo(296, 185);
    context.bezierCurveTo(296, 189, 293, 193, 288, 193);
    context.bezierCurveTo(284, 193, 280, 189, 280, 185);
    context.bezierCurveTo(280, 180, 284, 177, 288, 177);
    context.bezierCurveTo(293, 177, 296, 180, 296, 185);
    context.closePath();
    context.fill();
    context.restore();
    context.restore();

    // ============怒==============
    // 臉//
    context.save();
    context.beginPath();
    context.moveTo(685, 172);
    context.bezierCurveTo(685, 172, 647, 194, 655, 247);
    context.bezierCurveTo(657, 269, 674, 302, 799, 289);
    context.bezierCurveTo(824, 285, 881, 233, 815, 172);
    context.bezierCurveTo(797, 158, 740, 134, 685, 172);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 2.0;
    context.stroke();

    // 左耳//
    context.beginPath();
    context.moveTo(726, 156);
    context.bezierCurveTo(726, 156, 727, 107, 703, 107);
    context.bezierCurveTo(678, 108, 667, 168, 693, 174);
    context.bezierCurveTo(698, 175, 714, 174, 711, 135);
    context.bezierCurveTo(711, 135, 713, 153, 709, 161);
    context.fill();
    context.stroke();

    // 右耳//
    context.beginPath();
    context.moveTo(770, 156);
    context.bezierCurveTo(770, 156, 770, 107, 794, 107);
    context.bezierCurveTo(818, 108, 829, 168, 804, 174);
    context.bezierCurveTo(798, 175, 783, 174, 785, 135);
    context.bezierCurveTo(785, 135, 784, 153, 787, 161);
    context.fill();
    context.stroke();

    // 鼻子/
    context.beginPath();
    context.moveTo(746, 193);
    context.lineTo(758, 193);
    context.bezierCurveTo(758, 193, 758, 193, 758, 194);
    context.bezierCurveTo(756, 196, 751, 201, 752, 204);
    context.bezierCurveTo(752, 206, 750, 197, 746, 194);
    context.bezierCurveTo(746, 193, 746, 193, 746, 193);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 左腮紅//
    context.beginPath();
    context.moveTo(708, 212);
    context.bezierCurveTo(708, 220, 701, 227, 693, 227);
    context.bezierCurveTo(685, 227, 678, 220, 678, 212);
    context.bezierCurveTo(678, 204, 685, 197, 693, 197);
    context.bezierCurveTo(701, 197, 708, 204, 708, 212);
    context.closePath();
    context.fillStyle = "rgb(233, 78, 91)";
    context.fill();

    // 右腮紅//
    context.beginPath();
    context.moveTo(818, 212);
    context.bezierCurveTo(818, 220, 812, 227, 803, 227);
    context.bezierCurveTo(795, 227, 788, 220, 788, 212);
    context.bezierCurveTo(788, 204, 795, 197, 803, 197);
    context.bezierCurveTo(812, 197, 818, 204, 818, 212);
    context.closePath();
    context.fill();

    // 左嘴巴線//
    context.beginPath();
    context.moveTo(730, 212);
    context.bezierCurveTo(730, 212, 729, 220, 730, 225);
    context.stroke();

    // 右嘴巴線//
    context.beginPath();
    context.moveTo(769, 212);
    context.bezierCurveTo(769, 212, 770, 220, 769, 225);
    context.stroke();

    // 左眼//
    context.beginPath();
    context.moveTo(710, 189);
    context.lineTo(734, 194);
    context.stroke();

    // 右眼//
    context.beginPath();
    context.moveTo(790, 188);
    context.lineTo(767, 194);
    context.stroke();

    // 左嘴巴//
    context.beginPath();
    context.moveTo(752, 204);
    context.bezierCurveTo(752, 212, 745, 219, 737, 219);
    context.bezierCurveTo(728, 219, 721, 212, 721, 204);
    context.bezierCurveTo(721, 196, 728, 190, 737, 190);
    context.bezierCurveTo(745, 190, 752, 196, 752, 204);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 右嘴巴//
    context.beginPath();
    context.moveTo(782, 204);
    context.bezierCurveTo(782, 212, 775, 219, 767, 219);
    context.bezierCurveTo(759, 219, 752, 212, 752, 204);
    context.bezierCurveTo(752, 196, 759, 190, 767, 190);
    context.bezierCurveTo(775, 190, 782, 196, 782, 204);
    context.closePath();
    context.fill();
    context.stroke();

    // 左眉毛//
    context.beginPath();
    context.moveTo(743, 179);
    context.bezierCurveTo(743, 179, 746, 178, 746, 182);
    context.stroke();

    // 右眉毛//
    context.beginPath();
    context.moveTo(757, 179);
    context.bezierCurveTo(757, 179, 753, 178, 754, 182);
    context.stroke();

    // 氣噗噗 1//
    context.beginPath();
    context.moveTo(741, 142);
    context.lineTo(741, 131);
    context.bezierCurveTo(741, 131, 726, 128, 734, 121);
    context.bezierCurveTo(738, 119, 732, 110, 741, 110);
    context.bezierCurveTo(742, 110, 750, 104, 755, 111);
    context.bezierCurveTo(757, 116, 763, 115, 761, 122);
    context.bezierCurveTo(759, 126, 761, 130, 757, 130);
    context.bezierCurveTo(753, 130, 752, 130, 752, 130);
    context.lineTo(752, 143);
    context.stroke();

    // 氣噗噗 2//
    context.beginPath();
    context.moveTo(668, 169);
    context.lineTo(661, 163);
    context.bezierCurveTo(661, 163, 651, 169, 652, 161);
    context.bezierCurveTo(653, 157, 645, 155, 650, 151);
    context.bezierCurveTo(651, 150, 652, 142, 659, 143);
    context.bezierCurveTo(662, 145, 666, 141, 668, 147);
    context.bezierCurveTo(669, 150, 673, 151, 670, 153);
    context.bezierCurveTo(668, 155, 667, 156, 667, 156);
    context.lineTo(675, 164);
    context.stroke();

    // 氣噗噗 3//
    context.beginPath();
    context.moveTo(818, 161);
    context.lineTo(825, 153);
    context.bezierCurveTo(825, 153, 816, 143, 825, 142);
    context.bezierCurveTo(829, 143, 830, 134, 836, 139);
    context.bezierCurveTo(837, 139, 846, 139, 845, 147);
    context.bezierCurveTo(843, 151, 849, 154, 843, 158);
    context.bezierCurveTo(840, 159, 839, 164, 836, 161);
    context.bezierCurveTo(834, 159, 833, 159, 833, 159);
    context.lineTo(825, 168);
    context.stroke();
    context.restore();
    context.restore();

    // ============哀==============
    // 臉//
    context.save();
    context.beginPath();
    context.moveTo(185, 574);
    context.bezierCurveTo(185, 574, 147, 595, 155, 648);
    context.bezierCurveTo(157, 670, 174, 704, 299, 690);
    context.bezierCurveTo(326, 687, 381, 635, 315, 574);
    context.bezierCurveTo(297, 559, 240, 535, 185, 574);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 2.0;
    context.stroke();

    // 左耳//
    context.beginPath();
    context.moveTo(226, 557);
    context.bezierCurveTo(226, 557, 227, 508, 203, 508);
    context.bezierCurveTo(178, 509, 167, 570, 193, 576);
    context.bezierCurveTo(198, 576, 214, 575, 211, 536);
    context.bezierCurveTo(211, 536, 213, 554, 209, 562);
    context.fill();
    context.stroke();

    // 右耳//
    context.beginPath();
    context.moveTo(270, 557);
    context.bezierCurveTo(270, 557, 270, 508, 294, 508);
    context.bezierCurveTo(318, 509, 329, 570, 304, 576);
    context.bezierCurveTo(298, 576, 283, 575, 285, 536);
    context.bezierCurveTo(285, 536, 284, 554, 287, 562);
    context.fill();
    context.stroke();

    // 鼻子//
    context.beginPath();
    context.moveTo(249, 601);
    context.lineTo(260, 601);
    context.bezierCurveTo(261, 601, 261, 602, 261, 602);
    context.bezierCurveTo(258, 604, 254, 610, 254, 612);
    context.bezierCurveTo(255, 614, 253, 605, 249, 602);
    context.bezierCurveTo(248, 602, 248, 601, 249, 601);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 左腮紅//
    context.beginPath();
    context.moveTo(205, 616);
    context.bezierCurveTo(205, 625, 198, 633, 188, 633);
    context.bezierCurveTo(179, 633, 172, 625, 172, 616);
    context.bezierCurveTo(172, 607, 179, 599, 188, 599);
    context.bezierCurveTo(198, 599, 205, 607, 205, 616);
    context.closePath();
    context.fillStyle = "rgb(245, 222, 235)";
    context.fill();

    // 右腮紅//
    context.beginPath();
    context.moveTo(333, 616);
    context.bezierCurveTo(333, 625, 326, 633, 316, 633);
    context.bezierCurveTo(307, 633, 300, 625, 300, 616);
    context.bezierCurveTo(300, 607, 307, 599, 316, 599);
    context.bezierCurveTo(326, 599, 333, 607, 333, 616);
    context.closePath();
    context.fill();

    // 左眼眶///
    context.save();
    context.beginPath();
    context.moveTo(225, 607);
    context.bezierCurveTo(225, 607, 203, 610, 204, 598);
    context.bezierCurveTo(204, 593, 211, 586, 221, 586);
    context.bezierCurveTo(229, 586, 238, 592, 238, 599);
    context.bezierCurveTo(238, 607, 225, 607, 225, 607);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 左淚痕//
    context.beginPath();
    context.moveTo(211, 601);
    context.bezierCurveTo(209, 601, 207, 603, 207, 605);
    context.bezierCurveTo(207, 612, 208, 630, 208, 637);
    context.bezierCurveTo(207, 645, 207, 665, 211, 665);
    context.bezierCurveTo(214, 666, 218, 667, 218, 646);
    context.bezierCurveTo(218, 625, 217, 607, 218, 608);
    context.bezierCurveTo(220, 608, 226, 608, 226, 608);
    context.bezierCurveTo(226, 608, 232, 601, 227, 601);
    context.bezierCurveTo(223, 600, 215, 600, 211, 601);
    context.closePath();
    context.fillStyle = "rgb(163, 200, 216)";
    context.fill();

    // 左眼珠//
    context.beginPath();
    context.moveTo(230, 596);
    context.bezierCurveTo(230, 600, 226, 605, 220, 605);
    context.bezierCurveTo(215, 605, 211, 600, 211, 596);
    context.bezierCurveTo(211, 591, 215, 587, 220, 587);
    context.bezierCurveTo(226, 587, 230, 591, 230, 596);
    context.closePath();
    context.fillStyle = "rgb(48, 49, 50)";
    context.fill();

    // 左眼珠上反光///
    context.beginPath();
    context.moveTo(222, 589);
    context.bezierCurveTo(222, 590, 221, 589, 219, 589);
    context.bezierCurveTo(218, 589, 217, 590, 217, 589);
    context.bezierCurveTo(217, 588, 218, 588, 219, 588);
    context.bezierCurveTo(221, 588, 222, 588, 222, 589);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();

    // 左眼珠右反光///
    context.beginPath();
    context.moveTo(228, 594);
    context.bezierCurveTo(228, 595, 227, 596, 225, 596);
    context.bezierCurveTo(224, 596, 223, 595, 223, 594);
    context.bezierCurveTo(223, 593, 224, 592, 225, 592);
    context.bezierCurveTo(227, 592, 228, 593, 228, 594);
    context.closePath();
    context.fill();

    // 右眼眶///
    context.save();
    context.beginPath();
    context.moveTo(280, 607);
    context.bezierCurveTo(280, 607, 302, 610, 301, 598);
    context.bezierCurveTo(300, 593, 294, 586, 283, 586);
    context.bezierCurveTo(276, 586, 267, 592, 267, 599);
    context.bezierCurveTo(267, 607, 280, 607, 280, 607);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 右淚痕///
    context.beginPath();
    context.moveTo(294, 601);
    context.bezierCurveTo(296, 601, 297, 603, 297, 605);
    context.bezierCurveTo(297, 612, 297, 630, 297, 637);
    context.bezierCurveTo(297, 645, 297, 665, 294, 665);
    context.bezierCurveTo(290, 666, 286, 667, 286, 646);
    context.bezierCurveTo(287, 625, 287, 609, 286, 608);
    context.bezierCurveTo(285, 608, 278, 607, 278, 607);
    context.bezierCurveTo(278, 607, 272, 601, 278, 601);
    context.bezierCurveTo(282, 600, 290, 600, 294, 601);
    context.closePath();
    context.fillStyle = "rgb(163, 200, 216)";
    context.fill();

    // 右眼珠///
    context.beginPath();
    context.moveTo(274, 596);
    context.bezierCurveTo(274, 600, 279, 605, 284, 605);
    context.bezierCurveTo(290, 605, 294, 600, 294, 596);
    context.bezierCurveTo(294, 591, 290, 587, 284, 587);
    context.bezierCurveTo(279, 587, 274, 591, 274, 596);
    context.closePath();
    context.fillStyle = "rgb(48, 49, 50)";
    context.fill();

    // 右眼珠上反光///
    context.beginPath();
    context.moveTo(283, 589);
    context.bezierCurveTo(283, 590, 284, 589, 285, 589);
    context.bezierCurveTo(287, 589, 288, 590, 288, 589);
    context.bezierCurveTo(288, 588, 287, 588, 285, 588);
    context.bezierCurveTo(284, 588, 283, 588, 283, 589);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();

    // 右眼珠左反光///
    context.beginPath();
    context.moveTo(277, 594);
    context.bezierCurveTo(277, 595, 278, 596, 279, 596);
    context.bezierCurveTo(281, 596, 282, 595, 282, 594);
    context.bezierCurveTo(282, 593, 281, 592, 279, 592);
    context.bezierCurveTo(278, 592, 277, 593, 277, 594);
    context.closePath();
    context.fill();

    // 左嘴巴//
    context.restore();
    context.beginPath();
    context.moveTo(254, 612);
    context.bezierCurveTo(254, 620, 247, 627, 239, 627);
    context.bezierCurveTo(230, 627, 224, 620, 224, 612);
    context.bezierCurveTo(224, 605, 230, 598, 239, 598);
    context.bezierCurveTo(247, 598, 254, 605, 254, 612);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 1.0;
    context.stroke();

    // 右嘴巴//
    context.beginPath();
    context.moveTo(284, 614);
    context.bezierCurveTo(284, 622, 277, 628, 269, 628);
    context.bezierCurveTo(261, 628, 254, 622, 254, 614);
    context.bezierCurveTo(254, 606, 261, 599, 269, 599);
    context.bezierCurveTo(277, 599, 284, 606, 284, 614);
    context.closePath();
    context.fill();
    context.stroke();

    // 左眉毛//
    context.beginPath();
    context.moveTo(234, 573);
    context.bezierCurveTo(234, 573, 239, 567, 242, 568);
    context.lineWidth = 2.0;
    context.stroke();

    // 右眉毛//
    context.beginPath();
    context.moveTo(269, 574);
    context.bezierCurveTo(269, 574, 264, 569, 261, 570);
    context.stroke();

    // 下抿唇//
    context.beginPath();
    context.moveTo(248, 631);
    context.bezierCurveTo(248, 631, 255, 624, 260, 632);
    context.stroke();
    context.restore();
    context.restore();

    // ============樂==============
    // 臉//
    context.save();
    context.beginPath();
    context.moveTo(689, 573);
    context.bezierCurveTo(689, 573, 651, 594, 658, 648);
    context.bezierCurveTo(661, 670, 674, 705, 799, 691);
    context.bezierCurveTo(826, 689, 884, 634, 819, 573);
    context.bezierCurveTo(800, 559, 744, 535, 689, 573);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 2.0;
    context.stroke();

    // 左耳//
    context.beginPath();
    context.moveTo(730, 557);
    context.bezierCurveTo(730, 557, 730, 507, 706, 508);
    context.bezierCurveTo(682, 508, 671, 569, 696, 575);
    context.bezierCurveTo(702, 576, 717, 575, 715, 536);
    context.bezierCurveTo(715, 536, 716, 554, 713, 562);
    context.fill();
    context.stroke();

    // 右耳//
    context.beginPath();
    context.moveTo(774, 557);
    context.bezierCurveTo(774, 557, 773, 507, 797, 508);
    context.bezierCurveTo(822, 508, 833, 569, 807, 575);
    context.bezierCurveTo(802, 576, 786, 575, 789, 536);
    context.bezierCurveTo(789, 536, 787, 554, 791, 562);
    context.fill();
    context.stroke();

    // 鼻子//
    context.beginPath();
    context.moveTo(754, 595);
    context.lineTo(765, 595);
    context.bezierCurveTo(765, 595, 766, 596, 765, 596);
    context.bezierCurveTo(763, 598, 759, 604, 759, 606);
    context.bezierCurveTo(760, 608, 758, 599, 753, 596);
    context.bezierCurveTo(753, 596, 753, 595, 754, 595);
    context.closePath();
    context.fillStyle = "rgb(0, 0, 0)";
    context.fill();

    // 左腮紅//
    context.beginPath();
    context.moveTo(711, 616);
    context.bezierCurveTo(711, 625, 703, 632, 694, 632);
    context.bezierCurveTo(685, 632, 677, 625, 677, 616);
    context.bezierCurveTo(677, 606, 685, 599, 694, 599);
    context.bezierCurveTo(703, 599, 711, 606, 711, 616);
    context.closePath();
    context.fillStyle = "rgb(245, 222, 235)";
    context.fill();

    // 右腮紅//
    context.beginPath();
    context.moveTo(836, 617);
    context.bezierCurveTo(836, 626, 828, 634, 819, 634);
    context.bezierCurveTo(810, 634, 803, 626, 803, 617);
    context.bezierCurveTo(803, 608, 810, 600, 819, 600);
    context.bezierCurveTo(828, 600, 836, 608, 836, 617);
    context.closePath();
    context.fill();

    // 樂開懷的嘴//
    context.beginPath();
    context.moveTo(741, 618);
    context.bezierCurveTo(741, 618, 749, 635, 757, 636);
    context.bezierCurveTo(765, 636, 769, 636, 780, 618);
    context.bezierCurveTo(782, 612, 772, 608, 757, 608);
    context.bezierCurveTo(743, 608, 737, 610, 741, 618);
    context.closePath();
    context.fillStyle = "rgb(26, 27, 27)";
    context.fill();

    // 左嘴巴線條//
    context.beginPath();
    context.moveTo(721, 624);
    context.bezierCurveTo(721, 624, 712, 612, 729, 611);
    context.lineWidth = 1.0;
    context.stroke();

    // 右嘴巴線條//
    context.beginPath();
    context.moveTo(788, 613);
    context.bezierCurveTo(788, 613, 805, 614, 800, 628);
    context.stroke();

    // 左張開嘴巴線條//
    context.beginPath();
    context.moveTo(731, 625);
    context.bezierCurveTo(731, 625, 731, 628, 734, 629);
    context.stroke();

    // 右張開嘴巴線條//
    context.beginPath();
    context.moveTo(784, 628);
    context.bezierCurveTo(784, 628, 783, 632, 780, 632);
    context.stroke();

    // 嘴張開下巴弧度//
    context.beginPath();
    context.moveTo(745, 637);
    context.bezierCurveTo(745, 637, 749, 642, 758, 642);
    context.bezierCurveTo(767, 642, 770, 640, 771, 638);
    context.stroke();

    // 下巴線//
    context.beginPath();
    context.moveTo(752, 648);
    context.lineTo(765, 648);
    context.stroke();

    // 樂開懷的舌頭//
    context.beginPath();
    context.moveTo(747, 622);
    context.lineTo(773, 622);
    context.bezierCurveTo(773, 622, 769, 633, 762, 633);
    context.bezierCurveTo(755, 633, 752, 633, 747, 622);
    context.closePath();
    context.fillStyle = "rgb(208, 71, 109)";
    context.fill();

    // 左嘴巴//
    context.beginPath();
    context.moveTo(755., 622);
    context.lineTo(753, 622);
    context.lineTo(753, 618);
    context.lineTo(755, 618);
    context.lineTo(755, 622);
    context.closePath();
    context.fillStyle = "rgb(255, 254, 255)";
    context.fill();
    context.lineWidth = 0.5;
    context.stroke();

    // 牙齒 1//
    context.beginPath();
    context.moveTo(767, 622);
    context.lineTo(765, 622);
    context.lineTo(765, 618);
    context.lineTo(767, 618);
    context.lineTo(767, 622);
    context.closePath();
    context.fill();
    context.stroke();

    // 牙齒 2//
    context.beginPath();
    context.moveTo(757, 622);
    context.lineTo(755, 622);
    context.lineTo(755, 615);
    context.lineTo(757, 615);
    context.lineTo(757, 622);
    context.closePath();
    context.fill();
    context.stroke();

    // 牙齒 3//
    context.beginPath();
    context.moveTo(760, 622);
    context.lineTo(757, 622);
    context.lineTo(757, 615);
    context.lineTo(760, 615);
    context.lineTo(760, 622);
    context.closePath();
    context.fill();
    context.stroke();

    // 牙齒 4//
    context.beginPath();
    context.moveTo(762, 622);
    context.lineTo(760, 622);
    context.lineTo(760, 615);
    context.lineTo(762, 615);
    context.lineTo(762, 622);
    context.closePath();
    context.fill();
    context.stroke();

    // 牙齒 5//
    context.beginPath();
    context.moveTo(764, 622);
    context.lineTo(762, 622);
    context.lineTo(762, 615);
    context.lineTo(764, 615);
    context.lineTo(764, 622);
    context.closePath();
    context.fill();
    context.stroke();

    // 左左眼眶線//
    context.beginPath();
    context.moveTo(708, 584);
    context.bezierCurveTo(708, 584, 704, 588, 703, 590);
    context.bezierCurveTo(702, 592, 699, 597, 703, 599);
    context.lineWidth = 1.0;
    context.stroke();

    // 左右眼眶線//
    context.beginPath();
    context.moveTo(735, 584);
    context.bezierCurveTo(735, 584, 741, 588, 740, 593);
    context.stroke();

    // 左眼//
    context.beginPath();
    context.moveTo(707, 595);
    context.bezierCurveTo(707, 595, 713, 590, 722, 590);
    context.bezierCurveTo(732, 590, 734, 593, 735, 595);
    context.lineWidth = 2.0;
    context.stroke();

    // 右右眼眶線//
    context.beginPath();
    context.moveTo(809, 583);
    context.bezierCurveTo(809, 583, 813, 588, 814, 590);
    context.bezierCurveTo(816, 591, 819, 597, 814, 599);
    context.lineWidth = 1.0;
    context.stroke();

    // 右左眼眶線//
    context.beginPath();
    context.moveTo(783, 584);
    context.bezierCurveTo(783, 584, 777, 588, 778, 593);
    context.stroke();

    // 右眼//
    context.beginPath();
    context.moveTo(811, 595);
    context.bezierCurveTo(811, 595, 805, 590, 796, 590);
    context.bezierCurveTo(786, 590, 784, 593, 783, 595);
    context.lineWidth = 2.0;
    context.stroke();

    // 左左嘴巴線//
    context.beginPath();
    context.moveTo(723, 613);
    context.bezierCurveTo(723, 613, 712, 613, 713, 624);
    context.lineWidth = 1.0;
    context.stroke();

    // 右下嘴巴線//
    context.beginPath();
    context.moveTo(792, 614);
    context.bezierCurveTo(792, 614, 797, 617, 794, 621);
    context.stroke();

    // 左嘴巴//
    context.beginPath();
    context.moveTo(759, 607);
    context.bezierCurveTo(759, 614, 752, 621, 744, 621);
    context.bezierCurveTo(735, 621, 728, 614, 728, 607);
    context.bezierCurveTo(728, 599, 735, 592, 744, 592);
    context.bezierCurveTo(752, 592, 759, 599, 759, 607);
    context.closePath();
    context.fill();
    context.stroke();

    // 右嘴巴//
    context.beginPath();
    context.moveTo(790, 607);
    context.bezierCurveTo(790, 614, 783, 621, 775, 621);
    context.bezierCurveTo(766, 621, 759, 614, 759, 607);
    context.bezierCurveTo(759, 599, 766, 592, 775, 592);
    context.bezierCurveTo(783, 592, 790, 599, 790, 607);
    context.closePath();
    context.fill();
    context.stroke();

    // 閃爍爍//
    context.beginPath();
    context.moveTo(752, 506);
    context.lineTo(756, 514);
    context.lineTo(764, 519);
    context.lineTo(756, 523);
    context.lineTo(752, 531);
    context.lineTo(747, 523);
    context.lineTo(739, 519);
    context.lineTo(747, 514);
    context.lineTo(752, 506);
    context.closePath();
    context.fillStyle = "rgb(250, 237, 0)";
    context.fill();

    // 閃爍爍 2//
    context.beginPath();
    context.moveTo(657, 557);
    context.lineTo(662, 565);
    context.lineTo(670, 570);
    context.lineTo(662, 574);
    context.lineTo(657, 581);
    context.lineTo(653, 574);
    context.lineTo(644, 570);
    context.lineTo(653, 565);
    context.lineTo(657, 557);
    context.closePath();
    context.fill();

    // 閃爍爍 3//
    context.beginPath();
    context.moveTo(850, 557);
    context.lineTo(854, 565);
    context.lineTo(863, 570);
    context.lineTo(854, 574);
    context.lineTo(850, 583);
    context.lineTo(845, 574);
    context.lineTo(837, 570);
    context.lineTo(845, 565);
    context.lineTo(850, 557);
    context.closePath();
    context.fill();
    context.restore();
    context.restore();
}

//監聽事件
window.addEventListener('load' ,doFisrt);

