"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const [bgLoading, setBgLoading] = useState(false);

    const handleBlocking = async () => {
        setLoading(true);
        await fetch("/api/demo/blocking", { method: "POST" });
        setLoading(false);
    };

    const handleBackground = async () => {
        setBgLoading(true);
        await fetch("/api/demo/background", { method: "POST" });
        setBgLoading(false);
    };

    return (
        <div className="p-8 space-x-4">
            <Button disabled={loading} onClick={handleBlocking}>
                {loading ? "Loading..." : "Blocking"}
            </Button>
            <Button disabled={bgLoading} onClick={handleBackground}>
                {bgLoading ? "Loading..." : "Background"}
            </Button>
        </div>
    );
};

export default Page;
