import { LightningElement } from 'lwc';

export default class SampleCmp extends LightningElement {
    greetCmp = "LWC";

    handleMessage(event){
        this.greetCmp = event.target.value;
    }
    handleMessageChange(event){
        
        const value = this.template.querySelector('lightning-input').value;
        this.greetCmp = value;
    }
}