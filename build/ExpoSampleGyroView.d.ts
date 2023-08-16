import * as React from "react";
import { ViewProps } from "react-native";
export type OnGyroEvent = {
    y: number;
};
export type Props = {
    placeholderText?: string;
    track: boolean;
    onGyroEvent?: (event: {
        nativeEvent: OnGyroEvent;
    }) => void;
} & ViewProps;
export default function ExpoGyroView(props: Props): React.JSX.Element;
//# sourceMappingURL=ExpoSampleGyroView.d.ts.map