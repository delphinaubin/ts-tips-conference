function cookDinner(dish: string): string
function cookDinner(money: number): string // ❌ Wrong argument type
/**
⛔ This overload signature is not compatible with its implementation signature.
*/
function cookDinner(dish: string, drink: string, dessert: string): string
function cookDinner(dish: string, drink?: string, dessert?: string): string {
  let dinner = `${dish}🍴`
  if (drink && dessert) {
    dinner += ` ${drink}🧊${dessert}🥄`
  }
  return `${dinner} is ready, bon appétit!`
}

cookDinner('🍝'); // '🍝🍴 is ready, bon appétit!';
cookDinner('🍔', '🥤', '🍰'); // '🍔🍴🥤🧊🍰🥄 is ready, bon appétit!';

cookDinner('🍺', '🍸') // ❌ Invalid number of arguments
/**
⛔ No overload expects 2 arguments, but overloads do exist that expect either 1 or 3 arguments.
*/