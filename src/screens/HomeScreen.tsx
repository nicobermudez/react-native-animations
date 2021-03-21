import styled from "@emotion/native";
import dayjs from "dayjs";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
    Text,
    Animated,
    NativeSyntheticEvent,
    NativeScrollEvent,
} from "react-native";
import { TourCard, FadeView, SubTitle } from "../components";
import { colors, data } from "../constants";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation";
import { SafeAreaView } from "react-native-safe-area-context";

type WrapperProps = {
    isHeaderScrolled: boolean;
};
const Wrapper = styled(SafeAreaView)<WrapperProps>(
    {
        flex: 1,
        backgroundColor: colors.background,
    },
    ({ isHeaderScrolled }) => ({
        paddingTop: isHeaderScrolled ? 0 : 36,
    }),
);

const Header = styled.Text({
    color: colors.text,
    fontSize: 32,
    fontWeight: "bold",
});

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const scrollAnimatedValue = useRef(new Animated.Value(0)).current;
    const [isHeaderScrolled, setHeaderScrolled] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [headerPosition, setHeaderPosition] = useState(0);
    return (
        <Wrapper isHeaderScrolled={isHeaderScrolled}>
            <FadeView
                visible={isHeaderScrolled}
                style={{
                    paddingHorizontal: 20,
                }}
            >
                <SubTitle
                    style={{
                        textAlign: "center",
                        paddingBottom: 20,
                    }}
                >
                    Tours
                </SubTitle>
            </FadeView>
            <StatusBar hidden />
            <Animated.ScrollView
                indicatorStyle="white"
                style={{ flex: 1 }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: { y: scrollAnimatedValue },
                            },
                        },
                    ],
                    {
                        useNativeDriver: true,
                        listener: (
                            e: NativeSyntheticEvent<NativeScrollEvent>,
                        ) => {
                            const offset = e.nativeEvent.contentOffset.y;
                            const scrolled =
                                headerHeight + headerPosition < offset;
                            setHeaderScrolled(scrolled);
                        },
                    },
                )}
            >
                <Animated.View
                    style={{
                        marginBottom: 20,
                        paddingHorizontal: 20,
                    }}
                    onLayout={(e) => {
                        setHeaderHeight(e.nativeEvent.layout.height);
                        setHeaderPosition(e.nativeEvent.layout.y);
                    }}
                >
                    <Text
                        style={{
                            color: colors.text_light,
                            textTransform: "uppercase",
                        }}
                    >
                        {dayjs().format("dddd, D MMMM")}
                    </Text>
                    <Header>Today</Header>
                </Animated.View>
                {data.map((item) => (
                    <TourCard
                        key={item.id}
                        item={item}
                        onPress={() => navigation.navigate("Tour", { item })}
                        style={{ alignSelf: "center" }}
                    />
                ))}
            </Animated.ScrollView>
        </Wrapper>
    );
};
