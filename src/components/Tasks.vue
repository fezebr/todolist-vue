<template>
  <div v-for="task in tasks" :key="task.id" class="col-6 mb-2">
    <Task :task="task" 
    @delete-task="$emit('delete-task', task.id)"
    @handle-status="$emit('handle-status',task.id)"
     />
  
  </div>
</template>

<script>
import Task from "./Task";
export default {
 
 
  methods: {},
  name: "Tasks",
  components: { Task },
  props: ["tasks"],
  emits: ["delete-task",'handle-status'],
};
</script>