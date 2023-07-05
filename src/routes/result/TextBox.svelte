<script lang="ts">
    export let heading: number;
    export let label: string;
    export let text: string;
</script>

<div>
    <p>
        {#if heading === 1}
            <span class="heading-one">{label}: </span>
        {:else if heading === 2}
            <span class="heading-two">{label}: </span>
        {:else if heading === 3}
            <span class="heading-three">{label}: </span>
        {/if}
        {text}
    </p>
</div>

<style>
    div {
        display: flex;
        margin: 0 0 8px;
    }

    p {
        line-height: var(--line-height);
    }

    .heading-one {
        font-size: 24px;
        font-weight: 600;
    }

    .heading-two {
        font-size: 21px;
        font-weight: 600;
    }

    .heading-three {
        font-weight: 600;
    }
</style>
