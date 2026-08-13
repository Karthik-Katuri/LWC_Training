import { LightningElement } from 'lwc';

export default class SampleCmp extends LightningElement {
    greetCmp = "LWC";
    showWelcomeMessage = true;
    showSecondMessage = false;

    handleMessage(event){
        this.greetCmp = event.target.value;
    }
    studentsList=[{"name":"John","rollno":1,"age":20,"grade":"A"},
    {"name":"Alice","rollno":2,"age":19,"grade":"B"},
    {"name":"Bob","rollno":3,"age":21,"grade":"C"},
    {"name":"Eve","rollno":4,"age":22,"grade":"A"},
    {"name":"Charlie","rollno":5,"age":20,"grade":"B"}
    ]
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