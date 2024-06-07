function isIdValid(id: Id | ValidId): id is ValidId {}

async function saveId(id: ValidId): Promise<void> {}

const id: Id = "test";

saveId(id); // ❌

if (isIdValid(id)) {
  saveId(id); // ✅
}