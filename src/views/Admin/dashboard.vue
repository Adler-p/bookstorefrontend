<template>
  <b-container fluid>
      <b-row>
         <b-col md="6" lg="3">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height">
               <template v-slot:body>
                  <div class="d-flex align-items-center">
                     <div class="rounded-circle iq-card-icon bg-primary"><i class="ri-user-line"></i></div>
                     <div class="text-left ml-3">
                        <h2 class="mb-0"><span class="counter">5000</span></h2>
                        <h5 class="">Users</h5>
                     </div>
                  </div>
               </template>
            </iq-card>
         </b-col>
         <b-col md="6" lg="3">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height">
               <template v-slot:body>
                  <div class="d-flex align-items-center">
                     <div class="rounded-circle iq-card-icon bg-danger"><i class="ri-book-line"></i></div>
                     <div class="text-left ml-3">
                        <h2 class="mb-0"><span class="counter">4.8</span>k</h2>
                        <h5 class="">Books</h5>
                     </div>
                  </div>
               </template>
            </iq-card>
         </b-col>
         <b-col md="6" lg="3">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height">
               <template v-slot:body>
                  <div class="d-flex align-items-center">
                     <div class="rounded-circle iq-card-icon bg-warning"><i class="ri-shopping-cart-2-line"></i></div>
                     <div class="text-left ml-3">
                        <h2 class="mb-0"><span class="counter">1.2</span>k</h2>
                        <h5 class="">Sale</h5>
                     </div>
                  </div>
               </template>
            </iq-card>
         </b-col>
         <b-col md="6" lg="3">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height">
               <template v-slot:body>
                  <div class="d-flex align-items-center">
                     <div class="rounded-circle iq-card-icon bg-info"><i class="ri-radar-line"></i></div>
                     <div class="text-left ml-3">
                        <h2 class="mb-0"><span class="counter">690</span></h2>
                        <h5 class="">Orders</h5>
                     </div>
                  </div>
               </template>
            </iq-card>
         </b-col>
         <b-col md="4">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height" headerClass="align-items-center">
               <template v-slot:headerTitle>
                     <h4 class="card-title mb-0">Daily Sales</h4>
                  </template>
                  <template v-slot:body>
                  <ApexChart element="home-chart-02" :chartOption="chart1" style="min-height: 200px;"/>
               </template>
            </iq-card>
         </b-col>
         <b-col md="4">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height" headerClass="align-items-center">
               <template v-slot:headerTitle>
                     <h4 class="card-title mb-0">Summary</h4>
               </template>
               <template v-slot:body>
                  <ul class="list-inline p-0 mb-0">
                     <li>
                        <div class="iq-details mb-2">
                           <span class="title">Income</span>
                           <div class="percentage float-right text-primary">95 <span>%</span></div>
                           <div class="iq-progress-bar-linear d-inline-block w-100">
                                 <b-progress :value="95" class="iq-progress-bar" variant="primary" />
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="iq-details mb-2">
                           <span class="title">Profit</span>
                           <div class="percentage float-right text-warning">72 <span>%</span></div>
                           <div class="iq-progress-bar-linear d-inline-block w-100">
                              <b-progress :value="72" class="iq-progress-bar" variant="warning" />
                           </div>
                        </div>
                     </li>
                     <li>
                        <div class="iq-details mb-2">
                           <span class="title">Expenses</span>
                           <div class="percentage float-right text-info">75 <span>%</span></div>
                           <div class="iq-progress-bar-linear d-inline-block w-100">
                              <b-progress :value="75" class="iq-progress-bar" variant="info" />
                           </div>
                        </div>
                     </li>
                  </ul>
               </template>
            </iq-card>
         </b-col>
         <b-col md="4">
            <iq-card className="iq-card-block iq-card-stretch iq-card-height">
                  <template v-slot:body>
                     <h4 class="text-uppercase text-black mb-0">Session(Now)</h4>
                     <div class="d-flex justify-content-between align-items-center">
                        <div class="font-size-80 text-black">12</div>
                        <div class="text-left">
                           <p class="m-0 text-uppercase font-size-12">1 Hours Ago</p>
                           <div class="mb-1 text-black">1500<span class="text-danger"><i class="ri-arrow-down-s-fill"></i>3.25%</span></div>
                           <p class="m-0 text-uppercase font-size-12">1 Day Ago</p>
                           <div class="mb-1 text-black">1890<span class="text-success"><i class="ri-arrow-down-s-fill"></i>1.00%</span></div>
                           <p class="m-0 text-uppercase font-size-12">1 Week Ago</p>
                           <div class="text-black">1260<span class="text-danger"><i class="ri-arrow-down-s-fill"></i>9.87%</span></div>
                        </div>
                     </div>
                    <ApexChart element="wave-chart-7" :chartOption="waveChart7" :isLive="true"  style="min-height: 70px;"/>
                  </template>
            </iq-card>
         </b-col>
         <b-col sm="12">
            <iq-card className=" iq-card-block iq-card-stretch iq-card-height">
               <template v-slot:headerTitle>
                     <h4 class="card-title">Open Invoices</h4>
                  </template>
                  <template v-slot:headerAction>
                     <b-dropdown id="dropdownMenuButton1" right variant="none" data-toggle="dropdown">
                     <template v-slot:button-content>
                     <i class="ri-more-fill"></i>
                     </template>
                     <b-dropdown-item><i class="ri-eye-fill mr-2"></i>{{ $t('dropdown.view') }}</b-dropdown-item>
                     <b-dropdown-item><i class="ri-delete-bin-6-fill mr-2"></i>{{ $t('dropdown.delete') }}</b-dropdown-item>
                     <b-dropdown-item><i class="ri-pencil-fill mr-2"></i>{{ $t('dropdown.edit') }}</b-dropdown-item>
                     <b-dropdown-item><i class="ri-printer-fill mr-2"></i>{{ $t('dropdown.print') }}</b-dropdown-item>
                     <b-dropdown-item><i class="ri-file-download-fill mr-2"></i>{{ $t('dropdown.download') }}</b-dropdown-item>
                     </b-dropdown>
                  </template>
               <template v-slot:body>
                  <div class="table-responsive">
                     <table class="table mb-0 table-borderless">
                        <thead>
                           <tr>
                              <th scope="col">Client</th>
                              <th scope="col">Date</th>
                              <th scope="col">Invoice</th>
                              <th scope="col">Amount</th>
                              <th scope="col">atatus</th>
                              <th scope="col">Action</th>

                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>Ira Membrit</td>
                              <td>18/10/2019</td>
                              <td>20156</td>
                              <td>$1500</td>
                              <td><div class="badge badge-pill badge-success">Paid</div></td>
                              <td>Copy</td>
                           </tr>
                           <tr>
                              <td>Pete Sariya</td>
                              <td>26/10/2019</td>
                              <td>7859</td>
                              <td>$2000</td>
                              <td><div class="badge badge-pill badge-success">Paid</div></td>
                              <td>Send Email</td>
                           </tr>
                           <tr>
                              <td>Cliff Hanger</td>
                              <td>18/11/2019</td>
                              <td>6396</td>
                              <td>$2500</td>
                              <td><div class="badge badge-pill badge-danger">Past Due</div></td>
                              <td>Before Due</td>
                           </tr>
                           <tr>
                              <td>Terry Aki</td>
                              <td>14/12/2019</td>
                              <td>7854</td>
                              <td>$5000</td>
                              <td><div class="badge badge-pill badge-success">Paid</div></td>
                              <td>Copy</td>
                           </tr>
                           <tr>
                              <td>Anna Mull</td>
                              <td>24/12/2019</td>
                              <td>568569</td>
                              <td>$10000</td>
                              <td><div class="badge badge-pill badge-success">Paid</div></td>
                              <td>Send Email</td>
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
import ApexChart from '../../components/core/charts/ApexChart'
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  components: { ApexChart },
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
      chart1: {
        series: [{
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63]
        }],
        chart: {
          type: 'bar',
          height: 200
        },
        colors: ['rgb(13, 214, 184)'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['s', 'm', 't', 'w', 't', 'f', 's']
        },
        yaxis: {
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      },
      waveChart7: {
        chart: {
          height: 70,
          type: 'area',
          animations: {
            enabled: !0,
            easing: 'linear',
            dynamicAnimation: {
              speed: 1e3
            }
          },
          toolbar: {
            show: !1
          },
          sparkline: {
            enabled: !0
          },
          group: 'sparklines'
        },
        dataLabels: {
          enabled: !1
        },
        stroke: {
          curve: 'smooth'
        },
        series: [{
          data: [44, 55, 57, 56, 61, 58, 63]
        }],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime',
          range: 777600000
        },
        yaxis: {
          max: 100
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          }
        },
        legend: {
          show: !1
        },
        colors: ['var(--iq-primary)']
      }
    }
  }
}
</script>
