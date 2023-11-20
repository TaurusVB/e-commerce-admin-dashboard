import prismadb from "@/lib/prismadb";
import { FC } from "react";

interface IDashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: FC<IDashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;
