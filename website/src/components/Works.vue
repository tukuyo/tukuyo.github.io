<template>
    <div class="Product">
        <ul class="Product-list">
            <li v-for="item in works" v-bind:key="item.id">
                <a :href="item.url"></a>
                <div class="product">
                    <img :src="item.pic" class="back" >
                    <div class="detail1">
                        <h3>{{ item.name }}</h3>
                        <div class="detail2">
                            {{ item.detail }}    
                        </div>
                        <div class="detail2">{{ "使用：" + item.used }}</div>
                        <div class="detail2">制作期間：{{ item.term }}</div>
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
            works: null,
            loadNum: 5,
            loading: false
        }
    },
    created() {
        fetch(api + "?current=0&num=5")
        .then(res => res.json())
        .then(
            result => {
                this.works = result;
            },
            error => {
                return error;
            },
        );
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
                    this.loadNum += 5;
                    this.works.push(...data);
                    $state.loaded();
                } else {
                    $state.complete();
                }
            }).catch(() => {
                $state.complete();
            });
        }
    }
}
</script>

