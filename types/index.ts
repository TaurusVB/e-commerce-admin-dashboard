import { PopoverTrigger } from "@/components/ui/popover";

export interface useStoreModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type IPopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
