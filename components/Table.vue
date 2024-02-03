<template>
  <div class="w-full overflow-x-scroll">
    <table class="min-w-full w-max">
      <thead>
        <tr class="bg-black text-white">
          <td
            v-for="(header, index) in headers"
            v-bind:key="index"
            class="py-3 px-5"
          >
            {{ header }}
          </td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in dataTable"
          v-bind:key="index"
          class="border-b"
        >
          <td class="py-3 px-5">{{ index + 1 }}.</td>
          <td class="py-3 px-5">{{ data.name }}</td>
          <td class="py-3 px-5">{{ data.age }}</td>
          <td class="py-3 px-5">
            {{
              (data.status & 2) == 2
                ? "Nuxt App 3"
                : (data.status & 1) == 1
                ? "Nuxt App 2"
                : "Unknown"
            }}
          </td>
          <td class="py-3 px-5">
            <div class="flex gap-3 justify-end" v-if="(data?.status & 2) == 2">
              <font-awesome-icon
                icon="fas fa-pencil"
                class="cursor-pointer"
                v-on:click="editDialog(data)"
              />
              <font-awesome-icon
                icon="fas fa-trash"
                class="cursor-pointer"
                v-on:click="delDialog(data)"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const headers = ["No.", "Name", "Age", "From"];
const props = defineProps({
  dataTable: {
    type: Array,
    default: [],
  },
  editDialog: Function,
  delDialog: Function,
});
</script>
