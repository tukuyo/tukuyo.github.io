<template>
  <div id="home">
    <v-system-bar height="56px" color="indigo darken-4" lights-out dark class="text-center d-flex">
      <div class="bar-title display-2 md-1 pl-4">{{$t("Home.title")}}</div>
      <v-spacer></v-spacer>
      <v-icon medium  color="white">
        mdi-translate
      </v-icon>
      <v-switch color="primary" v-model="translate" @click="chLocale"  inset></v-switch>
    </v-system-bar>
    
    <v-card>
      <v-row align="center" class="lightbox pa-2 fill-height">
        <v-card-text class="display-1 text-center mb-0 pb-0">
            <p>{{$t("About.title")}}</p>
        </v-card-text>
        <v-col align="center" cols="16" sm="16" md="6" lg="6">
          <v-img src="../assets/pic/icon.png" max-height="35%" max-width="35%" contain></v-img>
          <v-card-text class="display-1 text-center mb-0 pb-0">
            <p>{{$t("Home.Name")}}</p>
          </v-card-text>
        </v-col>

        <v-col cols="16" sm="12" md="6" lg="5">
          <v-card-text class="mb-0 pb-0">
            <p class="headline mb-0 pb-0">{{$t("About.profile")}}</p>
          </v-card-text>
          <v-card-text>
            <p class="body-1">{{$t("About.text")}}</p>
            <p class="body-1">{{$t("About.text2")}}</p>
          </v-card-text>
          <v-card-text>
            <p class="headline">{{$t("About.hobby_title")}}</p>  
            <p class="body-1">{{$t("About.hobby")}}</p>
          </v-card-text>
          <v-card-text>
            <p class="headline">{{$t("About.skills_title")}}</p> 
            <p class="subtitle-1">{{$t("About.major_skills_title")}}</p> 
            <ul>
              <li class="body-1">iOS</li>
              <li class="body-1">VR/AR</li>
            </ul>
            <p class="subtitle-1 mt-5">{{$t("About.minor_skills_title")}}</p> 
            <ul>
              <li class="body-1">Swift</li>
              <li class="body-1">python</li>
              <li class="body-1">html, css, javascript</li>
              <li class="body-1">vue.js</li>
              <li class="body-1">firebase</li>
            </ul>
            
            <p class="subtitle-1 mt-5">{{$t("About.other_skills")}}</p> 
            <ul>
              <li class="body-1">{{$t("About.other_SkillsList")}}</li>
            </ul>
          </v-card-text>
          
        </v-col>
      </v-row>
      <infinite-loading @infinite="load" class="noVis"></infinite-loading>
    </v-card>

    <v-divider></v-divider>

    

    <v-card class="black--text text-center">
      <v-card-text class="display-2 text-center">
        <p>{{$t("Works.title")}}</p>
      </v-card-text>
      <v-card-text class="headline text-center">
        <p>{{$t("Works.description")}}</p>
      </v-card-text>

      <v-card-text>
        <p class="display-1">{{$t("Works.ios_title")}}</p>
        <v-row>
          <v-col v-for="(item, index) in app_works" :key="index" cols="12" sm="6" md="4" lg="3">
            <card :item="item" v-bind:translate="translate"></card>
          </v-col>
        </v-row>
        <v-progress-circular
          indeterminate
          color="primary"
          v-if="loading"
        ></v-progress-circular>
      </v-card-text>

      <v-divider></v-divider>


      <v-card-text>
        <p class="display-1 mt-5">{{$t("Works.web_title")}}</p>
        <v-row>
        <v-col v-for="(item, index) in web_works" :key="index"  cols="12" sm="6" md="4" lg="3">
          <card :item="item" v-bind:translate="translate"></card>
        </v-col>
        </v-row>
        <v-progress-circular
          indeterminate
          color="orange"
          v-if="loading"
        ></v-progress-circular>
      </v-card-text>


      <v-divider></v-divider>

      <v-card-text>
        <p class="display-1 mt-5">{{$t("Works.other")}}</p>
        <p class="headline"> {{ $t("Works.otherDescription")}} </p>
        <v-row>
          <v-col v-for="(item, index) in other_works" :key="index" cols="12" sm="6" md="4" lg="3">
            <card :item="item" v-bind:translate="translate" />
          </v-col>
        </v-row>
        <v-progress-circular
          indeterminate
          color="green"
          v-if="loading"
        ></v-progress-circular>
      </v-card-text>
    </v-card>

    <Footer />
  </div>
</template>



<script>
import axios from 'axios'
import Footer from '@/components/Footer.vue'
import InfiniteLoading from 'vue-infinite-loading'
import card from '@/components/worksCard.vue'

const api = "https://script.google.com/macros/s/AKfycbzMaJHkwQXEmEDNO4GNNvEZDBWWWca5ZoL_b697X27gf54J6g/exec"

export default {
  name: 'home',
  components: {
    InfiniteLoading,
    card,
    Footer,
  },
  data() {
    return {
      laptop: true,
      translate: false,
      works: [],
      web_works: [],
      app_works: [],
      other_works: [],
      loadNum: 0,
      loading: true
    }
  },
  created: function() {
    this.isNYD();
    if(this.$i18n.locale === "en") this.translate = !this.translate;
  },
  methods:{
    // 元旦のみ表示する為の関数
    isNYD() {
      var month = new Date().getMonth()+1;
      var day = new Date().getDate();
      if(month == 1 && day == 1){
        window.location = "/NewYear"
        this.$forceUpdate();
      }
    },
    chLocale() {
      if(this.translate) {
        this.$i18n.locale = "en";
        document.documentElement.setAttribute('lang', 'en')
      } else {
        this.$i18n.locale = "ja";
        document.documentElement.setAttribute('lang', 'ja')
      } 
    },


    load($state) {
      axios.get(api, {
          params: {
              current: this.loadNum,
              num: 5,
          }
      }).then(({ data }) => {
          if(data.length){
              this.works.push(...data);
              this.loadNum += data.length;
              this.sortingWorks();
              $state.loaded();
          } else {
              $state.complete();
              this.loading = false;
          }
      }).catch(() => {
          $state.complete();
      });
    },
    sortingWorks() {
      this.works.forEach(data => {
        if(data.type == 'native') this.app_works.push(data);
        else if(data.type == "web") this.web_works.push(data);
        else this.other_works.push(data);
      });
      this.works.length = 0;
    },
    go(url) {
      location.href = url;
    }
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Mali:wght@500');

* {
  overflow: initial;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background-color: #f2f2f2;
  font-family: cursive, Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  #app {
    #home {
      .bar-title {
        font-family: 'Mali' !important;
        font-size: min(5vw, 40px) !important;
        color: white;
      }
      .noVis{
        visibility: hidden;
      }
    }
  }
}

</style>
