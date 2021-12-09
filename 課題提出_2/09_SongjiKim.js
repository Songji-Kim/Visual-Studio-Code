// math.floor(math.random()*5)

// <button id="aa">ボタン</button>

$("#aa").on("click", function () {

    const janken = Math.floor(Math.random()*3+1);
    console.log(janken, "じゃんけん");  

    if (janken === 1){
        $("p1").html("グー");
        $("p1").css("color", "blue");
        $("p2").html('<img src="img/gu-.PNG">');
        console.log("グー");
    } else if (janken === 2){
        $("p1").html("チョキ");
        $("p1").css("color", "blue");
        $("p2").html('<img src="img/choki.PNG">');
        console.log("チョキ");
    } else if (janken === 3){
        $("p1").html("パー");
        $("p1").css("color", "pink");
        $("p2").html('<img src="img/pa-.PNG">');
        console.log("パー");
    }

  });

