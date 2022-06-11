<script lang="ts">
  export let title: string
</script>

<h1>{title}</h1>

<style lang="scss">
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.2;

    @media only screen and (min-width: 320px) {
      font-size: 1.5rem;
      line-height: 1.25;
    }
  }
</style>
