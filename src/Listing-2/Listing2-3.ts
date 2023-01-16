// Listing 2.3 Identifiers with inferred types
const age = 25;

function getTax(income: number): number {
  return income * 0.15;
}

let yourTax = getTax(3000000);

/*
let name3: 'John Smith';
name3 = 'Marry Lou'; 
Type '"Marry Lou"' is not assignable to type '"John Smith"'.
*/

let productId;
productId = null;
productId = undefined;
