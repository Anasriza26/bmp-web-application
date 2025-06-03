import Header from "../common/header";
import Table from "../common/table";
import { Button } from "@/components/ui/button";

const headers = [
  { label: "Start", className: " text-right w-[100px] text-green-600" },
  { label: "End", className: " text-right w-[100px] text-green-600" },
  { label: "Mon", className: " text-right w-[100px] text-green-600" },
  { label: "Tue", className: " text-right w-[100px] text-green-600" },
  { label: "Wed", className: " text-right w-[100px] text-green-600" },
  { label: "Thu", className: "text-right w-[100px] text-green-600" },
  { label: "Fri", className: "text-right w-[100px] text-green-600" },
  { label: "Sat", className: "text-right w-[100px] text-green-600" },
  { label: "Sun", className: "text-right w-[100px] text-green-600" },
];

const rows = [
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:30", alignRight: true },
    { value: "11:30", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
];

const slotsandrates = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-col mx-4 my-4 relative">
        <Header
          title="Manage Weekly Rate & Availability"
          subtitle="Configure your regular weekly availability and set different rates for weekdays and weekends."
        />

        <Table caption="" headers={headers} rows={rows} />
        <div className="lg:flex-row absolute bottom-0 right-0 left-0 flex justify-end p-4">
          <Button>Conform</Button>
        </div>
      </div>
    </>
  );
};

export default slotsandrates;
