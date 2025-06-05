import Header from "../common/header";
import { Button } from "../ui/button";
import Table from "../common/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const headers = [
  { label: "Start Date", className: " text-right w-[100px] text-#667085" },
  { label: "End Date", className: " text-right w-[100px] text-#667085" },
  {
    label: "Fixed/Percentage",
    className: " text-right w-[100px] text-#667085",
  },
  { label: "Code", className: " text-right w-[100px] text-#667085" },
];

const rows = [
  [
    { value: "Jan 6, 2022", alignRight: true },
    { value: "Jan 6, 2022", alignRight: true },
    { value: "20", alignRight: true },
    { value: "HOLIDAY20", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
  [
    { value: "Jan 8, 2022", alignRight: true },
    { value: "Jan 8, 2022", alignRight: true },
    { value: "20", alignRight: true },
    { value: "HOLIDAY20", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
  [
    { value: "Jan 9, 2022", alignRight: true },
    { value: "Jan 9, 2022", alignRight: true },
    { value: "20", alignRight: true },
    { value: "HOLIDAY20", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
  [
    { value: "Jan 10, 2022", alignRight: true },
    { value: "Jan 10, 2022", alignRight: true },
    { value: "500", alignRight: true },
    { value: "TRICK10", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
  [
    { value: "Jan 12, 2022", alignRight: true },
    { value: "Jan 12, 2022", alignRight: true },
    { value: "20", alignRight: true },
    { value: "HOLIDAY20", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
  [
    { value: "Jan 13, 2022", alignRight: true },
    { value: "Jan 13, 2022", alignRight: true },
    { value: "20", alignRight: true },
    { value: "HOLIDAY20", alignRight: true },
    {
      value: (
        <>
          <Button className="ml-6 p-4 text-black bg-white">Edit</Button>
          <Button className="ml-6 p-4 text-red-600 bg-white border-2 border-red-600">
            Delete
          </Button>
        </>
      ),
      alignRight: true,
    },
  ],
];

const discounts = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-col mx-4 my-4">
        <Header
          title="Manage Discounts"
          subtitle="Define when your facility is open for bookings and set your base pricing structure."
        />

        <div className="lg:flex-row absolute top-[50px] left-[1200px] flex justify-end p-4">
          <Button className="bg-white text-green-600 border-2 border-green-600">
            Create
          </Button>
        </div>

        <div className="mt-4">
          <Button className=" ml-6 p-4 text-black" variant="outline">
            Date Based
          </Button>
          <Button className="ml-4 p-4 text-black" variant="outline">
            Time Based
          </Button>
        </div>

        <Table caption="" headers={headers} rows={rows} />

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
    </>
  );
};

export default discounts;
