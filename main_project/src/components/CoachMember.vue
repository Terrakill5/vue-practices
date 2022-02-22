<template>
  <section>
    <h2>{{ coach }}</h2>
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
        
    },
    methods: {
        obtenerCoach(){
            this.coach = this.coaches[this.id];
            console.log(this.coach);
        }
    },
    created() {
        console.log(this.$route.params);
        console.log(this.id);
        this.obtenerCoach();
    },
    watch: {
        coachId() {
            this.obtenerCoach();
        }
    }
}
</script>