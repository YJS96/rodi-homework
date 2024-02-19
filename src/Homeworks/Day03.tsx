// import React from "react";
import CustomText from "../components/CustomText";

export default function Day03() {
  return (
    <>
      <div className="w-screen px-24">
        <CustomText fontWeight={"light"} textAlign={"left"} textSize={"small"}>
          Light, Left, Small
        </CustomText>
        <CustomText
          fontWeight={"bold"}
          textAlign={"center"}
          textSize={"medium"}
        >
          Bold, Center, Medium
        </CustomText>
        <CustomText
          fontWeight={"extrabold"}
          textAlign={"right"}
          textSize={"large"}
        >
          Extraold, Right, Large
        </CustomText>
      </div>
    </>
  );
}
