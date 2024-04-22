<template>
<b-container fluid>
               <b-row>
                  <b-col sm="12">
                     <iq-card>
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Add Categories</h4>
                        </template>
                        <template v-slot:body>
                           <form>
                              <div class="form-group">
                                 <label>Category Name:</label>
                                 <input type="text" class="form-control">
                              </div>
                              <div class="form-group">
                                 <label>Category Description:</label>
                                 <textarea class="form-control" rows="4"></textarea>
                              </div>
                              <router-link to="/admin/category-list">
                              <button type="submit" class="btn btn-primary">Submit</button>
                              </router-link>
                              <button type="reset" class="btn btn-danger">Reset</button>
                           </form>
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
  name: 'addcategory',
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
    }
  }
}
</script>
