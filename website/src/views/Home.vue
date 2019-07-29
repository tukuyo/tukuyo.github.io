<template>
  <div class="home">
    <div v-if="laptop">
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
          <p>&copy;2019 tukuyo.</p>
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
              <h2>CONTACT</h2>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="sp">
      <div id="title" class="card"  data-0="opacity:1;" data-500="opacity:0;">
        <div class="job">学生 / エンジニア(仮)</div>
        <div class="img">
          <img src="pic/icon.png" alt="">
        </div>
        <div class="name">
          <div class="nickname">つくよ</div>
          <div class="yomi">Tukuyo</div>
        </div>
        <a id="scroll">
          <span></span>
          <span></span>
          <span></span>Scroll</a>
      </div>
      <div id="prof" class="card" data-0="top:100%;opacity:0;z-index:100;" data-500="top:0%;opacity:1;"
        data-1500="top:0%;opacity1" data-1600="top:0%;opacity:0;">
        <div class="about">About</div>
        <div class="name">
          <div class="nickname">Tukuyo</div>
        </div>
        <div class="text" data-10="opacity:0;" data-350="opacity:1;" data-700="opacity:1;display:block;"
          data-1000="opacity:0;display:none;">
          滋賀県生まれ 22歳
          <br>大阪の大学院在学中
          <br>
          <br>
          <h3>Hobby</h3>
          <br> 音楽鑑賞 プログラミング ゲーム
          <br> 国内旅行 ギター
          <br>
          <br>
          <h3>Mind</h3>
          <br> "とにかく楽しむ"
          <br>
          <br>
          <br>
        </div>
        <div class="text" data-1000="opacity:0;" data-1350="opacity:1;" data-1500="opacity:1;">
          <h3>Skills</h3>
          <br> 動画制作・プログラミング
          <br>
          <br> ・Often used
          <br> C++ ・ C#
          <br> Python ・ Swift
          <br>
          <br> ・Sometimes used
          <br> html ・ css ・ javascript
          <br> ruby ・ java
          <br>
          <br> ・Framework / GameEngine
          <br> vue.js ・ ruby on rails
          <br> django ・ flask
          <br> Unity ・ Unreal Engine
          <br><br><br>
          <p data-1100="opacity:0;" data-1200="opacity:1;">よろしくお願いします</p>
        </div>
      </div>
      <div id="works" class="card" data-1600="opacity:0;z-index:1;" data-1800="opacity:1;z-index:1;" data-2300="top:0%;"
        data-2500="top:-100%;">
        <div class="work">work</div>
        <ul class="list">
        </ul>
      </div>
      <div id="last" class="card" data-2400="opacity:0;z-index:0;" data-2600="opacity:1;z-index:0;">
        <div class="poe">天気予報士が明日雨だと伝えても，<br>貴方の明日は晴れますように．
          <p>&copy;2019 tukuyo</p>
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
      laptop: true
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
    }
  },
  created: function() {
        this.isNYD();
        this.isLaptop()
  }
}
</script>
