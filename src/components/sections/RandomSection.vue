<template>
    <div>
        <h1>Test component</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({
        name: 'random-section',
    })
    export default class RandomSection extends Vue {

    }
</script>