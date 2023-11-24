"use client";

import { FC } from "react";

import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { TypeOrderColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/dataTable";

interface IOrderClientProps {
  data: TypeOrderColumn[];
}

const OrderClient: FC<IOrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />
      <Separator />
      <DataTable columns={columns} data={data} searchKey="products" />
    </>
  );
};

export default OrderClient;
