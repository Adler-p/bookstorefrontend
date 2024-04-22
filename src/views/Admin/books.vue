<template>
  <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                         <template v-slot:headerTitle>
                              <h4 class="card-title">book Lists</h4>
                           </template>
                           <template v-slot:headerAction>
                              <router-link to="/add-book" class="btn btn-primary text-white">Add New book</router-link>
                           </template>
                        <template v-slot:body>
                           <div class="table-responsive">
                              <table class="data-tables table table-striped table-bordered" style="width:100%">
                                <thead>
                                    <tr>
                                        <th style="width: 3%;">No</th>
                                        <th style="width: 12%;">Book Image</th>
                                        <th style="width: 15%;">Book Name</th>
                                        <th style="width: 15%;">Book Catrgory</th>
                                        <th style="width: 7%;">Book Price</th>
                                        <th style="width: 15%;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(book,index) in books" :key="index">
                                        <td>{{index+1}}</td>
                                        <td><img class="img-fluid rounded" :src="book.src" alt=""></td>
                                        <td>{{book.name}}</td>
                                        <td>{{book.genre.name}}</td>
                                        <td>{{book.price}}</td>
                                        <td>
                                           <div class="flex align-items-center list-user-action">
                                            <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="Edit" :href="`/edit-book/${book._id}`"><i class="ri-pencil-line"></i></a>
                                            <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" @click="deleteBook(book._id)" ><i class="ri-delete-bin-line"></i></a>
                                          </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                           </div>
                        </template>
                     </iq-card>
                  </b-col>
               </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'
export default {
  name: 'Book',
  mounted () {
    core.index()
    this.getData()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
    getData () {
      const that = this
      axios.get('/books')
        .then(response => {
          that.books = response
        })
        .catch(error => {
          console.error(error)
        })
    },
    deleteBook (id) {
      axios.delete('/books/' + id)
        .then(response => {
          this.getData()
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  // require('../../assets/images/browse-books/01.jpg')
  data () {
    return {
      books: []
    }
  }
}
</script>
