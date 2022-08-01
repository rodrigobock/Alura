import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino};
    this.limparCampos();
    this.aoTransferir.emit(valorEmitir);
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
