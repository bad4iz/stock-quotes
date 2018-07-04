<template>
    <div class="container">
        <v-app>
      <v-content>
        
           <v-flex xs12 sm6 md3>
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-flex>


        <v-btn color="success">Success</v-btn>
     </v-content>
    </v-app>
       
    </div>
</template>

<script>

// import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
// import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader

    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
