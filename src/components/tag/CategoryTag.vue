<script lang="ts" setup>
defineProps<{ content: string }>()
</script>

<template>
  <div class="tag-container">
    <p class="tag-content">{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.tag-container {
  width: fit-content;
  padding: 2px 5px;
  background-color: orange;
  border-radius: 4px;

  .tag-content {
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
