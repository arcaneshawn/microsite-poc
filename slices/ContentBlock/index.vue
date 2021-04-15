<template>
  <section class="section">
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" class="description" />
    <prismic-link v-if="slice.primary.cta.url" :field="slice.primary.cta" class="primary-link">{{ slice.primary.linkLabel }} &#8594;</prismic-link>
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
  width: 100%;
  margin-bottom: 3rem;
}
a {
  color: rgb(240, 27, 151);
  text-decoration: underline;
}
a:hover {
  color:rgb(78, 14, 51);
  text-decoration: none;
}
.title {
  margin-bottom: 1.5rem;
  color: #5c9a1c;
}
.primary-link {
  font-weight: bold;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #007481;
}
.primary-link:hover {
  color: #005b68;
}

</style>

