<template>
    <div class="font-fira-code bg-custom-blue container mx-auto p-8 ">
      <div class=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-3xl font-bold mb-4 text-bleuneon">Mission Bénévolat</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="../assets/mission.png" alt="Image du projet" class="rounded-lg w-full md:w-auto md:max-h-85 object-contain mx-auto">
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Description</h2>
            <p class="mb-4 text-slate-500">Mission Bénévolat est un site conçu pour simplifier la recherche d'associations pour les bénévoles. Grâce à cette plateforme, les volontaires peuvent trouver facilement des opportunités d'engagement social en parcourant les différentes missions proposées par les associations partenaires. Cela permet de favoriser une participation citoyenne active et de renforcer le lien social en facilitant la rencontre entre ceux qui veulent aider et ceux qui ont besoin d'aide.
            </p>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Technologies Utilisées</h2>
            <ul class="list-disc ml-6 text-slate-500 ">
              <li>PHP</li>
              <li>WordPress</li>
              <li>Avada</li>
            </ul>
            <h2 class="text-xl font-semibold mb-2 mt-4 text-bleuneon">Lien vers le site</h2>
            <a href="#" class=" text-slate-500">https://xn--missionbnvolat-ikbb.angelo-simoes.fr/</a>
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

 
    import { supabase } from "../supabase";
console.log("supabase :", supabase)


  </script>
  