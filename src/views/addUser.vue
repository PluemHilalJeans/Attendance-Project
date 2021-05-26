<template>
    <div>
      <form ref="userForm" @submit.prevent="addData">
      <span>Student ID เลขประจำตัวนักเรียน :</span>
      <input type="number" name="studentID" v-model="newUser.studentid" />
      <br />
      <span>First Name : </span
      ><input type="text" name="Fname" v-model="newUser.Fname" />
      <br />
      <span>Last Name : </span>
      <input type="text" name="Lname" v-model="newUser.Lname" />
      <br />
      <span>Gender : </span>
      <select name="gender" v-model="newUser.gender">
        <option value="male">Male ชาย</option>
        <option value="female">Female หญิง</option>
      </select>
      <br />
      <span>matthayom ม. :</span>
      <select v-model="newUser.matthayom">
        <option value="1">ม.1</option>
        <option value="2">ม.2</option>
        <option value="3">ม.3</option>
        <option value="4">ม.4</option>
        <option value="5">ม.5</option>
        <option value="6">ม.6</option>
      </select>
      <br />

      <select v-model="newUser.slash">
        <option value="1">/1</option>
        <option value="2">/2</option>
        <option value="3">/3</option>
        <option value="4">/4</option>
        <option value="5">/5</option>
        <option value="6">/6</option>
        <option value="7">/7</option>
        <option value="8">/8</option>
        <option value="9">/9</option>
        <option value="10">/10</option>
        <option value="11">/11</option>
        <option value="12">/12</option>
        <option value="13">/13</option>
        <option value="14">/14</option>
        <option value="15">/15</option>
        <option value="16">/16</option>
        <option value="17">/17</option>
        <option value="18">/18</option>
        <option value="19">/19</option>
        <option value="20">/20 สุดหล่อเท่ห์</option>
      </select>
      <br />
      <span>Number เลขที่ :</span> <input type="number" v-model="newUser.no" />

      <button type="submit">Submit</button>
    </form>

      <add-user-image @allimguploaded='shitisfire'></add-user-image>
      
      <p>{{userDescriptors}}</p>
    </div>
</template>

<script>
import addUserImage from '../components/addUserImage.vue'
import db from './firebaseInit'
export default {
    name: 'addUser',
    data () {
        return {
            userDescriptors: null,
            newUser: {
              studentid: 4,
              gender: "male",
              Fname: null,
              Lname: null,
              no: null,
              matthayom: 6,
              slash: 20,
      }
        }
    },
    methods: {
        async shitisfire (datafromaddimg){
            console.log("do")
            this.userDescriptors = await datafromaddimg

        },
        addData() {
        console.log('oKEY')
        const dataToFirebase = {
              studentid: this.newUser.studentid,
              gender: this.newUser.gender,
              Fname: this.newUser.Fname,
              Lname: this.newUser.Lname,
              no: this.newUser.no,
              matthayom: this.newUser.matthayom,
              slash: this.newUser.slash,
              descriptors: this.userDescriptors
              

          }
          console.log('YEET')
          db.collection("students").add(dataToFirebase).then(() => console.log('data added!'))
        

      }
      
    },
    components: {
        addUserImage
    }
    
}
</script>