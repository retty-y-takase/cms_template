<template>
  <nav
    :class="classNames"
     @mouseenter="onOpen"
     @mouseleave="onClose"
  >
    <button>
      <img src="../assets/logo.png" alt="icon">
    </button>
    <ul>
      <li>hoge</li>
      <li>fuga</li>
      <li>hohoho</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    classNames() {
      return {
        'is-open': this.isOpen,
      }
    }
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
nav {
  height: 100vh;
  width: 200px;
  position: fixed;
  top: 50px;
  left: -200px;
  transition: all .2s 0s;

  &.is-open {
    left: 0;
  }

  button {
    position: absolute;
    top: 0;
    right: -44px;
    padding: 0;
    border: 1px solid #ccc;
    background: transparent;
  }
  img {
    width: 42px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    background: #000;
    color: #fff;
    height: 100%;
  }

  .is-open {

  }
}
</style>
