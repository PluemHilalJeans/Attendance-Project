<template>
  <div>
    <br />

    <form @submit.prevent="prepForLink">
      <span>ปีการศึกษา :</span
      ><select v-model="preCheckForm.academicYear">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
      <br />
      <span>ระดับชั้น (ม.) :</span
      ><select v-model="preCheckForm.matthayom">
        <option value="1">ม.1</option>
        <option value="2">ม.2</option>
        <option value="3">ม.3</option>
        <option value="4">ม.4</option>
        <option value="5">ม.5</option>
        <option value="6">ม.6</option>
      </select>
      <br />
      <span>ห้อง (/xx) :</span
      ><select v-model="preCheckForm.slash">
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
      <span>วันที่ :</span><input type="date" v-model="preCheckForm.date" />
      <br />

      <span>คาบที่ :</span>
      <label for="period0">0</label>
      <input
        type="checkbox"
        id="period0"
        value="0"
        v-model="preCheckForm.periods"
      />
      <label for="period1">1</label>
      <input
        type="checkbox"
        id="period1"
        value="1"
        v-model="preCheckForm.periods"
      />
      <label for="period2">2</label>
      <input
        type="checkbox"
        id="period2"
        value="2"
        v-model="preCheckForm.periods"
      />
      <label for="period3">3</label>
      <input
        type="checkbox"
        id="period3"
        value="3"
        v-model="preCheckForm.periods"
      />
      <label for="period4">4</label>
      <input
        type="checkbox"
        id="period4"
        value="4"
        v-model="preCheckForm.periods"
      />
      <label for="period5">5</label>
      <input
        type="checkbox"
        id="period5"
        value="5"
        v-model="preCheckForm.periods"
      />
      <label for="period6">6</label>
      <input
        type="checkbox"
        id="period6"
        value="6"
        v-model="preCheckForm.periods"
      />
      <label for="period7">7</label>
      <input
        type="checkbox"
        id="period7"
        value="7"
        v-model="preCheckForm.periods"
      />
      <label for="period8">8</label>
      <input
        type="checkbox"
        id="period8"
        value="8"
        v-model="preCheckForm.periods"
      />
      <label for="period9">9</label>
      <input
        type="checkbox"
        id="period9"
        value="9"
        v-model="preCheckForm.periods"
      />
      <label for="period10">10</label>
      <input
        type="checkbox"
        id="period10"
        value="10"
        v-model="preCheckForm.periods"
      />
      <button type="submit">Submit</button>
    </form>

    
    <p>{{ preCheckForm.academicYear }}</p>
    <p>{{ preCheckForm.matthayom }}</p>
    <p>{{ preCheckForm.slash }}</p>
    <p>{{ preCheckForm.date }}</p>
    <p>{{ preCheckForm.periods }}</p>
  </div>
</template>

<script>
// import faceCheck from '../views/faceCheck.vue';
export default {
  name: "preCheck",
  data() {
    return {
      preCheckForm: {
          academicYear: 2021,
          matthayom: 6,
          slash: 20,
          date: null,
          periods: []
      },
    };
  },
  methods: {
    prepForLink () {
      this.$emit('sentdata', this.preCheckForm)
      console.log('kokoko')
          /*this.$router.push({name: 'faceCheck' ,
          query: {matthayom: this.preCheckForm.matthayom,
          slash: this.preCheckForm.slash,
          date: this.preCheckForm.date,
          periods: this.preCheckForm.periods}})*/
        }
  }
};
</script>
