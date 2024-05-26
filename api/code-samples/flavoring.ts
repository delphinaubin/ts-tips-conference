function getUserById(userId: UserId): Promise<User> {
  // ...
}

const orderId: OrderId
await getUserById(orderId) // ❌

const userId: UserId
await getUserById(userId) // ✅
