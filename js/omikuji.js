(function omikuji() {
    'use strict';

    function fullText() {
        var n;
        var str = "";
        const a_name = ["願事", "お金", "恋愛", "旅行", "学門", "健康"];
        const a_detail = [
            ["叶う．しかし油断するな", "時間がかかる", "強く意思を持て", "人に助けられ叶う", "難しい", "ガンバルンバ"],                                // 願事
            ["よく貯まるであろう", "あまり使うな，貯まらない", "タメすぎ注意", "変な買い物多し", "便利グッズ買ってしまう年に", "お年玉はもらえましたか？"],  // お金
            ["順調に進む", "急ぐべからず", "深入りするな", "思いやりを大切に", "危険", "我が心早く決めよ"],                                          // 恋愛
            ["利益あり", "楽しき旅になる", "連れあれば尚吉", "しっかりと計画せよ", "近いところ特に吉", "急がぬ方が良い"],                               // 旅行
            ["安心して勉学せよ", "努力すれば望みが叶う", "もう少し努力せよ", "人に頼らず落ち着いて励め", "もう少し，もう少し", "雑念多し，全力を尽くせ"],    // 学門
            ["風は引くのかもしれない", "インフルエンザ気をつけて", "あっ，頑張れ", "病気は治り際が大事", "心を穏やかに", "体調に気をつけろ"]                             // 健康
        ];
        for (var i = 0; i < 6; i++) {
            n = Math.floor(Math.random() * 6);
            str += a_name[i] + " ━ " + a_detail[i][n] + "\n";
        }
        return str;
    }

    function setCss(clr1,clr2) {
        result.style.background = "-webkit-linear-gradient(top, " + clr1 + "," + clr2 + ")";
        result.style.webkitTextFillColor = "transparent";
        result.style.webkitBackgroundClip = "text";
    }


    var btn = document.getElementById("btn");
    var result = document.getElementById("rs");
    var detail = document.getElementById("dl");
    var sw = false;

    btn.addEventListener('click', function () {
        if (sw) return false;

        sw = true;
        btn.textContent = "再表示";
        var n = Math.random();

        if (n < 0.2) {
            result.textContent = "大吉";
            setCss("#ffb200","#ff0000");
        } else if (n < 0.35) {
            result.textContent = "中吉";
            setCss("#ffb200","#ff0000");
        } else if (n < 0.5) {
            result.textContent = "小吉";
            setCss("#ffb200","#ffd000");
        } else if (n < 0.65) {
            result.textContent = "吉";
            setCss("#abf400","#f2ff00 ");
        } else if (n < 0.8) {
            result.textContent = "末吉";
            setCss("#007fff","#00ff48");
        } else if (n < 0.95) {
            result.textContent = "凶";
            setCss("#9000ff","#9000ff");
        } else {
            result.textContent = "大凶";
            setCss("#ff0004","#8d00f9" );
        }
        detail.innerText = fullText();
    });


})();