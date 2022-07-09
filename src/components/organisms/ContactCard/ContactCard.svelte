<div>
  <a
    href="https://github.com/andras-szesztai"
    target="_blank"
    rel="noreferrer noopener">github</a
  >
  <a
    href="https://github.com/andras-szesztai"
    target="_blank"
    rel="noreferrer noopener">linkedin</a
  >
</div>

<style lang="scss">
  div {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;

    top: 12px;
    right: 12px;

    @media only screen and (min-width: 320px) {
      top: 16px;
      right: 16px;
    }

    @media only screen and (min-width: 720px) {
      top: 24px;
      right: 24px;
    }

    @media only screen and (min-width: 1040px) {
      top: 36px;
      right: 36px;
    }
  }

  a {
    cursor: pointer;
    color: var(--white);
    text-decoration: none;
    border-radius: 8px;
    background-color: var(--black);
    padding: 8px;
  }
</style>
