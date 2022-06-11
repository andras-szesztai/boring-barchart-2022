<div class="main-container">
  <div class="content-container">
    <slot />
  </div>
</div>

<style lang="scss">
  .main-container {
    width: 100%;
    display: grid;
    justify-content: stretch;
    position: relative;
  }

  .content-container {
    display: grid;
    width: 100%;
    place-self: stretch;
    grid-template-columns: 1fr;
    padding: 24px;
    gap: 24px;

    @media only screen and (min-width: 320px) {
      padding: 36px;
      gap: 36px;
    }
  }
</style>
