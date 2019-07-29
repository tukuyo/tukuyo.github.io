<template>
    <div class="NYD">
        <div class="header">
            <h2>謹賀<br>[&nbsp;]新年</h2>
        </div>
        <div class="message">
            <p class="letter-body">新年あけましておめでとうございます。<br>
                旧年中は皆様大変お世話になり、誠に有難うございました。<br>
                本年もよろしくお願い申し上げます。<br>
                本年もみなさまが御健勝で御多幸でありますよう。<br>
                心からお祈り申し上げます。</p>
            <p class="date">令和 {{ year }} 年 元旦</p>
        </div>
    
        <div class="modal_wrap">
            <input id="trigger" type="checkbox">
            <div class="modal_overlay">
                <label for="trigger" class="modal_trigger"></label>
                <div class="modal_content">
                    <label for="trigger" class="close_button">✖️</label>
                    <h1 class="kekka">結果</h1>
                    <h2 class="results" id="rs" v-bind:style="resultStyle">{{ luck }}</h2>
                    <div class="detail">
                        <p v-for="item in fortune" v-bind:key="item.id">{{ item }}</p>
                    </div>
                </div>
            </div>
        </div>
    
        <label for="trigger" class="open_button" id="btn" v-on:click="omikuji">{{ btn }}</label>
        <div class="footer">
            &copy;2020 tukuyo.
        </div>
    </div>
</template>



<style lang="scss">

