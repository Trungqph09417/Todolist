import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getArrSlider } from "../utils/fn";
import * as actions from "../store/actions";
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  //console.log(banner);

  useEffect(() => {
    const itemEls = document.getElementsByClassName("slider-item-js");
    console.log(itemEls.length);
    let start = 0;
    let end = 2;
    const intervalImage = setInterval(() => {
      const list = getArrSlider(start, end, itemEls.length - 1);
      for (let i = 0; i < itemEls.length; i++) {
        // delete animation
        itemEls[i].classList?.remove(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
        itemEls[i].classList?.remove(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
        itemEls[i].classList?.remove("animate-slide-left2", "order-2", "z-10");

        if (list.some((item) => item === i)) {
          itemEls[i].style.cssText = `display: block`;
        } else {
          itemEls[i].style.cssText = `display: none`;
        }
      }
      // add animation
      list.forEach((item) => {
        if (item === end) {
          itemEls[item].classList?.add(
            "animate-slide-right",
            "order-last",
            "z-20"
          );
        } else if (item === start) {
          itemEls[item].classList?.add(
            "animate-slide-left",
            "order-first",
            "z-10"
          );
        } else {
          itemEls[item].classList?.add(
            "animate-slide-left2",
            "order-2",
            "z-10"
          );
        }
      });

      if (start === itemEls.length - 1) {
        start = 0;
      } else {
        start += 1;
      }

      if (end === itemEls.length - 1) {
        end = 0;
      } else {
        end += 1;
      }
    }, 2500);
    return () => {
      intervalImage && clearInterval(intervalImage);
    };
  }, []);
  const handleBanner = (item) => {
    console.log(banner);
    if (item?.type === 1) {
      dispatch(actions.setCurSongId(item.encodeId));
      dispatch(actions.isPlay(true));
    }
  };

  return (
    <div className='flex gap-4 w-full overflow-hidden px-[59px] pt-8 '>
      {banner?.map((item, index) => (
        <img
          key={item.encodeId}
          src={item.banner}
          alt='anh'
          onClick={() => handleBanner(item)}
          className={`slider-item-js flex-1 w-1/3 object-contain  rounded-md ${
            index <= 2 ? "block" : "hidden"
          }`}
        />
      ))}
    </div>
  );
};

export default Slider;
