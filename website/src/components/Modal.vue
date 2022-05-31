<template>
  <div>
    <v-dialog v-model="dialog">
      <div>
        <v-toolbar dark color="#388E3C">
          <v-toolbar-title>詳細</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click="close">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card>
          <v-img :src="item.pic" height="300px" contain></v-img>

          <v-card-title class="text-center pb-0">
            <span class="headline">{{ item.name }}</span>
          </v-card-title>
          <div class="mx-3">
            <v-col class="pt-0">
              <v-chip class='mr-2' dark color="blue" small filter v-for="(name, index) in (item.used).split(',')" :key="index" >
                <v-icon left small>mdi-label</v-icon>
                {{ name }}
              </v-chip>
            </v-col>
          </div>
          <v-card-text>

            {{ item.detail }}
          </v-card-text>
          <v-card-text>
            制作期間: {{ item.term }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined rounded text>
              Download
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </div>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ['dialog', 'item'],
  methods: {
    close() {
      this.$emit("close", true);
    }
  }
};
</script>
