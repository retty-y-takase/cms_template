<template>
  <div class="layout">
    <global-header />
    <global-navigation />
    <div class="layout-inner">
      <slot />
    </div>
    <global-footer />
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Navigation from './Navigation.vue';

export default {
  components: {
    GlobalNavigation: Navigation,
    GlobalHeader: Header,
    GlobalFooter: Footer,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.layout {
  &-inner {
    padding-left: 80px;
  }
}
</style>
