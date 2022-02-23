<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>{{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in espec" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="contactLink">Contact</base-button>
      <base-button link :to="memberLink">View Details</base-button>
    </div>
  </li>
</template>

<script>

export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'espec'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    memberLink() {
      //console.log(this.id);
      //return '/coaches/' + this.id;
       return {
        name: 'coach',
        params: { id: this.id },
      }; 
    },
    contactLink() {
      return '/contact/' + this.id;
      /* {
        name: 'contact',
        params: { id: this.id },
      }; */
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
