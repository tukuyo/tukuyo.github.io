<template>
    <div class="sk">
      <p>使用したことのあるもの，勉強中一覧</p>
      <h1>Programming Languages</h1>
      <div class="group">
        <h2>Often used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/cpp.svg" alt="CPP">
          <img src="../../assets/pic/cs.svg" alt="">
          <img src="../../assets/pic/python.svg" alt="Python">
          <img src="../../assets/pic/swift.svg" alt="swift">
        </div>
      </div>
      <div class="group">
        <h2>Sometimes used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/html.svg" alt="html">
          <img src="../../assets/pic/css.svg" alt="css">
          <img src="../../assets/pic/javascript.svg" alt="jabascript">
          <img src="../../assets/pic/ruby.svg" alt="ruby">
          <img src="../../assets/pic/java.svg" alt="java">
        </div>
      </div>
      <div class="group">
        <h2>Previously used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/c.svg" alt="C">
        </div>
      </div>
      <h1>Framework</h1>
      <div class="group">
        <h2>Often used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/vue.svg" alt="">
          <img src="../../assets/pic/flask.svg" alt="">
        </div>
      </div>
      <div class="group">
        <h2>Previously used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/rails.svg" alt="">
          <img src="../../assets/pic/django.svg" alt="">
        </div>
      </div>
      <h1>GameEngine</h1>
      <div class="group">
        <h2>Often used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/unity.svg" alt="unity">
        </div>
      </div>
      <div class="group">
        <h2>Sometimes used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/UnrealEngine.svg" alt="unrealengin">
        </div>
      </div>
      <h1>SQL</h1>
      <div class="group">
        <div class="icon_group">
          <img src="../../assets/pic/sqlite.svg" alt="unity">
        </div>
      </div>
      <h1>OS</h1>
      <div class="group">
        <h2>Often used</h2>
        <div class="icon_group">
          <img src="../../assets/pic/windows.svg" alt="windows">
          <img src="../../assets/pic/macos.svg" alt="mac">
          <img src="../../assets/pic/centos.svg" alt="centos">
        </div>
      </div>
  </div>
</template>


<style lang="scss" scoped>
// スキル
.sk {
  height: 93%;
  overflow: scroll;
  text-align: center;
  h1 {
    padding: 10px 0 10px 0;
    margin: 10px 10% 10px 10%;
    width: 80%;
    border-bottom: dotted 3px #0e0e0e;
  }
  h2 {
    font-size: 25px;
    padding-top: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;   
  }
  h3 {
    font-size: 20px;
    margin-top: 0px;
    padding-top: 0px;
    margin-bottom: 10px;
  }

  .group {
    text-align: center;
    margin-bottom: 3%;
  }
  .icon_group {
    margin: 0 20%;
    img {
      width: 80px;
      height: 80px;
      margin-right: 3%;
      margin-bottom: 10px;
    }
  }
}
</style>