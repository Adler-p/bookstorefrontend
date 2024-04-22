<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Product Orders</h4>
          </template>
          <template v-slot:body>
            <TimeLine :items="timelineItems" />
          </template>
        </iq-card>
      </b-col>
      <b-col lg="6">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Product Orders</h4>
          </template>
          <template v-slot:body>
            <TimeLine :items="timelineItems" />
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'

export default {
  name: 'TimeLines',
  mounted () {
    core.index()
  },
  data () {
    return {
      timelineItems: [
        {
          color: 'primary',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'success',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'danger',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'primary',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'info',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'info',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'warning',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        },
        {
          color: 'info',
          title: 'Client Meeting',
          right: '19 November 2019',
          description: 'Bonbon macaroon jelly beans gummi bears jelly lollipop apple'
        }
      ]
    }
  }
}
</script>
