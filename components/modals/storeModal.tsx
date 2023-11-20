"use client";

import * as z from "zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";

import { useStoreModal } from "@/hooks/useStoreModal";
import Modal from "../ui/modal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().min(1),
});

const StoreModal = () => {
  const { isOpen, onClose } = useStoreModal();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/stores", values);

      toast.success("Store created!");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className=" space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="E-commerce"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                <Button
                  disabled={isLoading}
                  variant="outline"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={isLoading} type="submit">
                  Continue
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default StoreModal;
