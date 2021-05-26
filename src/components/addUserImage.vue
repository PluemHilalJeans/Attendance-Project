<template>
  <div>
    <input v-show="isloaded"
      type="file"
      id="imagefiles"
      ref="myfiles"
      @change="previewPics"
      multiple
      accept="image/*,.jpg,.jpeg,.png"
    />
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
faceapi.env.monkeyPatch({
  Canvas: HTMLCanvasElement,
  Image: HTMLImageElement,
  ImageData: ImageData,
  Video: HTMLVideoElement,
  createCanvasElement: () => document.createElement("canvas"),
  createImageElement: () => document.createElement("img"),
});
export default {
  name: "addUserImage",
  data() {
    return {
      isloaded: false,
      files: [],
      descriptorsjson: [],
    };
  },
  methods: {
    previewPics() {
      this.getDescriptor();
    },
    async getDescriptor() {
      // const imageupload = document.getElementById('imagefiles')
      for (let index = 0; index < 5; index++) {
        const toimage = await faceapi.bufferToImage(
          document.getElementById("imagefiles").files[index]
        );
        const detection = await faceapi
          .detectSingleFace(toimage)
          .withFaceLandmarks()
          .withFaceDescriptor();
        this.descriptorsjson.push(
          JSON.stringify(Array.from(detection.descriptor))
        );
      }
      this.$emit('allimguploaded', this.descriptorsjson);
    },
  },
  created() {
    Promise.all([
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
      faceapi.nets.tinyFaceDetector.loadFromUri("/models")
    ]).then(() => {this.isloaded = true});
  },
};
</script>