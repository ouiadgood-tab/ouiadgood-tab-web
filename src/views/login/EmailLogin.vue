<template>
  <div>
    <!--<button class="btn btnEm" @click="showLoginModal">
      <img class="loginLogo logoEm" src="./email.jpg">
      Login with Email
    </button> -->
    <div class="modal" v-if="showModal">
      <div class="modal-background"></div>
      <div class="modal-content">
        <h3 class="title">Login / Sign up with Email</h3>
        <form>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="Enter your email"
                v-model="email"
                @input="validateEmail"
                ref="emailInput"
              />
              <span
                v-show="!validEmail && email.length > 0"
                class="help is-danger"
                >Please enter a valid email address.</span
              >
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control password-input">
              <input
                class="input"
                :type="passwordVisible ? 'text' : 'password'"
                placeholder="Enter your password"
                v-model="password"
                @input="validatePassword"
                ref="passwordInput"
              />
              <span
                class="icon is-small is-right password-toggle-icon"
                @click="togglePasswordVisibility"
              >
                <i
                  class="fa"
                  :class="passwordVisible ? 'fa-eye-slash' : 'fa-eye'"
                ></i>
              </span>
            </div>
          </div>

          <GoogleLogin />

          <div class="field">
            <div class="button">
              <button
                class="btnTab"
                :disabled="!isValidForm"
                @click.prevent="submitLogin"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="terms">
        <p>By continuing, you are indicating that you accept our</p>
        <p><span>Terms of Service </span>and <span>Privacy Policy</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GoogleLogin from "./GoogleLogin.vue";

export default {
  name: "EmailLogin",
  components: {
    GoogleLogin,
  },
  data() {
    return {
      email: "",
      password: "",
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
      if (this.validEmail && this.validPassword) {
        // Create a user object with the login details
        const user = {
          email: this.email,
          password: this.password,
        };
        // Make a POST request to the API endpoint
        axios
          .post("https://ouiadgood.onrender.com/users/add", user)
          .then((response) => {
            // Save the request in LocalStorage

            localStorage.setItem("loginRequest", JSON.stringify(response.data));
            // Redirect to /home

            this.$router.push("/tab/home");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
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

.title {
  padding: 15px 0;
}

.loginLogo {
  width: 30px;
  height: 30px;
  margin-bottom: -5px;
}

.btnEm {
  background-color: #fff;
  color: grey;
  padding-left: 35px;
  padding-right: 35px;
}

.overlay {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  background-color: white;
  padding: 30px;
  max-width: 400px;
  margin: 10px auto;
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
  padding: 15px 5px !important;
  width: 90%;
}

.help {
  display: block;
  margin-top: 5px;
  color: #dc3545;
}

.btnTab {
  background-color: #13b0c0;
  color: #fff;
  padding: 12px 24px;
  margin: 10px 0;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.btnTab:hover {
  background-color: #14c3d6;
}

/* Eye icon styles */
.password-toggle-icon {
  font-size: 14px !important;
  color: #888;
  margin: 0 5px;
  cursor: pointer;
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
.terms {
  color: #292828;
  padding: 10px 0;
}
</style>
