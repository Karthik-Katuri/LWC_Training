import { LightningElement, api } from 'lwc';

export default class SampleChildCmp extends LightningElement {
    @api greetChildCmp = "Message from child component";
     displayMessage = "";

     connectedCallback() {
        this.displayMessage = this.greetChildCmp;
    }
     @api changeMessage(message) {
         this.displayMessage = message;
     }
    

}