<template>
    <input
      checked="true"
      id="frontend"
      name="especial"
      type="checkbox"
      value="frontend"
      v-model="especial"
    />
    <label for="frontend">Frontend</label>
    <input
      checked="true"
      id="backend"
      name="especial"
      type="checkbox"
      value="backend"
      v-model="especial"
    />
    <label for="backend">Backend</label>
    <input
      checked="true"
      id="career"
      name="especial"
      type="checkbox"
      value="career"
      v-model="especial"
    />
    <label for="career">Career</label>
</template>

<script>
export default {

    data() {
        return {
            especial: ["career","frontend","backend"],
        }
        
    },
    watch: {
        especial(val) {
            this.especial = val;
            //this.$store.commit("actualizarFiltro", this.especial);
            console.log(this.especial);
            
        }
    }
}
</script>