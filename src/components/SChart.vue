
<template>
    <apexchart :width="width" :options="options" :series="series"></apexchart>
</template>
  
<script>

export default {
    props: ['options', 'series', 'width' ],

    data: () => ({
    }),
}

</script>