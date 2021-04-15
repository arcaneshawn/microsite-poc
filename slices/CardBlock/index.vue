<template>
  <div class="card-block-container">
    <div class="icon-container">
      <icon :icon="slice.primary.icon" />
    </div>
    <prismic-rich-text :field="slice.primary.title" class="title" />
    <prismic-rich-text :field="slice.primary.description" />
    <div class="cta">
      <prismic-link :field="slice.primary.buttonLink" class="button">
        <span>
          {{ slice.primary.buttonLinkLabel }} &#8594;
        </span>
      </prismic-link>
    </div>
    <prismic-link :field="slice.primary.link" class="primary-link">{{ slice.primary.linkLabel }} &#8594;</prismic-link>
  </div>
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

<style lang="scss" scoped>
.card-block-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  border: 1px solid #c7c6c6;
  padding: 2rem;
  text-align: center;
  border-width: 8px 2px 2px;
  border-color: #5c9a1c;
  margin-bottom: 3rem;

  .title {
    color: #5c9a1c;
    margin-bottom: 1rem;
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

  .icon-container {
    max-width: 100px;
    position: relative;
    margin: 0 auto 1.2rem;;

    .icon {
      max-width: 100px;
      max-height: 100px;
      display: flex;
    }
  }
  .cta {
    margin-bottom: 1.2rem;
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
}
</style>

