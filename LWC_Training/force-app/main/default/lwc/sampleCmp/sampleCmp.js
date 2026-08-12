import { LightningElement } from 'lwc';

export default class SampleCmp extends LightningElement {
    greetCmp = "LWC";
    showWelcomeMessage = true;
    showSecondMessage = false;

    handleMessage(event){
        this.greetCmp = event.target.value;
    }
    handleMessageChange(event){
        
        const value = this.template.querySelector('lightning-input').value;
        this.greetCmp = value;
    }
    handleNext(){
        this.showWelcomeMessage = false;
        this.showSecondMessage = true;
    }
    handleFinal(){
        this.showWelcomeMessage = false;
        this.showSecondMessage = false;
    }
}