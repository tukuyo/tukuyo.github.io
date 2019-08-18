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
        <div class="cover" v-show="loading">
            <div class="loader">Loading</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            works: null,
            loadNum: 0,
            loading: false
        }
    },
    created() {
        fetch("https://script.google.com/macros/s/AKfycbzMaJHkwQXEmEDNO4GNNvEZDBWWWca5ZoL_b697X27gf54J6g/exec")
        .then(res => res.json())
        .then(
            result => {
                this.works = result
            },
            error => {
                return error;
            },
        );
    },
    methods: {
        load() {
            this.loadNum++;
            if(this.loadNum == this.works.length){
                this.loading = false;
            }
        }
    }
}
</script>

