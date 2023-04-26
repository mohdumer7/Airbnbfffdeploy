"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import { AiOutlineAccountBook } from "react-icons/ai";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Exact Matches",
  subtitle = "Try changing or Removing the filters",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div
      className="
  h-[60vh]
  flex
  flex-col
  gap-w
  justify-center
  items-center
  "
    >
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
