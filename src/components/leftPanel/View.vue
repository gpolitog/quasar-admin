<template>
  <div>
    <q-list no-border link inset-separator>
      <q-collapsible label="HR">
        <q-side-link item to="/human-resource/employees">
          <q-item-main label="Dolgozók" />
        </q-side-link>
      </q-collapsible>
    </q-list>
  </div>
</template>

<script>
  import {
    QList,
    QCollapsible,
    QSideLink,
    QItemMain,
  } from 'quasar';

  export default {
    name: 'left-panel',
    components: {
      QList,
      QCollapsible,
      QSideLink,
      QItemMain,
    },
  };

</script>

<style scoped>


</style>
