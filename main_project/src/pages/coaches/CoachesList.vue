<template>
<base-dialog :show="!!error" title="An error occurred!" @close="handleError">
<p>{{ error }}</p>
</base-dialog>
  <section>
      <h2>Find your Coach</h2>
      <filter-coaches @change-filter="setFilters"></filter-coaches>
    
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button
          mode="outline"
          @click="loadCoaches"
          >Refresh</base-button
        >
        <base-button link mode="a" to="/register">
          Go to register as a Coach
        </base-button>
        
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hayCoachesAca">
        <coach-item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :rate="coach.rate"
          :espec="coach.especialization"
        ></coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/CoachItem.vue';
import axios from 'axios';
import { mapGetters } from 'vuex';
import FilterCoaches from '../../components/FilterCoaches.vue';

export default {
  data() {
    return {
      error: null,
      isLoading: false,
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  components: {
    CoachItem,
    FilterCoaches,
  },
  computed: {
    ...mapGetters(['coaches', 'hayCoaches', "filtro"]),
    hayCoachesAca(){
      return !this.isLoading && this.hayCoaches
    },
    filteredCoaches() {
      return this.coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.especialization.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.especialization.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.especialization.includes("career")) {
          return true;
        }
        return false;
      })
    }
  },
  methods: {
    async loadCoaches() {
      this.isLoading = true;
      try {
        const res = await axios.get(
        'https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/surveys.json'
      );
      const array = Object.values(res.data);
      this.$store.dispatch('actualizarCoaches',  array );
      } catch (error) {
        this.error = error.message || "something went wrong";
      }
      
      //console.dir(res);
      /* if (res.statusText !== "OK") {
        const error = new Error(res.statusText || "Failed to fetch!");
        throw error;
      } */
      
      this.isLoading = false;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    handleError() {
      this.error = null;
    }
  },
  mounted() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
