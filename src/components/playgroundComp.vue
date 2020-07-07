<template>
  <div class="client-table">
    <b-table bordered striped caption-top outlined :fields="fields" :items="items" >

      <template v-slot:cell(index)="data">
         <i>{{ data.index + 1 }}</i>
      </template>
      
      <template v-slot:cell(name)="data">
        <i>{{ data.item.first_name }} {{ data.item.last_name }}</i>
      </template>

      <template v-slot:cell(email)="data">
        <i>{{ data.value }}</i>
      </template>

      <template v-slot:cell(image)="data">
         <img class="client-img" :src="data.item.avatar"/>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ['items'], 
  data() {
    return {
      fields: [ // fields stores the column's names
        'index',
        // one column used for first name and last name
        { key: 'name', label: 'Full Name' },
        'email',
        'image',
      ],
    }
  },
}
</script>

<style>
   .table > thead > tr > th {
      text-align: center
   }
   .table > tbody > tr > td {
      text-align: center;
      vertical-align: middle;
   }
   .client-table{
      display: flex;
      justify-content: center;
      margin-left:40px;
      margin-right:40px;
   }
   .client-img{
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 45%;
      border-radius: 10px; 
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   }
</style>