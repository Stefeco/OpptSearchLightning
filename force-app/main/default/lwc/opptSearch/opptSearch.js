import { LightningElement} from 'lwc';

export default class OpptSearch extends LightningElement {

    inputAccountName="";
    searchAccountName(event){
        this.inputAccountName = event.target.value;
        }
    
}