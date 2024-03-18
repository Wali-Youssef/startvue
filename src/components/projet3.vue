<template>
    <div class="font-fira-code bg-custom-blue container mx-auto p-8 ">
      <div class=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-3xl font-bold mb-4 text-bleuneon">Indiglu Maghreb</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="../assets/indiglu.png" alt="Image du projet" class="rounded-lg w-full md:w-auto md:max-h-85 object-contain mx-auto">
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Description</h2>
            <p class="mb-4 text-slate-500">Indiglu Maghreb est un site web qui vise à sensibiliser les populations du Maghreb sur le diabète. Notre plateforme rassemble une communauté engagée dans la lutte contre cette maladie en fournissant des ressources, des témoignages et des conseils pratiques pour aider à prévenir et à gérer le diabète dans notre région.
            </p>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Technologies Utilisées</h2>
            <ul class="list-disc ml-6 text-slate-500 ">
              <li>PHP</li>
              <li>Wordpress</li>
              <li>VScode</li>
            </ul>
            <h2 class="text-xl font-semibold mb-2 mt-4 text-bleuneon">Lien vers le site</h2>
<a href="https://maghreb.indiglu.com/" class="text-slate-500">maghreb.indiglu.com</a>

          </div>
        </div>
      </div>
      <!-- Bouton Retour aux projets -->
      <button @click="goBack" class="fixed bottom-4 right-4 bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600">Retour aux projets</button>
    </div>
  </template>
  
  <script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();
  
    const goBack = () => {
      router.go(-1); // Retourne à la page précédente dans l'historique du navigateur
    };
  </script>
  