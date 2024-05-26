type UserId = {
  __type?: 'UserId'
} & string

const userId: UserId = '42' // ✅

type ValidUserId  = {
  __type: 'UserId'
} & string

const validUser: ValidUserId = '42' // ❌