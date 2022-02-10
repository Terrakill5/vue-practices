<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label for="">Age</label>
      <input type="tel" v-model="enteredAge" />
    </div>
    <div v-if="enteredName && enteredAge">
      <button>Add Data</button>
    </div>
  </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName: "",
            enteredAge: ""
        }
    },
    emits: ["add-data"],
    methods: {
    submitData() {
      this.$emit(
        "add-data",
        this.enteredName,
        this.enteredAge
      );
    },
  },
}
</script>