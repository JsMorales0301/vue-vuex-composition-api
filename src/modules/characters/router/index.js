
export default {
    name: 'character',
    component: () => import('@/modules/characters/layouts/CharacterLayout.vue'),
    children: [
        {
            path: '',
            name: 'get-all-characters',
            component: () => import('@/modules/characters/pages/GetAllCharacters.vue')
        },
        {
            path: '/get-single-character',
            name: 'get-single-character',
            component: () => import('@/modules/characters/pages/GetSingleCharacter.vue'),
        },
        {
            path: '/get-multiple-characters',
            name: 'get-multiple-characters',
            component: () => import('@/modules/characters/pages/GetMultipleCharacters.vue')
        },
        {
            path: '/create-character',
            name: 'create-character',
            component: () => import('@/modules/characters/pages/CreateCharacter.vue')
        }
    ]
}