const vuelos = [
  { "id": "V001", "origen": "SCL", "destino": "LIM", "precio": 180, "asientos": 12 },
  { "id": "V002", "origen": "SCL", "destino": "MIA", "precio": 420, "asientos": 3 },
  { "id": "V003", "origen": "LIM", "destino": "BOG", "precio": 150, "asientos": 25 },
  { "id": "V004", "origen": "SCL", "destino": "EZE", "precio": 210, "asientos": 0 },
  { "id": "V005", "origen": "MIA", "destino": "SCL", "precio": 390, "asientos": 8 },
  { "id": "V006", "origen": "EZE", "destino": "SCL", "precio": 195, "asientos": 15 }
];

// Una función que devuelva solo los vuelos con asientos disponibles (asientos > 0).
export function vuelosConAsientosDisponibles() {
  return vuelos.filter(vuelo => vuelo.asientos > 0);
}

// Una función que ordene los vuelos por precio (de menor a mayor o de mayor a menor).}
export function ordenarVuelosPorPrecio(lista = vuelos, orden = 'asc') {
  return [...lista].sort((a, b) => {
    return orden === 'asc' ? a.precio - b.precio : b.precio - a.precio;
  });
}

// Una función que busque vuelos por origen y destino, sin importar mayúsculas o minúsculas.
export function buscarVuelosPorOrigenOPorDestino(origen, destino) {
  if (!origen && !destino) return vuelos;
  const lowerOrigen = origen.toLowerCase();
  const lowerDestino = destino.toLowerCase();

  // Si alguno de los parámetros es vacío, se filtra solo por el otro.
  if (!origen) {
    return vuelos.filter(v => v.destino.toLowerCase() === lowerDestino);
  }
  if (!destino) {
    return vuelos.filter(v => v.origen.toLowerCase() === lowerOrigen);
  }

  return vuelos.filter(
    v => v.origen.toLowerCase() === lowerOrigen && v.destino.toLowerCase() === lowerDestino
  )
}
