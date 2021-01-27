<template>
  <div v-if="isDrizzleInitialized" id="App">
    <Base />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Base from "@/components/Base";

export default {
  name: 'App',
  components: {
    Base
  },

  computed: mapGetters('drizzle', ['isDrizzleInitialized'])
}
</script>

<style>

#App {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background:#181c2d;
  /*background:#15202B;*/
  font-family: 'Roboto', sans-serif;
  width:100%;
  height:100%;
}

</style>
