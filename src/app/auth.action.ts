import { createAction, props } from "@ngrx/store";
import { user } from "./user.module";

export const login=createAction(
    "[Login Page] user login",
    props<{user: user}>()
);

// const newLoginAction=login({user:})