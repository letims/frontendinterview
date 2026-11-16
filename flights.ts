import { Component, signal, computed } from '@angular/core';
import { ordenarVuelosPorPrecio, buscarVuelosPorOrigenOPorDestino } from './app';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.html',
  styleUrls: ['./flights.css'],
  standalone: true,
})

export class FlightsComponent {
  origen = signal('');
  destino = signal('');
  orden = signal('asc');

  listadoVuelos = computed(() => {
    let resultado = buscarVuelosPorOrigenOPorDestino(this.origen(), this.destino());
    return ordenarVuelosPorPrecio(resultado, this.orden());
  });
}

// Muestra la lista de vuelos (id, origen, destino, precio, asientos).
// Permite ordenar por precio.
// Permite filtrar por origen y/o destino.
// Marca de alguna forma los vuelos agotados (asientos = 0).