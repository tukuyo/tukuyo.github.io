<template>
  <div>
    <v-dialog v-model="dialog" @click:outside="close" max-width="1000">
      <v-card>
        <v-row class="ma-2">
          <v-container class="text-right mb-0 pb-0 pt-2" style="width: 100%;">
            <v-btn icon right @click="close" class="">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-container>
          <v-col class="pt-0" cols="16" sm="16" md="6" lg="6">
            <v-img :src="item.pic" height="300px" contain></v-img>
          </v-col>

          <v-col cols="16" sm="16" md="6" lg="6" class="pa-0 pt-2">
            <v-card-title class="text-center py-0">
              <span class="headline">{{ item.name }}</span>
            </v-card-title>
            <div class="mx-3">
              <v-col class="pt-0">
                <v-chip class='mr-2' dark color="blue" small filter v-for="(name, index) in (item.used).split(',')"
                  :key="index">
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
            <v-card-actions class="mb-5">
              <v-spacer></v-spacer>
              <template v-if="item.appstore_url != null && item.appstore_url != ''">
                <v-btn outlined rounded text >
                  App Store
                  <v-fa class="ma-2" :icon="[item.prefix,item.icon]" v-if="item.prefix" />
                </v-btn>
              </template>
              <template v-if="item.playstore_url != null && item.playstore_url != ''">
                <v-btn outlined rounded text>
                  Play Store
                  <v-fa class="ma-2" :icon="[item.prefix,item.icon]" v-if="item.prefix" />
                </v-btn>
              </template>
              <template v-if="item.github_url != null && item.github_url != ''">
                <v-btn outlined rounded text>
                  <v-fa class="ma-2" :icon="['fab','github']"/>
                  GitHub
                </v-btn>
              </template>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
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
