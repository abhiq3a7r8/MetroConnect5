import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/dashboard"); // Change "/home" to your desired initial screen
    }, []);

    return <Stack screenOptions={{ headerShown: false }} />;
}


