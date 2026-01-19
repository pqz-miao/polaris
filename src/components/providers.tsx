"use client";

import { ConvexProviderWithClerk } from "convex/react-clerk";
import {
    ClerkProvider,
    useAuth,
} from "@clerk/nextjs";
import { 
    Authenticated,
    ConvexReactClient,
    Unauthenticated,
    AuthLoading,
} from "convex/react";

import { AuthLoadingView } from "@/features/auth/components/auth-loading-view";
import { UnauthenticatedView } from "@/features/auth/components/unauthenticated-view";

import { ThemeProvider } from "./theme-provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

interface Props {
    children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
        <ClerkProvider>
            <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Authenticated>
                        {children}
                    </Authenticated>
                    <Unauthenticated>
                        <UnauthenticatedView />
                    </Unauthenticated>
                    <AuthLoading>
                        <AuthLoadingView />
                    </AuthLoading>
                </ThemeProvider>
            </ConvexProviderWithClerk>
        </ClerkProvider>
    );
};
