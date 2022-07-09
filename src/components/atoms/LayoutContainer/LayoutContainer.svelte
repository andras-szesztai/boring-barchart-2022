<div class="main-container">
  <div class="content-container">
    <slot />
  </div>
</div>

<style lang="scss">
  .main-container {
    width: 100%;
    display: grid;
    position: relative;

    justify-content: stretch;

    @media only screen and (min-width: 1040px) {
      justify-content: center;
    }
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

    @media only screen and (min-width: 720px) {
      padding: 48px;
      gap: 48px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (min-width: 1040px) {
      padding: 64px;
      gap: 64px;
      max-width: 1240px;
    }
  }
</style>
