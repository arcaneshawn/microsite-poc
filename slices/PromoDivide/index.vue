<template>
  <section class="section">
    <div v-if="slice.primary.sectionTitle[0].text" class="title-container">
      <prismic-rich-text :field="slice.primary.sectionTitle" class="title" />
    </div>
    <div class="promo-container">
      <div v-for="(promo, index) in slice.items" :key="'promoitem-' + index" class="promos">
        <div class="icon-container">
          <Icon :icon="promo.icon" />
        </div>
        <prismic-rich-text :field="promo.title" class="title" />
        <prismic-rich-text :field="promo.description" class="description" />
        <div class="cta">
          <prismic-link :field="promo.link" class="primary-link">{{ promo.linkLabel }} &#8594;</prismic-link>
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
  }
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  color: #111;
  padding: 4em;
  text-align: center;
  margin-bottom: 3rem;
}
.primary-link {
  font-weight: bold;
  line-height: 1.5rem;
  font-size: 1rem;
  color: #007481;
}
.title-container {
  width: 100%;
  margin-bottom: 2em;
  color: #5c9a1c;
}
.promo-container {
  display: flex;

  .promos {
    position: relative;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    border-left: 1px solid #c7c7c7;

    .icon-container {
      max-width: 100px;
      margin: 1rem auto;
    }

    .title {
      margin-bottom: 1rem;
      color: #5c9a1c;
    }

    .description {
      margin-bottom: 4rem;
    }

    .cta {
      width: 100%;
      position: absolute;
      bottom: 0;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }

  div:first-child {
    padding-left: 0;
    border-left: none;
  }
  div:last-child {
    padding-right: 0;
  }
}
.promo-container > * {
  flex: 1;
}
</style>

