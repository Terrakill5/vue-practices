<template>
  <section>
    <h2>Register as a Coach</h2>
    <form @submit.prevent="submitCoach">
      <label for="name">Your First Name</label>
      <input type="text" id="name" name="name" v-model.trim="enteredName" />
      <label for="last">Your Last Name</label>
      <input type="text" id="last" name="last" v-model.trim="enteredLast" />
      <label for="desc">Your Description as Coach</label>
      <input type="text" id="desc" name="desc" v-model.trim="enteredDesc" />
      <label for="rate">Your Rate as Coach</label>
      <input type="text" id="rate" name="rate" v-model.trim="enteredRate" />
      <label for="espec">Your especializations</label>
      <input
        id="frontend"
        name="especial"
        type="checkbox"
        value="frontend"
        v-model="enteredEspec"
      />
      <label for="frontend">Frontend</label>
      <input
        id="backend"
        name="especial"
        type="checkbox"
        value="backend"
        v-model="enteredEspec"
      />
      <label for="backend">Backend</label>
      <input
        id="career"
        name="especial"
        type="checkbox"
        value="career"
        v-model="enteredEspec"
      />
      <label for="career">Career</label>
      <button>Save</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios'; // at the start of your <script> tag, before you "export default ..."
export default {
  data() {
    return {
      enteredName: '',
      enteredLast: '',
      enteredDesc: '',
      enteredRate: '',
      enteredEspec: [],
      validity: null,
    };
  },
  methods: {
    submitCoach() {
      axios.post(
        'https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/surveys.json',
        {
          id: new Date().toISOString(),
          firstName: this.enteredName,
          lastName: this.enteredLast,
          rate: this.enteredRate,
          desc: this.enteredDesc,
          especialization: this.enteredEspec,
        }
      );
      this.enteredName = '';
      this.enteredLast = '';
      this.enteredDesc = '';
      this.enteredRate = '';
      this.enteredEspec = [];
    },
  },
};
</script>

<style scoped>
.invalid input {
  border-color: red;
}
.invalid label {
  color: red;
}
</style>
