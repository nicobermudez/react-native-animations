import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { TourScreen, HomeScreen } from "../screens";
import { TourItem } from "../constants";

export type RootStackParamList = {
    Home: undefined;
    Tour: { item: TourItem };
};

const Stack = createSharedElementStackNavigator<RootStackParamList>();
export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none" initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Tour"
                    component={TourScreen}
                    sharedElementsConfig={(route) => {
                        const { item } = route.params;
                        return [
                            {
                                id: `item.${item.id}.image_url`,
                                animation: "move",
                                resize: "clip",
                            },
                            {
                                id: `item.${item.id}.subTitle`,
                                animation: "fade",
                                resize: "clip",
                            },
                            {
                                id: `item.${item.id}.icon`,
                                animation: "move",
                                resize: "clip",
                            },
                            {
                                id: `item.${item.id}.title`,
                                animation: "move",
                                resize: "clip",
                            },
                        ];
                    }}
                    options={{
                        headerBackTitleVisible: false,
                        cardStyleInterpolator: ({ current: { progress } }) => {
                            return {
                                cardStyle: {
                                    opacity: progress,
                                },
                            };
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
