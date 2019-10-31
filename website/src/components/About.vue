<template>
    <div class="Profile">
        <div class="icon"><img src="../assets/pic/icon.png" alt="tukuyo" class="icon_img"></div>
        <div class="nickname">つくよ</div>
        <div class="yomi">tukuyo</div>
        <div class="detail">
            <h3>Profile</h3>
            <p>
                年齢：{{ age }}歳<br>
                性別：男<br>
                出身：滋賀県<br>
                職業：{{ occupation }}<br>
                趣味：音楽鑑賞，プログラミング，ゲーム，国内旅行，ギター<br>
                <br>
            </p>
            <h3>history</h3>
            <p class='none'>
                中学の時からVBScriptでプログラミングに興味を持ち，<br>
                高校から情報系を専攻．<br>
                大学では，Unity,Kinectを用いた研究を行い．<br>
                大学院では，Unityを用いてVRに関する研究を行っている，
            </p>
            <h3 v-on:click="hidden">mind</h3>
            <p>{{ mind }}
            </p>
        </div>
    </div>
</template>


<script>
const birthYear = 1996;
const Month = 8;
const Day = 9;
const poe = ["天気予報士が明日雨だと伝えても，\n貴方の明日は晴れますように．","Everythig begin with 'Hello'.","Code wins arguments."];

export default {
    data () {
        return {
            age: 0,
            occupation: "学生 (大学院)",
            mind: "’とにかく楽しむ'",
            click: 0
        }
    },
    methods: {
        calcAge() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth();
            var day = today.getDate();
            this.age = year - birthYear;
            if(month < Month || month == Month && day < Day)
                this.age -= 1;
        },
        hidden() {
            if(this.click < 4){
                this.click++;
                return 0;
            } else if (this.click == 4) {
                this.mind = poe[Math.floor(Math.random() * Math.floor(3))];
                this.click++;
            }
        }
    },
    created: function() {
        this.calcAge()
    }
}
</script>


<style lang="scss">
// プロフィール
  .Profile {
    height: 93%;
    overflow: scroll;

    .icon {
      margin: 5% 25%;
      text-align: center;

      .icon_img {
        width: 200px;
        height: 200px;
      }
    }
    
    .nickname,.yomi {
        text-align: center;
        letter-spacing: 0.4em;
        margin-bottom: 0.3em;
    }
    .detail {
      margin: 5% 25%;
      line-height: 50px;

      h3 {
        margin: 0;
        font-size: 3vw;
        border-bottom: solid 1px #0e0e0e;
      }
    }
  }
.none {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}




/* smartphone */
@media only screen and (max-width:768px) {
    .Profile {
      .icon {
        .icon_img {
          width: 80%;
          height: 20%;
        }
      }
      .detail {
        margin: 5% 10%;
        p {
          line-height: 8vw;
        }
        h3 {
          font-size: 5vw;
        }
      }
    }
}
</style>