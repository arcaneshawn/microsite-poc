<template>
  <div class="hero">
    <div class="content">
      <h1 class="title">{{ title }}</h1>
      <p>{{ body }}</p>
    </div>
    <div class="image">
      <img :src="image" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      body: '',
      image: ''
    }
  },
  props: {
    pageType: String
  },
  async fetch() {
    const pageContent = await this.$prismic.api.getByUID('subpage', this.$route.params.uid)

    this.title = pageContent.data.hero_title[0].text
    this.body = pageContent.data.hero_body
    this.image = pageContent.data.hero_image.url
  }
}
</script>
<style scoped>
.hero {
  position: relative;
  color: #414042;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  width: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto 3rem;
}
.hero div:first-child {
  flex: 1 2;
}
.hero div:last-child {
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

