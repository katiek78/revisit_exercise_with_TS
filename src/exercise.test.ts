import { getCities, User, areWeCovered, StaffSchedule, Day } from "./exercise";

describe("getCities", () => {
  test("returns an array of the cities of each user", () => {
    const users: Array<User> = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR",
          },
        },
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: "LVP",
          },
        },
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP",
          },
        },
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW",
          },
        },
      },
    ];
    expect(getCities(users)).toEqual(["MCR", "LVP", "LVP", "GLW"]);
  });
});

const schedules1: Array<StaffSchedule> = [
  { name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
  { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
  { name: "Virgil", rota: ["Wednesday"] },
];

const schedules2: Array<StaffSchedule> = [
  { name: "Jordan", rota: ["Monday", "Tuesday", "Wednesday"] },
  { name: "Darwin", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
  { name: "Virgil", rota: ["Wednesday"] },
  { name: "Cody", rota: ["Wednesday", "Thursday"] },
];

describe("areWeCovered", () => {
  test("returns true if at least 3 members of staff are working that day", () => {
    expect(areWeCovered(schedules1, "Wednesday")).toBe(true);
    expect(areWeCovered(schedules2, "Wednesday")).toBe(true);
  });
  test("returns false if 2 or fewer members of staff are working that day", () => {
    expect(areWeCovered(schedules1, "Friday")).toBe(false);
    expect(areWeCovered(schedules1, "Saturday")).toBe(false);
    expect(areWeCovered(schedules1, "Tuesday")).toBe(false);
  });
  test("returns false if array is empty", () => {
    expect(areWeCovered([], "Wednesday")).toBe(false);
  });
});
