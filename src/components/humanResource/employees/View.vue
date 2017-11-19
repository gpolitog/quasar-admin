<template>
  <div>
    hr
  </div>
</template>

<script>
  export default {
    name: 'humanResouceEmployees',
    created() {
      this.$store.dispatch('humanResource/employees/getAll');
    },
    computed: {
      employees() {
        return this.$store.state.humanResource.employees.all;
      },
    },
  };
</script>

<style scoped>

</style>
