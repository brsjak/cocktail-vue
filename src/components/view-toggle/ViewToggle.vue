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
    <button :class="{ active: mode === 'grid' }" @click="emit('update:mode', 'grid')">
      🔲 Grid
    </button>
    <button :class="{ active: mode === 'list' }" @click="emit('update:mode', 'list')">
      📃 List
    </button>
  </div>
</template>

<style lang="scss" scoped>
.view-toggle {
  display: flex;
  justify-content: flex-end;
  float: right;
  gap: 0.5rem;

  button {
    padding: 0.4rem 0.8rem;
    border: 1px solid #ccc;
    cursor: pointer;
    background: white;
    border-radius: 4px;
  }

  button.active {
    background-color: #333;
    color: white;
  }
}
</style>
