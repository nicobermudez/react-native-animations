import React, { useEffect, useRef } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";

type FadeProps = {
    visible?: boolean;
    style?: StyleProp<ViewStyle>;
};

export const FadeView: React.FC<FadeProps> = ({
    visible = true,
    children,
    style,
    ...props
}) => {
    const visibility = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(visibility, {
            toValue: visible ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [visible, visibility]);

    return (
        <Animated.View
            style={[
                style,
                {
                    opacity: visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                    }),
                },
            ]}
            {...props}
        >
            {visible && children}
        </Animated.View>
    );
};
