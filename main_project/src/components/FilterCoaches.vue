<template>
    <input
      checked="true"
      id="frontend"
      type="checkbox"
      @change="setFilter"
    />
    <label for="frontend">Frontend</label>
    <input
      checked="true"
      id="backend"
      type="checkbox"
      @change="setFilter"
    />
    <label for="backend">Backend</label>
    <input
      checked="true"
      id="career"
      type="checkbox"
      @change="setFilter"
    />
    <label for="career">Career</label>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  emits: ["change-filter"],
    data() {
        return {
            filters: {
              frontend: true,
              backend: true,
              career: true
            }
        };
        
    },
    computed: {
      ...mapGetters(["filtro"]),
    },
    methods: {
      setFilter(event) {
        const inputId = event.target.id;
        const isActive = event.target.checked;
        const updatedFilters = {
          ...this.filters,
          [inputId]: isActive
        };
        this.filters = updatedFilters;
        this.$emit("change-filter", updatedFilters);
      }
    }
}
</script>