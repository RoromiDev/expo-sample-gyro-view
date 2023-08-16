import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";
const NativeView = requireNativeViewManager("ExpoSampleGyroView");
export default function ExpoGyroView(props) {
    return React.createElement(NativeView, { ...props });
}
//# sourceMappingURL=ExpoSampleGyroView.js.map