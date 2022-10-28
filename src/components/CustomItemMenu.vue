<template>
    <li class="nav-item">
        <router-link
            class="nav-link"
            :to="{ name: link.to }">
            {{ link.name }}
        </router-link>
    </li>
</template>

<script>
export default {
    props: {
        link: {
            type: Object,
            required: true
        }
    }
}
</script>