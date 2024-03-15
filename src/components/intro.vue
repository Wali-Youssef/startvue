<template>

      <main class="font-fira-code text-white">
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
        </main>

</template>

<script lang="ts">

import { defineComponent, onMounted } from 'vue';

import TEST from '../components/TEST.vue';



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
                    } else {
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
    }
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

