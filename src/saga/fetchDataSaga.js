
import { call, take, takeEvery } from "redux-saga/effects";
import types  from "../redux/types";
import axios from 'axios';


function* ayscFetchRequest(action){
    console.log("action :", action);
    try {
        const url = "https://reqres.in/api/users/2";
        const response = yield call(() => axios.get(url));
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

export default function* RootSaga(){
    console.log("function* RootSaga");
    yield takeEvery(types.SEND_REQUEST, ayscFetchRequest)
}