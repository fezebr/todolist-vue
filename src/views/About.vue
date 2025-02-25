<template>
  <div @click="sendTestEvent">fezebr2000@gmail.com</div>
</template>

<script setup>
import { useGtag } from "vue-gtag";

const gtag = useGtag();

const sendTestEvent = () => {
  console.log("lo");
  gtag("event", "test_event", {
    event_category: "debug",
    event_label: "VueGtag test event",
  });
};
</script>
