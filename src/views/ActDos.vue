<template>
  <div>
    <h4 class="">Act 2</h4>
    <div class="container">
      <div class="columns">
        <div class="column">
          <input class="input" type="text" v-model="oracion">
        </div>
        <div class="column">
          <button class="button is-success" @click="handleForm">Calcular</button>
        </div>
      </div>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>cadena</h4>
      <p v-for="word in words">{{ word }}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>Concatenacion</h4>
      <p>{{ modString }}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>Identificador de Operacion</h4>
      <p>Variable: {{valTerm}}</p>
      <p>Signo de Asignacion: {{valEqual}}</p>
      <p>Primer Numero: {{valNum1}}</p>
      <p>Operador : {{ valOperador }}</p>
      <p>Segundo Numero: {{valNum2}}</p>
      <p>Resultado: {{calculate}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lexicos",
  data() {
    return {
      oracion: '',
      stringArray: [],
      resultado: 0,
      wordsArray: []
    }
  },
  methods: {
    handleForm() {

      for (let i = 0; i <= this.oracion.length - 1; i++) {
        if (this.oracion[i] !== ' ') {
          this.stringArray.push(this.oracion[i])
        }
      }
      console.log(this.stringArray)
    }
  },
  computed: {
    words() {
      let words = [""];
      for (let i = 0; i < this.oracion.length; i++) {
        if (this.oracion[i] !== " ")
          words[words.length - 1] += this.oracion[i];
        else if (words[words.length - 1])
          words.push("");
      }
      this.wordsArray = words
      return words;
    },
    modString() {
      let newString = ''
      for (let i = 0; i <= this.stringArray.length - 1; i++) {
        newString += `|${this.stringArray[i]}`
      }
      return newString
    },
    calculate() {
      if (this.wordsArray[3] === '+') {
        return parseInt(this.wordsArray[2]) + parseInt(this.wordsArray[4])
      }
      if (this.wordsArray[3] === '-') {
        return parseInt(this.wordsArray[2]) - parseInt(this.wordsArray[4])
      }
      if (this.wordsArray[3] === '*') {
        return parseInt(this.wordsArray[2]) * parseInt(this.wordsArray[4])
      }
      if (this.wordsArray[3] === '/') {
        return parseInt(this.wordsArray[2]) / parseInt(this.wordsArray[4])
      } else {
        return 'Sintaxis erronea'
      }
    },
    valTerm(){
      if(this.wordsArray.[0].includes('.')){
        return 'Nombre de variable invalida'
      }else{
        return this.wordsArray.[0]
      }
    },
    valEqual(){
      if(this.wordsArray.[1] === '='){
        return this.wordsArray.[1]
      }else{
        return 'Signo de asignacion inexistente o en mala posicion'
      }
    },
    valNum1(){
      if(isNaN(parseInt(this.wordsArray.[2]))){
        return 'El tercer termino no es un numero'
      }
      return parseInt(this.wordsArray.[2])
    },
    valNum2(){
      if(isNaN(parseInt(this.wordsArray.[4]))){
        return 'El quinto termino no es un numero'
      }
      return parseInt(this.wordsArray.[4])
    },
    valOperador(){
      if (this.wordsArray[3] === '+') {
        return this.wordsArray[3]
      }
      if (this.wordsArray[3] === '-') {
        return this.wordsArray[3]
      }
      if (this.wordsArray[3] === '*') {
        return this.wordsArray[3]
      }
      if (this.wordsArray[3] === '/') {
        return this.wordsArray[3]
      } else {
        return 'Operador no valido'
      }
    }
  }
}
</script>

<style scoped>

</style>
