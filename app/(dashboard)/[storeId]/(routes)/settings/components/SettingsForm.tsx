"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Store } from "@prisma/client";
import { Trash } from "lucide-react";
import { FC } from "react";

interface ISettingsFormProps {
  initialData: Store;
}

const SettingsForm: FC<ISettingsFormProps> = ({ initialData }) => {
  return (
    <>
      <div className=" flex items-center justify-between">
        <Heading title="Settings" description="Manage store preferences" />
        <Button variant="destructive" size="icon" onClick={() => {}}>
          <Trash className="h-4 w-4" />
        </Button>
      </div>

      
    </>
  );
};

export default SettingsForm;
