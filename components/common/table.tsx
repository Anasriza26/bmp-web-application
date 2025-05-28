import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


type TableHeader = {
  label: React.ReactNode;
  className?: string;
};

type TableCellType = {
  value: React.ReactNode;
  className?: string;
  alignRight?: boolean;
};

type TableProps = {
  caption?: React.ReactNode;
  headers: TableHeader[];
  rows: TableCellType[][];
};

const table: React.FC<TableProps> = ({ caption, headers, rows }) => {
  return (<>
 <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {headers.map((head: TableHeader, index: number) => (
            <TableHead key={index} className={head.className || ""}>
              {head.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row: TableCellType[], rowIndex: number) => (
          <TableRow key={rowIndex}>
            {row.map((cell: TableCellType, cellIndex: number) => (
              <TableCell
                key={cellIndex}
                className={cell.className || (cell.alignRight ? "text-right" : "")}
              >
                {cell.value}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
  )
}

export default table