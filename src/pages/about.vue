<script setup>
import { ref } from "vue";
import { useAdvice } from "../composable/useAdvice";

const { advices, search } = useAdvice();

const searchItem = ref("");
</script>

<template>
   <div class="flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg shadow-2xl">
       <img class="h-64" src="../assets/bgabout.png" alt="Hello BG">
  </div>

    <div>
      <input v-model="searchItem" @change="search(searchItem)" type="text" placeholder="Search Project" class="w-full py-4 mt-16 text-xl text-center rounded-full"/>
    </div>
    <div class="grid grid-cols-3 gap-4 pt-8">
      <div  v-for="(advice, about) in advices" :key="about">
        <p>{{ advice.advice }}</p>
        </div> 
      </div>  
</template>