const br = () => console.log("-------------------");

// Récupération des scores d'un joueur
function getValues(obj: Record<string, unknown>) {
   if (typeof obj !== "object" || obj === null) {
      throw new TypeError("obj must be an object");
   }

   return Object.values(obj);
}

const scores = {
   level1: 100,
   level2: 85,
   level3: 95
};
console.log(getValues(scores)); br() // [100, 85, 95]







// Conversion de prix euros en dollars
function transformValues(
   obj: Record<string, number>,
   transformer: (value: number) => number
) {
   if (typeof obj !== "object" || obj === null) {
      throw new TypeError("obj must be an object");
   }

   if (typeof transformer !== "function") {
      throw new TypeError("transformer must be a function");
   }

   return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
         if (typeof value !== "number") {
            throw new TypeError(`value for key "${key}" must be a number`);
         }

         return [key, transformer(value)];
      })
   );
}

const pricesInEuros = {
   book: 20,
   pen: 5,
   notebook: 10
};
const toDollars = (euros: number) => euros * 1.1;

console.log(transformValues(pricesInEuros, toDollars)); br() // { book: 22, pen: 5.5, notebook: 11 }







// Fusion des ventes mensuelles magasins
function mergeObjects(
   obj1: Record<string, number>,
   obj2: Record<string, number>
) {
   if (
      typeof obj1 !== "object" || obj1 === null ||
      typeof obj2 !== "object" || obj2 === null
   ) {
      throw new TypeError("obj1 and obj2 must be objects");
   }

   const result: Record<string, number> = {};

   for (const key in obj1) {
      const val1 = obj1[key];
      const val2 = obj2[key];

      if (typeof val1 !== "number") {
         throw new TypeError(`obj1[${key}] must be a number`);
      }

      if (val2 !== undefined && typeof val2 !== "number") {
         throw new TypeError(`obj2[${key}] must be a number`);
      }

      result[key] = val1 + (val2 ?? 0);
   }

   return result;
}

const store1Sales = { january: 1000, february: 1200, march: 900 };
const store2Sales = { january: 800, february: 950, march: 1100 };

console.log(mergeObjects(store1Sales, store2Sales)); br() // { january: 1800, february: 2150, march: 2000 }







// Filtrage des produits en rupture
function filterObject(
   obj: Record<string, number>,
   predicate: (value: number) => boolean
) {
   if (typeof obj !== "object" || obj === null) {
      throw new TypeError("obj must be an object");
   }

   if (typeof predicate !== "function") {
      throw new TypeError("predicate must be a function");
   }

   return Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => {
         if (typeof value !== "number") {
            throw new TypeError(`value for key "${key}" must be a number`);
         }

         return predicate(value);
      })
   );
}

const inventory = {
   laptop: 0,
   smartphone: 5,
   tablet: 0,
   headphones: 8
};

console.log(filterObject(inventory, stock => stock === 0)); br() // { laptop: 0, tablet: 0 }

export { };