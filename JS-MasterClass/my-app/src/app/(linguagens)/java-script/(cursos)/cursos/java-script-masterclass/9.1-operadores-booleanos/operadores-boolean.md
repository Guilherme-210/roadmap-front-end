# Os Operadores Booleanos

Os operadores booleanos em JavaScript são usados para combinar ou inverter valores booleanos (`true` ou `false`). Eles são frequentemente usados em expressões condicionais para controlar o fluxo do programa.

## Operadores Booleanos

### Operador Igualdade (`==`)

O operador `==` compara dois valores para igualdade, realizando coerção de tipos se necessário. Retorna `true` se os valores forem iguais, caso contrário, retorna `false`.

```javascript
5 == 5; // true
5 == 10; // false

// Comparações com coerção de tipos
5 == "5"; // true 
0 == ""; // true 
0 == '\n'; // true 
false == ""; // true 
false == 0; // true 
1 == true; // true 
null == undefined; // true 
false == null; // false 
false == undefined; // false 
```

#### Observação sobre Igualdade

O operador `==` realiza coerção de tipos, o que pode levar a resultados inesperados. Sempre que possível, prefira usar o operador `===` para evitar surpresas com a coerção de tipos.

### Operador Igualdade Estrita (`===`)

O operador `===` compara dois valores para igualdade, sem realizar coerção de tipos. Retorna `true` se os valores forem iguais e do mesmo tipo, caso contrário, retorna `false`.

```javascript
5 === 5; // true
5 === 10; // false

// Comparações sem coerção de tipos
5 === "5"; // false 
0 === ''; // false 
false === ""; // false 
false === 0; // false 
1 === true; // false 
null === undefined; // false 
```

### Operador Diferente (`!=`)

O operador `!=` compara dois valores para desigualdade, realizando coerção de tipos se necessário. Retorna `true` se os valores forem diferentes, caso contrário, retorna `false`.

```javascript
5 != 5; // false
5 != 10; // true

// Comparações com coerção de tipos
5 != "5"; // false
0 != ""; // false
0 != '\n'; // false
false != ""; // false
false != 0; // false
1 != true; // false
null != undefined; // false
false != null; // true
false != undefined; // true
```

#### Observação sobre Desigualdade

O operador `!=` realiza coerção de tipos, o que pode levar a resultados inesperados. Sempre que possível, prefira usar o operador `!==` para evitar surpresas com a coerção de tipos.

### Operador Diferente Estrito (`!==`)

O operador `!==` compara dois valores para desigualdade, sem realizar coerção de tipos. Retorna `true` se os valores forem diferentes ou de tipos diferentes, caso contrário, retorna `false`.

```javascript
5 !== 5; // false
5 !== 10; // true

// Comparações sem coerção de tipos
5 !== "5"; // true 
0 !== ''; // true 
false !== ""; // true 
false !== 0; // true 
1 !== true; // true 
null !== undefined; // true 
```

### Operador Menor ou Igual (`<=` || `>=`)

O operador `<=` compara dois valores e retorna `true` se o valor à esquerda for menor ou igual ao valor à direita, caso contrário, retorna `false`.
O operador `>=` compara dois valores e retorna `true` se o valor à esquerda for maior ou igual ao valor à direita, caso contrário, retorna `false`.

```javascript
5 >= 5; // true
5 >= 10; // false
10 >= 5; // true
```

```javascript
5 <= 5; // true
5 <= 10; // true
10 <= 5; // false
```

## Operadores Lógicos

### Operador AND (`&&`)

O operador `&&` retorna `true` se ambos os operandos forem `true`, caso contrário, retorna `false`.

```javascript
1 && 2; // 2
0 && 2; // 0

true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

### Operador OR (`||`)

O operador `||` retorna `true` se pelo menos um dos operandos for `true`, caso contrário, retorna `false`.

```javascript
0 || 2; // 2
1 || 0; // 1
1 || 2; // 1

true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

### Operador NOT (`!`)

O operador `!` inverte o valor booleano do operando.

```javascript
!true; // false
!false; // true
```

### Exemplos de Operadores Lógicos

```javascript
function generateSerial(max) {
  const serial = Math.floor(Math.random() * max);
  return serial;
}

console.log(generateSerial(1000)) // Exemplo de serial com valor máximo 1000
console.log(generateSerial(100)) // Exemplo de serial com valor máximo 100
console.log(generateSerial(10)) // Exemplo de serial com valor máximo 10
console.log(generateSerial()) // Exemplo de serial retorna NaN, pois nenhum valor máximo foi fornecido
```

```javascript
function generateSerial(max) {
//   if (max === undefined) {
  if (!max) {
    max = 1000;
  }
  const serial = Math.floor(Math.random() * max);
  return serial;
}

console.log(generateSerial(1000)) // Exemplo de serial com valor máximo 1000
console.log(generateSerial(100)) // Exemplo de serial com valor máximo 100
console.log(generateSerial(10)) // Exemplo de serial com valor máximo 10
console.log(generateSerial()) // Exemplo de serial retorna com valor de callback máximo 1000, pois nenhum valor máximo foi fornecido
```

```javascript
function generateSerial(max) {
  max = max || 1000;
  
  const serial = Math.floor(Math.random() * max);
  return serial;
}

console.log(generateSerial(1000)) // Exemplo de serial com valor máximo 1000
console.log(generateSerial(100)) // Exemplo de serial com valor máximo 100
console.log(generateSerial(10)) // Exemplo de serial com valor máximo 10
console.log(generateSerial()) // Exemplo de serial retorna com valor de callback máximo 1000, pois nenhum valor máximo foi fornecido
```

## Operadores ternários

O operador ternário é uma forma concisa de escrever uma expressão condicional. Ele possui a seguinte sintaxe:

```javascript
condição ? expressãoSeVerdadeira : expressãoSeFalsa;

(10 >= 18) ? 'good' : 'bad'; // "bad"
(10) ? 'good' : 'bad'; // "good"
(0) ? 'good' : 'bad'; // "bad"
```

### Exemplos de Operador Ternário

```javascript
const idade = 18;
const podeBeber = idade >= 18 ? 'Sim' : 'Não';
console.log(podeBeber); // 'Sim'
```
