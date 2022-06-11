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
    border: 3px solid #0a0a0d;
    background-color: #fff;
    color: #0a0a0d;
    font-weight: 700;
    align-self: flex-start;
    display: flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 6px;
    gap: 8px;
  }
</style>
