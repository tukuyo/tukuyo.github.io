<template>
  <v-container class="grey privacy">
      <v-row no-gutters>
        <v-flex lg5 md5 sm12 xs12>
          <v-col class="title">
            <h1>Privacy & Policy<p>プライバシーポリシー</p></h1>
            <div class="icon_group">
              <a href="https://twitter.com/tukutuku_tukuyo" class="twitter">
                  <img src="../assets/pic/twitter.svg" alt="twitter" >
              </a>
              <a href="https://www.instagram.com/tukuyo____/" class="instagram">
                  <img src="../assets/pic/instagram.svg" alt="instagram" >
              </a>
          
          
              <a href="https://github.com/tukuyo" class="github">
                  <img src="../assets/pic/github.svg" alt="github" >
              </a>
          
          
              <a href="https://blog.tukuyo.net/" class="hatena">
                  <img src="../assets/pic/hatena.svg" alt="hatena" >
              </a>

              <a href="https://qiita.com/tukutuku_tukuyo" class="qiita">
                  <img src="../assets/pic/qiita.svg" alt="qiita" >
              </a>
          
              <a href="mailto:tukuyo.dayo@gmail.com" class="mail">
                  <img src="../assets/pic/mail.svg" alt="mail" >
              </a>
            </div>
          </v-col>
        </v-flex>
        <v-flex lg7 md7 sm12 xs12 class="detail">
            <v-card class="detail-polcy">
              <h1>プライバシーポリシー</h1>
              <p>Tsukuda は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底することにより、個人情報の保護を推進致します。</p>
              <br>
              <h2>個人情報の管理</h2>
              <p>Yoshio Tsukuda は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
              <br>
              <br>
              <h2>個人情報の利用目的</h2>
              <p>お客さまからお預かりした個人情報は、各アプリ内でのデータ保存のみに利用します。</p>
              <br>
              <br>
              <h2>個人情報の第三者への開示・提供の禁止</h2>
              <p>Yoshio Tsukuda は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。 お客さまの同意がある場合 お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合 法令に基づき開示することが必要である場合</p>
              <br>
              <br>

              <h2>個人情報の安全対策</h2>
              <p>Yoshio Tsukuda は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
              <br>
              <br>

              <h2>ご本人の照会</h2>
              <p>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
              <br>
              <br>

              <h2>法令、規範の遵守と見直し</h2>
              <p>Yoshio Tsukuda は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
              <br>
              <br>

              <h2>お問い合せ</h2>
              <p>Yoshio Tsukuda の個人情報の取扱に関するお問い合せは下記までご連絡ください。<br><br> Yoshio Tsukuda <a href="https://twitter.com/tukutuku_tukuyo">@tukutuku_tukuyo</a></p>
              <br>
              <br>
            </v-card>
        </v-flex>
      </v-row>
    

    
  </v-container>
</template>

<style lang="scss">
.privacy {
  width: 100%;
  margin-top: 10vh;
  .title {
    height: 100;
    text-align: right;
    margin-right: 10px;
    h1 {
      width: 100%;
      margin-top: 50%;
      margin-right: 5%;
      font-size: 4vw;
      padding-bottom: 50px;
    }
    p{
      font-size: 1vw;
    }
    .icon_group {
      a {
        img {
            width: 30px;
            height: 30px;
            margin: 0 0.5vw 1vh 1vw;
        }
      }
    }
  }

  .detail {
    text-align: center;
    .detail-polcy {
      text-transform: none;
      text-align: left;
      display: inline-block;
      width: 100%;
      height: 70%;
      overflow: scroll;
      border: 1px solid black;
      padding: 10px 10px  10px 10px;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      p {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;    
      }
    }
  }
}

@media (min-width: 960px) {
  .container {
    max-width: none;
  }  
}



/* smartphone */
@media only screen and (max-width:960px) {
  .privacy {
    height: 90%;
    margin-top: 5vh;
    .row {
      height: 100%;
      .title {
        h1 {
          font-size: 5vw;
          margin-top: 0;
        }
      }
      .detail {
        height: 80%;
        .detail-polcy {
          width: 100%;
          height: 94%;
          overflow: scroll;
          border: none;
          border: 1px solid black;
          padding: 10px 10px  10px 10px;
          background-color: #ffffff00;
        }
      }
    }
  }
}
</style>
