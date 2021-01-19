<template>
  <div>
    <h4 class="">Lexicos</h4>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="control">
            <div class="select">
              <select v-model="operacionSeleccionada">
                <option v-for="(index, operacion) in operaciones">{{operacion}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="column">
          <input class="input" type="number" v-model="num1" >
        </div>
        <div class="column">
          <input disabled class="input" type="text" placeholder="Text input" v-model="simbolo">
        </div>
        <div class="column">
          <input class="input" type="number" v-model="num2">
        </div>
      </div>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>cadena</h4>
      <p>{{operacionSeleccionada}} {{ equal }} {{num1}} {{simbolo}} {{num2}}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <h4>Elementos</h4>
      <p>{{operacionSeleccionada}}</p>
      <p>{{ equal }}</p>
      <p>{{num1}}</p>
      <p>{{simbolo}}</p>
      <p>{{num2}}</p>
    </div>
    <hr>
    <div class="container mt-2">
      <div class="p-3">
        <h4>Parte 2</h4>
        <button class="button button-is-primary" @click="generateString()">Contar Caracteres</button>
        <p v-if="caracteres !== ''">Numero de Caracteres: {{caracteres}}</p>
        <p>Identificador: {{operacionSeleccionada}}</p>
        <p>Numero 1: {{num1}}</p>
        <p>Numero 2: {{num2}}</p>
        <p>Operador: {{simbolo}}</p>
        <p>El operador es {{operacionSeleccionada}}</p>
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
            <td>{{operacionSeleccionada}}</td>
            <td>identificador</td>
            <td>Cadena de caracteres (variable)</td>
          </tr>
          <tr>
            <td>{{equal}}</td>
            <td>asignacion</td>
            <td>Operador de Asignacion</td>
          </tr>
          <tr>
            <td>{{num1}}</td>
            <td>Numero Uno</td>
            <td>Primer Literal Numerica</td>
          </tr>
          <tr>
            <td>{{num2}}</td>
            <td>Numero Dos</td>
            <td>Segunda Literal Numerica</td>
          </tr>
          <tr>
            <td>{{simbolo}}</td>
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
      equal: '=',
      num1: '',
      num2: '',
      operaciones: {
        suma: '+',
        resta: '-',
        multiplicacion: '*',
        division: '/'
      },
      operacionSeleccionada: '',
      caracteres: '',
      resultado : 0,
    }
  },
  methods:{
    generateString(){
      let oracionArray = []
      oracionArray.push(this.operacionSeleccionada)
      oracionArray.push(this.equal)
      oracionArray.push(this.num1)
      oracionArray.push(this.simbolo)
      oracionArray.push(this.num2)
      let oracionString = oracionArray.join(' ')
      this.caracteres = oracionString.length
    }
  },
  computed:{
    simbolo(){
      return this.operaciones[this.operacionSeleccionada]
    },
    calculate(){
      if(this.simbolo === '+'){
        return  this.num1 + this.num2
      }
      if(this.simbolo === '-'){
        return  this.num1 - this.num2
      }
      if(this.simbolo === '*'){
        return  this.num1 * this.num2
      }
      if(this.simbolo === '/'){
        return this.num1 / this.num2
      }
    }
  }
}
</script>

<style scoped>

</style>