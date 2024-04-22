<template>
  <ul class="iq-timeline">
    <li v-for="(item,index) in items" :key="index">
      <div class="timeline-dots" :class="'border-'+item.color"><i class="ri-pantone-line"></i></div>
      <h6 class="float-left mb-1" v-html="item.title"></h6>
      <small class="float-right mt-1" v-html="item.right"></small>
      <div class="d-inline-block w-100">
        <p v-html="item.description"></p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TimeLine',
  props: {
    items: { type: Array, default: () => [] }
  }
}
</script>
