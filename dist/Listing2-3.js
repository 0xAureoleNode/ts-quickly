"use strict";
// Listing 2.3 Identifiers with inferred types
const age = 25;
function getTax(income) {
    return income * 0.15;
}
let yourTax = getTax(3000000);
/*
let name3: 'John Smith';
name3 = 'Marry Lou';
Type '"Marry Lou"' is not assignable to type '"John Smith"'.
*/
let productId = 123;
productId = null;
productId = undefined;
//# sourceMappingURL=Listing2-3.js.map