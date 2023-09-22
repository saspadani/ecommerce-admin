'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cella-action';

export type CategoryColumn = {
  id: string;
  name: string;
  createdAt: string;
  billboardLabel: string;
};

export const columns: ColumnDef<CategoryColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'billboard',
    header: 'Billboards',
    cell: ({ row }) => row.original.billboardLabel,
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
