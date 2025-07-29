<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import type { ViewMode } from './viewMode.types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{ mode: ViewMode }>()
const emit = defineEmits<{
  (e: 'update:mode', value: ViewMode): void
}>()
</script>

<template>
  <div class="view-toggle">
    <div
      class="view-toggle-item"
      style="border-radius: 4px 0 0 4px; border-right: none"
      :class="{ active: mode === 'grid' }"
      @click="emit('update:mode', 'grid')"
    >
      Grid
    </div>
    <div
      class="view-toggle-item"
      style="border-radius: 0 4px 4px 0; border-left: none"
      :class="{ active: mode === 'list' }"
      @click="emit('update:mode', 'list')"
    >
      List
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-toggle {
  display: flex;
  justify-content: flex-end;
  float: right;

  .view-toggle-item {
    padding: 0.4rem 0.8rem;
    border: 1px solid #ccc;
    cursor: pointer;
    background: white;
    font-weight: 500;
    color: #080808;
  }

  .view-toggle-item.active {
    background-color: #f1bc29;
    color: #ffffff;
  }
}
</style>
