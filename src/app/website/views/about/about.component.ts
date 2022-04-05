import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  certifiedList: string[] = [
    '../../../../assets/certificados/angular_routing_lazy-loading.jpg',
    '../../../../assets/certificados/administrador_de_servidores.jpg'
  ];
  certificate: number = 0;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  viewCerificate(option: boolean){
    if(option){
      if(this.certificate < this.certifiedList.length-1){
        this.certificate = this.certificate + 1;
      }
    }else{
      if(this.certificate != 0){
        this.certificate = this.certificate - 1;
      }
    }
  }

  viewTec(){
    window.open('./../../../assets/TecADSI.pdf','_blank');
  }
  viewIng(){
    window.open('./../../../assets/DipIngeniero.pdf','_blank');
  }
  viewCV(){
    window.open('./../../../assets/cv.pdf','_blank');
  }
}
