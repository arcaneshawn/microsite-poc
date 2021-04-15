<template>
  <section class="main">
    <PageHeader pageType="pagev2" />
    <slice-zone
       type="pagev2"
       :uid="$route.params.uid"
       class="slices"
    />
    <Footer />
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
   components: {
       SliceZone
   }
}
</script>
<style lang="scss" scoped>
.main {
  min-width: 100%;
  max-width: 100%;
}
.slices {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
