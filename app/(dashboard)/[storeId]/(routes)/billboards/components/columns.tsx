"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./cellAction";

export type TypeBillboardColumn = {
  id: string;
  label: string;
  createdAt: string;
};

export const columns: ColumnDef<TypeBillboardColumn>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
