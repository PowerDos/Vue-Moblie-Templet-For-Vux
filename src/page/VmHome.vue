<template>
  <div class="container">
    <x-button>submit</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="warn">Delete</x-button>

    <divider>link</divider>
    <x-button type="default" show-loading>submit</x-button>
    <x-button type="primary" show-loading>submit</x-button>
    <x-button type="warn" show-loading>submit</x-button>
  </div>
</template>

<script>
import store from '@/store/index';
import { mapActions } from 'vuex';
import { XButton, Divider } from 'vux';

export default {
  name: 'HelloWorld',
  data () {
    return {
    };
  },
  methods: {
    ...mapActions(['loadPageConfig'])
  },
  components: {
    XButton,
    Divider
  },
  store
};
</script>

<style scoped>
.container {
  margin: 0px auto;
  height: 100vh;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

