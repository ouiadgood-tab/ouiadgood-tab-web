<template>
  <div>
    <!--<button class="btn btnEm" @click="showLoginModal">
      <img class="loginLogo logoEm" src="./email.jpg">
      Login with Email
    </button> -->
    <div class="modal" v-if="showModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h3>Login with Email</h3>
        <form>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Enter your email" v-model="email" @input="validateEmail" ref="emailInput">
              <span v-show="!validEmail && email.length > 0" class="help is-danger">Please enter a valid email address.</span>
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control password-input">
            <input class="input" :type="passwordVisible ? 'text' : 'password'" placeholder="Enter your password" v-model="password" @input="validatePassword" ref="passwordInput">
            <span class="icon is-small is-right password-toggle-icon" @click="togglePasswordVisibility">
              <i class="fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"></i>
            </span>
           </div>
          </div>
          <div class="field">
            <div class="button">
              <button class="btnSubmit" :disabled="!isValidForm" @click.prevent="submitLogin">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EmailLogin',
  data() {
    return {
      email: '',
      password: '',
      showModal: true,
      passwordVisible: false, // added property for password visibility
    };
  },
  computed: {
    validEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    },
    validPassword() {
      return this.password.length >= 8;
    },
    isValidForm() {
      return this.validEmail && this.validPassword;
    },
  },
  methods: {
    // showLoginModal() {
    //   this.email = localStorage.getItem('email') || '';
    //   this.password = localStorage.getItem('password') || '';
    //   this.showModal = true;
    // },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    validateEmail() {
      if (this.email.length === 0 || this.validEmail) {
        this.$refs.emailInput.setCustomValidity('');
      } else {
        this.$refs.emailInput.setCustomValidity('Please enter a valid email address.');
      }
    },
    validatePassword() {
      if (this.password.length === 0 || this.validPassword) {
        this.$refs.passwordInput.setCustomValidity('');
      } else {
        this.$refs.passwordInput.setCustomValidity('Please enter a password with at least 8 characters.');
      }
    },
    submitLogin() {
  if (this.validEmail && this.validPassword) {
    // Create a user object with the login details
    const user = {
      email: this.email,
      password: this.password,
    };

    // Make a POST request to the API endpoint
    axios.post('https://ouiadgood.onrender.com/users/add', user)
      .then(response => {
        // Save the request in LocalStorage
        localStorage.setItem('loginRequest', JSON.stringify(response.data));

        // Redirect to /home
        this.$router.push('/home');
      })
      .catch(error => {
        console.error(error);
      });
  }
}
  },
};
</script>


<style scoped>
.btn {
  text-align: center;
  border: none;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 2rem;
  transition: all 0.3s ease;
}
.loginLogo{
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}

.btnEm{
  background-color: #fff;
  color: grey;
  padding-left: 35px;
  padding-right: 35px;
}

.logoEm{
  margin-left: -16%;
}

.overlay {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: absolute;
  top: 38%;
  left: 47%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  width: 400px;
  border-radius: 5%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
}

.btn:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  transform: scale(1.1);
}


.field {
  margin-bottom: 10px;

}

.label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
}

.help {
  display: block;
  margin-top: 5px;
  color: #dc3545;
}

.btnSubmit {
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 40px;
  font-size: 20px;
  background-color: #13b0c0;
  color: #fff;
  cursor: pointer;
}

 /* Eye icon styles */
 .password-toggle-icon {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    color: #888;
    transition: color 0.3s;
  }

  .password-toggle-icon:hover {
    color: #333;
  }

  /* Password input styles */
  .password-input {
    padding-right: 0px; /* Increase padding to accommodate the icon */
    position: relative; /* Make the container relative for absolute positioning of the icon */
  }
</style>