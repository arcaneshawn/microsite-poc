<template>
  <div class="card-block-container">
    <h3 class="title">My card</h3>
    <p>This is some text about said card.  Do you like this card?  I know you do.</p>
    <a href="https://www.example.com" title="example link">Portal to nowhere &#8594;</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.card-block-container {
  width: 100%;
  max-width: 100%;
  border: 1px solid #c7c6c6;
  padding: 2rem;
  border-radius: .5rem;
  background-color: #f7f5f5;
  text-align: center;
  box-shadow: 5px 5px 8px #b1b0b0;

  .title {
    color: #5c9a1c;
    margin-bottom: 1rem;
  }
}
</style>
