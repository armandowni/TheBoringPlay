<template>
  <div class="w-full overflow-x-scroll">
    <table class="min-w-full w-max">
      <thead>
        <tr class="bg-black text-white">
          <td
            v-for="(header, index) in dataHeaders"
            v-bind:key="index"
            class="py-3 px-5"
          >
            {{ header.name }}
          </td>
        </tr>
      </thead>
      <tbody class="text-secondary">
        <tr
          v-for="(data, index) in dataTable"
          v-bind:key="index"
          class="border-b"
        >
          <td
            v-for="(header, indexHeader) in dataHeaders"
            v-bind:key="indexHeader"
            class="py-3 px-5"
          >
            {{ data[header?.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { dataHeaders, dataTable } = defineProps(["dataHeaders", "dataTable"]);
</script>
