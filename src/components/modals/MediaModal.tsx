import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

const MediaModal = ({
  open,
  close,
  file,
}: {
  open: boolean;
  close: () => void;
  file: Media | null;
}) => {
  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent className="w-[95%]  h-[80%] max-w-[900px] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-[30px] capitalize">{file?.name}</DialogTitle>
        </DialogHeader>
        <div className="h-full">
          {file && file.type === "image" ? (
            <div className="relative h-full cursor-pointer overflow-hidden">
              <Image
                src={file.url}
                width={500}
                height={500}
                alt={file.type}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="relative cursor-pointer overflow-hidden h-full">
              <video
                src={file?.url}
                muted
                autoPlay
                loop
                className="w-full h-full absolute top-0 left-0 object-contain"
              ></video>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaModal;
