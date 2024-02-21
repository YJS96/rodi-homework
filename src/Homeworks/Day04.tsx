// import React from "react";
import PolyText from "../components/PolyText";
import RadixFlex from "../components/RadixFlex";

export default function Day04() {
  const temp = [0, 1, 2, 3, 4];

  return (
    <>
      <div className="px-1">
        <PolyText fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          div(default)
        </PolyText>
        <PolyText as="div" fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          div
        </PolyText>
        <PolyText as="span" fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          span
        </PolyText>
        <PolyText as="p" fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          p
        </PolyText>

        <RadixFlex>
          {temp.map((num) => (
            <div className="flex-box">{num}</div>
          ))}
        </RadixFlex>
        <RadixFlex gap={3}>
          {temp.map((num) => (
            <div className="flex-box">{num}</div>
          ))}
        </RadixFlex>
        <RadixFlex justify={"center"}>
          {temp.map((num) => (
            <div className="flex-box">{num}</div>
          ))}
        </RadixFlex>
        <RadixFlex justify={"between"}>
          {temp.map((num) => (
            <div className="flex-box">{num}</div>
          ))}
        </RadixFlex>
        <RadixFlex direction={"col"}>
          {temp.map((num) => (
            <div className="flex-box">{num}</div>
          ))}
        </RadixFlex>
      </div>
    </>
  );
}
