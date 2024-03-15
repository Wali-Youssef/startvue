<script lang="ts">
import { defineComponent, onMounted } from 'vue';


import competence from '@/components/competence.vue';

import { supabase } from "../supabase";
console.log("supabase :", supabase); //


export default defineComponent({
    name: 'TypeEffectComponent',
    setup() {
        onMounted(() => {
            typeEffectInit();
        });
        function typeEffect(element: HTMLElement, speed: number, callback: () => void): void {
            const text: string | null = element.getAttribute('data-text');
            if (text) {
                element.innerText = "";
                let i: number = 0;
                const timer = setInterval(() => {
                    if (i < text.length) {
                        element.append(text.charAt(i));
                        i++;
                    }
                    else {
                        clearInterval(timer);
                        callback();
                    }
                }, speed);
            }
        }
        function typeEffectInit(): void {
            const firstElements: NodeListOf<HTMLElement> = document.querySelectorAll('.first');
            let delay: number = 0;
            firstElements.forEach((element, index) => {
                setTimeout(() => {
                    typeEffect(element, 100, () => {
                        if (index === firstElements.length - 1) {
                            const restElements: NodeListOf<HTMLElement> = document.querySelectorAll('.rest');
                            restElements.forEach((element) => {
                                element.classList.remove('opacity-0');
                                element.classList.add('fade-in-up');
                            });
                        }
                    });
                }, delay);
                delay += (element.getAttribute('data-text')?.length ?? 0) * 100;
            });
        }
    },
    components: { competence }
});
</script>

<style>
.fade-in-up {
  animation: fadeInUp 0.5s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Commencez avec le texte invisible pour les éléments avec la classe 'rest' */
.rest {
  opacity: 0;
}


</style>

<template>
  
  <main class="font-fira-code text-white pt-20  ">
    <div class="bg-custom-blue h-screen p-8 pt-[50px]">
      <div class="max-w-4xl mx-auto">
        <p class="text-sm md:text-base font-fira-code first" data-text="Bonjour, je m'appelle"></p>
        <h1 class="text-5xl md:text-8xl font-bold mt-2 font-fira-code first" data-text="Youssef Wali."></h1>
        <p class="text-4xl md:text-7xl font-bold mt-4 font-fira-code rest">J'adore le développement web !</p>
        <p class="text-sm md:text-base mt-6 font-fira-code rest">
          Je suis actuellement en 2eme année de BUT métiers du multimédia et de l'internet options développement web.
        </p>
        <p class="text-sm md:text-base mt-4 font-fira-code rest">
          J'aime apprendre de nouvelles compétences et les mettre en œuvre dans la vraie vie !
        </p>
      </div>
    </div>

    <section class="py-0 bg-custom-blue" id="qui-je-suis">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
          <!-- Colonne de texte -->
          <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 class="text-3xl font-bold mb-6 text-bleuneon relative">
              01. Qui je suis ?
              <!-- Barre sous le titre -->
              <span class="block h-1 w-16 bg-bleuneon mt-2"></span>
            </h2>
            <p class="mb-4">
              Bonjour! Je suis Youssef Wali, j'habite a audincourt .J'ai fait un bac général et je suis actuellement en
              2eme année de BUT métiers du multimédia et de l'internet options développement web.
            </p>
            <p class="mb-4">
              Je suis une personne créative, ponctuelle, dédiée, orientée vers les objectifs avec de bonnes valeurs
              morales et éthiques...
            </p>
            <!-- Continuez avec plus de détails -->
          </div>
          
          <!-- Colonne pour l'image avec le filtre et les barres -->
          <div class="w-full lg:w-1/2 px-4 lg:mt-14 relative">
            <!-- Ajoutez 'lg:mt-10' pour descendre l'image en mode desktop -->
            <div class="w-full h-auto overflow-hidden rounded-lg shadow-lg">
              <img src="../assets/IMG_9527.jpg" alt="À propos de moi" class="w-full h-full object-cover" />
              <!-- Overlay pour le filtre -->
              <div class="absolute inset-0 bg-black opacity-25"></div>
              <!-- Barres -->
              <div class="absolute inset-0 border-4 border-bleuneon"></div>
              <!-- Remplacez 'border-bleuneon' par la couleur souhaitée -->
              
            </div>
          </div>
        </div>
      </div>
    </section>

    <competence />

  </main>
</template>