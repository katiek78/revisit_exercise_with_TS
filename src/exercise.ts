

export type User = { id: number, data: { city: {id: number, displayName: string}}};

export function getCities(users: Array<User>) {
    if (!users) throw new Error("users is required");
    if (!Array.isArray(users)) throw new Error("users must be an array");
  
    return users.map(el => el.data?.city?.displayName);
  }

  export type StaffSchedule = {name: string, rota: Array<Day>};
  export type Day = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

  export const areWeCovered = (staff: Array<StaffSchedule>, day: Day) => {
    if (staff === undefined) throw new Error("staff is required");
    if (day === undefined) throw new Error("day is required");
  
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (DAYS.indexOf(day) === -1) throw new Error("day must be a valid day of the week");
  
    let count = 0;
    for (let i = 0; i < staff.length; i++) {
      if (staff[i].rota.includes(day)) {
        count++;
        if (count === 3) return true;
      }
    }
    return false;
  };
  