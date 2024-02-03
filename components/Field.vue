<template>
  <div class="flex flex-col gap-1 w-full" id="field-input">
    <div class="flex gap-3 items-center">
      <span class="text-black">{{ title }}</span>
      <span v-if="required" class="text-red-500">*</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const { required, title } = defineProps({
  title: String,
  required: Boolean,
});
</script>

<style>
#field-input > input,
select,
textarea {
  @apply bg-white;
  @apply border-2;
  @apply border-black;
  @apply rounded-md;
  @apply p-2;
  @apply text-black;
}
#field-input > input:disabled,
select:disabled,
textarea:disabled {
  @apply cursor-not-allowed;
  @apply text-gray-300;
  @apply border-gray-300;
}
</style>
