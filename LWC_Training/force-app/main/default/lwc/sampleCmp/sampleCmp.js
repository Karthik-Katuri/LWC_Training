import { LightningElement,track } from 'lwc';

export default class SampleCmp extends LightningElement {
    greetCmp = "world";
    showWelcomeMessage = true;
    showSecondMessage = false;

    handleMessage(event){
        this.greetCmp = event.target.value;
    }
   @track studentsList=[{"name":"John","rollno":1,"age":20,"grade":"A"},
    {"name":"Alice","rollno":2,"age":19,"grade":"B"},
    {"name":"Bob","rollno":3,"age":21,"grade":"C"},
    {"name":"Eve","rollno":4,"age":22,"grade":"A"},
    {"name":"Charlie","rollno":5,"age":20,"grade":"B"}
    ]
    student = {"name":"ram","rollno":1}
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
    handleAddStudent(){
        this.studentsList.push({"name":"Carol","rollno":6,"age":23,"grade":"C"});
        
    }
    handleChangeMessage(event){
       const childCmp = this.template.querySelector('c-sample-child-cmp');
       childCmp.changeMessage("reset message from parent component");
    }
}