<template>
  <div v-for="task in tasks" :key="task.id" class="col-6 mb-2">
    <Task
      :task="task"
      @delete-task="$emit('delete-task', task.id)"
      @handle-status="$emit('handle-status', task.id)"
      @edite-task="$emit('edite-task', task.id)"
    />
  </div>
</template>

<script setup>
import { defineProps } from "@vue/runtime-core";
import Task from "./Task";

defineProps({
  tasks: Array,
});
defineEmits(["delete-task", "handle-status", "edite-task"]);
</script>