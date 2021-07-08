import { put, takeLatest } from "redux-saga/effects";
import { bannerRef } from "../../service/data.service";
import Types from "./../Types";

function* fetchBanner(action: any) {
  try {
    const { data } = yield bannerRef();
    if (!data.error) {
      yield put({
        type: Types.FETCH_BANNER_SUCCESS,
        payload: data.data,
      });
    } else if (data.error.code === "E0003") {
      yield put({ type: Types.FETCH_BANNER_ERROR, payload: data.error });
    } else {
    }
  } catch (error) {}
}

export const bannerSaga = [takeLatest(Types.FETCH_BANNER, fetchBanner)];
