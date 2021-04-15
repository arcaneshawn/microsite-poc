<template>
  <section class="section">
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.body" />
    </div>
    <div class="image">
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
  color: #414042;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  width: 100%;
  display: flex;
  margin-bottom: 3rem;
}
.section > * {
  flex: 1 2;
}
.content {
  align-self: center;
  padding-right: 2.3rem;
}
.image {
  overflow: hidden;
  border-bottom-left-radius: 9rem;
}
.image img {
  min-height: 100%;
}
a {
  color: #4a7729;
}
.title {
  color: #5c9a1c;
  margin-bottom: 1em;
  font-size: 3.125rem;
  line-height: 3.875rem;
}
</style>

