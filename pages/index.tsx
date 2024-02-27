import React from 'react';
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Winederland",
  description: "Uncork the Magic! A project for Event Planning class",
};

export default function Home(): JSX.Element {
  return (
    <div>
      <Head><title>{metadata.title as string}</title></Head>

      <span>
        INTERVIEW SWAY APP Interview Sway App
      </span>
    </div>
  );
}