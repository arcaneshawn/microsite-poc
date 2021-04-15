<template>
  <section class="section">
    <div class="main-content">
      <prismic-rich-text :field="slice.primary.heading" class="heading heading3" />
      <prismic-rich-text :field="slice.primary.mainContent" />
    </div>
    <div class="promo-section">
      <div v-for="(promo, index) in slice.items" :key="'promo-' + index" class="promo">
        <prismic-image :field="promo.image" class="image" />
        <div class="promo-content">
          <prismic-rich-text :field="promo.eyebrow" />
          <prismic-rich-text :field="promo.title" class="heading" />
          <prismic-rich-text :field="promo.body" />
        </div>
      </div>
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
  margin-bottom: 3rem;
}
.main-content {
  text-align: center;
}
.heading {
  color: #5c9a1c;
  font-size: 1.9375rem;
  font-weight: 300;
   margin: 0 0 0.5rem;
}
.heading.heading3 {
  margin-bottom: 0.75rem;
}
.promo-content {
  padding: 1rem;
}
.promo-section {
  display: flex;
}
.promo-section > * {
  flex: 1;
}
.promo {
  border: 1px solid #d8d7d8;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  box-shadow: 0px 4px 8px #d8d7d8;
}
.promo:first-child {
  margin-left: 0;
}
.promo:last-child {
  margin-right: 0;
}
.promo-content p {
  margin-bottom: 1rem;
}
a {
  color: #111;
}
.title {
  margin-bottom: 2em;
}
</style>

