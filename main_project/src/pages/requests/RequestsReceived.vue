<template>
<base-card>
  <header>
    <h3>Request Received</h3>
  </header>
  <ul v-if="hayRequests">
    <request-item
      v-for="request in requests"
      :key="request.id"
      :id="request.id"
      :email="request.email"
      :text="request.text"
    ></request-item>
  </ul>
  <h3 v-else>No requests found.</h3>
</base-card>
</template>

<script>
import RequestItem from '../../components/RequestItem.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
  components: {
    RequestItem,
  },
  computed: {
      ...mapGetters(["requests", "hayRequests"]),
      
  },
  data() {
      return {

      }
  },
  methods: {
      async loadRequest() {
      const res = await axios.get(
        'https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/request.json'
      );
      const array = Object.values(res.data); //pasa todos los objetos en un array 
      //console.log(array);
      this.$store.dispatch('actualizarRequests',  array );
    },
  },
  mounted(){
      this.loadRequest();
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
