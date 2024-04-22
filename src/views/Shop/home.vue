<template>
  <b-container fluid>
      <b-row>
         <b-col lg="12">
            <iq-card className=" iq-card-block iq-card-stretch iq-card-height" headerClass=" align-items-center position-relative">
            <template v-slot:headerTitle>
                     <h4 class="card-title mb-0">Books</h4>
            </template>
            <template v-slot:headerAction>

            </template>
            <template v-slot:body>
                  <b-row>
                     <div class="col-sm-6 col-md-4 col-lg-3" v-for="(book,index) in books" :key="index">
                        <div class="iq-card iq-card-block iq-card-stretch iq-card-height browse-bookcontent">
                           <div class="iq-card-body p-0">
                              <div class="d-flex align-items-center">
                                 <div class="col-6 p-0 position-relative image-overlap-shadow">
                                    <a href="#"><img class="img-fluid rounded w-100" src="../../assets/images/browse-books/01.jpg" alt=""></a>
                                    <div class="view-book">
                                       <router-link to="/book-page" class="btn btn-sm btn-white">View Book</router-link>
                                    </div>
                                 </div>
                                 <div class="col-6">
                                    <div class="mb-2">
                                       <h6 class="mb-1">{{book.name}}</h6>
                                       <p class="font-size-13 line-height mb-1">{{book.genre.name }}</p>
                                       <div class="d-block line-height">
                                          <span class="font-size-11 text-warning">
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                             <i class="fa fa-star"></i>
                                          </span>
                                       </div>
                                    </div>
                                    <div class="price d-flex align-items-center">
                                       <h6><b>${{ book.price }}</b></h6>
                                    </div>
                                    <div class="iq-product-action">
                                       <a href="#"><i class="ri-shopping-cart-2-fill text-primary"></i></a>
                                       <a href="#" class="ml-2"><i class="ri-heart-fill text-danger"></i></a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </b-row>
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
const $ = require('jquery')
export default {
  name: 'Home',
  mounted () {
    core.index()
    $('#newrealease-slider .slick-active.slick-center').prev('.slick-active').addClass('temp')

    $('#newrealease-slider .slick-active.temp').prev().addClass('temp-1')
    $('#newrealease-slider .slick-active.temp-1').prev().addClass('temp-2')
    $('#newrealease-slider .slick-active.slick-center').next('.slick-active').addClass('temp-next')
    $('#newrealease-slider .slick-active.temp-next').next().addClass('temp-next-1')
    $('#newrealease-slider .slick-active.temp-next-1').next().addClass('temp-next-2')
    $('#newrealease-slider').on('afterChange', function () {
      let SLICKSLIDER = $('.slick-active.slick-center').data('slick-index')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 1) + '"]').addClass('temp')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 2) + '"]').addClass('temp-1')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 3) + '"]').addClass('temp-2')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 1)) + '"]').addClass('temp-next')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 2)) + '"]').addClass('temp-next-1')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 3)) + '"]').addClass('temp-next-2')
    })
    $('#newrealease-slider').on('beforeChange', function () {
      let SLICKSLIDER = $('.slick-active.slick-center').data('slick-index')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 1) + '"]').removeClass('temp')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 2) + '"]').removeClass('temp-1')
      $('#newrealease-slider .slick-active[data-slick-index="' + (SLICKSLIDER - 3) + '"]').removeClass('temp-2')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 1)) + '"]').removeClass('temp-next')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 2)) + '"]').removeClass('temp-next-1')
      $('#newrealease-slider .slick-active[data-slick-index="' + (parseInt(SLICKSLIDER + 3)) + '"]').removeClass('temp-next-2')
    })
    this.getData()
  },
  computed: {
    ...mapGetters({
      rtl: 'Setting/rtlModeState',
      lang: 'Setting/langState'
    })
  },
  watch: {
    'rtl': function () {
      this.option1.rtl = this.rtl
      this.option.rtl = this.rtl
    }
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
    }
  },
  data () {
    return {
      option: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        centerMode: false,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      },
      option1: {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        centerPadding: false,
        variableWidth: true,
        focusOnSelect: true,
        autoplay: false,
        slidesToShow: 7,
        slidesToScroll: 1
      },
      images: [
        {
          src: require('../../assets/images/new_realeases/01.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/02.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/03.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/04.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/05.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/06.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/07.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/08.jpg')
        },
        {
          src: require('../../assets/images/new_realeases/09.jpg')
        }
      ],
      books: []
    }
  }
}
</script>
