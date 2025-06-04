import React from "react";
import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import Table from "../common/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const headers = [
  { label: "Date", className: " text-right w-[100px] text-green-600" },
  { label: "Status", className: " text-right w-[100px] text-green-600" },
  { label: "Type", className: " text-right w-[100px] text-green-600" },
  { label: "Amount", className: " text-right w-[100px] text-green-600" },
];

const rows = [
  [
    { value: "04/06/2025", alignRight: true },
    { value: "Paid", alignRight: true },
    { value: "Earn", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "04/06/2025", alignRight: true },
    { value: "Refunded", alignRight: true },
    { value: "Withdraw", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "04/06/2025", alignRight: true },
    { value: "Cancelled", alignRight: true },
    { value: "Rejected", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "04/06/2025", alignRight: true },
    { value: "paid", alignRight: true },
    { value: "Earn", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "04/06/2025", alignRight: true },
    { value: "Cancelled", alignRight: true },
    { value: "Withdraw", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "04/06/2025", alignRight: true },
    { value: "Refunded", alignRight: true },
    { value: "Refund", alignRight: true },
    { value: "3000", alignRight: true },
  ],
];

const wallet = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-col mx-4 my-4 relative">
        <Header
          title="Manage Wallet"
          subtitle="Define when your facility is open for bookings and set your base pricing structure."
        />

        <div className="lg:flex-row absolute flex- justify-end p-4 left-[1000px] md:left-[900px] sm:left-[525px]">
          <Button variant="outline">Request Withdrawal</Button>
        </div>

        <div className=" flex lg:flex-row gap-4 ml-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>LKR 58,500</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black">LKR 24,500</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Blocked Amount</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-red-600">LKR 34,500</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-4">
          <Button className=" ml-6 p-4 text-black" variant="outline">
            Earnings
          </Button>
          <Button className="ml-4 p-4 text-black" variant="outline">
            Withdrawals
          </Button>
        </div>

        <Table caption="" headers={headers} rows={rows} />

        <div className="">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
               <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
               <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default wallet;
