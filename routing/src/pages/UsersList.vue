<template>
<button @click="confirmInput">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //do something
      this.$router.push("/teams");
    }
  },
  /* beforeRouteEnter(to, from, next) {
    console.log("UsersList Cmp beforeRouteEnter");
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) { //esto funciona mayormente para evitar perdida de datos al dejar algun componente
    console.log(to, from);
  } */
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>