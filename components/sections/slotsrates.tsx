import Header from "../common/header";
import Table from "../common/table";



const headers = [
  { label: "Start Time", className: " text-right w-[100px] text-green-600" },
  { label: "End Time" ,className: " text-right w-[100px] text-green-600" },
  { label: "23 - Wed" ,className: " text-right w-[100px] text-green-600" },
  { label: "24 - Thu", className: " text-right w-[100px] text-green-600" },
  { label: "25 - fri", className: " text-right w-[100px] text-green-600" },
  { label: "27 - sat", className: "text-right w-[100px] text-green-600" },
  { label: "28 - sun", className: "text-right w-[100px] text-green-600" },
  { label: "29 - Mon", className: "text-right w-[100px] text-green-600" },
  { label: "30 - Tue", className: "text-right w-[100px] text-green-600" },
];

const rows = [
  [
    { value: "10:00", alignRight: true },
    { value: "11:00",alignRight: true },
    { value: "3000",alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:00",alignRight: true  },
    { value: "11:00",alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:00",alignRight: true  },
    { value: "11:00",alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:00",alignRight: true  },
    { value: "11:00",alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
  [
    { value: "10:00",alignRight: true  },
    { value: "11:00",alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
    { value: "3000", alignRight: true },
  ],
];

const slotsrates = () => {
  return (
    <>
     <div className="flex flex-col lg:flex-col mx-4 my-4">
        <Header 
        title="Manage Slot Rate & Availability"
        subtitle="Fine-tune pricing for specific time slots and manage peak hour rates."
      />

      <Table 
      caption=""
      headers={headers}
      rows={rows}/>
     </div>
      
    </>
  );
};

export default slotsrates;
