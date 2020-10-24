<template>
  <v-container class="grey privacy">
      <v-row no-gutters>
        <v-flex lg5 md5 sm12 xs12>
          <v-col class="title">
            <div class="headline black--text"><p>{{$t("Privacy.title")}}</p></div>
            <div class="text-right">
              <v-btn class="ma-1" v-if="!translate" @click="ch">ENGLISH</v-btn>
              <v-btn class="ma-1" v-if="translate" @click="ch">JAPANESE</v-btn>
            </div>
          </v-col>
        </v-flex>
        <v-flex lg7 md7 sm12 xs12 class="detail">
            <v-card class="detail-polcy">
              <v-card-text>
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
              </v-card-text>
            </v-card>
        </v-flex>
      </v-row>

    <div class="text-center">
      <span v-for="icon in icons" :key="icon.img">
        <v-btn
          class="ma-3 black--text"
          icon
          v-bind="attrs"
          v-on="on"
          @click="next(icon.url)"
        >
          <v-img :src="icon.img" width="3vw"  />
        </v-btn>
      </span>
    </div>
    
    <p class="black--text text-center">
      <br>
      @{{ new Date().getFullYear() }} — <strong>tukuyo</strong>
    </p>
    
  </v-container>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {name: "Twitter (@tukutuku_tukuyo)",img: require("../assets/pic/twitter.svg"), url: "https://twitter.com/tukutuku_tukuyo"},
        {name: "instagram",img: require("../assets/pic/instagram.svg"), url: "https://www.instagram.com/tukuyo____/"},
        {name: "GitHub (tukuyo)",img: require("../assets/pic/github.svg"), url: "https://github.com/tukuyo"},
        {name: "Mail",img: require("../assets/pic/mail.svg"), url: "mailto:tukuyo.dayo@gmail.com"},
      ],
      translate: false,
    }
  },
  methods: {
    next(url) {
      location.href = url;
    },
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
  },
}
</script>
