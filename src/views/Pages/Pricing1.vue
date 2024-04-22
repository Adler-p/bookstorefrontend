<template>
  <b-container fluid>
    <b-row>
      <b-col lg="3" md="6" sm="12" v-for="(item,index) in cards" :key="index">
        <iq-card body-class="border text-center rounded" :class="item.active ? 'bg-primary text-white' : ''">
          <template v-slot:body>
            <span class="font-size-16 text-uppercase" v-if="item.plan !== ''">{{ item.plan }}</span>
            <h2 class="mb-4 display-3 font-weight-bolder" :class="item.active ? 'text-white' : ''">
              {{ item.amount }}<small class="font-size-14 " :class="item.active ? 'text-white' : 'text-muted'">{{ item.duration }}</small>
            </h2>
            <ul class="list-unstyled mb-0">
              <li>{{ item.description1 }}</li>
              <li>{{ item.description2 }}</li>
              <li>{{ item.description3 }}</li>
              <li>{{ item.description4 }}</li>
              <li>{{ item.description5 }}</li>
            </ul>
            <b-button :variant="item.active ? 'light' : 'primary'" :class="item.buttonClass">{{ item.button }}</b-button>
          </template>
        </iq-card>
      </b-col>
      <b-col lg="3" md="6" v-for="(item,indexes) in bgCards" :key="indexes+4">
        <b-card
          overlay
          :img-src="item.bgImage"
          img-alt="Card Image"
          text-variant="white"
          bg-variant="dark"
          class="iq-card text-white text-center iq-mb-3"
        >
          <template>
            <h2 class="mb-4 display-3 font-weight-bolder text-white">
              {{ item.amount }}<small class="font-size-14 text-white">{{ item.duration }}</small>
            </h2>
            <ul class="list-unstyled mb-0 ">
              <li>{{ item.description1 }}</li>
              <li>{{ item.description2 }}</li>
              <li>{{ item.description3 }}</li>
              <li>{{ item.description4 }}</li>
              <li>{{ item.description5 }}</li>
            </ul>
            <b-button :variant="item.active ? 'light' : 'primary'" :class="item.buttonClass">{{ item.button }}</b-button>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'Pricing1',
  mounted () {
    core.index()
  },
  data () {
    return {
      cards: [
        {
          plan: 'Basic',
          amount: '$26',
          duration: '/Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Start Starter',
          buttonClass: 'mt-5',
          bgImage: false
        },
        {
          plan: 'Basic',
          amount: '$99',
          duration: '/ Month',
          active: true,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Start Starter',
          buttonClass: 'mt-5',
          bgImage: false
        },
        {
          plan: 'Basic',
          amount: '$39',
          duration: '/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Start Starter',
          buttonClass: 'mt-5',
          bgImage: false
        },
        {
          plan: 'Basic',
          amount: '$25',
          duration: '/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Start Starter',
          buttonClass: 'mt-5',
          bgImage: false
        }
      ],
      bgCards: [
        {
          plan: 'Basic',
          amount: '26',
          duration: '$/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Get Started',
          buttonClass: 'mt-3',
          bgImage: require('../../assets/images/page-img/25.jpg')
        },
        {
          plan: 'Basic',
          amount: '99',
          duration: '$/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Get Started',
          buttonClass: 'mt-3',
          bgImage: require('../../assets/images/page-img/26.jpg')
        },
        {
          plan: 'Basic',
          amount: '39',
          duration: '$/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Get Started',
          buttonClass: 'mt-3',
          bgImage: require('../../assets/images/page-img/27.jpg')
        },
        {
          plan: 'Basic',
          amount: '25',
          duration: '$/ Month',
          active: false,
          description1: 'Lorem ipsum dolor sit amet',
          description2: 'Consectetur adipiscing elit',
          description3: 'Integer molestie at massa',
          description4: 'Facilisis in pretium nisl aliquet',
          description5: 'Nulla volutpat aliquam velit',
          button: 'Get Started',
          buttonClass: 'mt-3',
          bgImage: require('../../assets/images/page-img/28.jpg')
        }
      ]
    }
  }
}
</script>
