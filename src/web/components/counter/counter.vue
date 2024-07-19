<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add', 'minus']);

const props = defineProps(['initialCount']);

const count = ref(props.initialCount ?? 0);

function dec() {
  count.value--;
  emit('minus', { value: count.value }); // 触发自定义事件
}

function add() {
  count.value++;
  emit('add', { value: count.value }); // 触发自定义事件
}
</script>

<template>
  <div>
    <slot name="header"></slot>
    <button @click="dec">minus</button>
    <span>{{ count }}</span>
    <button @click="add">add</button>
    <slot name="footer"></slot>
  </div>
</template>
