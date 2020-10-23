<template>
    <div class="Contact">
        <p>
            各種SNSは以下のアイコンからアクセスできます．
        </p>
        <div class="icon_group">
            
                <a href="https://twitter.com/tukutuku_tukuyo" class="twitter">
                    <img src="../../assets/pic/twitter.svg" alt="twitter">
                </a>
            
            
                <a href="https://www.instagram.com/tukuyo____/" class="instagram">
                    <img src="../../assets/pic/instagram.svg" alt="instagram">
                </a>
            
            
                <a href="https://github.com/tukuyo" class="github">
                    <img src="../../assets/pic/github.svg" alt="github">
                </a>
            
            
                <a href="https://blog.tukuyo.net/" class="hatena">
                    <img src="../../assets/pic/hatena.svg" alt="hatena">
                </a>

                <a href="https://qiita.com/tukutuku_tukuyo" class="qiita">
                    <img src="../../assets/pic/qiita.svg" alt="qiita">
                </a>
            
                <a href="mailto:tukuyo.dayo@gmail.com" class="mail">
                    <img src="../../assets/pic/mail.svg" alt="mail">
                </a>
            
            
                <a href="https://suzuri.jp/tukutuku_tukuyo" class="suzuri">
                    <img src="../../assets/pic/surisurikun.png" alt="suzuri">
                </a>
            
        </div>
    </div>
</template>


<style lang="scss" scoped>
.Contact {
    .Card {
        p {
            margin-top: 10%;
            margin-bottom: 10%;
            text-align: center;
        }
        img {
            width: 100px;
            height: 100px;
        }
        .icon_group{
            width: 73%;
            margin: 30px auto;
            text-align: center;
            a {
                img {
                    width: 100px;
                    height: 100px;
                    margin: 0 1vw 1vh 1vw;
                }
            }
        }
    }
}

.hatena img {
  transform: scale(1.5);
  fill: #000;
}

.suzuri img {
  transform: scale(1.2);
}
</style>