<template>
  <div class="signin">
    <div v-if="isLoading" class="loading">
      <img src="../asices/image/linkedin_loder.gif" alt="" />
    </div>
    <div v-else class="input-group container">
      <div class="text-center">
        <h1>
          Linked
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="#0A66C2"
            class="mercado-match"
            width="40"
            height="40"
            focusable="false"
          >
            <path
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path>
          </svg>
        </h1>
      </div>
      <form @submit.prevent="loginUser">
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          v-model="user.email"
          required
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Password"
          v-model="user.password"
          required
        />
        <button type="submit" class="btn-secondery">Sign in</button>
      </form>
      <div class="flex-or">
        <div class="border"></div>
        <div class="or">or</div>
        <div class="border"></div>
      </div>
      <button class="google-login mb-1" @click="loginWithGoogle">
        <img src="../asices/image/Google__logo.png" alt="Google Icon" />
        <span>Login with Google</span>
      </button>
      <p>New to linkedin?<nuxt-link to="/feed"> Join now</nuxt-link></p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import {} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      isLoading: false,
    };
  },
  methods: {
    async loginUser() {
      try {
        this.isLoading = true;
        await this.$store.dispatch("/login", {
          email: this.user.email,
          password: this.user.password,
        });
        this.$router.push("/signin");
      } catch (error) {
        alert(error);
        this.$router.push("/");
        this.isLoading = false;
      }
    },
    async loginWithGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        this.$router.push("/feed");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: auto;
}
.text-center {
  text-align: center;
}
.signin {
  background: #f3f2ef;
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
}
.signin .input-group {
  background: white !important;
  padding: 1rem 1.5rem;
  border-radius: 10px;
}
.signin .input-group input {
  display: block;
  width: 400px;
  outline: none;
  border: 1.5px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 1rem 0.6rem;
  margin-bottom: 0.7rem;
}
.signin .input-group input:hover {
  box-shadow: 0 0 5px #0a66c2;
}
.btn-secondery {
  cursor: pointer;
  width: 100%;
  background: #0a66c2;
  padding: 0.5rem;
  color: white;
  border-radius: 35px;
  letter-spacing: 0.2mm;
  padding: 1rem 0.6rem;
  font-size: 1.2rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.signin p {
  margin-top: 1rem;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
}
.signin a {
  color: #0a66c2;
}
.signin a:hover {
  text-decoration: underline;
}
.signin h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.7rem;
  color: #333;
  font-size: 2.3rem;
  font-weight: 800;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.flex-or {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.flex-or .border {
  width: 100%;
  height: 1px;
  background-color: #d2cfcf;
}
.flex-or .or {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  opacity: 0.6;
}
.google-login {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 35px;
  color: black;
  font-family: Roboto, HelveticaNeue, Arial, sans-serif;
  font-size: 14px;
  border: 1px solid #0a7dd4;
  cursor: pointer;
}

.google-login img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.google-login span {
  color: #0a7dd4;
  font-size: 1.1rem;
  display: inline-block;
  font-weight: 400;
}
</style>
