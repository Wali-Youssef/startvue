<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import intro from '@/components/intro.vue';
import moi from '@/components/moi.vue';
import competence from '@/components/competence.vue';
import projet from '@/components/projet.vue';

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
    components: { competence, moi, intro, projet}
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
  <main class="font-fira-code text-white  ">
<intro /> 

<moi />

<competence />

<projet />

  </main>
</template>
