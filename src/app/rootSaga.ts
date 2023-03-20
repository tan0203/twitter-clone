import loginSaga from "features/login/loginSaga";
import { all } from "redux-saga/effects";
import registerSaga from "features/login/loginSaga";
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
  ]);
}
