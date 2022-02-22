<template>
  <section>
    <div>
      <router-link to="/register">Go to register as a Coach</router-link>
      <h2>Find your Coach</h2>
      <input
        id="frontend"
        name="especial"
        type="checkbox"
        value="frontend"
        v-model="especial"
      />
      <label for="frontend">Frontend</label>
      <input
        id="backend"
        name="especial"
        type="checkbox"
        value="backend"
        v-model="especial"
      />
      <label for="backend">Backend</label>
      <input
        id="career"
        name="especial"
        type="checkbox"
        value="career"
        v-model="especial"
      />
      <label for="career">Career</label>
    </div>
    <ul>
      <button @click="loadCoaches">Refresh</button>
      <coach-item
        v-for="coach in coaches"
        :key="coach.id"
        :id="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :description="coach.description"
        :rate="coach.rate"
        :espec="coach.especialization"
      ></coach-item>
    </ul>
  </section>
</template>

<script>
import CoachItem from '../components/CoachItem.vue';
import axios from 'axios';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      especial: [],
    };
  },
  components: {
    CoachItem,
  },
  computed: {
    ...mapGetters(["coaches"])
  },
  methods: {
   async loadCoaches() {
      const res = await axios.get(
        'https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/surveys.json'
      );
      //this.results = {...res.data};
      this.$store.commit("actualizarCoaches", {...res.data});
      console.log(this.coaches);
    },
  },
  mounted() {
    this.loadCoaches();
  },
};
</script>
