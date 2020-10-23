<template>
  <v-container class="grey privacy">
      <v-row no-gutters>
        <v-flex lg5 md5 sm12 xs12>
          <v-col class="title">
            <h1>Privacy & Policy<p>プライバシーポリシー</p></h1>
            <v-btn class="ma-5" v-if="!translate" @click="ch">ENGLISH</v-btn>
            <v-btn class="ma-5" v-if="translate" @click="ch">JAPANESE</v-btn>
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
              <h1>{{$t("Privacy.text")}}</h1>
              <p>{{$t("Privacy.text1")}}</p>
              <br>
              <h2>{{$t("Privacy.text2")}}</h2>
              <p>{{$t("Privacy.text3")}}</p>
              <br>
              <br>
              <h2>{{$t("Privacy.text4")}}</h2>
              <p>{{$t("Privacy.text5")}}</p>
              <br>
              <br>
              <h2>{{$t("Privacy.text6")}}</h2>
              <p>{{$t("Privacy.text7")}}</p>
              <br>
              <br>

              <h2>{{$t("Privacy.text8")}}</h2>
              <p>{{$t("Privacy.text9")}}</p>
              <br>
              <br>

              <h2>{{$t("Privacy.text10")}}</h2>
              <p>{{$t("Privacy.text11")}}</p>
              <br>
              <br>

              <h2>{{$t("Privacy.text12")}}</h2>
              <p>{{$t("Privacy.text13")}}</p>
              <br>
              <br>

              <h2>{{$t("Privacy.text14")}}</h2>
              <p>{{$t("Privacy.text15")}}<br><br> Yoshio Tsukuda <a href="https://twitter.com/tukutuku_tukuyo">@tukutuku_tukuyo</a></p>
              <br>
              <br>
            </v-card>
        </v-flex>
      </v-row>
    

    
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      translate: false,
    }
  },
  methods: {
    ch() {
      this.translate = !this.translate;
      if(this.translate) {
        this.$i18n.locale = "en";
        document.documentElement.setAttribute('lang', 'en')
      } else {
        this.$i18n.locale = "ja";
        document.documentElement.setAttribute('lang', 'jp')
      } 
    }
  }
}
</script>

<style lang="scss">
.privacy {
  width: 100%;
  padding-top: 10vh;
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
