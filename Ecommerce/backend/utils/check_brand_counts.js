import { getAppleProducts } from './appleProductsData.js';
import { getSamsungProducts } from './samsungProductsData.js';
import { getSonyProducts } from './sonyProductsData.js';
import { getNikeProducts } from './nikeProductsData.js';
import { getAdidasProducts } from './adidasProductsData.js';
import { getPumaProducts } from './pumaProductsData.js';
import { getZaraProducts } from './zaraProductsData.js';
import { getBoseProducts } from './boseProductsData.js';
import { getLogitechProducts } from './logitechProductsData.js';
import { getDysonProducts } from './dysonProductsData.js';
import { getDellProducts } from './dellProductsData.js';
import { getAsusProducts } from './asusProductsData.js';
import { getCanonProducts } from './canonProductsData.js';
import { getRolexProducts } from './rolexProductsData.js';

const brands = {
  Apple: getAppleProducts(1),
  Samsung: getSamsungProducts(1),
  Sony: getSonyProducts(1),
  Nike: getNikeProducts(2),
  Adidas: getAdidasProducts(2),
  Puma: getPumaProducts(2),
  Zara: getZaraProducts(2),
  Bose: getBoseProducts(1),
  Logitech: getLogitechProducts(1),
  Dyson: getDysonProducts(3),
  Dell: getDellProducts(1),
  Asus: getAsusProducts(1),
  Canon: getCanonProducts(1),
  Rolex: getRolexProducts(8)
};

console.log('--- Brand Product Counts ---');
let total = 0;
for (const [name, list] of Object.entries(brands)) {
  console.log(`${name}: ${list.length} items`);
  total += list.length;
}
console.log(`TOTAL: ${total} items across 14 brands`);
