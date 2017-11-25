<template>
  <div>
    <h3> hr </h3>

    <table class="q-table bordered highlight cell-separator striped-odd responsive">
      <thead>
        <tr>
          <th class="text-left"> Azonosító </th>

          <th class="text-right"> Név </th>

          <th class="text-right"> E-mail cím </th>

          <th class="text-right"> Bejelentkezhet </th>

          <th class="text-right"> Műveletek </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="employee in employees">
          <td class="text-left" data-th="Azonosító"> {{ employee.id_employee }} </td>

          <td class="text-right" data-th="Név"> {{ employee.name }} </td>

          <td class="text-right" data-th="E-mail cím"> {{ employee.email }} </td>

          <td class="text-right" data-th="Bejelentkezhet">
            <QBtn v-if="employee.active === '0'">
              <QIcon name="check" />
            </QBtn>

            <QBtn v-else>
              <QIcon name="clear" />
            </QBtn>
          </td>

          <td class="text-right" data-th="Műveletek">
            <QBtn>
              <QIcon name="edit" />
            </QBtn>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {
    QBtn,
    QIcon,
  } from 'quasar';

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
    components: {
      QBtn,
      QIcon,
    },
  };

</script>

<style scoped>


</style>
