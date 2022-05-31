<template>
  <div padless>
    <div class="blue-grey lighten-1 #B0BEC5  text-center pa-5">
      <div class="black--text headline pb-0">
        LINKS
      </div>
      <div class="pa-5">
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
      </div>

      <div class="black--text pt-0">
        {{$t("Footer.text")}}     
      </div>
      
      <v-divider></v-divider>
      <div class="mt-5 mb-5">
        <v-btn to="/privacy-policy">Privacy & Policy</v-btn>
      </div>


      <div hidden>
        <p class="headline">Old version of the web site. :)</p>
        <v-btn to="/old-Home">{{$t("Home.oldHome")}}</v-btn>
      </div>
      

      <v-divider></v-divider>

      <div class="black--text">
        &copy;{{ new Date().getFullYear() }} — <strong>tukuyo</strong>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      icons: [
        {name: "Twitter (@tukutuku_tukuyo)",img: require("../assets/pic/twitter.svg"), url: "https://twitter.com/tukutuku_tukuyo"},
        {name: "instagram",img: require("../assets/pic/instagram.svg"), url: "https://www.instagram.com/tukuyo_apps/"},
        {name: "GitHub (tukuyo)",img: require("../assets/pic/github.svg"), url: "https://github.com/tukuyo"},
        {name: "Blog (Japanese)",img: require("../assets/pic/hatena.svg"), url: "https://tukuyo.net/"},
        {name: "Qiita (Japanese)",img: require("../assets/pic/qiita.svg"), url: "https://qiita.com/tukutuku_tukuyo"},
        {name: "Mail",img: require("../assets/pic/mail.svg"), url: "mailto:dev@tukuyo.net"},
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