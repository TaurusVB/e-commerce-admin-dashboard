import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { FC } from "react";

import prismadb from "@/lib/prismadb";
import SettingsForm from "./components/SettingsForm";

export const metadata = {
  title: "Settings | ADMIN-DASHBOARD",
  description: "E-commerce ADMIN-DASHBOARD, Settings page",
};

interface ISettingsPageProps {
  params: {
    storeId: string;
  };
}

const SettingsPage: FC<ISettingsPageProps> = async ({ params }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-up");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className=" flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
};

export default SettingsPage;
