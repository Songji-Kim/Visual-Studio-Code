// //　最初から出す
// const kekka = "じゃんけん結果";

// //　最初から出す
// $(".p1").html("player1");
// $(".p2").html('<img src="img/gu-.PNG">');
// $(".p3").html("グー");
// $(".p3").css("color", "blue");

// //　最初から出す
// $(".p4").html("player2");
// $(".p5").html('<img src="img/gu-.PNG">');
// $(".p6").html("グー");
// $(".p6").css("color", "blue");

$("#button").on("click", function () {
  const janken = Math.floor(Math.random() * 3 + 1);
  const janken2 = Math.floor(Math.random() * 3 + 1);

  //　自分
  if (janken === 1) {
    $(".p1").html("player1");
    $(".p2").html('<img src="img/gu-.PNG">');
    $(".p3").html("グー");
    $(".p3").css("color", "blue");
    console.log("グー");
  } else if (janken === 2) {
    $(".p1").html("player1");
    $(".p2").html('<img src="img/choki.PNG">');
    $(".p3").html("チョキ");
    $(".p3").css("color", "red");
    console.log("チョキ");
  } else if (janken === 3) {
    $(".p1").html("player1");
    $(".p2").html('<img src="img/pa-.PNG">');
    $(".p3").html("パー");
    $(".p3").css("color", "pink");
    console.log("パー");
  }

  //　相手
  if (janken2 === 1) {
    $(".p4").html("player2");
    $(".p5").html('<img src="img/gu-.PNG">');
    $(".p6").html("グー");
    $(".p6").css("color", "blue");
    console.log("グー");
  } else if (janken2 === 2) {
    $(".p4").html("player2");
    $(".p5").html('<img src="img/choki.PNG">');
    $(".p6").html("チョキ");
    $(".p6").css("color", "blue");
    console.log("チョキ");
  } else if (janken2 === 3) {
    $(".p4").html("player2");
    $(".p5").html('<img src="img/pa-.PNG">');
    $(".p6").html("パー");
    $(".p6").css("color", "pink");
    console.log("パー");
  }

  // 結果
  if (janken === janken2) {
    $(".p7").html("あいこ");
    $(".p7").css("color", "orange");
  } else if (janken === 1 && janken2 === 2) {
    $(".p7").html("勝ち");
    $(".p7").css("color", "red");
  } else if (janken === 2 && janken2 === 3) {
    $(".p7").html("勝ち");
    $(".p7").css("color", "red");
  } else if (janken === 3 && janken2 === 1) {
    $(".p7").html("勝ち");
    $(".p7").css("color", "red");
  } else {
    $(".p7").html("負け");
    $(".p7").css("color", "blue");
  }
});