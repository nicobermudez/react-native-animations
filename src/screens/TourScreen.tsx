import styled from "@emotion/native";
import { Feather } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SharedElement } from "react-navigation-shared-element";
import { colors, loremIpsumText } from "../constants";
import { RootStackParamList } from "../navigation";
import { Description, Title, SubTitle } from "../components";

type ImageWrapperProps = {
    height: number;
};
const ImageWrapper = styled.Image<ImageWrapperProps>(
    {
        width: "100%",
    },
    ({ height }) => ({
        height,
    }),
);

const CloseButton = styled(Feather)({
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 2,
});

export type TourScreenProps = StackScreenProps<RootStackParamList, "Tour">;

export const TourScreen: React.FC<any> = ({ navigation, route }) => {
    const { height } = Dimensions.get("window");
    const ITEM_HEIGHT = height * 0.5;
    const { item } = route.params;
    return (
        <SafeAreaView
            style={{ backgroundColor: colors.background }}
            edges={["bottom"]}
        >
            <ScrollView>
                <SharedElement id={`item.${item.id}.image_url`}>
                    <ImageWrapper
                        source={{ uri: item.image_url }}
                        resizeMode="cover"
                        height={ITEM_HEIGHT}
                    />
                </SharedElement>
                <CloseButton
                    name="x"
                    size={28}
                    color={colors.background}
                    onPress={() => navigation.goBack()}
                />
                <View style={{ paddingHorizontal: 20 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            marginVertical: 10,
                        }}
                    >
                        <SharedElement id={`item.${item.id}.icon`}>
                            <Feather
                                size={40}
                                color={colors.text}
                                name={item.icon}
                            />
                        </SharedElement>
                        <View
                            style={{ flexDirection: "column", paddingLeft: 10 }}
                        >
                            <SharedElement id={`item.${item.id}.title`}>
                                <Title>{item.title}</Title>
                            </SharedElement>
                            <SharedElement id={`item.${item.id}.subTitle`}>
                                <SubTitle>{item.subTitle}</SubTitle>
                            </SharedElement>
                        </View>
                    </View>
                    <Description>
                        {loremIpsumText}&nbsp;{loremIpsumText}&nbsp;
                        {loremIpsumText}
                    </Description>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
