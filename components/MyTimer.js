import React, { useState } from "react";
import MyText from "./MyText";

export default function MyTimer({ timer, setTimer }) {
  function formatSecIntoTime(sekunden) {
    // Hours, minutes and seconds
    var hrs = ~~(sekunden / 3600);
    var mins = ~~((sekunden % 3600) / 60);
    var secs = ~~sekunden % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }
  // setTimeout(() => {
  //   setTimer((prev) => prev + 1);
  // }, 1000);
  return <MyText text={formatSecIntoTime(timer)} fontSize={20} />;
}
