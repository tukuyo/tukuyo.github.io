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
                    this.works.push(...data);
                    this.loadNum += 5;
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

