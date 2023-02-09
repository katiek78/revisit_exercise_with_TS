import { getCities, User } from "./exercise";

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