import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/enterotp"); 
    }, []);

    return <Stack screenOptions={{ headerShown: false }} />;
}


