<template>
  <div class="flex justify-between">
    <div
      v-for="status in statuses"
      :key="status.name"
      @click="$emit('setStatus', `${status.filter}`)"
    >
      <span
        class="inline-flex items-center m-2 px-2 py-1 rounded-full text-sm font-semibold"
        :class="status.style"
      >
        <span> {{ status.name }} </span>
        <span class="ml-1">
          {{ props[status.length] }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const emits = defineEmits(["setStatus"]);
const props = defineProps({
  doneStatus: {
    type: String,
  },
  allTasksLength: {
    type: Number,
  },
  unCompletedTasksLength: {
    type: Number,
  },
  completedTasksLength: {
    type: Number,
  },
});

const statuses = reactive([
  {
    name: "all",
    style: "text-blue-600 bg-blue-200 hover:bg-blue-300",
    length: "allTasksLength",
    filter: "all",
  },
  {
    name: "undone",
    style: "text-red-600 bg-red-200 hover:bg-red-300",
    length: "unCompletedTasksLength",
    filter: "unCompletedTasks",
  },
  {
    name: "done",
    style: "text-green-600 bg-green-200 hover:bg-green-300",
    length: "completedTasksLength",
    filter: "completedTasks",
  },
]);
</script>
