<template>
    <div class="font-fira-code bg-custom-blue container mx-auto p-8 ">
      <div class=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-3xl font-bold mb-4 text-bleuneon">Randoom</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src="../assets/randoom.png" alt="Image du projet" class="rounded-lg w-full md:w-auto md:max-h-85 object-contain mx-auto">
          </div>
          <div>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Description</h2>
            <p class="mb-4 text-slate-500">Randoom est un site qui vous permet de découvrir du contenu audiovisuel de manière aléatoire. Que ce soit des films, des séries ou des podcasts, Randoom vous propose une sélection variée à chaque visite, vous permettant ainsi de vous aventurer dans de nouvelles expériences de divertissement sans savoir à l'avance ce que vous allez découvrir.
            </p>
            <h2 class="text-xl font-semibold mb-2 text-bleuneon">Technologies Utilisées</h2>
            <ul class="list-disc ml-6 text-slate-500 ">
              <li>VScode</li>
              <li>Vuejs</li>
              <li>pocketbase</li>
            </ul>
            <h2 class="text-xl font-semibold mb-2 mt-4 text-bleuneon">Lien vers le projet</h2>
<a href="https://www.figma.com/file/2xnN0ijMKVGIq6AFMOcdhT/Projet-S2---Maquette?type=design&node-id=386%3A762&mode=design&t=OEPLw3BavKHlNqmk-1" class="text-slate-500">Voir le dossier sur Figma</a>

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
  