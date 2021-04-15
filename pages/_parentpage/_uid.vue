<template>
  <section class="main">
    <PageHeader pageType="subpage" />
    <Hero />
    <div class="slice-zone">
      <div class="left-column" v-bind:class="{'two-column': hasRightRail}">
        <slice-zone class="slices"
          type="subpage"
          :uid="$route.params.uid"
        />
      </div>
      <div v-if="hasRightRail" class="right-column">
        <RightRail />
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import SliceZone from 'vue-slicezone'

export default {
  data () {
    return {
      hasRightRail: false
    }
  },
  components: {
      SliceZone
  },
  async fetch() {
    const pageContent = await this.$prismic.api.getByUID('subpage', this.$route.params.uid)
    if (pageContent.data.right_rail_content.uid) {
      this.hasRightRail = true
    }
    console.log((this.$route.params.uid.split('--'))[1])
  }
}
</script>
<style lang="scss" scoped>
.main {
  min-width: 100%;
  max-width: 100%;
}
.slice-zone {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  .left-column.two-column {
    padding-right: 2rem;
  }
}
.slice-zone div:first-child {
  flex: 1 1 70%;
}
.slice-zone div:last-child {
  flex: 1 0 30%;
}
</style>
