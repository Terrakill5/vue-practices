<template>
  <ul>
    <print-resources
      v-for="storedResource in resources"
      :id="storedResource.id"
      :key="storedResource.id"
      :title="storedResource.title"
      :description="storedResource.description"
      :link="storedResource.link"
    >
    </print-resources>
  </ul>
</template>

<script>
import PrintResources from './PrintResources.vue';
export default {
  inject: ['resources'],
  components: {
    PrintResources,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
