<template>
  <div v-if="data">
    <h3> hr </h3>

    <q-pagination v-model="query.page" :min="1" :max="totalPages" />

    <table class="q-table bordered highlight cell-separator striped-odd responsive">
      <thead>
        <tr>
          <th v-for="field in fieldsDisplay" class="text-center"> {{ field.title }} </th>

          <th class="text-right"> Műveletek </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="line in lines">
          <td class="text-left" data-th="Azonosító"> {{ line.id_employee }} </td>

          <td class="text-right" data-th="Név"> {{ line.name }} </td>

          <td class="text-right" data-th="E-mail cím"> {{ line.email }} </td>

          <td class="text-right" data-th="Bejelentkezhet">
            <QBtn v-if="line.active === '0'">
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

    <q-pagination v-model="query.page" :min="1" :max="totalPages" />
  </div>
</template>

<script>
  import {
    QBtn,
    QIcon,
    QPagination,
  } from 'quasar';

  export default {
    name: 'humanResouceEmployees',
    data() {
      return {
        query: {
          page: 1,
        },
      };
    },
    created() {
      this.$store.dispatch('humanResource/employees/getData');
    },
    computed: {
      data() {
        return this.$store.state.humanResource.employees.data;
      },
      lines() {
        return this.data.lines;
      },
      totalPages() {
        return this.data.grid_header_data.totalPages;
      },
      fieldsDisplay() {
        return this.data.grid_header_data.fields_display;
      },
    },
    components: {
      QBtn,
      QIcon,
      QPagination,
    },
  };

</script>

<style scoped>


</style>
