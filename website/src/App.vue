<template>
  <div id="app">
      <router-view />
      <ul class="etc">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/privacy">Privacy Policy</router-link>
        </li>
      </ul>  

  </div>
</template>


<style lang="scss">
@charset "UTF-8";
@import url(https://fonts.googleapis.com/css?family=Pacifico);
@import url(https://fonts.googleapis.com/earlyaccess/notosansjp.css);
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans);
@import url(https://fonts.googleapis.com/css?family=Staatliches);

* {
  overflow: hidden;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  background-color: #16a085;
  min-height: 100vh;
  min-width: 100vw;
  font-family: 'Staatliches', cursive;
  background-image: url(./assets/pic/top.jpg);
  background-position: center center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

label {
  -ms-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
p {
    font-family: 'Staatliches', cursive;
}

#app {
  width: 100%;
  height: 100%;
}

.etc {
    position: fixed;
    margin: 0;
    padding: 0;
    bottom: 16px;
    right: 16px;
    z-index: 100;
    li {
      display: inline;
      padding: 5px;
      a, a:visited{
        color: #fff;
        text-decoration: none;
      }
    }
}

header h1 {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
  width: 100%;
  height: 150px;
  text-align: center;
  font-family: 'Pacifico', cursive;
  font-size: 4vw;
  color: #000;
  p {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
  }
}

input {
  display: none;
}

.wrap {
  position: relative;
  height: 93%;
}

.Card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #e6e6e6;
  box-shadow: 0 0 20px #ccc;
  overflow: hidden;
  font-family: 'Josefin Sans', 'Noto Sans JP', serif;
  h2 {
    font-size: 4vw;
    margin: 2% 2% 0 2%;
    padding: 15px 0 10px 0;
    border-bottom-style: groove;
  }
  .close_button {
    position: absolute;
    right: 15px;
    top: 15px;
    .peke {
      top: 14px;
      left: 16px;
      width: 25px;
      height: 25px;
    }
  }

  // Works
  .Product {
    height: 90%;
    overflow: scroll;
    p {
      margin: 5px 30%;
      height: 100px;
      text-align: center;
      overflow: auto;
      border: groove;
      border-width: 2px 0 2px 0;
    }
    ul {
      margin: 1% auto;
      padding: 0;
      width: 750px;
      li {
        position: relative;
        width: 720px;
        height: 180px;
        margin: 10px 15px 0px;
        list-style-type: none;
        display: inline-block;
        border: solid 2px #000;
        border-radius: 20px;
      }
    }
  }

  // プロフィール
  .Profile {
    height: 93%;
    overflow: scroll;

    .icon {
      margin: 5% 25%;
      text-align: center;

      .icon_img {
        width: 200px;
        height: 200px;
      }
    }
    
    .nickname,.yomi {
        text-align: center;
        letter-spacing: 0.4em;
        margin-bottom: 0.3em;
    }
    .detail {
      margin: 5% 25%;
      text-align: center;
      line-height: 50px;

      h3 {
        margin: 0;
        font-size: 3vw;
      }
    }
  }

  // スキル
  .sk {
    height: 93%;
    overflow: scroll;
    text-align: center;
    h1 {
      padding: 10px 0 10px 0;
      margin: 10px 0 10px 0;
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
}
.Contact {
    .Card {
        p {
            margin-top: 10%;
            margin-bottom: 10%;
            text-align: center;
        }
        img {
            width: 100px;
            height: 100px;
        }
        .icon_group{
            width: 73%;
            margin: 30px auto;
            text-align: center;
            a {
                img {
                    width: 100px;
                    height: 100px;
                    margin: 0 1vw 1vh 1vw;
                }

            }
        }
    }
}

.Product ul li a {
  text-decoration: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-indent: -999px;
  z-index: 2;
}

.product {
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 180px;
    float: left;
  }
}

.detail1 {
  float: left;
  margin: 10px 3.5%;
  width: 65%;
  h3 {
    padding: 5px 0 5px 0;
    border-bottom: dotted 2px #5757579a;
    margin: 0 0 5px 0;
  }
}

.detail2 {
  width: 100%;
  height: 100%;
  margin-bottom: 5px;
}


.hatena img {
  transform: scale(1.5);
  fill: #000;
}

.suzuri img {
  transform: scale(1.2);
}

.cover {
    position: relative;
    background-color: #000000a1;
    z-index: 100;
    width: 100%;
    height: 100%;;
}
.loader {
  top: 35%;
  left: 45%;
  margin: 100px auto;
  font-size: 25px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: absolute;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
@-webkit-keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}
@keyframes load5 {
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;
  }
}

/* PC laptop */

@media only screen and (min-width:769px) {
  header {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 2;

    .nav-items {
      list-style: none;
    }

    .navigation .nav-items .nav-item {
      position: absolute;
      z-index: 1;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        text-decoration: none;

        label {
          display: block;
          color: #FFFFFF;
          text-transform: uppercase;
          font-size: 20px;
          letter-spacing: 1.33px;
          text-align: center;
          line-height: calc(30/16);
          transform: translateY(0);
          transition: transform 0.3s ease;
          text-shadow: 1px 1px 5px #000;
        }
      }
    }
    .navigation .nav-items {
      .nav-item:nth-child(1) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        a:before {
          content: '';
          margin-bottom: 15px;
          width: 16px;
          height: 8px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxNiA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4xICg2NzA0OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLinI3wn4+7LURlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lX0RlZmF1bHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTIuMDAwMDAwLCAtNDguMDAwMDAwKSIgZmlsbD0iI0ZGRkZGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03OTkuOTQ4ODc0LDU1Ljk5ODQyNDYgQzc5OS43Mzc1MTcsNTUuOTg3OTI3MSA3OTkuNTM2NjE0LDU1LjkwNzIwNCA3OTkuMzgwODA3LDU1Ljc3MDE3NTEgTDc5Mi4yOTEzMzIsNDkuNTA5NjIyNiBDNzkyLjA1MjgzNyw0OS4yOTc5OTgxIDc5MS45NTA0ODEsNDguOTgwNzIzMSA3OTIuMDIyODIxLDQ4LjY3NzMyMTUgQzc5Mi4wOTUxNjIsNDguMzczOTIgNzkyLjMzMTIwOSw0OC4xMzA0OTAyIDc5Mi42NDIwMzgsNDguMDM4NzM3IEM3OTIuOTUyODY4LDQ3Ljk0Njk4MzggNzkzLjI5MTI1Myw0OC4wMjA4NDgxIDc5My41Mjk3MTgsNDguMjMyNTAzNyBMODAwLDUzLjk0NDE3OTEgTDgwNi40NzAyODIsNDguMjMyNTAzNyBDODA2LjcwODc0Nyw0OC4wMjA4NDgxIDgwNy4wNDcxMzIsNDcuOTQ2OTgzOCA4MDcuMzU3OTYyLDQ4LjAzODczNyBDODA3LjY2ODc5MSw0OC4xMzA0OTAyIDgwNy45MDQ4MzgsNDguMzczOTIgODA3Ljk3NzE3OSw0OC42NzczMjE1IEM4MDguMDQ5NTE5LDQ4Ljk4MDcyMzEgODA3Ljk0NzE2Myw0OS4yOTc5OTgxIDgwNy43MDg2NjgsNDkuNTA5NjIyNiBMODAwLjYxOTE5Myw1NS43NzAxNzUxIEM4MDAuNDM3NDU0LDU1LjkzMDIzMTggODAwLjE5NTQ1LDU2LjAxMjYzNiA3OTkuOTQ4ODc0LDU1Ljk5ODQyNDYgWiIgaWQ9IlBhdGgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgwMC4wMDAwMDAsIDUyLjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtODAwLjAwMDAwMCwgLTUyLjAwMDAwMCkgIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }
        a:hover:before {
          transform: translateY(-2.5px);
        }
        a:hover label {
          transform: translateY(-5px);
        }
      }
      .nav-item:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        left: auto;
        right: 0;

        a {
          transform: rotate(270deg);
        }
        a:after {
          content: '';
          margin-top: 15px;
          width: 16px;
          height: 8px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxNiA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4xICg2NzA0OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLinI3wn4+7LURlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lX0RlZmF1bHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTIuMDAwMDAwLCAtOTc2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNzk5Ljk0ODg3NCw5ODMuOTk4NDI1IEM3OTkuNzM3NTE3LDk4My45ODc5MjcgNzk5LjUzNjYxNCw5ODMuOTA3MjA0IDc5OS4zODA4MDcsOTgzLjc3MDE3NSBMNzkyLjI5MTMzMiw5NzcuNTA5NjIzIEM3OTIuMDUyODM3LDk3Ny4yOTc5OTggNzkxLjk1MDQ4MSw5NzYuOTgwNzIzIDc5Mi4wMjI4MjEsOTc2LjY3NzMyMiBDNzkyLjA5NTE2Miw5NzYuMzczOTIgNzkyLjMzMTIwOSw5NzYuMTMwNDkgNzkyLjY0MjAzOCw5NzYuMDM4NzM3IEM3OTIuOTUyODY4LDk3NS45NDY5ODQgNzkzLjI5MTI1Myw5NzYuMDIwODQ4IDc5My41Mjk3MTgsOTc2LjIzMjUwNCBMODAwLDk4MS45NDQxNzkgTDgwNi40NzAyODIsOTc2LjIzMjUwNCBDODA2LjcwODc0Nyw5NzYuMDIwODQ4IDgwNy4wNDcxMzIsOTc1Ljk0Njk4NCA4MDcuMzU3OTYyLDk3Ni4wMzg3MzcgQzgwNy42Njg3OTEsOTc2LjEzMDQ5IDgwNy45MDQ4MzgsOTc2LjM3MzkyIDgwNy45NzcxNzksOTc2LjY3NzMyMiBDODA4LjA0OTUxOSw5NzYuOTgwNzIzIDgwNy45NDcxNjMsOTc3LjI5Nzk5OCA4MDcuNzA4NjY4LDk3Ny41MDk2MjMgTDgwMC42MTkxOTMsOTgzLjc3MDE3NSBDODAwLjQzNzQ1NCw5ODMuOTMwMjMyIDgwMC4xOTU0NSw5ODQuMDEyNjM2IDc5OS45NDg4NzQsOTgzLjk5ODQyNSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }
        a:hover:after {
          transform: translateY(2.5px);
        }
        a:hover label {
          transform: translateY(5px);
        }
      }
      .nav-item:nth-child(3) {
        top: auto;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        a:after {
          content: '';
          margin-top: 15px;
          width: 16px;
          height: 8px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxNiA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4xICg2NzA0OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLinI3wn4+7LURlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lX0RlZmF1bHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTIuMDAwMDAwLCAtOTc2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNzk5Ljk0ODg3NCw5ODMuOTk4NDI1IEM3OTkuNzM3NTE3LDk4My45ODc5MjcgNzk5LjUzNjYxNCw5ODMuOTA3MjA0IDc5OS4zODA4MDcsOTgzLjc3MDE3NSBMNzkyLjI5MTMzMiw5NzcuNTA5NjIzIEM3OTIuMDUyODM3LDk3Ny4yOTc5OTggNzkxLjk1MDQ4MSw5NzYuOTgwNzIzIDc5Mi4wMjI4MjEsOTc2LjY3NzMyMiBDNzkyLjA5NTE2Miw5NzYuMzczOTIgNzkyLjMzMTIwOSw5NzYuMTMwNDkgNzkyLjY0MjAzOCw5NzYuMDM4NzM3IEM3OTIuOTUyODY4LDk3NS45NDY5ODQgNzkzLjI5MTI1Myw5NzYuMDIwODQ4IDc5My41Mjk3MTgsOTc2LjIzMjUwNCBMODAwLDk4MS45NDQxNzkgTDgwNi40NzAyODIsOTc2LjIzMjUwNCBDODA2LjcwODc0Nyw5NzYuMDIwODQ4IDgwNy4wNDcxMzIsOTc1Ljk0Njk4NCA4MDcuMzU3OTYyLDk3Ni4wMzg3MzcgQzgwNy42Njg3OTEsOTc2LjEzMDQ5IDgwNy45MDQ4MzgsOTc2LjM3MzkyIDgwNy45NzcxNzksOTc2LjY3NzMyMiBDODA4LjA0OTUxOSw5NzYuOTgwNzIzIDgwNy45NDcxNjMsOTc3LjI5Nzk5OCA4MDcuNzA4NjY4LDk3Ny41MDk2MjMgTDgwMC42MTkxOTMsOTgzLjc3MDE3NSBDODAwLjQzNzQ1NCw5ODMuOTMwMjMyIDgwMC4xOTU0NSw5ODQuMDEyNjM2IDc5OS45NDg4NzQsOTgzLjk5ODQyNSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }
        a:hover:after {
          transform: translateY(2.5px);
        }
        a:hover label {
          transform: translateY(5px);
        }
      }

      .nav-item:nth-child(4) {
        top: 50%;
        left: -10px;
        transform: translateY(-50%);
        a {
          transform: rotate(90deg);
        }
        a:after {
          content: '';
          margin-top: 15px;
          width: 16px;
          height: 8px;
          background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCAxNiA4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1Mi4xICg2NzA0OCkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+UGF0aDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSLinI3wn4+7LURlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJIb21lX0RlZmF1bHQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03OTIuMDAwMDAwLCAtOTc2LjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICA8cGF0aCBkPSJNNzk5Ljk0ODg3NCw5ODMuOTk4NDI1IEM3OTkuNzM3NTE3LDk4My45ODc5MjcgNzk5LjUzNjYxNCw5ODMuOTA3MjA0IDc5OS4zODA4MDcsOTgzLjc3MDE3NSBMNzkyLjI5MTMzMiw5NzcuNTA5NjIzIEM3OTIuMDUyODM3LDk3Ny4yOTc5OTggNzkxLjk1MDQ4MSw5NzYuOTgwNzIzIDc5Mi4wMjI4MjEsOTc2LjY3NzMyMiBDNzkyLjA5NTE2Miw5NzYuMzczOTIgNzkyLjMzMTIwOSw5NzYuMTMwNDkgNzkyLjY0MjAzOCw5NzYuMDM4NzM3IEM3OTIuOTUyODY4LDk3NS45NDY5ODQgNzkzLjI5MTI1Myw5NzYuMDIwODQ4IDc5My41Mjk3MTgsOTc2LjIzMjUwNCBMODAwLDk4MS45NDQxNzkgTDgwNi40NzAyODIsOTc2LjIzMjUwNCBDODA2LjcwODc0Nyw5NzYuMDIwODQ4IDgwNy4wNDcxMzIsOTc1Ljk0Njk4NCA4MDcuMzU3OTYyLDk3Ni4wMzg3MzcgQzgwNy42Njg3OTEsOTc2LjEzMDQ5IDgwNy45MDQ4MzgsOTc2LjM3MzkyIDgwNy45NzcxNzksOTc2LjY3NzMyMiBDODA4LjA0OTUxOSw5NzYuOTgwNzIzIDgwNy45NDcxNjMsOTc3LjI5Nzk5OCA4MDcuNzA4NjY4LDk3Ny41MDk2MjMgTDgwMC42MTkxOTMsOTgzLjc3MDE3NSBDODAwLjQzNzQ1NCw5ODMuOTMwMjMyIDgwMC4xOTU0NSw5ODQuMDEyNjM2IDc5OS45NDg4NzQsOTgzLjk5ODQyNSBaIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transform: translateY(0);
          transition: transform 0.3s ease;
        }
        a:hover:after {
          transform: translateY(2.5px);
        }
        a:hover label {
          transform: translateY(5px);
        }
      }
    }
  }
  .Card h2 {
      font-family: 'Josefin Sans', 'Noto Sans JP', serif;
      font-size: 50px;
      margin: 2% 2% 0 2%;
      padding: 15px 0 10px 0;
  }
  .sp {
    display: none;
  }

  .wrap .overlay1, .wrap .overlay2, .wrap .overlay3, .wrap .overlay4 {
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
  }

  .overlay_trigger1, .overlay_trigger2, .overlay_trigger3, .overlay_trigger4 {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .wrap #trigger1:checked~.overlay1 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger1:checked~.overlay1 .Works {
    transform: translateY(5%);
  }

  .wrap #trigger2:checked~.overlay2 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger2:checked~.overlay2 .About {
    transform: translate(0%, 5%);
  }

  .wrap #trigger3:checked~.overlay3 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger3:checked~.overlay3 .Skills {
    transform: translateY(5%);
  }

  .wrap #trigger4:checked~.overlay4 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger4:checked~.overlay4 .Contact {
    transform: translate(0, 5%);
  }

  .Works {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateY(-100%);
    transition: 0.2s;
  }

  .About {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateX(100%);
    transition: 0.2s;
  }

  .Skills {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateY(100%);
    transition: 0.2s;
  }

  .Contact {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateX(-100%);
    transition: 0.2s;
  }

}

