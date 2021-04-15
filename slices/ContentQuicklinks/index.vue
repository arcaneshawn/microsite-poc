<template>
  <section class="section">
    <div class="image">
      <prismic-image :field="slice.primary.image" />
    </div>
    <div class="content">
      <prismic-rich-text :field="slice.primary.title" class="title" />
      <prismic-rich-text :field="slice.primary.description" class="highlight" />
      <div class="cta">
        <prismic-link :field="slice.primary.cta" class="button">
          <span>
            {{ slice.primary.ctaText[0].text }} &#8594;
          </span>
        </prismic-link>
      </div>
      <div class="quick-links">
        <div class="quick-links-title">
          <h3>Quick links</h3>
        </div>
        <div class="quick-link-items">
          <ul>
            <li v-for="(link, index) in links" :key="'link-' + index"><prismic-link :field="link.quicklink" class="primary-link">{{ link.quicklinktext[0].text }} &#8594;</prismic-link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      links: this.slice.items
    }
  },
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
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 100%;
  margin-bottom: 3rem;
}
.section > * {
  width: 50%;
  flex: 1 0 auto;
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.content {
  padding-left: 1.2rem;
}
.title {
  margin-bottom: 1em;
  color: #5c9a1c;
}
.highlight {
  border-left: .125rem solid #ffc600;
  padding-left: 1rem;
  margin-bottom: 1rem;
}
.cta {
  margin-bottom: 1rem;
}
.button {
  position: relative;
  background-color: #612166;
  text-align: center;
  padding: 1rem;
  display: inline-block;
  border-radius: .375rem;
}
.button:hover {
  background-color: #7b3b80;
}
.button span {
  color: #fff;
}
.quick-links {
  background-color: #eee;
}
.quick-links-title {
  background-color: #5c9a1c;
  text-align: center;
}
h3 {
  font-size: 1rem;
  padding: .375rem 0;
}
ul {
  list-style: none;
  -webkit-column-count: 2;
  -webkit-column-gap: 1rem;
  column-count: 2;
  column-gap: 1rem;
}
ul li {
  padding: .375rem 0;
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

