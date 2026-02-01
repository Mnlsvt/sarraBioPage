"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import "../globals.css";
import PdfViewer from "@/components/ui/pdfView";

export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="max-w-5xl mx-auto py-16 px-8">
                <h2 className="text-green-400 font-mono text-lg mb-6 mt-6">
                    / resume
                </h2>
                <PdfViewer />
            </div>
        </>
    );
}
