<script lang="ts">
  import LinkButton from '../../molecules/LinkButton/LinkButton.svelte'
  import ProjectImage from '../../atoms/ProjectImage/ProjectImage.svelte'
  import ProjectTitle from '../../atoms/ProjectTitle/ProjectTitle.svelte'
  import TagPills from '../../molecules/TagPills/TagPills.svelte'
  import type { TProject } from 'src/types/project'

  export let project: TProject
  const { elements } = project
</script>

<div class="main-container">
  <ProjectImage src={elements.screenshot.value[0].url} />
  <ProjectTitle title={elements.title.value} />
  <TagPills tags={elements.tags.value.split(',')} />
  <LinkButton href={elements.url.value} />
</div>

<style lang="scss">
  .main-container {
    background-color: var(--white);
    border: 3px solid var(--black);
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    padding: 12px;
    gap: 12px;
    box-shadow: 4px 4px 0px 0px var(--black);

    @media only screen and (min-width: 320px) {
      padding: 16px;
      gap: 16px;
      box-shadow: 8px 8px 0px 0px var(--black);
    }
  }
</style>
