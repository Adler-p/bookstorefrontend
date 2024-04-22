<template>
  <b-container fluid checkout-content>
               <b-row>
                  <div id="cart" class="card-block show p-0 col-12">
                     <b-row class="align-item-center">
                        <b-col lg="8">
                           <iq-card headerClass="iq-border-bottom mb-0">
                              <template v-slot:headerTitle>
                                    <h4 class="card-title">Shopping Cart</h4>
                              </template>
                              <template v-slot:body>
                                 <ul class="list-inline p-0 m-0">
                                    <li v-for="(list,index) in lists" :key="index" class="checkout-product">
                                       <b-row class="align-items-center">
                                          <b-col sm="2">
                                             <span class="checkout-product-img">
                                             <a href="#"><img class="img-fluid rounded" :src="require('../../assets/images/checkout/01.jpg')" alt=""></a>
                                             </span>
                                          </b-col>
                                          <b-col sm="4">
                                             <div class="checkout-product-details">
                                                <h5>{{list.title}}</h5>
                                                <p class="text-success">{{list.text}}</p>
                                                <div class="price">
                                                   <h5>{{list.price}}</h5>
                                                </div>
                                             </div>
                                          </b-col>
                                          <b-col sm="6">
                                             <b-row>
                                                <b-col sm="10">
                                                   <b-row class="align-items-center mt-2">
                                                      <b-col sm="7" md="6">
                                                         <button type="button" class="qty-btn" id="btn-minus"><i class="fa fa-minus"></i></button>
                                                         <input type="text" id="quantity" value="0">
                                                         <button type="button" class="qty-btn" id="btn-plus"><i class="fa fa-plus"></i></button>
                                                      </b-col>
                                                      <b-col sm="5" md="6">
                                                         <span class="product-price">{{list.price}}</span>
                                                      </b-col>
                                                   </b-row>
                                                </b-col>
                                                <b-col sm="2">
                                                   <a href="#" class="text-dark font-size-20"><i class="ri-delete-bin-7-fill"></i></a>
                                                </b-col>
                                             </b-row>
                                          </b-col>
                                       </b-row>
                                    </li>
                                 </ul>
                              </template>
                           </iq-card>
                        </b-col>
                        <b-col lg="4">
                           <iq-card>
                              <template v-slot:body>
                                 <p>Options</p>
                                 <div class="d-flex justify-content-between">
                                    <span>Coupons</span>
                                    <span><a href="#"><strong>Apply</strong></a></span>
                                 </div>
                                 <hr>
                                 <p><b>Price Details</b></p>
                                 <div class="d-flex justify-content-between mb-1">
                                    <span>Total MRP</span>
                                    <span>$829</span>
                                 </div>
                                 <div class="d-flex justify-content-between mb-1">
                                    <span>Bag Discount</span>
                                    <span class="text-success">-20$</span>
                                 </div>
                                 <div class="d-flex justify-content-between mb-1">
                                    <span>Estimated Tax</span>
                                    <span>$15</span>
                                 </div>
                                 <div class="d-flex justify-content-between mb-1">
                                    <span>EMI Eligibility</span>
                                    <span><a href="#">Details</a></span>
                                 </div>
                                 <div class="d-flex justify-content-between">
                                    <span>Delivery Charges</span>
                                    <span class="text-success">Free</span>
                                 </div>
                                 <hr>
                                 <div class="d-flex justify-content-between">
                                    <span class="text-dark"><strong>Total</strong></span>
                                    <span class="text-dark"><strong>$824</strong></span>
                                 </div>
                                 <router-link id="place-order" to="/checkout-address" class="btn btn-primary d-block mt-3 next text-white">Place order</router-link>
                              </template>
                           </iq-card>
                           <iq-card bodyClass="p-0 iq-checkout-policy ">
                              <template v-slot:body>
                                 <ul class="p-0 m-0">
                                    <li v-for="(item,index) in items" :key="index" class="d-flex align-items-center">
                                       <div class="iq-checkout-icon">
                                          <i :class="item.icon"></i>
                                       </div>
                                       <h6><b>{{item.title}}</b></h6>
                                    </li>
                                 </ul>
                              </template>
                           </iq-card>
                        </b-col>
                     </b-row>
                  </div>
                  <div id="address" class="card-block p-0 col-12">
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
                                          <button id="savenddeliver" type="submit" class="btn btn-primary text-white">Save And Deliver Here</button>
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
                                 <a id="deliver-address" href="/checkout-payment" class="btn btn-primary d-block mt-1 next text-white">Deliver To this Address</a>
                              </template>
                           </iq-card>
                        </b-col>
                      </div>
                  </div>
                  <div id="payment" class="card-block p-0 col-12">
                     <b-row class="align-item-center">
                        <b-col lg="8">
                           <iq-card>
                              <template v-slot:headerTitle>
                                    <h4 class="card-title">Payment Options</h4>
                                 </template>
                              <template v-slot:body>
                                 <div class="d-flex justify-content-between align-items-center">
                                    <div class="d-flex justify-content-between align-items-center">
                                       <img src="../../assets/images/booking/cart.png" alt="" height="40" width="50">
                                       <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>
                                    </div>
                                    <span>Nik John</span>
                                    <span>28/2020</span>
                                 </div>
                                 <form class="mt-3">
                                    <div class="d-flex align-items-center">
                                       <span>Enter CVV: </span>
                                       <div class="cvv-input ml-3 mr-3">
                                          <input type="text" class="form-control" required="">
                                       </div>
                                       <button type="submit" class="btn btn-primary text-white">Continue</button>
                                    </div>
                                 </form>
                                 <hr>
                                 <div class="card-lists">
                                    <div class="form-group">
                                       <div class="custom-control custom-radio">
                                          <input type="radio" id="credit" name="customRadio" class="custom-control-input">
                                          <label class="custom-control-label" for="credit"> Credit / Debit / ATM Card</label>
                                       </div>
                                       <div class="custom-control custom-radio">
                                          <input type="radio" id="netbaking" name="customRadio" class="custom-control-input">
                                          <label class="custom-control-label" for="netbaking"> Net Banking</label>
                                       </div>
                                       <div class="custom-control custom-radio">
                                          <input type="radio" id="emi" name="emi" class="custom-control-input">
                                          <label class="custom-control-label" for="emi"> EMI (Easy Installment)</label>
                                       </div>
                                       <div class="custom-control custom-radio">
                                          <input type="radio" id="cod" name="cod" class="custom-control-input">
                                          <label class="custom-control-label" for="cod"> Cash On Delivery</label>
                                       </div>
                                    </div>
                                 </div>
                                 <hr>
                                 <div class="add-card">
                                    <a href="#"><span><i class="ri-add-box-line mr-2 font-size-18 text-white"></i>Add Gift Card</span></a>
                                 </div>
                              </template>
                           </iq-card>
                        </b-col>
                        <b-col lg="4">
                           <iq-card>
                              <template v-slot:body>
                                 <h4 class="mb-2">Price Details</h4>
                                 <div class="d-flex justify-content-between">
                                    <span>Price 3 Items</span>
                                    <span><strong>$1000.00</strong></span>
                                 </div>
                                 <div class="d-flex justify-content-between">
                                    <span>Delivery Charges</span>
                                    <span class="text-success">Free</span>
                                 </div>
                                 <hr>
                                 <div class="d-flex justify-content-between">
                                    <span>Amount Payable</span>
                                    <span><strong>$1000.00</strong></span>
                                 </div>
                              </template>
                           </iq-card>
                        </b-col>
                     </b-row>
              </div>
               </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import { mapGetters } from 'vuex'
import axios from '../../axios.js'
export default {
  name: 'Checkout',
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
      const user = JSON.parse(localStorage.getItem('app-userInfo'))
      axios.get(`/carts/${user._id}`)
        .then(response => {
          that.lists = response
        })
        .catch(_error => {
          axios.post(`/carts`, { customer_id: user._id })
            .then(response => {
              axios.get(`/carts/${user._id}`, { user })
                .then(response => {
                  that.lists = response.items
                })
                .catch(error => {
                  console.error(error)
                })
            })
            .catch(error => {
              console.error(error)
            })
        })
    }
  },
  data () {
    return {
      items: [
        {
          icon: 'ri-checkbox-line',
          title: 'Security policy (Safe and Secure Payment.)'
        },
        {
          icon: 'ri-truck-line',
          title: 'Delivery policy (Home Delivery.)'
        },
        {
          icon: 'ri-arrow-go-back-line',
          title: 'Return policy (Easy Return.)'
        }
      ],
      lists: []
    }
  }
}
</script>
