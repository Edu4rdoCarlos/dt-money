import HomeLayout from "@/components/Layout/HomeLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DT Money",
  description: "Billing money through activity registrations",
};

export default function Home() {
  return (
    <>
      <HomeLayout />
    </>
  );
}
