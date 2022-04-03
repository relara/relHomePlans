<script setup>
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen-nonav">
    <div class="flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg shadow-2xl">
       <img class="h-64" src="../assets/bgabout.png" alt="Hello BG">
       <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
        </form>
    </div>
  </div>
           <div class="p-4 bg-yellow-300 border-2 rounded-lg shadow-2xl cursor-pointer"> 
            <h1>Click to View</h1>
            <h1>1040 sq. ft.</h1>
            <h1>Floor Plan</h1>
          </div> 
          <div class="p-4 bg-yellow-300 border-2 rounded-lg shadow-2xl cursor-pointer"> 
            <h1>Click to View</h1>
            <h1>2400 sq. ft.</h1>
            <h1>Floor Plan</h1>
          </div>  
</template>