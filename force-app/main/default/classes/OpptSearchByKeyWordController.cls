public with sharing class OpptSearchByKeyWordController {

    public OpptSearchByKeyWordController(){

    }

    @AuraEnabled(cacheable=true)//stef:set this method accessible from lightning web components.
    public static List<Opportunity> getOpportunity(String opptSearchKey, String acctId){
        try {
            String keyString = '%'+opptSearchKey+'%';
            return [SELECT AccountId, Name, Amount, CloseDate  FROM Opportunity WHERE Name LIKE :keyString and AccountId = :acctId ];//stef:comma to indicate it is a variable
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
