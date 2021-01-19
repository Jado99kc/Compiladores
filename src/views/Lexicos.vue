<template>
  <div>
    <h4 class="">Lexicos</h4>
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
      <p>{{oracion}}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>Elementos</h4>
      <p v-for="elemento in stringArray">{{elemento}}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <div class="p-3">
        <h4>Parte 2</h4>
        <p>Caracteres: {{caracteres}}</p>
        <p>Identificador: {{stringArray[0]}}</p>
        <p>Numero 1: {{stringArray[2]}}</p>
        <p>Numero 2: {{stringArray[4]}}</p>
        <p>Operador: {{stringArray[3]}}</p>
        <p>El operador es: {{stringArray[0]}}</p>
        <p>Resultado:  {{calculate}}</p>
      </div>
    </div>
    <hr>
    <div class="container mt-2">
      <div class="p-3">
        <h4>Analysis</h4>
        <table class="table">
          <thead>
          <th>Elemento</th>
          <th>Componente</th>
          <th>Secuencia</th>
          </thead>
          <tbody>
          <tr>
            <td>{{stringArray[0]}}</td>
            <td>identificador</td>
            <td>Cadena de caracteres (variable)</td>
          </tr>
          <tr>
            <td>{{stringArray[1]}}</td>
            <td>asignacion</td>
            <td>Operador de Asignacion</td>
          </tr>
          <tr>
            <td>{{stringArray[2]}}</td>
            <td>Numero Uno</td>
            <td>Primer Literal Numerica</td>
          </tr>
          <tr>
            <td>{{stringArray[4]}}</td>
            <td>Numero Dos</td>
            <td>Segunda Literal Numerica</td>
          </tr>
          <tr>
            <td>{{stringArray[3]}}</td>
            <td>Operacion</td>
            <td>Operador Aritmetico</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lexicos",
  data() {
    return {
      oracion: '',
      stringArray :[],
      resultado : 0,
      operacion: ''
    }
  },
  methods:{
  handleForm(){
    let splitString = this.oracion.split(' ')
    this.stringArray =  Array.from(splitString)
    this.operacion = this.stringArray[3]
    console.log(this.stringArray)
  }
  },
  computed:{
    caracteres(){
      return this.oracion.length
    },

    calculate(){
      if(this.stringArray[3] === '+'){
        return  parseInt(this.stringArray[2]) + parseInt(this.stringArray[4])
      }
      if(this.stringArray[3] === '-'){
        return  parseInt(this.stringArray[2]) - parseInt(this.stringArray[4])
      }
      if(this.stringArray[3] === '*'){
        return  parseInt(this.stringArray[2]) * parseInt(this.stringArray[4])
      }
      if(this.stringArray[3] === '/'){
        return  parseInt(this.stringArray[2]) / parseInt(this.stringArray[4])
      }
      else {
        return 'Operador no valido o cadena no es logica'
      }
    }
  }
}
</script>

<style scoped>

</style>