

export type User = { id: number, data: { city: {id: number, displayName: string}}};

export function getCities(users: Array<User>) {
    if (!users) throw new Error("users is required");
    if (!Array.isArray(users)) throw new Error("users must be an array");
  
    return users.map(el => el.data?.city?.displayName);
  }