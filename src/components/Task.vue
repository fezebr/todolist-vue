<template>
  <div
    class="d-flex justify-content-between align-items-center border rounded p-3"
  >
    <div>
      <div>{{ task.text }}</div>
      <div v-if="task.editInput">
        <input type="text" v-model="task.text" />
      </div>
    </div>

    <div>
      <button
        type="button"
        class="btn btn-danger btn-sm ml-1"
        @click="$emit('delete-task', task.id)"
      >
        delete
      </button>

      <button
        type="button"
        class="btn btn-info btn-sm ml-1"
        @click="$emit('edite-task', task.id)"
      >
        edite
      </button>

      <button
        type="button"
        class="btn btn-success btn-sm ml-1"
        @click="$emit('handle-status', task.id)"
      >
        {{ task.status ? "unDone" : "Done" }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  task: Object,
});
defineEmits(["delete-task", "handle-status", "edite-task"]);
</script>