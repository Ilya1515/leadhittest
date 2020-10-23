<template>
  <div>
    <h1>LeadHit</h1>
    <form @submit.prevent="submit">
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">id сайта</label>
        <input class="form__input" required v-model="inputValue" v-model.trim="$v.name.$model" />
      </div>
      <div v-if="this.data === true">Неправильный id сайта</div>
      <div class="error" v-if="!$v.name.required">Обязательно для заполенения</div>
      <div class="error" v-if="!$v.name.minLength">
        id сайта должен содержать {{ $v.name.$params.minLength.min }} символа.
      </div>
      <button
        class="button"
        type="submit"
        @click="getData"
        :disabled="!$v.name.minLength"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
export default {
  
  data() {
    return {
      name: "",
      inputValue: "",
      submitStatus: null,
      data : null
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(24),
    },
  },
  methods: {
    async getData() {
      const URL = "https://track-api.leadhit.io/client/test_auth";
      let response = await fetch(URL, {
        headers: {
          "Api-Key": '5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo',
          "Leadhit-Site-Id": this.inputValue,
        },
      });
      const data = await response.json();
      if (data.message === 'ok') {
       localStorage.setItem('leadhit-site-id', '5f8475902b0be670555f1bb3');
       this.$router.push('/analytic')
       this.data = false
      }else{
        this.data = true
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
