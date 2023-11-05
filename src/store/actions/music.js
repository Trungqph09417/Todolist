import actionTypes from "../actions/actionTypes";
import * as apis from "../../apis";

export const setCurSongId = (sid) => ({
  type: actionTypes.CUR_SONG_ID,
  sid,
});
export const isPlay = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});
