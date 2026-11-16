Contexto
Debes trabajar con una lista de vuelos. Puedes usar estos datos en tu código:
[
  { "id": "V001", "origen": "SCL", "destino": "LIM", "precio": 180, "asientos": 12 },
  { "id": "V002", "origen": "SCL", "destino": "MIA", "precio": 420, "asientos": 3 },
  { "id": "V003", "origen": "LIM", "destino": "BOG", "precio": 150, "asientos": 25 },
  { "id": "V004", "origen": "SCL", "destino": "EZE", "precio": 210, "asientos": 0 },
  { "id": "V005", "origen": "MIA", "destino": "SCL", "precio": 390, "asientos": 8 },
  { "id": "V006", "origen": "EZE", "destino": "SCL", "precio": 195, "asientos": 15 }
]
1) Lógica en JavaScript (ES6)
Implementa:

- Una función que devuelva solo los vuelos con asientos disponibles (asientos > 0).
- Una función que ordene los vuelos por precio (de menor a mayor o de mayor a menor).
- Una función que busque vuelos por origen y destino, sin importar mayúsculas o minúsculas.

Se valora el uso de funciones flecha y métodos de arreglos (filter, sort, map, etc.).

2) Interfaz simple
Con HTML/CSS y React, Angular o React Native (el que manejes):
- Muestra la lista de vuelos (id, origen, destino, precio, asientos).
- Permite ordenar por precio.
- Permite filtrar por origen y/o destino.
- Marca de alguna forma los vuelos agotados (asientos = 0).

No se pide un diseño complejo; debe verse claro y funcionar.
tiene menú contextual
Redactar

Lim sCL 

// boris.fuentes@qintess.com