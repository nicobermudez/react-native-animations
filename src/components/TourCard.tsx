import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
    ViewStyle,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { SubTitle, Title } from "./Text";
import { TourItem } from "../constants";

const InnerWrapper = styled.View({
    position: "absolute",
    bottom: 20,
    left: 10,
});

export type CardProps = {
    item: TourItem;
    style?: ViewStyle;
} & TouchableOpacityProps;

export const TourCard: React.FC<CardProps> = ({ item, style, ...props }) => {
    const { width } = Dimensions.get("screen");
    const ITEM_WIDTH = width * 0.9;
    const ITEM_HEIGHT = ITEM_WIDTH * 0.9;
    return (
        <TouchableOpacity style={[style, { marginBottom: 14 }]} {...props}>
            <SharedElement id={`item.${item.id}.image_url`}>
                <Image
                    style={{
                        borderRadius: 14,
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                    }}
                    source={{ uri: item.image_url }}
                    resizeMode="cover"
                />
            </SharedElement>
            <InnerWrapper>
                <View style={{ flexDirection: "row" }}>
                    <SharedElement id={`item.${item.id}.icon`}>
                        <Feather size={40} color="white" name={item.icon} />
                    </SharedElement>
                    <View
                        style={{
                            flexDirection: "column",
                            paddingLeft: 10,
                        }}
                    >
                        <SharedElement id={`item.${item.id}.title`}>
                            <Title>{item.title}</Title>
                        </SharedElement>
                        <SharedElement id={`item.${item.id}.subTitle`}>
                            <SubTitle>{item.subTitle}</SubTitle>
                        </SharedElement>
                    </View>
                </View>
            </InnerWrapper>
        </TouchableOpacity>
    );
};
