<template>
    <div class ="form">
      <h1>The student component</h1>
      {{selected}}
    </div>
</template>

<script>

export default {
    name: 'Student',
   computed:{
     selected(){
       return this.$route.params.selected;
     },
   }
}
</script>