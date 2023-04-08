

export type SignUpType = {
    name: string;
    email: string;
    password: string;
}

export type SignInType = Omit<SignUpType, "name">;

