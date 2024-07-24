"use client";
import { useState } from "react";
import { Details } from "../compounds/Details";
import { Header } from "../compounds/Header";
import { Info } from "../compounds/Info";
import { Transaction } from "../compounds/Transaction";

const HomeLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header handleOpenDialog={() => setOpen(true)} />
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <Info />
        <Details />
        <Transaction openDialog={open} onOpenDialog={setOpen} />
      </div>
    </>
  );
};

export default HomeLayout;
