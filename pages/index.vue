<template>
  <div>
    <a-upload
      :before-upload="beforeUpload">
      <a-button> <a-icon type="upload" /> Upload </a-button>
    </a-upload>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {sliceUploadFile} from "~/static/cos";

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    this.$router.push({
      path: '/user/login'
    })
  },
  methods: {
    beforeUpload(file: any) {
      sliceUploadFile(file).then((r: any) => {
        console.log(r)
      })
    }
  }
})
</script>
