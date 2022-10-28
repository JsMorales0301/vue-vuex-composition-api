<template>
  <h1 class="text-center">Create Character</h1>

    <div class="mt-5 container-fluid">
        <div class="row">
            <div class="col-md-3">
                <FormCreateCharacter />
            </div>
            <div class="col-md-9">
                <TableCharactersCreated />
            </div>
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core';

export default {
    components: { 
        FormCreateCharacter: defineAsyncComponent(() => import('../components/FormCreateCharacter.vue')),
        TableCharactersCreated: defineAsyncComponent(() => import('../components/TableCharactersCreated.vue'))
    }
}
</script>

<style>

</style>