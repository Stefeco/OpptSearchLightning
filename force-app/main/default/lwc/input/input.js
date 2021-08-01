import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import {inputAccountName} from 'c/opptSearch';

//set opportunity objects fields
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import ACCOUNT_ID from '@salesforce/schema/Opportunity.AccountId';
import AMOUNT from '@salesforce/schema/Opportunity.Amount';
import STAGE from '@salesforce/schema/Opportunity.StageName';
const OpptFields = [
    NAME_FIELD,
    ACCOUNT_ID,
    AMOUNT,
    STAGE
];

export default class Input extends LightningElement {

    inputAccountName = {inputAccountName};

    @api accountId;
    name;
    opptTable = [];

    @wire (getRecord, {accountId: '$inputAccountName', fields: OpptFields})
    loadOppt({error, data}){
        if(error){
            //TO DO handle error message
        } else if (data){
            //get oppt data
            this.name = getFieldValue(data, NAME_FIELD);
            const compte = getFieldValue(data, ACCOUNT_ID);
            const montant = getFieldValue(data, AMOUNT);
            const statut = getFieldValue(data, STAGE);
            //place oppt data into a table
            this.opptTable = [{
                Nom : this.name,
                Compte : compte,
                Montant : montant,
                Statut : statut
            }];
        }
    }
}