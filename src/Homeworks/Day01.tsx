// import React from 'react'
import { useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./RadixDialog.css";

export default function Day01() {
  const [name, setName] = useState<string>("임준수");
  const [nickname, setNickname] = useState<string>("@yjs");
  const [tempName, setTempName] = useState<string>(name);
  const [tempNick, setTempNick] = useState<string>(nickname);

  const onChangeName = (event: React.FormEvent<HTMLInputElement>) => {
    setTempName(event.currentTarget.value);
  };

  const onChangeNick = (event: React.FormEvent<HTMLInputElement>) => {
    setTempNick(event.currentTarget.value);
  };

  const handleName = () => {
    setName(tempName);
    setNickname(tempNick);
  };

  return (
    <>
      <div className="ShowName">
        이름 : {name} <br />
        아이디 : {nickname}
      </div>
      <Dialog.Root>
        <Dialog.Trigger className="TriggerButton Button main">
          프로필 수정
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">프로필 수정</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              프로필을 변경하고 완료되면 저장을 클릭해주세요.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                이름
              </label>
              <input
                className="Input"
                id="name"
                defaultValue={name}
                onChange={onChangeName}
              />
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="nickname">
                아이디
              </label>
              <input
                className="Input"
                id="nickname"
                defaultValue={nickname}
                onChange={onChangeNick}
              />
            </fieldset>
            <div className="CloseFrame">
              <Dialog.Close asChild onClick={() => handleName()}>
                <button className="Button main">저장</button>
              </Dialog.Close>
            </div>
            <div className="IconButton">
              <Dialog.Close asChild>
                <Cross2Icon />
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
