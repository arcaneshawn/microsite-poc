<template>
  <section class="section">
    <div v-if="slice.primary.isAlignedLeft" class="image-left">
      <prismic-image :field="slice.primary.image" />
    </div>
    <div class="content" v-bind:class="slice.primary.isAlignedLeft ? 'is-left' : 'is-right'">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" />
      <prismic-link :field="slice.primary.link">{{ slice.primary.linkLabel[0].text }} &#8594;</prismic-link>
    </div>
    <div v-if="!slice.primary.isAlignedLeft" class="image-right">
      <prismic-image :field="slice.primary.image" />
    </div>
  </section>
</template>
<script>
export default {
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    }
  },
}
</script>
<style scoped>
.section {
  position: relative;
  display: flex;
  color: #414142;
  margin-bottom: 3rem;
}
a {
  color: #612166;
  padding: 1rem;
  border: 2px solid #612166;
  border-radius: 0.6rem;
  display: inline-block;
}
a:hover {
  color: #fff;
  border-color: #7b3b80;
  background-color: #7b3b80;
  text-decoration: none;
}
.content.is-left {
  padding-left: 1rem;
}
.content.is-right {
  padding-right: 1rem;
}
.title {
  margin-bottom: 1rem;
  color: #5c9a1c;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 300;
}
img {
  max-width: 340px;
}
</style>

