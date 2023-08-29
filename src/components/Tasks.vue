<template>
  <div v-for="task in tasks" :key="task.id">
    <div
      class="border rounded-2xl border-slate-400 p-5 my-3 flex justify-between"
    >
      <div>
        <div>{{ task.text }}</div>
      </div>

      <div>
        <button type="button" @click="$emit('delete-task', task.id)">
          <font-awesome-icon
            icon="fa-solid fa-trash"
            class="text-red-300 mr-1"
          />
        </button>

        <button type="button" @click="$emit('handle-status', task.id)">
          <font-awesome-icon
            v-if="task.status"
            icon="fa-solid fa-xmark"
            class="text-red-400 ml-2"
            />
            <font-awesome-icon
            v-else
            icon="fa-solid fa-check"
            class="text-green-400 ml-2"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "@vue/runtime-core";

defineProps({
  tasks: Array,
});
defineEmits(["delete-task", "handle-status", "edite-task"]);
</script>
