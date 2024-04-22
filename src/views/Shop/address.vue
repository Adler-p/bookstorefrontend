<template>

<div id="address" class="card-block p-0 col-12 show">
<div class="row align-item-center">
   <b-col lg="8">
      <iq-card>
         <template v-slot:headerTitle>
               <h4 class="card-title">Add New Address</h4>
            </template>
         <template v-slot:body>
            <form onsubmit="required()">
               <b-row class="mt-3">
                  <b-col md="6">
                     <div class="form-group">
                        <label>Full Name: *</label>
                        <input type="text" class="form-control" name="fname" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>Mobile Number: *</label>
                        <input type="text" class="form-control" name="mno" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>Flat, House No: *</label>
                        <input type="text" class="form-control" name="houseno" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>Landmark e.g. near apollo hospital:: *</label>
                        <input type="text" class="form-control" name="landmark" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>Town/City: *</label>
                        <input type="text" class="form-control" name="city" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>Pincode: *</label>
                        <input type="text" class="form-control" name="pincode" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label>State: *</label>
                        <input type="text" class="form-control" name="state" required="">
                     </div>
                  </b-col>
                  <b-col md="6">
                     <div class="form-group">
                        <label for="addtype">Address Type</label>
                        <select class="form-control" id="addtype">
                           <option>Home</option>
                           <option>Office</option>
                        </select>
                     </div>
                  </b-col>
                  <b-col md="6">
                     <button id="savenddeliver" type="submit" class="btn btn-primary">Save And Deliver Here</button>
                  </b-col>
               </b-row>
            </form>
         </template>
      </iq-card>
   </b-col>
   <b-col lg="4">
      <iq-card>
         <template v-slot:body>
            <h4 class="mb-2">Nik John</h4>
            <div class="shipping-address">
               <p class="mb-0">9447 Glen Eagles Drive</p>
               <p>Lewis Center, OH 43035</p>
               <p>UTC-5: Eastern Standard Time (EST)</p>
               <p>202-555-0140</p>
            </div>
            <hr>
            <router-link id="deliver-address" to="/checkout-payment" class="btn btn-primary d-block mt-1 next text-white">Deliver To this Address</router-link>
         </template>
      </iq-card>
   </b-col>
   </div>
</div>

</template>
<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
export default {
  name: 'Address',
  mounted () {
    core.index()
  },
  computed: {
    ...mapGetters({
      lang: 'Setting/langState'
    })
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>
