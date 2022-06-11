<script lang="ts">
  export let src: string
</script>

<div class="container">
  <img {src} alt="" />
</div>

<style>
  .container {
    border: 3px solid #0a0a0d;
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    height: 96px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
