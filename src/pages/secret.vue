<script setup>
import { onUnmounted, ref } from 'vue'
import useChat from '../composable/useChat'
import useAuth from '../composable/useAuth'

const { messages, unsubscribe, sendMessage } = useChat()
const { user } = useAuth()

const newMessage = ref('')

const send = () => {
    sendMessage(newMessage.value)
    newMessage.value = ''
}

onUnmounted(() => {
    unsubscribe()
})
</script>
<template>
<h1 class="mt-4 text-2xl font-thin tracking-tighter text-center">Cool Chat</h1>
<div class="min-h-[200px] w-full mt-4 rounded-lg shadow-2xl flex flex-col justify-between">
    <ul class="p-4 space-y-4">
        <li v-for="message in messages" :key="message.id">
            <div class="flex justify-between px-2 py-2 rounded-lg" :class="user === message.author ? 'bg-green-200' : 'bg-gray-200'">
                <span>{{ message.text }}</span>
                <span>by {{ message.author }}</span>
            </div>
        </li>
    </ul>
    <div>
        <input class="w-full p-2 rounded-lg focus:outline-none focus:bg-gray-400" type="text" placeholder="Type a message..." v-model="newMessage" @change="send"/>
    </div>
</div>
<h1>Photo Gallery</h1>
<div class="mt-16">
    <ul class="grid grid-cols-2 gap-12">
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgone.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgtwo.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgthree.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgfour.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgfive.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgsix.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgseven.png" alt="Hello BG">
        </div>
        <div class="p-4 bg-white rounded-lg shadow-2xl">
            <img class="h-64" src="../assets/bgeight.png" alt="Hello BG">
        </div>
    </ul>
</div>  
</template>