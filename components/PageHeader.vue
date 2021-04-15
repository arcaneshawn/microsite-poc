<template>
  <section class="header-container">
    <div class="top-bar">
      <div class="logo">
        <a :href="parentUID" title="Back to homepage">
          <img :src="headerImage" />
        </a>
      </div>
    </div>
    <div class="bottom-bar">
      <div class="nav">
        <ul>
          <li v-for="(link, index) in headerNav" :key="'navitem-' + index"><a :href="link.nav_item.url">{{ link.nav_label }}</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data () {
    return {
      headerImage: {},
      headerNav: [],
      parentUID: String
    }
  },
  props: {
    pageType: String
  },
  async fetch() {
    const pageObject = await this.$prismic.api.getByUID(this.pageType, this.$route.params.uid)
    const headerObject = await this.$prismic.api.getByUID('header', pageObject.data.headercontent.uid)

    this.headerImage = headerObject.data.logo.url
    this.headerNav = headerObject.data.navigation

    if(pageObject.type == 'pagev2') {
      this.parentUID = pageObject.url
    } else {
      this.parentUID = pageObject.data.parentpage.url
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  min-width: 100%;
  max-width: 100%;
  margin-bottom: 0;
  border-top: 8px solid #5c9a1c;

  .top-bar {
    position: relative;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;

    .logo {
      position: relative;
      float: left;
    }

    img {
      max-height: 100px;
    }
  }
  .bottom-bar {
    background-color: #5c9a1c;

    .nav {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;

      ul {
        list-style: none;
        display: flex;
        padding: 0;

        li {
          display: inline-flex;

          a {
            padding: 1rem 2rem;
            color: white;
            background-color: #477a15;
            border-left: 1px solid #69826d;

            &:last-child {
              border-right: 1px solid #69826d;
            }
            &:hover {
              background-color: #d5d6d5;
              text-decoration: none;
              color: #272626;
              box-shadow: 6px 1px 8px #464646;
            }
          }
        }
      }
    }
  }
}
</style>
