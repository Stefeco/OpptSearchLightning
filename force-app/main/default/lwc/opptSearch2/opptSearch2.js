import { LightningElement, track } from 'lwc';
//import the apex controller
import getOpportunity from '@salesforce/apex/OpptSearchByKeyWordController.getOpportunity';

/*//set opportunity objects fields
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_ID from '@salesforce/schema/Opportunity.AccountId';
import AMOUNT from '@salesforce/schema/Opportunity.Amount';
import CLOSE_DATE from "@salesforce/schema/Opportunity.CloseDate";
    
const opptTable = [
    NAME_FIELD,
    ACCOUNT_ID,
    CLOSE_DATE,
    AMOUNT,
];*/

export default class OpptSearch2 extends LightningElement {

    opptSearchKey = '';
    @track opptTable;

    //this is a js function that updates automatically the "updateKey" variable when someone enters text in the input field.
    updateKey(event){
        this.opptSearchKey = event.target.value;
    }

    //@wire(getOpportunity, {opptSearchKey: $opptSearchKey}) Opportunity;

    
    // the handleSearch function calls the apex controller method and pass the searchKey as parameter.
    handleSearch(){
        getOpportunity({opptSearchKey: this.opptSearchKey})
        .then(result=>{
            this.opptTable=result;
        })
        .catch(error=>{
            this.opptTable=null;
        });
    }
    
    
    cols = [
        { label : 'Account Id', fieldName : 'AccountId', type : 'text' },
        { label : 'Opportunity Name', fieldName : 'Name', type : 'text'},
        { label : 'Amount', fieldName : 'Amount', type : 'currency'},
        { label : 'Close Date', fieldName : 'CloseDate', type : 'date'}
    ]

}