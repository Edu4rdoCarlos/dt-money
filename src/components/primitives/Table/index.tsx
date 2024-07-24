import { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return (
    <table className="border-separate	border-spacing-y-1.5">{children}</table>
  );
};

const Head = ({ children }: TableProps) => {
  return (
    <thead>
      <tr className="[&>th]:font-light text-gray-400 [&>th]:text-sm [&>th]:text-left [&>th]:pb-2.5 [&>th]:pl-5 ">
        {children}
      </tr>
    </thead>
  );
};

const Body = ({ children }: TableProps) => {
  return (
    <tbody className="[&>tr]:bg-white [&>tr>td]:py-4 [&>tr>td]:px-5 [&>tr>td]:text-sm [&>tr>td]:font-light [&>tr>td]:text-gray-400">
      {children}
    </tbody>
  );
};

Table.Root = Table;
Table.Thead = Head;
Table.Tbody = Body;

export { Table };
