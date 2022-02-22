<template>
  <li>
    <h3>{{ firstName }} {{ lastName }}</h3>
    <p>{{ rate }}/hour</p>
    <p>{{ espec }}</p>
    <button>Contact</button>
    <router-link :to="memberLink">View Details</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'desc', 'rate', 'espec'],
  computed: {
    memberLink() {
      //console.log(this.id);
      //return "/coaches/" + this.id;
      return {
        name: 'coach',
        params: { id: this.id },
      };
    },
  },
};
</script>
