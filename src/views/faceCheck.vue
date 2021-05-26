<template>
  <div>
    FaceCheckpage
    {{ dataforcheck }}

    <div>
      <video ref="camera" width="400" height="300" autoplay></video>
    </div>
    <div></div>
  </div>
</template>

<script>
import db from "./firebaseInit";
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
  name: "faceCheck",
  data() {
    return {
      datachecked: {
        academicYear: null,
        matthayom: null,
        slash: null,
        date: null, //2021-05-26
        periods: [],
      },
    };
  },
  methods: {
    dbGetUser() {
      db.collection("students")
        .where("matthayom", "==", "6")
        .get()
        .then((querysnapshot) => {
          querysnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
        });
    },
  },
  beforecrate() {},
  mounted() {
    this.datachecked = this.$route.query.dataforcheck;
  },
  created() {
    console.log(this.dataforcheck);
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
      faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
    ]).then(this.dbGetUser());
  },
};
</script>