import { all } from "redux-saga/effects";
import {bannerSaga} from "../Sagas/banner.saga"
export default function* rootSaga() {
  yield all([
    ...bannerSaga,
  ]);
}
