<script lang="ts">
  export let stack: string[]
</script>

<div class="pill-container">
  {#each stack as stack}
    <span class="pill">{stack}</span>
  {/each}
</div>

<style>
  .pill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .pill {
    background-color: var(--primary);
    border: 1px solid var(--black);
    color: var(--black);

    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.75rem;
  }
</style>
