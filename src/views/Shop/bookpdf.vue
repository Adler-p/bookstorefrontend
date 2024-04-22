<template>
<b-container fluid>
    <b-row>
        <b-col sm="12">
          <iq-card className="book-detail" bodyClass="p-0">
            <template v-slot:body>
              <iframe :src="pdf"  style="width: 100%; height: 90vh;"></iframe>
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
  name: 'Bookpdf',
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
      pdf: require('../../assets/pdf/book.pdf')
    }
  }
}
</script>
