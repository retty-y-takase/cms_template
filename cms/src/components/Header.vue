<template>
  <header>
    <h1>CMS TEMPLATE MANAGEMENT SYSTEM</h1>
    <ul v-if="isLogined">
      <li>
        <a href="">
          <img src="../assets/logo.png" alt="icon">
          USER NAME
        </a>
      </li>
      <li>
        <a href="">
          GLOBAL MENU
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isLogined() {
      return true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  height: 48px;
  background: #f1f1f1;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  box-shadow: 0 1px 3px -2px #666;

  h1 {
    margin: 0;
    padding: 4px 8px;
    font-size: 16px;
    color: #aaa;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;

    li {
      border-left: 1px solid #ccc;
    }

    a {
      padding: 8px;
      height: calc(100% - 16px);
      display: flex;
      align-items: center;
    }

    img {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
  }

}
</style>
