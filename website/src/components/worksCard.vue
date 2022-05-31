<template>
  <div>
    <v-badge overlap :value="item.new" icon="mdi-star" color="green">
      <v-card width="250" height="360" @click="show()" elevation="6">
      <v-img :src="item.pic" height="250"></v-img>

      <v-divider></v-divider>
      <v-card-text>
        <h2 class="title" v-if="!translate">
          {{ item.name }}
        </h2>
        <h2 class="title" v-if="translate">
          {{ item.name_EN }}
        </h2>
        <v-fa class="title" :icon="[item.prefix,item.icon]" v-if="item.prefix" />
      </v-card-text>
      </v-card>
    </v-badge>

    <Modal :dialog="isOpen" :item="item" @close='hide' />
  </div>
</template>


<script>
import Modal from '@/components/Modal.vue';

export default {
  name: 'worksCard',
  props: ['translate','item'],
  components: {Modal},
  methods: {
    show() {
      this.isOpen = !this.isOpen;
    },
    hide() {
      this.isOpen = !this.isOpen;
    },
    go(url) {
      location.href = url;
    },
  },
  data() {
    return {
      isOpen: false,
    } 
  },
};
</script>