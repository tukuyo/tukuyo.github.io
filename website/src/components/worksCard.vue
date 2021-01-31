<template>
  <div>
    <v-badge overlap :value="item.new" icon="mdi-star" color="green">
      <v-card width="250" height="360" @click="go(item.url)" elevation="6">
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
  </div>
</template>


<script>
export default {
  name: 'worksCard',
  props: ['translate','item'],
  methods: {
    go(url) {
      location.href = url;
    },
  }
};
</script>