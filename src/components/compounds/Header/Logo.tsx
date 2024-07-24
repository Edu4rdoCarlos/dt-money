"use client";

import { CurrencyDollar } from "@phosphor-icons/react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-positive-200 rounded-full p-1">
        <CurrencyDollar weight="regular" size={26} />
      </div>
      <h1 className="text-xl font-medium">dt money</h1>
    </div>
  );
};
