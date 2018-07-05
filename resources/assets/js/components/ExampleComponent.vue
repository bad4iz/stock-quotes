<template>
    <div class="container">
        <v-app>
            <v-content>

                <v-flex xs12 sm6 md3>
                    <v-text-field v-model="name"
                            label="имя"
                    ></v-text-field>
                </v-flex>


                <v-btn color="success" @click="send">Success</v-btn>


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
    }),
    methods: {
      send(){
        axios
          .get(`yahoo-finance/getname?name=${this.name}`)
          .then(response => {
            this.listCompany = response.data;
          });
      }
    },
    mounted() {
      console.log('Component mounted.')
    }
  }
</script>