/* smartphone */
@media only screen and (max-width:768px) {
  html, body {
      margin: 0;
      padding: 0;
      height: 100%;
      letter-spacing: 1px;
      font-family: 'Josefin Sans','Noto Sans JP', serif;
      overflow: hidden;
  }
  
  body {
    background-image: none;
    background-color: #fff;
    background: linear-gradient(45deg, #6cff73, #fff66c, #ffa36c);
    background-size: 600% 600%;
    animation: AnimationName 10s ease infinite;
  }

  @keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }

  header {
    .navigation {
      .nav-items {
        position: absolute;
        text-align: center;
        width: 100%;
        padding: 0;
        top: 50%;
        .nav-item {
          padding-bottom: 10px;
        }
      }
    }
    h1 {
      font-size: 20px;
      z-index: -1;
      p {
        font-size: 10px;
      }
    }
  }

  .Card {
    h1 {
      font-size: 6vw;
    }
    h2 {
      font-size: 6vw;
      padding-left: 15px;
    }
    div {
      p {
        font-size: 1.5vh;
      }
    }
    .group {
      h2 {
        font-size: 5vw;
        padding-left: 0;
      }
    }
    .Profile {
      .icon {
        .icon_img {
          width: 80%;
          height: 20%;
        }
      }
      .detail {
        margin: 5% 15%;
        p {
          line-height: 8vw;
        }
        h3 {
          font-size: 5vw;
        }
      }
    }
    .Product {
      width: 90%;
      position: relative;
      margin: 2% auto;
      ul {
        width:100%;
        position: absolute;
        margin: 2% auto;
        li {
          width: 90%;
          height: 100%;
          text-align: center;
          margin: 5px 5%;
          .product {
            img {
              width: 100%;
              height: 60%;
            }
            .detail1 {
              width:93%;
              h3 {
                padding-top: 10px;
              }
            }
          }
        }
      }
    }

  }

  .wrap .overlay1, .wrap .overlay2, .wrap .overlay3, .wrap .overlay4 {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.5s, transform 0s 0.5s;
    transform: scale(0);
  }

  .overlay_trigger1, .overlay_trigger2, .overlay_trigger3, .overlay_trigger4 {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .wrap #trigger1:checked~.overlay1 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger1:checked~.overlay1 .Works {
    transform: translateY(5%);
  }

  .wrap #trigger2:checked~.overlay2 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger2:checked~.overlay2 .About {
    transform: translate(0%, 5%);
  }

  .wrap #trigger3:checked~.overlay3 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger3:checked~.overlay3 .Skills {
    transform: translateY(5%);
  }

  .wrap #trigger4:checked~.overlay4 {
    opacity: 1;
    transform: scale(1);
    transition: opacity 0.5s;
  }

  .wrap #trigger4:checked~.overlay4 .Contact {
    transform: translate(0, 5%);
  }

  .Works {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateY(-100%);
    transition: 0.2s;
  }

  .About {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateX(100%);
    transition: 0.2s;
  }

  .Skills {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateY(100%);
    transition: 0.2s;
  }

  .Contact {
    align-self: flex-start;
    width: 90%;
    height: 90%;
    box-sizing: border-box;
    line-height: 1.4em;
    transform: translateX(-100%);
    transition: 0.2s;
  }

  .etc {
    bottom: 16px;
    left: 19vw;
    z-index: 100;
    li {
      a, a:visited{
        font-size: 1.5vh;
      }
    }
  }
}

</style>


