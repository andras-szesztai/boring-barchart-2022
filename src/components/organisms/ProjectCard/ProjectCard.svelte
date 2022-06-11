<script lang="ts">
  import LinkButton from '../../molecules/LinkButton/LinkButton.svelte'
  import ProjectImage from '../../atoms/ProjectImage/ProjectImage.svelte'
  import ProjectTitle from '../../atoms/ProjectTitle/ProjectTitle.svelte'
  import StackPills from '../../molecules/StackPills/StackPills.svelte'

  export let cardTitle: string
</script>

<div class="main-container">
  <ProjectImage src="https://www.fillmurray.com/640/360" />
  <ProjectTitle title={cardTitle} />
  <StackPills
    stack={['nextjs', 'graphql', 'browserstack', 'codegen', 'neobrutalism']}
  />
  <LinkButton href="https://www.fillmurray.com/640/360" />
</div>

<style>
  .main-container {
    background-color: #ffffff;
    border: 3px solid var(--black);
    border-radius: 8px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    box-shadow: 4px 4px 0px 0px var(--black);
  }
</style>
