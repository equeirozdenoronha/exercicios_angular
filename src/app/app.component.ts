import { Component, OnInit } from '@angular/core';
import { Vingador } from './vingador';
import '../assets/css/style.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  vingadores: Array<Vingador>;
  title = 'app';
  ngOnInit(): void {
  }

  novo: Vingador = new Vingador(0, '','');
  ultimo_id=5;
  editando=false;

  constructor(){
    this.vingadores = [
      new Vingador(1, 'Capitão América', 'Steve Rogers'),
      new Vingador(2, 'Viúva Negra', 'Natasha Romanoff'),
      new Vingador(3, 'Ms. Marvel', 'Carol Danvers'),
      new Vingador(4, 'Deadpool', 'Wade Wilson'),
      new Vingador(5, 'Gavião Arqueiro', 'Clint Barton')
    ]
  }

    cadastrar(): void{
    if(!this.editando){
      const novoId: number = ++this.ultimo_id;
      this.vingadores.push(new Vingador(novoId,this.novo.nome, this.novo.pessoa))
      this.novo = new Vingador(0,'','');
    }
    else{
      this.novo = new Vingador(0,'','');
      this.editando=false;
    }
  }

  excluir(heroi: Vingador): void{
    this.vingadores.splice(this.vingadores.indexOf(heroi), 1)
    this.novo = new Vingador(0,'','');
  }

  editar(heroi: Vingador):void{
    this.novo = heroi;
    this.editando = true;
  }
}





