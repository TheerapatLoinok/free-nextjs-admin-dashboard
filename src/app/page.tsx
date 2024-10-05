import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Trustfinance sprint report",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
  icons: {
    icon: "/images/tfn-logo-favicon.png",
  },
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
