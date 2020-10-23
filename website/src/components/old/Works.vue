<template>
    <div class="Product">
        <ul class="Product-list">
            <li v-for="item in works" v-bind:key="item.id">
                <a :href="item.url" v-if="item.url"></a>
                <div class="product">
                    <img :src="item.pic" class="back" >
                    <div class="detail1">
                        <h3>{{ item.name }}  <v-fa :icon="[item.prefix,item.icon]" v-if="item.prefix" /></h3>
                        <div class="detail2">
                            {{ item.detail }}    
                        </div>
                        <div class="detail2">{{ "使用：" + item.used }}</div>
                        <div class="detail2">制作期間：{{ item.term }} | 公開日：{{ item.date | date }}</div>
                    </div>
                </div>
            </li>
        </ul>

        <infinite-loading @infinite="infiniteHandler"></infinite-loading>

    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'

const api = "https://script.google.com/macros/s/AKfycbzMaJHkwQXEmEDNO4GNNvEZDBWWWca5ZoL_b697X27gf54J6g/exec"
export default {
    components: {
        InfiniteLoading
    },
    data() {
        return {
            works: [],
            loadNum: 0,
            loading: false
        }
    },
    methods: {
        infiniteHandler($state) {
            axios.get(api, {
                params: {
                    current: this.loadNum,
                    num: 5,
                }
            }).then(({ data }) => {
                if(data.length){
                    this.works.push(...data);
                    this.loadNum += data.length;
                    $state.loaded();
                } else {
                    $state.complete();
                }
            }).catch(() => {
                $state.complete();
            });
        },
    },
    filters: {
        date: function(tmp){
            var format = 'YYYY年MM月DD日';
            var date = new Date(tmp);
            format = format.replace(/YYYY/, date.getFullYear());
            format = format.replace(/MM/, date.getMonth() + 1);
            format = format.replace(/DD/, date.getDate());
            return format;
        },
    }
}
</script>

<style lang="scss" scoped>
* {
  overflow: hidden;
}

// Works
.Product {
height: 90%;
overflow: scroll;
  p {
    margin: 10px 0;
    text-align: center;
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
      a {
        text-decoration: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-indent: -999px;
        z-index: 2;
      }
    }
  }
}

.product {
  width: 100%;
  height: 100%;
  img {
    width: 200px;
    height: 180px;
    float: left;
  }
  h1 {
    padding: 8% 0;
    text-align: center;
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


@media only screen and (max-width:768px) {
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

</style>