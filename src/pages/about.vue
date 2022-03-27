<script setup>
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <div class="flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg shadow-2xl">
       <img class="h-64" src="../assets/bgabout.png" alt="Hello BG">
       <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
           <input name="search" type="text" class="p-2 border-2 rounded-lg" placeholder="Search" v-model="search" />
           <span class="text-xs text-center text-red-500">{{ search }}</span>
           <input name="password" type="password" class="p-2 border-2 rounded-lg" placeholder="Square Footage" v-model="password" />
           <span class="text-xs text-center text-red-500">{{ passwordError }}</span>
           <div class="flex space-x-2">
             <button type="submit" @submit.prevent="logginIn" class="w-1/2 py-2 text-yellow-200 bg-yellow-600 rounded-lg">Search</button>  
           </div>
        </form>    
    </div>
  </div>
</template>