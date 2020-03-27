export let calculatePurchaseChange = (productPrice:number, money:number) => {
    let bills:number[] = [1,10,100];
    let quantityBills1:number = 0;
    let quantityBills10:number = 0;
    let quantityBills100:number = 0;
    let purchaseChange:number = money - productPrice;
    
    if(purchaseChange < bills[0]){
        quantityBills1 = productPrice;
    } else if (purchaseChange  >= bills[1] && purchaseChange < bills[2]){
        quantityBills1 = purchaseChange%bills[0];
        quantityBills10 = purchaseChange/bills[1];
    } else if (purchaseChange >= bills[2]) {
        quantityBills100 = purchaseChange/bills[2];
        quantityBills10 = (purchaseChange%bills[2])/bills[1];
        quantityBills1 = (purchaseChange%bills[2])%bills[1];
    }


   return {
       "product_value" : productPrice,
       "money_by_client" : money,
       "1_real_bills" : quantityBills1,
       "10_real_bills" : quantityBills10,
       "100_real_bills" : quantityBills100
   };
}
