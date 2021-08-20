import { LightningElement, track, api } from 'lwc';
//import the apex controller
import getOpportunity from '@salesforce/apex/OpptSearchByKeyWordController.getOpportunity';

export default class OpptSearch2 extends LightningElement {

    isTableVisible=false;

    //we connect the table for automatic update and define the columns that will appear in the datatable
    @track opptTable;
    @api recordId;
    @track  cols = [
        { label : 'Account Id', fieldName : 'AccountId', type : 'text' },
        { label : 'Opportunity Name', fieldName : 'Name', type : 'text'},
        { label : 'Amount', fieldName : 'Amount', type : 'currency'},
        { label : 'Close Date', fieldName : 'CloseDate', type : 'date'}
    ]

    //this is a js function that updates automatically the "updateKey" variable when someone enters text in the input field.
    updateKey(event){
        this.opptSearchKey = event.target.value;
    }

    
    // the handleSearch function calls the apex controller method and pass the searchKey and recordId as parameter.

    handleSearch(){
        //alert(this.recordId);
        getOpportunity({opptSearchKey: this.opptSearchKey, acctId: this.recordId})
        .then(result=>{
            this.opptTable=result;
        })
        .catch(error=>{
            this.opptTable=null;
        });

        this.isTableVisible = true;
    }

}