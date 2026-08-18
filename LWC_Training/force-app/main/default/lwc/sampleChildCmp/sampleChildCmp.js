import { LightningElement, api } from 'lwc';

export default class SampleChildCmp extends LightningElement {
    @api greetChildCmp = "child component";
}