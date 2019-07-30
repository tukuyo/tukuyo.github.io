<template>
  <div class="home">
    <!-- Button, Top moji -->
    <header>
      <nav class="navigation" role="navigation">
        <ul class="nav-items">
          <li class="nav-item">
            <a>
              <label for="trigger1">Works</label>
            </a>
          </li>
          <li class="nav-item">
            <a>
              <label for="trigger2">About</label>
            </a>
          </li>
          <li class="nav-item">
            <a>
              <label for="trigger3">Skills</label>
            </a>
          </li>
          <li class="nav-item">
            <a>
              <label for="trigger4">Contact</label>
            </a>
          </li>
        </ul>
      </nav>
      <h1>
        tukuyo's website
        <p>&copy;{{ year }} tukuyo.</p>
      </h1>
    </header>

    <!-- Overlapping tiles -->
    <div class="wrap">
      <input type="checkbox" id="trigger1">
      <input type="checkbox" id="trigger2">
      <input type="checkbox" id="trigger3">
      <input type="checkbox" id="trigger4">

      <div class="overlay1">
        <label for="trigger1" class="overlay_trigger1"></label>
        <div class="Works">
          <div class="Card">
            <label for="trigger1" class="close_button"><img src="../assets/pic/close.svg" class="peke"></label>
            <h2>Works</h2>
            <Works />
          </div>
        </div>
      </div>
      <div class="overlay2">
        <label for="trigger2" class="overlay_trigger2"></label>
        <div class="About">
          <div class="Card">
            <label for="trigger2" class="close_button"><img src="../assets/pic/close.svg" class="peke"></label>
            <h2>About</h2>
            <About />
          </div>
        </div>
      </div>
      <div class="overlay3">
        <label for="trigger3" class="overlay_trigger3"></label>
        <div class="Skills">
          <div class="Card">
            <label for="trigger3" class="close_button"><img src="../assets/pic/close.svg" class="peke"></label>
            <h2>Skills</h2>
            <Skills />
          </div>
        </div>
      </div>
      <div class="overlay4">
        <label for="trigger4" class="overlay_trigger4"></label>
        <div class="Contact">
          <div class="Card">
            <label for="trigger4" class="close_button"><img src="../assets/pic/close.svg" class="peke"></label>
            <h2>Contact</h2>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// @ is an alias to /src
import Works from '@/components/Works.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Contact from '@/components/Contact.vue'
import isMobile from 'ismobilejs'


export default {
  name: 'home',
  components: {
    Works,
    About,
    Skills,
    Contact
  },
  data() {
    return {
      laptop: true,
      year: 0
    }
  },
  methods:{
    isLaptop() {
      var isSmartPhone = isMobile.phone;
      var isTablet = isMobile.tablet;
      if(isTablet){
        this.laptop = true
      } else {
        if(isSmartPhone) {
          this.laptop = false;
        }
      }
    },
    isNYD(){
      var month = new Date().getMonth()+1;
      var day = new Date().getDate();
      if(month == 1 && day == 1){
        window.location = "/NewYear"
        this.$forceUpdate();
      }
    },
    copyRight(){
      this.year = new Date().getFullYear();
    }
  },
  created: function() {
    this.isNYD();
    this.isLaptop();
    this.copyRight();
    this.$watch('url', function(now, old) {
    //例えば読み込み中をしらせるアニメーションなどを要素にかぶせて表示
    console.log(now + old);
});
  }
}
</script>
