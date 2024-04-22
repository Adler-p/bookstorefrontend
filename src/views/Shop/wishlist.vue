<template>
  <b-container fluid class="checkout-content">
               <b-row>
                  <b-col sm="12">
                     <iq-card headerClass="iq-border-bottom mb-0">
                        <template v-slot:headerTitle>
                              <h4 class="card-title">Wishlist</h4>
                           </template>
                        <template v-slot:body>
                           <ul class="list-inline p-0 m-0">
                              <li v-for="(list,index) in lists" :key="index" class="checkout-product">
                                 <b-row class="align-items-center">
                                    <b-col sm="3" lg="2">
                                       <b-row class="align-items-center">
                                          <b-col sm="3">
                                             <a href="#" class="badge badge-danger"><i :class="list.icon"></i></a>
                                          </b-col>
                                          <b-col sm="9">
                                             <span class="checkout-product-img">
                                             <a href="#"><img class="img-fluid rounded" :src="list.src" alt=""></a>
                                             </span>
                                          </b-col>
                                       </b-row>
                                    </b-col>
                                    <b-col sm="3" lg="4">
                                       <div class="checkout-product-details">
                                          <h5>{{list.title}}</h5>
                                          <p class="text-success">{{list.text}}</p>
                                          <div class="price">
                                             <h5>{{list.price}}</h5>
                                          </div>
                                       </div>
                                    </b-col>
                                    <b-col sm="6" lg="6">
                                       <b-row>
                                          <b-col sm="8">
                                             <b-row class="align-items-center mt-2">
                                                <b-col sm="7" lg="6">
                                                   <button type="button" class="qty-btn" id="btn-minus"><i class="fa fa-minus"></i></button>
                                                   <input type="text" id="quantity" value="0">
                                                   <button type="button" class="qty-btn" id="btn-plus"><i class="fa fa-plus"></i></button>
                                                </b-col>
                                                <b-col sm="5" lg="6">
                                                   <span class="product-price">{{list.price}}</span>
                                                </b-col>
                                             </b-row>
                                          </b-col>
                                          <b-col sm="4" pl-0>
                                             <a href="#"><button type="submit" class="btn btn-primary view-more">Add To Cart</button></a>
                                          </b-col>
                                       </b-row>
                                    </b-col>
                                 </b-row>
                              </li>
                           </ul>
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
  name: 'Wishlist',
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
      lists: [
        {
          icon: 'ri-close-fill',
          src: require('../../assets/images/checkout/01.jpg'),
          title: 'The Raze night book',
          text: 'In stock',
          price: '$180.00'
        },
        {
          icon: 'ri-close-fill',
          src: require('../../assets/images/checkout/02.jpg'),
          title: 'Harsh Reality book',
          text: 'In stock',
          price: '$250.00'
        },
        {
          icon: 'ri-close-fill',
          src: require('../../assets/images/checkout/03.jpg'),
          title: 'The House in the Fog',
          text: 'In stock',
          price: '$399.00'
        }
      ]
    }
  }
}
</script>
