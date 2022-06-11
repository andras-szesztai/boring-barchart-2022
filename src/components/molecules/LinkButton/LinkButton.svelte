<script lang="ts">
  import ExternalLinkIcon from '../../atoms/ExternalLinkIcon/ExternalLinkIcon.svelte'
  export let href: string
</script>

<a {href} target="_blank" rel="noreferrer noopener"
  >Check it out
  <ExternalLinkIcon />
</a>

<style>
  a {
    text-decoration: none;

    color: var(--black);
    font-weight: 700;
    display: flex;
    align-items: center;
    border-radius: 6px;
    gap: 8px;
  }
</style>
