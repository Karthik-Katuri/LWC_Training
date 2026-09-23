import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccessingSFData extends LightningElement {
    fields = ['Name', 'Phone', 'Website', 'Industry', 'Type'];
    isTypeChanged = false;

    handleSuccess(event) {
        const updatedRecordId = event.detail.id;
        console.log('Record updated successfully. Record ID: ' + updatedRecordId);

        const updateToast = new ShowToastEvent({
            title: 'Success',
            message: 'Record updated successfully. Record ID: ' + updatedRecordId,
            variant: 'success'
        });

        this.dispatchEvent(updateToast);
    }
    handleAccountChangeType(event) {
        const selectedType = event.target.value;
        console.log('Selected Account Type: ' + selectedType);
        if (selectedType === 'Technology Partner' || selectedType === 'Customer - Direct') {
            this.isTypeChanged = true;
        }
        else{
            this.isTypeChanged = false;
        }
    }
}