<template>
  <div class="right-rail">
    <slice-zone
      type="right_rail"
      :uid="rightRailId"
    />
  </div>
</template>

<script>
import SliceZone from 'vue-slicezone'
export default {
  data () {
    return {
      rightRailId: ''
    }
  },
  components: {
    SliceZone
  },
  async fetch() {
    const pageContent = await this.$prismic.api.getByUID('subpage', this.$route.params.uid)
    this.rightRailId = pageContent.data.right_rail_content.uid
  }
}
</script>
