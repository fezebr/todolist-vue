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

const text = ref("");
const emit = defineEmits(["add-task"]);
const onSubmit = (e) => {
  e.preventDefault();
  const newTask = {
    id: Math.floor(Math.random() * 1000000),
    text: text.value,
    status: false,
  };

  if (!text.value) {
    alert("text field id empty");
  } else {
    emit("add-task", newTask);
    text.value = "";
  }
};
</script>