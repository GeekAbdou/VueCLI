<template>
  <section class="login-form">
    <div class="container">
      <form action="">
        <div class="login-form__email">
          <input
            class="login-form__email--email-input"
            type="text"
            placeholder="Email"
            id="email"
          />
          <p>Your email address</p>
        </div>

        <div class="login-form__password">
          <input
            class="login-form__password--password-input"
            :type="fieldType"
            placeholder="Your Password"
          />

          <fa
            :icon="['fas', 'eye-slash']"
            @click="showPassword"
            v-if="fieldType == 'password'"
          />
          <fa
            :icon="['fas', 'eye']"
            @click="hidePassword"
            v-if="fieldType == 'text'"
          />
          <p>Your password</p>
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  name: "passwordToggle",

  data() {
    return {
      fieldType: "password",
    };
  },

  methods: {
    showPassword() {
      this.fieldType = "text";
    },
    hidePassword() {
      this.fieldType = "password";
    },
  },
};
</script>
<style scoped lang="scss">
.login-form {
  border: 1px solid rgb(90, 168, 231);

  .login-form__email,
  .login-form__password {
    padding-bottom: 10px;
  }

  input {
    width: 250px;
    border: none;
    padding-bottom: 10px;
    border-bottom: 2px solid rgb(173, 173, 173);
    transition: 0.3s;
  }

  input:focus {
    width: 250px;
    outline: none;
    width: 250px;
    border-bottom: 2px solid rgb(29, 103, 201);
    padding-left: 10px;
  }

  p {
    padding-top: 10px;
    color: rgb(148, 148, 148);
  }
}
</style>
