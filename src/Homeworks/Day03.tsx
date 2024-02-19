// import React from "react";
import CustomText from "../components/CustomText";

export default function Day03() {
  return (
    <>
      <div className="px-1">
        <CustomText fontWeight={"light"} textAlign={"left"} textSize={"small"}>
          Light, Left, Small
        </CustomText>
        <CustomText fontWeight={"bold"} textAlign={"center"} textSize={"medium"}>
          Bold, Center, Medium
        </CustomText>
        <CustomText fontWeight={"extrabold"} textAlign={"right"} textSize={"large"}>
          Extrabold, Right, Large
        </CustomText>
      </div>
    </>
  );
}
