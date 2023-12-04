<template> 
<HelloWorld/>
  <SectionContent/>
  <FooterContent/>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SectionContent from './components/SectionContent.vue'
import FooterContent from './components/FooterContent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SectionContent,
    FooterContent
  }
}
</script>

<style>

</style>
