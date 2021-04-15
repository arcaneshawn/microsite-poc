<template>
  <div class="footer">
    <div class="top-bar">
      <a href="#top" title="Jump to top of the page">Back to Top &#8593;</a>
    </div>
    <div class="bottom-bar">
      <div class="content-container">
        <img src="~assets/hum-h-logo.jpg" />
        <span class="copyright">&copy;2020 Humana</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  min-width: 100%;

  .top-bar {
    background-color: #5c9a1c;
    display: flex;
    margin-bottom: 2.5rem;

    a {
      font-size: 1.3rem;
      color: #223e06;
      padding: 1.2rem 0;
      margin: 0 auto;
    }
  }

  .bottom-bar {
    margin-bottom: 2.5rem;

    .content-container {
      width: 100%;
      display: flex;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;

      .copyright {
        padding-left: 2.5rem;
        font-size: 1.12rem;
        color: #a5a3a3;
      }
    }
  }
}
</style>
