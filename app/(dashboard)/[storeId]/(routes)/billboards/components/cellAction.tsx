"use client";

import { FC } from "react";
import { TypeBillboardColumn } from "./columns";

interface ICellActionProps {
  data: TypeBillboardColumn;
}

const CellAction: FC<ICellActionProps> = ({ data }) => {
  return <div>Action</div>;
};

export default CellAction;
