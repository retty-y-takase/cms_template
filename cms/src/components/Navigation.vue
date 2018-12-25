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
      <li>
        <a href="">hoge</a>
      </li>
      <li>
        <a href="">fuga</a>
      </li>
      <li>
        <a href="">hohoho</a>
      </li>
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
    },
  },
  methods: {
    onOpen() {
      this.isOpen = true;
    },
    onClose() {
      this.isOpen = false;
    },
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
    right: -50px;
    padding: 4px;
    border: 1px solid #ccc;
    border-bottom-right-radius: 6px;
    background: #666;
    z-index: 0;
  }
  img {
    width: 42px;
  }

  ul {
    position: relative;
    z-index: 1;
    padding: 0;
    margin: 0;
    list-style: none;
    background: #000;
    color: #fff;
    height: 100%;

  }

  a {
    padding: 8px;
    border-bottom: 1px solid #ccc;
    color: inherit;
    display: block;
    text-decoration: none;
    transition: all .3s;

    &:hover {
      text-indent: .5em;
    }
  }

  .is-open {

  }
}
</style>
