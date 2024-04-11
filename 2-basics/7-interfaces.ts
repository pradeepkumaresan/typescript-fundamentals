interface UserInterface {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCouponPercentage(couponName: string): number;
}

// extending an interface
interface UserInterface {
  githubId: string;
}

interface Admin extends UserInterface {
  role: "admin" | "superadmin";
}

const user2: UserInterface = {
  email: "abc@email.com",
  userId: 1,
  dbId: 1,
  startTrial: () => {
    return " Trial started";
  },
  getCouponPercentage: (name: "abc") => {
    return 10;
  },
  githubId: "abc",
};

user2.email = "sdn@email.com";
export ./2-basics/7-interfaces.ts;
