<script lang="ts">
  export let src: string
</script>

<div class="container">
  <img
    {src}
    alt=""
    srcset={`${src}?w=400&h=200&fit=crop 400w, ${src}?w=600&h=300&fit=crop 600w, ${src}?w=800&h=400&fit=crop 800w, ${src}?w=1000&h=500&fit=crop 1000w, ${src}?w=1200&h=600&fit=crop 1200w`}
  />
</div>

<style>
  .container {
    border: 3px solid var(--black);
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    height: 144px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
</style>
