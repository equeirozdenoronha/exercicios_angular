import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vingador } from '../vingador';
@Component({
  selector: 'app-lista-herois',
  templateUrl: './lista-herois.component.html',
  styleUrls: ['./lista-herois.component.css']
})
export class ListaHeroisComponent implements OnInit {
  @Input
  novo: Vingador;

  @Output
  excluir = new EventEmitter<Vingador>();

  @Output
  editar = new EventEmitter<Vingador>();
  constructor() { }

  ngOnInit() {
  }

}
