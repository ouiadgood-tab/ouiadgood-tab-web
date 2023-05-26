<template>
  <div>
    <button class="btn btnEm" @click="showLoginModal">
      <img class="loginLogo logoEm" src="./email.jpg">
      Login with Email
    </button>
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
            <div class="control">
              <input class="input" type="password" placeholder="Enter your password" v-model="password" @input="validatePassword" ref="passwordInput">
            </div>
          </div>
          <div class="field">
            <div class="button">
              <button class="btnSubmit" :disabled="!isValidForm" @click.prevent="submitLogin">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <button class="btn-cancel" aria-label="close" @click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmailLogin',
  data() {
    return {
      email: '',
      password: '',
      showModal: false,
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
    showLoginModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
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
        // perform login with email and password
        // Save email and password to local storage
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.password);
        
        // Redirect to /home
        this.$router.push('/home');
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
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
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

.btn-cancel {
  background-color: #dc3545;
  border-color: #dc3545;
  color: #fff;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  font-size: 15px;
  line-height: 1;
  padding: 0;
  position: absolute;
  top: 10px;
  right: 10px;
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
  width: 70px;
  height: 30px;
  font-size: 15px;
  background-color: green;
  color: #fff;
  cursor: pointer;
}

</style>