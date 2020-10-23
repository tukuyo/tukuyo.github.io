<template>
  <v-footer padless>
    <v-card flat tile class="blue-grey lighten-1 #B0BEC5 black--text text-center wa">
      <v-card-text class="black--text headline pb-0">
        LINKS
      </v-card-text>
      <v-card-text>
        <v-tooltip bottom 
                  v-for="icon in icons"
                  :key="icon.img">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ma-3 black--text"
              icon
              v-bind="attrs"
              v-on="on"
              @click="next(icon.url)"
            >
              <v-img :src="icon.img" />
            </v-btn>
          </template>
          <span>{{icon.name}}</span>
        </v-tooltip>
        <v-tooltip bottom> 
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="black--text" icon v-bind="attrs" v-on="on">
              <a href="https://suzuri.jp/tukutuku_tukuyo">
                <v-icon size="35px">
                  mdi-basket
                </v-icon>
              </a>
            </v-btn>
          </template>
          <span>Goods</span>
        </v-tooltip>
      </v-card-text>

      <v-card-text class="black--text pt-0">
        {{$t("Footer.text")}}     
      </v-card-text>
      
      <v-divider></v-divider>
      <v-card-text>
        <v-btn to="/privacy-policy">Privacy & Policy</v-btn>
      </v-card-text>


      <v-card-text hidden>
        <p class="headline">Old version of the web site. :)</p>
        <v-btn to="/old-Home">{{$t("Home.oldHome")}}</v-btn>
      </v-card-text>
      

      <v-divider></v-divider>

      <v-card-text class="black--text">
        @{{ new Date().getFullYear() }} — <strong>tukuyo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {name: "Twitter (@tukutuku_tukuyo)",img: require("../assets/pic/twitter.svg"), url: "https://twitter.com/tukutuku_tukuyo"},
        {name: "instagram",img: require("../assets/pic/instagram.svg"), url: "https://www.instagram.com/tukuyo____/"},
        {name: "GitHub (tukuyo)",img: require("../assets/pic/github.svg"), url: "https://github.com/tukuyo"},
        {name: "Blog (Japanese)",img: require("../assets/pic/hatena.svg"), url: "https://blog.tukuyo.net/"},
        {name: "Qiita (Japanese)",img: require("../assets/pic/qiita.svg"), url: "https://qiita.com/tukutuku_tukuyo"},
        {name: "Mail",img: require("../assets/pic/mail.svg"), url: "mailto:tukuyo.dayo@gmail.com"},
      ]
    }
  },
  methods: {
    next(url) {
      location.href = url;
    },
  },
}
</script>


<style lang="scss" scoped>
a:link, a:visited, a:hover, a:active {
  color: black;
}

.wa {
  width: 100%;
}

</style>