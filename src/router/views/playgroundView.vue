<template>
  <div>
    <div v-if="clients && clients.length">
      <Layout></Layout>
      <h1>Client List</h1>
      <PlaygroundComp :items="clients"></PlaygroundComp>
    </div>
    <Loading v-else></Loading>
  </div>
</template>

<script>
import { clientMethods , clientComputed } from '@state/helpers'
import Layout from '@layouts/main.vue'
import Loading from '@views/_loading.vue'
import PlaygroundComp from '@components/playgroundComp.vue'

export default {
   components: {
      PlaygroundComp,
      Layout,
      Loading
   },
  computed: {
     ...clientComputed
  },
  methods: {
     ...clientMethods
  },
  created(){
     this.fetchClients()     
  }
}
</script>

<style >
   h1{
      text-align: center;
      color: #35495e;
      margin-bottom: 25px;
   }
</style>
