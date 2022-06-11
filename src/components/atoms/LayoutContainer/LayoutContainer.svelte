<div class="main-container">
  <div class="content-container">
    <slot />
  </div>
</div>

<style>
  .main-container {
    width: 100%;
    display: grid;
    justify-content: stretch;
    margin-top: 36px;
    position: relative;
  }

  .content-container {
    display: grid;
    width: 100%;
    place-self: stretch;
    grid-template-columns: 1fr;
    padding: 0 36px;
    gap: 24px;
  }
</style>
