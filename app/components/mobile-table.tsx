/* eslint-disable @next/next/no-img-element */
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import ReactStars from "react-stars";
import { rows } from "./data";
import { CheckIcon } from "./checkIcon";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MobileTable = () => {
  return (
    <div className="flex flex-col items-left hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 md:hidden">
      {rows.map((item) => (
        <Card
          key={item.id}
          className="h-32 md:h-16 overflow-hidden rounded-none aspect-h-6"
        >
          <FontAwesomeIcon
            className="w-10"
            style={{ position: "absolute", top: 15, right: 0 }}
            icon={faEllipsisV}
          />
          <CardBody className="flex flex-row h-full">
            <div style={{ position: "relative" }}>
              <CheckIcon className="pt-1 pr-1"style={{ position: "absolute", top: 0, left: 0 }} />
              <img
                src={item.image}
                alt={item.car}
                className="object-cover rounded-t-lg w-32 h-full"
              />
            </div>
            <div className="justify-left pl-4 pt-2 text-sm">
              <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.car}
              </h3>
              <p className="mb-3 font-light dark:text-gray-400">
                New reservation: {item.nextReservation}
              </p>
              <ReactStars count={5} size={24} color2={"black"} />
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default MobileTable;
