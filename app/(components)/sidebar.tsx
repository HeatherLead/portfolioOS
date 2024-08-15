import { Input } from "@/components/ui/input";
import { TableRow, TableHead, Table } from "@/components/ui/table";
import React from "react";
import { CgTag, CgGames } from "react-icons/cg";
import { FaUser, FaFolder, FaAddressBook } from "react-icons/fa";
import {
  IoArrowBack,
  IoEyeOutline,
  IoSearchOutline,
  IoMail,
} from "react-icons/io5";

const Sidebar = () => {
  return (
    <>
      <div className=" flex flex-wrap justify-center items-center gap-7 p-5 text-2xl text-muted-foreground text-gray-500">
        <IoArrowBack />
        <IoEyeOutline />
        <CgTag />
        <IoSearchOutline />
      </div>
      <div className=" px-5 py-3">
        <Input placeholder="Search" className=" rounded focus:outline-none" />
      </div>
      <Table className=" text-gray-700 cursor-pointer mt-3 ">
        <TableRow className=" hover:bg-slate-200 border-b-0">
          <TableHead>
            <FaUser className=" text-xl" />
          </TableHead>
          <TableHead className=" font-medium text-lg">
            personal Information
          </TableHead>
        </TableRow>
        <TableRow className=" hover:bg-slate-200 border-b-0">
          <TableHead>
            <FaFolder className=" text-xl" />
          </TableHead>
          <TableHead className=" font-medium text-lg">Projects</TableHead>
        </TableRow>
        <TableRow className=" hover:bg-slate-200 border-b-0">
          <TableHead>
            <FaAddressBook className=" text-xl" />
          </TableHead>
          <TableHead className=" font-medium text-lg">
            Contact details
          </TableHead>
        </TableRow>
        <TableRow className=" hover:bg-slate-200 border-b-0">
          <TableHead>
            <CgGames className=" text-xl" />
          </TableHead>
          <TableHead className=" font-medium text-lg">
            Mini projects & games
          </TableHead>
        </TableRow>
        <TableRow className=" hover:bg-slate-200 border-b-0">
          <TableHead>
            <IoMail className=" text-xl" />
          </TableHead>
          <TableHead className=" font-medium text-lg">Mail</TableHead>
        </TableRow>
      </Table>
    </>
  );
};

export default Sidebar;
