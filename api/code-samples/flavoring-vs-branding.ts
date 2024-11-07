type UserId = {
  __type?: "UserId";
} & string;

const userId: UserId = "42"; // ✅

type AdminId = {
  __type?: "AdminId";
} & string;

const adminId: AdminId = "42"; // ✅

👉 adminId !== userId


