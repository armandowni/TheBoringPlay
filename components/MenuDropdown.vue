<template>
  <div class="text-right">
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton
        :class="`w-full justify-center items-center rounded-md ${classButton} p-6 lg:py-4 lg:px-5`"
      >
        <country-flag
          :country="iconFlag"
          style="border: 1px solid black; margin-top: -8px"
        />
        <span :class="`${classTitleButton}`">{{ buttonSection }}</span>
      </MenuButton>

      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
        >
          <slot></slot>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { defineProps } from "vue";

const props = defineProps({
  buttonSection: String,
  classButton: String,
  classTitleButton: String,
  iconFlag: String,
});
</script>
