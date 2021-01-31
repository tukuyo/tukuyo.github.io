<template>
  <div class="grey privacy">
      <v-row no-gutters class="ma-5">
        <v-col cols="12" sm="12" md="5" lg="5">
          <div class="headline black--text"><p>{{$t("Privacy.title")}}</p></div>
          <div class="text-right ma-2">
            <v-btn class="ma-1" v-if="!translate" @click="ch">ENGLISH</v-btn>
            <v-btn class="ma-1" v-if="translate" @click="ch">JAPANESE</v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="7" lg="7">
            <v-card class="detail-polcy">
              <v-card-text>
              <h1>{{$t("Privacy.text")}}</h1>
              <br>
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
        </v-col>
      </v-row>

    <div class="text-center mt-5">
      <span v-for="(icon, iter) in icons" :key="iter">
        <v-btn
          class="ma-3 black--text"
          icon
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
    
  </div>
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
  created: function() {
    if(this.$i18n.locale === "en") this.ch();
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
