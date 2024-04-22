<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" v-for="(item,index) in charts" :key="index">
        <iq-card>
          <template v-slot:headerTitle>
            <h4>{{ item.title }}</h4>
          </template>
          <template v-slot:body>
            <MorrisChart :element="item.type+index" :type="item.type" :xKeys="item.xKeys" :data="item.bodyData" :colors="item.colors" :yKeys="item.yKeys" :labels="item.labels"/>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { core } from '../../config/pluginInit'
import MorrisChart from '../../components/core/charts/MorrisChart'
export default {
  name: 'MorrisCharts',
  components: {
    MorrisChart
  },
  mounted () {
    core.index()
  },
  data () {
    return {
      charts: [
        {
          title: 'Line Chart',
          type: 'line',
          bodyData: [
            { year: '2008', a: 20 },
            { year: '2009', a: 10 },
            { year: '2010', a: 5 }
          ],
          colors: [ '#0DD6B8' ],
          xKeys: 'year',
          yKeys: [ 'a' ],
          labels: [ 'Value' ]
        },
        {
          title: 'Bar Chart',
          type: 'bar',
          bodyData: [
            { year: '2011 Q1', y: 3, z: 2 },
            { year: '2011 Q2', y: 2, z: null, a: 1 },
            { year: '2011 Q3', y: 0, z: 2, a: 4 },
            { year: '2011 Q4', y: 2, z: 4 }
          ],
          xKeys: 'year',
          yKeys: ['y', 'z', 'a'],
          labels: [ 'Y', 'Z', 'A' ],
          colors: ['#0dd6b8', '#1ee2ac', '#1ee2ac']
        },
        {
          title: 'Area Chart',
          type: 'area',
          bodyData: [
            { year: '2011 Q1', a: 2666, b: 2666 },
            { year: '2011 Q2', a: 2778, b: 2294 },
            { year: '2011 Q3', a: 4912, b: 1969 },
            { year: '2011 Q4', a: 3767, b: 3597 },
            { year: '2012 Q1', a: 6810, b: 1914 },
            { year: '2012 Q2', a: 5670, b: 4293 }
          ],
          xKeys: 'year',
          yKeys: [ 'a', 'b' ],
          labels: [ 'Item 1', 'Item 2' ],
          colors: ['#0dd6b8', '#ff7750']
        },
        {
          title: 'Donut Chart',
          type: 'donut',
          bodyData: [
            { label: 'Download Sales', value: 30 },
            { label: 'In-Store Sales', value: 12 },
            { label: 'Mail-Order Sales', value: 20 }
          ],
          colors: ['#0dd6b8', '#ff7750', '#1ee2ac'],
          yKeys: [],
          xKeys: '',
          labels: []
        }
      ]
    }
  }
}
</script>
