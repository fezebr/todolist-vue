<template>
  <div class="container d-flex flex-column align-items-center">
    <h1 class="jumbotron-heading">Welcome!</h1>
    <p class="lead text-muted">To get started, add some items to your list:</p>
    <form @submit="onSubmit" class="form-inline">
      <div class="form-group">
        <input
          type="text"
          class="form-control mx-sm-3"
          placeholder="i want to do ..."
          v-model="text"
        />
        <button class="btn btn-primary">add</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useTasksStore } from "../stores/tasks.store";

const text = ref("");

const tasksStore = useTasksStore();

const onSubmit = (e) => {
  e.preventDefault();

  if (!text.value) alert("text field id empty");
  else {
    tasksStore.addTask({
      id: Math.floor(Math.random() * 1000000),
      text: text.value,
      status: false,
    });
    text.value = "";
  }
};
</script>