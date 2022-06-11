<script lang="ts">
  import ProjectImage from '../../atoms/ProjectImage/ProjectImage.svelte'
  import ProjectTitle from '../../atoms/ProjectTitle/ProjectTitle.svelte'

  export let cardTitle: string
</script>

<div class="main-container">
  <ProjectImage src="https://www.fillmurray.com/640/360" />
  <ProjectTitle title={cardTitle} />
</div>

<style>
  .main-container {
    background-color: #ffffff;
    border: 3px solid #0a0a0d;
    border-radius: 8px;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    box-shadow: 4px 4px 0px 0px #000;
  }
</style>
