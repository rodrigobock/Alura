import { Transferencia } from './../services/models/transferencia.model';
import { TransferenciasService } from './../services/transferencias.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciasService, private router: Router) {}

  transferir() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error))
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
