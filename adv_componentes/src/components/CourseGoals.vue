<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" anotherprop="asdasda"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ["finish the course", "lear vue"]
        }
    },
}
</script>