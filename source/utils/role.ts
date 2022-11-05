// TODO this should come from a shared library
enum Roles {
  Admin = "Admin",
  Actor = "Actor",
  Casting = "Casting",
}

export const getType = (roleNum: number): Roles => {
  if (roleNum === 1) { return Roles.Actor; }
  if (roleNum === 2) { return Roles.Casting; }
  if (roleNum === 3) { return Roles.Admin; }

  throw new Error("User is missing or has an invalid role.");
};
