<template>
  <section id="root">

    <div class="login-container">
      <div class="login-header">

        <img src="./oag.png" width="250" alt="">

        <h1>Sign in</h1>
        <p class="text">Watch Ads and Donate For Good Cause</p>
      </div>

      <form @submit.prevent="submitLogin" class="login-form">
        <div class="input-group">
          <input class="input" type="email" placeholder="Enter your email" v-model="email" @input="validateEmail"
            ref="emailInput" />

        </div>
        <span v-show="!validEmail && email.length > 0" class="help is-danger">Please enter a valid email address.</span>
        <div class="input-group">
          <input class="input" required :type="passwordVisible ? 'text' : 'password'" placeholder="Enter your password"
            v-model="password" @input="validatePassword" ref="passwordInput" />
          <span class="icon is-small is-right password-toggle-icon" @click="togglePasswordVisibility">
            <i class="fa" :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"></i>
          </span>
        </div>

        <span v-show="!validPassword && password.length > 0" class="help is-danger">Please enter a valid Paasword.</span>

        <div class="keep">
          <input type="checkbox" checked name="" id="">
          <span>Keep me signed in on this device</span>
        </div>


        <button type="submit" class="btnTab" :disabled="!isValidForm || isLoading">
          <span v-if="isLoading" class="fa fa-spinner fa-spin"></span>
          <span v-else>Sign in</span>
        </button>

        <div class="alt">
          <p class="alt-text">or Sign in with</p>
          <div class="alt-content">
            <GoogleLogin />
          </div>
        </div>
      </form>
    </div>



  </section>
</template>

<script>
import axios from "axios";
import GoogleLogin from "./GoogleLogin.vue";
import { toast } from 'vue3-toastify';

export default {
  name: "EmailLogin",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false,
      showModal: true,
      passwordVisible: false, // added property for password visibility
    };
  },
  computed: {
    validEmail() {
      return /\S+@\S+\.\S+/.test(this.email);
    },
    validPassword() {
      return this.password.length >= 3;
    },
    isValidForm() {
      return this.validEmail && this.validPassword;
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    validateEmail() {
      if (this.email.length === 0 || this.validEmail) {
        this.$refs.emailInput.setCustomValidity("");
      } else {
        this.$refs.emailInput.setCustomValidity(
          "Please enter a valid email address."
        );
      }
    },
    validatePassword() {
      if (this.password.length === 0 || this.validPassword) {
        this.$refs.passwordInput.setCustomValidity("");
      } else {
        this.$refs.passwordInput.setCustomValidity(
          "Please enter a password with at least 8 characters."
        );
      }
    },
    submitLogin() {
      if (this.validEmail && this.validPassword && !this.isLoading) {
        this.isLoading = true
        // Create a user object with the login details
        const user = {
          email: this.email,
          password: this.password,
        };
        // Make a POST request to the API endpoint
        axios
          .post("https://ouiadgood-lxzc.onrender.com/users/add", user)
          .then((response) => {
            // Save the request in LocalStorage

            localStorage.setItem("loginRequest", JSON.stringify(response.data));
            // Redirect to /home
            toast("Sign in Successfully!", {
              autoClose: 1000,
            }); // ToastOptions
            this.$router.push("/tab/home");
            this.isLoading = false
          })
          .catch(() => {
            this.isLoading = false
            toast("An Error Occured !", {
              autoClose: 1000,
            }); // ToastOptions
          });
      } else {
        this.isLoading = false
        return
      }
    },
  },
};
</script>

<style scoped>
#root {
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
}

.is-danger {
  color: red;
  font-weight: bold;
}

.keep {
  display: flex;
  gap: 10px;
  margin: 15px 0;
  align-items: center;
}

.keep input {
  transform: scale(1.3);
}

.login-container {
  border: 1px solid rgb(175, 175, 175);
  width: 600px;
  border-radius: 20px;
  padding: 30px;
  margin: auto;
}

.login-header {
  padding: 0 20px;
}

.login-container .text {
  padding: 15px 0 0 0;
}

.alt {
  padding: 20px 0 0 0;
}

.alt-text {
  text-align: center;
}

.login-header h1 {
  font-size: 2.4rem;
}

.login-form {
  padding: 20px;
}

.input-group {
  display: flex;
  position: relative;
  margin: 20px 0;
  border: 1px solid grey;
  padding: 10px 0;
  gap: 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
}

.input-group input {
  padding: 13px;
  border: none;
  outline: none;
  width: 100%;
  background: none;
}

.btnTab {
  width: 100%;
  border-radius: 10px;
  font-weight: bold;
  padding: 20px;
}

.btnTab:disabled {
  background-color: gray;
  pointer-events: none;
  opacity: .6;
}

/* Eye icon styles */
.password-toggle-icon {
  font-size: 14px !important;
  color: #888;
  margin: 0 15px;
  cursor: pointer;
  transition: color 0.3s;
}

.password-toggle-icon:hover {
  color: #333;
}

@media screen and (max-width:700px) {
  .login-container {
    width: 80vw !important;
  }
}
</style>
