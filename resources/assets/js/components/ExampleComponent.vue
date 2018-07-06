<template>
    <div class="text-xs-center">
        <v-app>
            <v-progress-linear
                    background-color="white"
                    :indeterminate="loadIndeterminate"></v-progress-linear>
            <v-content>

                <v-flex xs12 sm6 md3>
                    <v-text-field v-model="name"
                                  label="имя"
                    ></v-text-field>
                </v-flex>


                <v-btn  v-if="!loadIndeterminate"
                        color="success" @click="send">отправить</v-btn>

                <v-progress-circular
                        :indeterminate="loadIndeterminate"
                        v-if="loadIndeterminate"
                        :size="70"
                        :width="7"
                        color="purple"
                        indeterminate
                ></v-progress-circular>



                <v-list>
                    <v-list-tile
                            v-for="item in listCompany"
                            :key="item.symbol"
                            avatar
                            @click=""
                    >
                        <v-list-tile-avatar>
                            <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-action>
                            <v-icon v-if="item.icon" color="pink">star</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.symbol"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.name"></v-list-tile-sub-title>
                        </v-list-tile-content>


                    </v-list-tile>
                </v-list>
            </v-content>
        </v-app>

    </div>
</template>

<script>

  // import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
  // import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

  export default {
    data: () => ({
      name: '',
      listCompany: {},
      loadIndeterminate: false,
    }),
    methods: {
      send() {
        if (this.name.length > 3) {
        this.loadIndeterminate = true;
          axios
            .get(`yahoo-finance/getname?name=${this.name}`)
            .then(response => {
              this.listCompany = response.data;
              this.loadIndeterminate = false;
            });
        }
      }
    },
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>

<style lang="sass" scoped>
    .v-progress-circular
        margin: 1rem
</style>