<script lang="ts">
  import { createDeliveryClient } from '@kentico/kontent-delivery'
  import { onMount } from 'svelte'

  import LayoutContainer from './components/atoms/LayoutContainer/LayoutContainer.svelte'
  import ProjectTitle from './components/atoms/ProjectTitle/ProjectTitle.svelte'
import ContactCard from './components/organisms/ContactCard/ContactCard.svelte';
  import ProjectCard from './components/organisms/ProjectCard/ProjectCard.svelte'
  import type { TProject } from './types/project'

  const deliveryClient = createDeliveryClient({
    projectId: import.meta.env.VITE_KONENT_PROJECT_ID,
  })

  let projects: TProject[]
  onMount(async () => {
    const response = await deliveryClient
      .items<TProject>()
      .type('boring_barchart_projects')
      .toPromise()
    projects = response.data.items.sort((a, b) =>
      b.elements.published.value!.localeCompare(a.elements.published.value!)
    )
  })
</script>

<main>
  <LayoutContainer>
    {#if projects}
    {#each projects as project}
    <ProjectCard {project} />
    {/each}
    {:else}
    <ProjectTitle title="Loading..." />
    {/if}
  </LayoutContainer>
  <ContactCard/>
</main>

<style global>
  :root {
    font-family: brevia, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: var(--secondary);
    color: var(--black);

    --primary: #c284f7;
    --secondary: #f0ede8;
    --black: #0a0a0d;
    --white: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  main {
    user-select: none;
  }
</style>
