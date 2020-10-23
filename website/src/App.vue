<template>
  <v-app>
    <router-view />
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      year: 0,
      translate: this.$i18n.locale
    }
  },
  created: function() {
    this.copyRight();
  },
  methods: {
    // 元旦のみ表示する為の関数
    isNYD() {
      var month = new Date().getMonth()+1;
      var day = new Date().getDate();
      if(month == 1 && day == 1){
        window.location = "/NewYear"
        this.$forceUpdate();
      }
    },
    copyRight() {
      this.year = new Date().getFullYear();
    },
    chTitleandDescription(routeInstance) {
      if(routeInstance.meta.title) {
        var setTitle = routeInstance.meta.title;
        document.title = setTitle;
      }
      if(routeInstance.meta.desc){
        var setDesc = routeInstance.meta.desc;
        document.querySelector("meta[name='description']").setAttribute('content', setDesc)
      }
    }
  },
  mounted() {
    var routeInstance = this.$route;
    this.chTitleandDescription(routeInstance);
  },
  watch: { 
    '$route' (routeInstance) {
      this.chTitleandDescription(routeInstance);
    }
  }
  }
</script>
