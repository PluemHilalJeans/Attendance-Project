<template>
  <div class="about">
    <h4>กรุณาเลือกห้องที่ต้องการจะเช็คชื่อ</h4>
    <h4>please fill in the form for FaceREcognition</h4>
    <preCheckForm @sentdata="prepForLink"/>
    
  </div>
</template>

<script lang="ts">
import preCheckForm from '../components/preCheckForm.vue'

export default {
  name: 'preCheck',
  data () {
    return {
      pickedForm: null
    }
  },
  components: {
    preCheckForm
  },
  methods:{
    prepForLink (checkedData) {
          this.pickedForm = checkedData
          console.log(this.pickedForm)
          this.$router.push({name: 'faceCheck', query: { dataforcheck: this.pickedForm }})
        }
  }
}
</script>
