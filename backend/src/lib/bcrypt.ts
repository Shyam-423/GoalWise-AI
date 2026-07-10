import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function hashValue(value: string) {
  return bcrypt.hash(value, SALT_ROUNDS);
}

export async function compareValue(
  value: string,
  hash: string
) {
  return bcrypt.compare(value, hash);
}