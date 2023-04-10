import { SignUpType, TokenType } from "../@types/users";
import connectionDb from "../config/database";

async function findByEmail(email: string) {
  return await connectionDb.query(
    `
            SELECT * FROM users WHERE email = $1
        `,
    [email]
  );
}

async function create({ name, email, password }: SignUpType) {
  await connectionDb.query(
    `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
    `,
    [name, email, password]
  );
}

async function createSession({ token, user_id }: TokenType) {
  await connectionDb.query(
    `
            INSERT INTO sessions (user_id, token)
            VALUES ($1, $2)
        `,
    [user_id, token]
  );
}

export default {
  create,
  findByEmail,
  createSession,
};
