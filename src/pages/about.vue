<script setup>
import { useProject } from "../composable/useProject";

const { projects } = useProject();
</script>

<template>
<div>
  <input type="text" placeholder="Search Project" class="w-full py-4 mt-16 text-xl text-center rounded-full"/>
</div>
  <div class="flex flex-col items-center py-6">
    <div class="flex items-center justify-center overflow-hidden bg-gray-200 rounded-lg shadow-2xl">
       <img class="h-64" src="../assets/bgabout.png" alt="Hello BG">
    </div>
  </div>
          <div>
             <ul class="grid grid-cols-2 gap-6" v-for="(project, index) in projects" :key="index">
               <p>{{ project.project }}</p>
               <div class="p-4 rounded-lg shadow-2xl bg-slate-200"><h1>Click to View</h1><h1>1040 sq. ft.</h1>
               <h1>Floor Plan</h1>
               </div>
               <div class="p-4 rounded-lg shadow-2xl bg-slate-200">  
               <h1>Click to  View</h1>
               <h1>2400 sq. ft.</h1>
               <h1>Floor Plan</h1>
               </div> 
            </ul> 
          </div>  
</template>