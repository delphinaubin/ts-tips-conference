type Ext = "com" | "fr" | "net";
type Email = `${string}@${string}.${Ext}`;


const valid: Email = 'john.doe@gmail.com' // ✅
const ko1: Email = 'john.doegmail.com' // ❌
const ko2: Email = 'john.doe@gmail.BAD' // ❌