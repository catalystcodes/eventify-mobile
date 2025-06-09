import React, { ReactNode } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { persistor, store } from "../../store";
import { PersistGate } from "redux-persist/integration/react";
import AuthProvider from "../../context";

const AppManager = ({ children }: { children: ReactNode }) => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AuthProvider>
            <SafeAreaProvider>
              <NavigationContainer>
                <StatusBar backgroundColor="#fff" />
                {children}
              </NavigationContainer>
            </SafeAreaProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default AppManager;
// const styles = StyleSheet.create({});
