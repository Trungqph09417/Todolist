import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as apis from "../apis";
import icons from "../utils/icons";
const {
  CiHeart,
  PiShuffleThin,
  BsFillPlayFill,
  CiRepeat,
  BiSkipPrevious,
  BiSkipNext,
  CgPlayPauseO,
  AiOutlinePause,
} = icons;
const Player = () => {
  const audioEl = new Audio(
    "https://a128-zmp3.zmdcdn.me/bf7f94eab3cf3d5e621a2129d34b5a83?authen=exp=1699280524~acl=/bf7f94eab3cf3d5e621a2129d34b5a83/*~hmac=142f0c78f143df29df4069c990eb9817"
  );

  const { curSongId, isPlaying } = useSelector((state) => state.music);
  const [SongInfo, setSongInfo] = useState("");
  const [isPlayingTets, setIsPlayingTest] = useState(false);
  const [source, setSource] = useState("");
  console.log(audioEl);
  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiDetailSong(curSongId),
        apis.apiSong(curSongId),
      ]);

      if (res1.data.err === 0) {
        setSongInfo(res1.data.data);
      }
      console.log(res2);
      if (res2.data.err === 0) {
        setSource(res2.data.data["128"]);
      }
    };
    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    let resp = audioEl;
    if (isPlayingTets) {
      resp.play();
    } else {
      resp.pause();
    }
  }, [isPlayingTets]);

  const handlePlaying = () => {
    //  setIsPlaying((prev) => !prev);
    setIsPlayingTest((prev) => !prev);
  };

  return (
    <div className='w-full h-full flex px-[20px] '>
      <div className='w-[30%] h-full flex gap-2 items-center '>
        <img
          src={SongInfo.thumbnail}
          alt='anh thumnail'
          className='w-[64px] h-[64px]  rounded-md'
        />
        <div className='flex flex-col'>
          <span className='font-semibold text-sm'>{SongInfo.title}</span>
          <span className='text-xs text-gray-500'>
            {SongInfo?.artistsNames}
          </span>
        </div>
        <div className='flex items-center gap-3'>
          <CiHeart size={24} />
          <span className='pb-3'>...</span>
        </div>
      </div>
      <div className='w-[40%] flex flex-col items-center justify-center'>
        <div className='flex   h-[50px] gap-1 items-center justify-center'>
          <span title='Bật phát ngẫu nhiên' className='cursor-pointer'>
            <PiShuffleThin size={30} className='w-[50px]' />
          </span>
          <span className='cursor-pointer'>
            <BiSkipPrevious size={30} className='w-[50px]' />
          </span>
          <span className='btn-jsmusic cursor-pointer' onClick={handlePlaying}>
            {isPlayingTets ? (
              <BsFillPlayFill
                size={40}
                className='rounded-full border border-gray-700 p-2 hover:bg-main-500'
              />
            ) : (
              <AiOutlinePause
                size={40}
                className='rounded-full border border-gray-700 p-2 hover:bg-main-500'
              />
            )}
          </span>
          <span className='cursor-pointer'>
            <BiSkipNext size={30} className='w-[50px]' />
          </span>
          <span className='cursor-pointer'>
            <CiRepeat
              title='Bật phát lại tất cả'
              size={30}
              className='w-[50px]'
            />
          </span>
        </div>
        <div>pro</div>
      </div>
      <div className='w-[30%]'>voice</div>
    </div>
  );
};

export default Player;
