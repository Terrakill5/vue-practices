<template>
  <section>
      <base-card>
      <h2>{{ fullName}}</h2>
    <h3> {{coach.desc}}</h3>
    <h3>{{ coach.rate }}/hour</h3>
    <div>
      <base-badge v-for="area in coach.especialization" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
         <base-button mode="outline" link :to="contactLink">Contact</base-button>
    </div>
   
      </base-card>
      
    

  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    props: ["id"],
    data() {
        return {
            coach: null,
        }
    },
    computed: {
        ...mapGetters(["coaches"]),
        fullName() {
      return this.coach.firstName + ' ' + this.coach.lastName;
    },
        
    },
    methods: {
        contactLink() {
      //return '/contact/' + this.id;
      return {
        path: 'contact',
        params: { id: this.id },
      }; 
    },
        obtenerCoach(){
          console.log(this.coaches);
             for (let i in this.coaches) {
                if (this.id === this.coaches[i].id) {
                    this.coach = this.coaches[i];
                }
            } 
            //this.coach = this.coaches[this.$route.params.id];
            //console.log(this.coach);
        }
    },
    created() {
        //console.log(this.$route.params);
        //console.log(this.id);
        this.obtenerCoach();
    },
    watch: {
        coachId() {
            this.obtenerCoach();
        }
    }
}
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>