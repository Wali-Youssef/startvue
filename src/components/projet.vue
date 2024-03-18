<template>
    <div class="bg-custom-blue">
   <div class="max-w-4xl mx-auto px-4">
        <br>
        <br>
        <br>
        <br>
            <div class="flex flex-wrap -mx-4 ">
              <!-- Colonne de texte -->
              <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <h2 class="text-3xl font-bold mb-6 text-bleuneon relative">
                  03. Mes projets
                  <!-- Barre sous le titre -->
                  <span class="block h-1 w-16 bg-bleuneon mt-2"></span>
                </h2>
               
        
              </div>
            </div>
    </div>
</div>
<div class="flex min-h-screen items-center justify-center bg-custom-blue">
    
  <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/mission.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-3xl font-bold text-white">Mission Bénévolat</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mission Bénévolat est un site conçu pour simplifier la recherche d'associations pour les bénévoles.</p>
        <router-link to="/projet1" class="rounded-full bg-custom-blue py-2 px-3.5 font-com text-sm capitalize text-bleuneon shadow shadow-black/60">Voir plus</router-link>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/randoom.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-3xl font-bold text-white">Randoom</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Randoom est un site qui vous permet de découvrir du contenu audiovisuel de manière aléatoire. </p>
        <button class="rounded-full bg-custom-blue py-2 px-3.5 font-com text-sm capitalize text-bleuneon shadow shadow-black/60">Voir plus</button>
      </div>
    </div>
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="../assets/indiglu.png" alt="" />
      </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class=" text-3xl font-bold text-white">Indiglu Maghreb</h1>
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Indiglu Maghreb est un site web qui vise à sensibiliser les populations du Maghreb sur le diabète. </p>
        <router-link to="/competence" class="rounded-full bg-custom-blue py-2 px-3.5 font-com text-sm capitalize text-bleuneon shadow shadow-black/60">Voir plus</router-link>
      </div>
    </div>
  </div>

</div>






</template>

