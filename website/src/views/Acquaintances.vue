<template>
    <div class="acquaintances">
        <h1>Acquaintance’s websites</h1>
        <websites />
    </div>
</template>


<style lang="scss">
.acquaintances {
    width: 60%;
    height: 45%;
    margin: 21vh 20vw 0 20vw;

    h1 {
        font-size: 3vw;
        margin-left: 1%;
    }
    .swiper-slide {
        margin-left: 10%;
    }
}
@media only screen and (max-width:1220px){
    .acquaintances {
        width: 70%;
        height: 45%;
        margin: 21vh 15vw;
    }
}

</style>


<script>
// @ is an alias to /src
import websites from '@/components/WebSites.vue'

export default {
  name: 'acquaintances',
  components: {
    websites
  }
}
</script>