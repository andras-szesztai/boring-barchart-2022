<script lang="ts">
  import LayoutContainer from './components/atoms/LayoutContainer/LayoutContainer.svelte'
  import ProjectCard from './components/organisms/ProjectCard/ProjectCard.svelte'
</script>

<main>
  <LayoutContainer>
    <ProjectCard cardTitle="My first project" />
    <ProjectCard cardTitle="My second project" />
    <ProjectCard cardTitle="My third project and more" />
  </LayoutContainer>
</main>

<style global>
  :root {
    font-family: brevia, sans-serif;
    font-weight: 400;
    font-style: normal;
    background-color: #f0ede8;
    color: #0a0a0d;
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
</style>
