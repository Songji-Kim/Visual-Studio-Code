

$("#button").on("click", function () {
    const sangokushi = Math.floor(Math.random() * 3 + 1);
    const sangokushi2 = Math.floor(Math.random() * 3 + 1);
  
    //　自分
    if (sangokushi === 1) {
      $(".p1").html("player1");
      $(".p2").html('<img src="img/bachou.jfif">');
      $(".p3").html("蜀");
      $(".p3").css("color", "green");
      console.log("蜀");
    } else if (sangokushi === 2) {
      $(".p1").html("player1");
      $(".p2").html('<img src="img/shibai.jfif">');
      $(".p3").html("魏");
      $(".p3").css("color", "blue");
      console.log("魏");
    } else if (sangokushi === 3) {
      $(".p1").html("player1");
      $(".p2").html('<img src="img/kannei.jfif">');
      $(".p3").html("呉");
      $(".p3").css("color", "red");
      console.log("呉");
    }
  
    //　相手
    if (sangokushi2 === 1) {
        $(".p4").html("player2");
        $(".p5").html('<img src="img/bachou.jfif">');
        $(".p6").html("蜀");
        $(".p6").css("color", "green");
        console.log("蜀");
      } else if (sangokushi2 === 2) {
        $(".p4").html("player2");
        $(".p5").html('<img src="img/shibai.jfif">');
        $(".p6").html("魏");
        $(".p6").css("color", "blue");
        console.log("魏");
      } else if (sangokushi2 === 3) {
        $(".p4").html("player2");
        $(".p5").html('<img src="img/kannei.jfif">');
        $(".p6").html("呉");
        $(".p6").css("color", "red");
        console.log("呉");
    }
  
    // 結果
    if (sangokushi === sangokushi2) {
      $(".p7").html("あいこ");
      $(".p7").css("color", "orange");
    } else if (sangokushi === 1 && sangokushi2 === 2) {
      $(".p7").html("勝ち");
      $(".p7").css("color", "red");
    } else if (sangokushi === 2 && sangokushi2 === 3) {
      $(".p7").html("勝ち");
      $(".p7").css("color", "red");
    } else if (sangokushi === 3 && sangokushi2 === 1) {
      $(".p7").html("勝ち");
      $(".p7").css("color", "red");
    } else {
      $(".p7").html("負け");
      $(".p7").css("color", "blue");
    }
  });