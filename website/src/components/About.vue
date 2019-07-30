<template>
    <div class="Profile">
        <div class="icon"><img src="../assets/pic/icon.png" alt="tukuyo" class="icon_img"></div>
        <div class="nickname">つくよ</div>
        <div class="yomi">tukuyo</div>
        <div class="detail">
            <p>
                年齢：{{ age }}歳<br>
                性別：男<br>
                出身：滋賀県<br>
                職業：{{ occupation }}<br>
                趣味：音楽鑑賞，プログラミング，ゲーム，国内旅行，ギター<br>
                <br>
            </p>
            <h3>history</h3>
            <p>中学の時からプログラミングに興味を持ち，<br>
                高校から情報系を専攻<br>
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