@import url(https://fonts.googleapis.com/css?family=Sawarabi+Mincho);
@import url(https://fonts.googleapis.com/earlyaccess/hannari.css);
@font-face {
	font-family: 'hkgyong';
	src:url('../assets/css/fonts/hkgyong.ttf');
}


html,body {
    height: 100%;
    margin: 0;
    padding: 0;
}

.header {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    overflow: auto;
}

.header h2 {
    position: absolute;
    margin-right    : 15px;
    top: 5vh;
    font-family: 'hkgyong';
    writing-mode: vertical-rl;
}

.message {
    width: 60%;
    top: 50px;
    left: 50px;
    position: absolute;
    font-size: 30px;
    color: white;
}

.date {
    text-align: right;
}

.results {
    text-align: center;
    margin: 0 0 15px 0;
    padding-bottom: 10px;
    border-bottom: solid 1px #000;
    font-size: 30px;
    padding-top: 15px;
    color: rgb(0, 0, 0);
}

.detail {
    writing-mode: vertical-rl;
    top: 0;
    margin: 0 auto;
    line-height: 80px;
    font-size: 1vw;
}

.footer {
    width: 100%;
    bottom: 10px;    
    position: absolute;
    color: white;
    text-align: center;
}


.modal_wrap input {
    display: none;
}
  
.modal_overlay {
    display: flex;
    justify-content: center;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: opacity 0.5s, transform 0s 0.5s;
    transform: scale(0);
}
  
.modal_trigger {
    position: absolute;
    width: 100%;
    height: 100%;
}
  
.modal_content {
    align-self: center;
    width: 60%;
    max-width: 800px;
    padding: 30px 30px 15px;
    box-sizing: border-box;
    background: #fff;
    line-height: 1.4em;
    transform: scale(1.2);
    transition: 0.5s;
}

.modal_content h1 {
    position: absolute;
    top: 14px;
    margin-top: 0;
}

  
.close_button {
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 24px;
    cursor: pointer;
}
  
.modal_wrap input:checked ~ .modal_overlay {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
}
  
.modal_wrap input:checked ~ .modal_overlay .modal_content {
    transform: scale(1);
}
  
.open_button {
    position: fixed;
    top: 60%;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    margin: auto;
    padding: 8px 16px;
    color: rgb(49, 49, 49);
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
    border-radius: 16px;
    cursor: pointer;
}


/* mobile */
@media only screen and (max-width: 880px) {

    body {
        background-image: url('../assets/pic/nenga.png');
        background-position: center center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
    }
    .header h2 {
        top: 5vh;
        font-size: 0px;
    }

    .header h2::before {
        font-size: 12vh;
        content: "謹賀新年";
    }

    .message {
        width: 45%;
        top: 10vh;
        left: 13vw;
        font-size: 2vh;
        color: #000;

        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    }

    .kekka {
        padding-top:5px; 
        font-size: 3vh;
    }

    .results {
        font-size: 5vh;
    }

    .detail {
        line-height: 10vw;
        font-size: 3vh;
        p {
            margin: 1vw;
        }
    }

    .modal_content {
        width: 80%;
    }

    .open_button {
        width: 150px;
        height: 20px;
        top: 80%;
    }

    .footer {
        font-size: 15px;
        color: #000;
    }
}

/* PC laptop */
@media only screen and (min-width:880px) {

    body {
        background-image: url('../assets/pic/NYD.jpg');
        background-position: center center;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
    }

    .modal_content {
        height: 60vh;
    }

    .header h2 {
        font-size: 12vw;
        text-shadow: 10px 10px 0 #fff;
    }
    .message {
        width: 60%;
        top: 100px;
        
        font-family: 'Sawarabi Mincho', sans-serif;
        font-size: 2vw;
        text-shadow: 1px 1px 1px #000;
    }
    .kekka {
        padding-top: 10px;
    }
    .detail {
        width: 80%;
        p {
            font-size: 1.9vw;
            margin: 1vw;
        }
    }
}

</style>

<script>

const reiwa = 2019;
const a_name = ["願事", "お金", "恋愛", "旅行", "学門", "健康"];
const a_detail = [
    ["叶う．しかし油断するな", "時間がかかる", "強く意思を持て", "人に助けられ叶う", "難しい", "ガンバルンバ"],                                // 願事
    ["よく貯まるであろう", "あまり使うな，貯まらない", "タメすぎ注意", "変な買い物多し", "便利グッズ買ってしまう年に", "お年玉はもらえましたか？"],  // お金
    ["順調に進む", "急ぐべからず", "深入りするな", "思いやりを大切に", "危険", "我が心早く決めよ"],                                          // 恋愛
    ["利益あり", "楽しき旅になる", "連れあれば尚吉", "しっかりと計画せよ", "近いところ特に吉", "急がぬ方が良い"],                               // 旅行
    ["安心して勉学せよ", "努力すれば望みが叶う", "もう少し努力せよ", "人に頼らず落ち着いて励め", "もう少し，もう少し", "雑念多し，全力を尽くせ"],    // 学門
    ["風は引くのかもしれない", "インフルエンザ気をつけて", "あっ，頑張れ", "病気は治り際が大事", "心を穏やかに", "体調に気をつけろ"]                             // 健康
];

export default {
    name: "omikuji",
    data() {
        return {
            sw: false,
            year: 0,
            luck: "",
            fortune: [],
            btn: "おみくじをする",
            resultStyle: {
                "background": "-webkit-linear-gradient(top, #000,#000)",
                "webkitTextFillColor": "transparent",
                "-webkit-background-clip": "text"
            }
        }
    },
    methods: {
        Year() {
            var Year = new Date().getFullYear();
            this.year = Year - reiwa + 1;
        },
        omikuji() {
            if(this.sw)  return 0;
            this.sw=true;
            var n;
            n = Math.random();
            if (n < 0.2) {
                this.luck = "大吉";
                this.setCss("#ffb200","#ff0000");
            } else if (n < 0.35) {
                this.luck = "中吉";
                this.setCss("#ffb200","#ff0000");
            } else if (n < 0.5) {
                this.luck = "小吉";
                this.setCss("#ffb200","#ffd000");
            } else if (n < 0.65) {
                this.luck = "吉";
                this.setCss("#abf400","#f2ff00 ");
            } else if (n < 0.8) {
                this.luck = "末吉";
                this.setCss("#007fff","#00ff48");
            } else if (n < 0.95) {
                this.luck = "凶";
                this.setCss("#9000ff","#9000ff");
            } else {
                this.luck = "大凶";
                this.setCss("#ff0004","#8d00f9" );
            }

            // detail
            for (var i = 0; i < 6; i++) {
                n = Math.floor(Math.random() * 6);
                this.fortune.push(a_name[i] + " ━ " + a_detail[i][n] + "\n");
            }
            
        },
        setCss(clr1,clr2) {
            this.resultStyle.background = "-webkit-linear-gradient(top, " + clr1 + "," + clr2 + ")";
            this.resultStyle.webkitTextFillColor = "transparent";
            this.resultStyle.webkitBackgroundClip = "text";
        },
        isNYD(){
            var month = new Date().getMonth()+1;
            var day = new Date().getDate();
            if(month != 1 && day != 1){
                window.location = "/"
                this.$forceUpdate();
            }
        }
    },
    created: function(){
        this.isNYD();
        this.Year();
    }
}
</script>
