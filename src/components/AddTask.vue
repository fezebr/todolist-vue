<template>
  <div
    class="fixed bottom-0 bg-white p-4 left-0 right-0 md:static md:my-5 md:bg-transparent md:px-0"
  >
    <form @submit.prevent="onSubmit">
      <div class="flex justify-between px-4 md:px-0">
        <input
          class="placeholder:text-white bg-slate-500 rounded-xl px-7 w-full mr-1 text-white"
          type="text"
          placeholder="i want to do ..."
          v-model="text"
        />
        <button class="bg-slate-500 p-4 rounded-full">
          <!-- <i class="fa-solid fa-user w-2 h-2"></i> -->
          <font-awesome-icon icon="fa-solid fa-comments" class="text-white" />
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useTasksStore } from "../stores/tasks.store";

const text = ref("");

const tasksStore = useTasksStore();

const onSubmit = () => {
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
