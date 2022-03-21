<template>
  <section>
    <h2>Register as a Coach</h2>
    <form @submit.prevent="submitCoach">
      <div
        class="form-control"
        :class="{ invalid: userNameValidity === 'invalid' }"
      >
        <label for="name">Your First Name</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model.trim="enteredName"
          @blur="validateInput"
        />
        <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
      </div>

      <div
        class="form-control"
        :class="{ invalid: userLastValidity === 'invalid' }"
      >
        <label for="last">Your Last Name</label>
        <input type="text" id="last" name="last" v-model.trim="enteredLast" />
        <p v-if="userLastValidity === 'invalid'">
          Please enter a valid last name!
        </p>
      </div>

      <label for="desc">Your Description as Coach</label>
      <input type="text" id="desc" name="desc" v-model.trim="enteredDesc" />

      <div
        class="form-control"
        :class="{ invalid: userRateValidity === 'invalid' }"
      >
        <label for="rate">Your Rate as Coach</label>
        <input type="number" id="rate" name="rate" v-model.trim="enteredRate" />
        <p v-if="userRateValidity === 'invalid'">Please enter a valid rate!</p>
      </div>

      <div
        class="form-control"
        :class="{ invalid: userEspecValidity === 'invalid' }"
      >
        <label for="espec">Your especializations</label> <br />
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
        <p v-if="userEspecValidity === 'invalid'">
          Please check any especialization!
        </p>
      </div>
      <base-button mode="outline">Save</base-button>
    </form>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
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
      userNameValidity: 'pending',
      userLastValidity: 'pending',
      userRateValidity: 'pending',
      userEspecValidity: 'pending',
    };
  },
  computed: {
    ...mapGetters("auth",['userId', 'token']),
  },
  methods: {
    validacionNombre() {
      if (this.enteredName === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    },
    validacionApe() {
      if (this.enteredLast === '') {
        this.userLastValidity = 'invalid';
      } else {
        this.userLastValidity = 'valid';
      }
    },
    validacionRate() {
      if (this.enteredRate > 0 && this.enteredRate < 1000) {
        this.userRateValidity = 'valid';
      } else {
        this.userRateValidity = 'invalid';
      }
    },
    validacionEspec() {
      if (this.enteredEspec && this.enteredEspec.length > 0) {
        this.userEspecValidity = 'valid';
      } else {
        this.userEspecValidity = 'invalid';
      }
    },
    submitCoach() {
      this.validacionNombre();
      this.validacionApe();
      this.validacionRate();
      this.validacionEspec();
      //console.log("este es el token" + this.token);
      if (
        this.userNameValidity === 'valid' &&
        this.userLastValidity === 'valid' &&
        this.userRateValidity === 'valid' &&
        this.userEspecValidity === 'valid'
      ) {
        axios.post(
          `https://vue-http-demo-ce2b5-default-rtdb.firebaseio.com/surveys/${this.userId}.json?auth=` +
            this.token,
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
        this.enteredEspec = null;
        this.$router.replace('/coaches');
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color: red;
}
label {
  font-weight: bold;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
select {
  width: auto;
}
input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
