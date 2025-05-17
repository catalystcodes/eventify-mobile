import React, { ReactNode } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const KeyboardAvoidView = ({ children }: { children: ReactNode }) => {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
      scrollToOverflowEnabled={false}
      extraScrollHeight={0}
      extraHeight={100}
      // scrollEnabled={false}
      enableResetScrollToCoords={false}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAvoidView;
