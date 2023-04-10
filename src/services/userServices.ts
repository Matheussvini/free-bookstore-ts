import { SignInType, SignUpType } from "../@types/users";
import errors from "../errors";
import bcrypt from "bcrypt";
import userRepositories from "../repositories/userRepositories";
import { v4 as uuidV4 } from "uuid";

async function create({ name, email, password }: SignUpType) {
  const { rowCount: emailInUse } = await userRepositories.findByEmail(email);
  if (emailInUse) throw errors.duplicatedEmailError(email);

  const hashPassword = await bcrypt.hash(password, 10);
  await userRepositories.create({ name, email, password: hashPassword });
}

async function signIn({ email, password }: SignInType) {
  const {
    rowCount: emailInUse,
    rows: [user],
  } = await userRepositories.findByEmail(email);
  if (!emailInUse) throw errors.invalidCredentialsError();

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw errors.invalidCredentialsError();

  const token = uuidV4();
  await userRepositories.createSession({ token, user_id: user.id });

  return token;
}

export default {
  create,
  signIn,
};
