<template>
   <b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Author Lists</h4>
                           </template>
                            <template v-slot:headerAction>
                              <router-link to="/add-author" class="btn btn-primary text-white">Add New Author</router-link>
                           </template>
                        <template v-slot:body>
                           <div class="table-responsive">
                              <table class="data-tables table table-striped table-bordered" style="width:100%">
                                 <thead>
                                    <tr>
                                       <th style="width: 5%;">No</th>
                                       <th style="width: 5%;">Profile</th>
                                       <th style="width: 20%;">Author Name</th>
                                       <th style="width: 60%;">Author Description</th>
                                       <th style="width: 10%;">Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="(book,index) in books" :key="index">
                                       <td>{{index+1}}</td>
                                       <td>
                                          <img :src="book.src" class="img-fluid avatar-50 rounded" alt="author-profile">
                                       </td>
                                       <td>{{book.name}}</td>
                                       <td>
                                          <p class="mb-0">{{book.description}}</p>
                                       </td>
                                       <td>
                                          <div class="flex align-items-center list-user-action">
                                             <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit" href="/add-category"><i class="ri-pencil-line"></i></a>
                                             <a class="bg-primary" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete" href="#"><i class="ri-delete-bin-line"></i></a>
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
export default {
  name: 'Author',
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  watch: {
  },
  methods: {
  },
  data () {
    return {
      books: [
        {
          name: 'Jhone Steben',
          src: require('../../assets/images/user/01.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'John Klok',
          src: require('../../assets/images/user/02.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Ichae Semos',
          src: require('../../assets/images/user/03.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Jules Boutin',
          src: require('../../assets/images/user/04.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Kusti Franti',
          src: require('../../assets/images/user/05.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'David King',
          src: require('../../assets/images/user/06.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Henry Jurk',
          src: require('../../assets/images/user/07.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Attilio Marzi',
          src: require('../../assets/images/user/08.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Argele Intili',
          src: require('../../assets/images/user/09.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        },
        {
          name: 'Attilio Marzi',
          src: require('../../assets/images/user/10.jpg'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet'
        }
      ]
    }
  }
}
</script>
