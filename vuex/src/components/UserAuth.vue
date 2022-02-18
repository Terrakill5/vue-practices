<template>
    <button @click="loggin" v-if="!isLoggin">Login</button>
    <button @click="loggin" v-else>Logout</button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["isLoggin"])
  },
  methods: {
      loggin() {
          this.$store.commit("loggin");
      }
  }
};

</script>