<template>
  <div class="flex justify-between">
    <div
      v-for="status in statuses"
      :key="status.name"
      @click="$emit('setStatus', `${status.filter}`)"
    >
      <span
        class="inline-flex items-center m-2 px-2 py-1 rounded-full text-sm font-semibold"
        :class="`text-${status.color}-600 bg-${status.color}-200 hover:bg-${status.color}-300`"
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
  { name: "all", color: "blue", length: "allTasksLength", filter: "all" },
  {
    name: "undone",
    color: "red",
    length: "unCompletedTasksLength",
    filter: "unCompletedTasks",
  },
  {
    name: "done",
    color: "green",
    length: "completedTasksLength",
    filter: "completedTasks",
  },
]);
</script>
