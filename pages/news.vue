
<script setup>
const { t } = useI18n()
definePageMeta({
})
useHead({
  title: `News | Dexon Technology`,
})
const story = await useAsyncStoryblok('news', { version: 'draft' })
</script>

<template>
  <div class="mt-desktop-navbar pb-mobile pt-custom-xl lg:pb-desktop">
    <div class="container">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, accusantium repellat voluptatem fuga, voluptates perferendis reprehenderit ratione minus, amet corporis architecto maiores deserunt? Voluptatem ullam aperiam impedit! Dolorum, dicta veniam?
      <StoryblokComponent v-if="story" :blok="story.content" />
    </div>
  </div>
</template>
