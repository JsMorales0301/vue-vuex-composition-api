<template>
    <h1 class="text-center animate__backInDown">Get All Characters</h1>
    <div v-if="!isLoading" class="container d-flex justify-content-center align-items-center flex-wrap gap-4">
        <Card :characters="characters" />
    </div>

    <div v-else class="d-flex justify-content-center align-items-center">
        <div class="container-alert">
            <loading />
        </div>
    </div>

    <div v-if="!isLoading" class="d-flex justify-content-center">
        <Pagination 
            @onNextPage="nextPage" 
            @onLastPage="lastPage"
            :page="page"/>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';
import rickApi from '@/api/rickMorty';


export default {
    components: {
        Card: defineAsyncComponent(() => import('@/modules/characters/components/Card.vue')),
        Pagination: defineAsyncComponent(() => import('@/modules/characters/components/Pagination.vue')),
        Loading: defineAsyncComponent(() => import('@/modules/characters/components/Loading.vue'))
    },
    data(){
        return {
            characters: null,
            page: 1,
            isLoading: true
        }
    },
    methods: {
        async getAllCharacters(){
            const { data } = await rickApi.get('/character', {
                params: {
                    page: this.page
                }
            })

            const { results } = data
            
            this.characters = results
            this.isLoading =  false
        },
        nextPage(){
            this.page += 1
            this.scrollTop()
        },
        lastPage(){
            (this.page <= 1) 
                ? this.page = 1 
                : this.page -= 1
            this.scrollTop()    
        },
        scrollTop(){
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    created(){
        this.getAllCharacters()
    },
    watch: {
        page(){
            this.getAllCharacters()
        }
    }
}

</script>