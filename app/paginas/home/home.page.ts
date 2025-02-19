import { Component } from '@angular/core';
import { StockPage } from '../stock/stock.page';
import { AlertController,NavController,AnimationController,createAnimation} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  btnClicked(){
    alert('Felicidades Clickeaste el boton con exito');
  }
  constructor(private alertController:AlertController,private animationCtrl: AnimationController) {
    this.bbb();
   }

   ionViewDidEnter(){
     this.bbb();
     this.aaa();
   }

 aaa(){
   const animation = createAnimation()
   .addElement(document.querySelector('#titulo'))
   .duration(3000)
   .iterations(Infinity)
   .fromTo('transform', 'translateX(-150px)', 'translateX(250px)')
   .fromTo('opacity', '1', '0,2');
   animation.play();
 }



 bbb(){
   const squareA = createAnimation()
   .addElement(document.querySelector('#card'))
   .duration(5000)
   .keyframes([
     { offset: 0, transform: 'scale(1))', opacity: '0.5' },
     { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
     { offset: 1, transform: 'scale(1)', opacity: '0.5' }
   ]);

   const parent = createAnimation()
   .duration(2000)
   .iterations(Infinity)
   .addAnimation([squareA]);

 parent.play();
 }
}
