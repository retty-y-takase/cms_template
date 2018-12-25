<template>
  <div id="app">
    <layout>
      <div>
        <h1>index</h1>
        <login-form />
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from '../../components/Layout.vue'
import LoginForm from './components/LoginForm.vue'

export default {
  name: 'app',
  components: {
    Layout,
    LoginForm
  }
}
</script>

<style lang="scss">

</style>
