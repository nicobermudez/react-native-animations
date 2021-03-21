import { Feather } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";

type ExtractSet<P> = P extends Icon<infer T, any> ? T : never;

export type TourItem = {
    id: string;
    title: string;
    subTitle: string;
    image_url: string;
    icon: ExtractSet<typeof Feather>;
};

export const data: TourItem[] = [
    {
        id: Math.floor(Math.random() * Math.floor(16000)).toString(),
        title: "Manarola, Italy",
        subTitle: "The Cliffs of Cinque Terre",
        image_url:
            "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
        icon: "map-pin",
    },
    {
        id: Math.floor(Math.random() * Math.floor(16000)).toString(),
        title: "Venezia, Italy",
        subTitle: "Rialto Bridge, Venezia, Italy",
        image_url:
            "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=630&q=80",
        icon: "map-pin",
    },
    {
        id: Math.floor(Math.random() * Math.floor(16000)).toString(),
        title: "Prague, Czechia",
        subTitle: "Tram in Prague",
        image_url:
            "https://images.unsplash.com/photo-1513805959324-96eb66ca8713?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        icon: "map-pin",
    },
];

export const loremIpsumText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
