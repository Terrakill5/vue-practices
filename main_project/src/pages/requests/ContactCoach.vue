<template>
  <form @submit.prevent="submitRequest">
    <div
      class="form-control"
      :class="{ errors: userEmailValidity === 'invalid' }"
    >
      <label for="email">Your Email</label>
      <input
        type="email"
        id="email"
        name="email"
        v-model.trim="enteredEmail"
        @blur="validateEmail"
      />
      <p v-if="userEmailValidity === 'invalid'">Please enter a valid Email!</p>
    </div>
    <div
      class="form-control"
      :class="{ errors: userTextValidity === 'invalid' }"
    >
      <label for="text">Your Commentary</label>
      <textarea rows="5" id="text" v-model.trim="enteredText"
        @blur="validateText"></textarea>
      <p v-if="userTextValidity === 'invalid'">
        Please enter a valid commentary!
      </p>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'; // at the start of your <script> tag, before you "export default ...
export default {
  props: ["id"],
    data() {
      return {
        enteredEmail: "",
        enteredText: "",
        userEmailValidity: "pending",
        userTextValidity: "pending",
      };
    },
    methods: {
      validacionEmail() {
      if (this.enteredEmail === '' || !this.enteredEmail.includes("@")) {
        this.userEmailValidity = 'invalid';
      } else {
        this.userEmailValidity = 'valid';
      }
      },
      validacionText() {
      if (this.enteredText === '') {
        this.userTextValidity = 'invalid';
      } else {
        this.userTextValidity = 'valid';
      }
      },
      submitRequest(){
        //console.log(this.$route.params.id);
        this.validacionEmail();
        this.validacionText();
        if (this.userEmailValidity === "valid" && this.userTextValidity === "valid") {
        axios.post(
          'https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/request.json',
          {
            id: new Date().toISOString(),
            email: this.enteredEmail,
            text: this.enteredText,
            coachId: this.$route.params.id,
          }
        );
        this.enteredEmail = '';
        this.enteredText = '';
        this.$router.replace("/coaches");
        }
      },
    },
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
