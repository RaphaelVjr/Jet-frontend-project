/* eslint-disable @next/next/no-img-element */
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Chip,
  user,
  ChipProps,
} from "@nextui-org/react";
import React from "react";
import ReactStars from "react-stars";
import { columns, rows } from "./data";

interface Item {
  id: string;
  image: string;
  car: string;
  rating: string;
  status: string;
  [key: string]: any;
}

const DesktopTable = () => {
  type StatusColor =
    | "success"
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "warning"
    | undefined;

  type ColumnKey = keyof Item;

  const statusColorMap: Record<string, StatusColor> = {
    available: "success",
    unavailable: "danger",
  };
  const renderCellContent = (item: Item, columnKey: ColumnKey) => {
    const commonContent = (
      <span className="text-sm leading-5">{getKeyValue(item, columnKey)}</span>
    );

    switch (columnKey) {
      case "car":
        return (
          <>
            <img
              src={item.image}
              alt={item.car}
              width={48}
              height={48}
              className="inline-block mr-2"
            />
            {commonContent}
          </>
        );
      case "rating":
        return <ReactStars count={5} size={16} color2={"black"} />;
      case "status":
        return (
          <Chip
            className="capitalize text-green-800 rounded-md"
            color={statusColorMap[item.status]}
            size="sm"
            variant="flat"
          >
            {item.status}
          </Chip>
        );
      case "actions":
        return <FontAwesomeIcon className="pl-8" icon={faEllipsisV} />;
      default:
        return commonContent;
    }
  };

  return (
    <div className="overflow-auto hidden md:block">
      <Table className="w-full" aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className="px-6 py-3 border-l-1 border-b-1 border-r-1 rounded-none border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.id} className="bg-white table-row">
              {(columnKey) => (
                <TableCell
                  className={`px-6 py-2 whitespace-no-wrap border-l-1 border-r-1 border-b-1 border-gray-200 text-black table-cell ${columnKey}`}
                >
                  {renderCellContent(item, columnKey)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DesktopTable;
