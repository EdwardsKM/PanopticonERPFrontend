import { useState, useReducer } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"

import { useTable, paginateRowsFn, TableInstance, PaginationState, sortRowsFn, globalFilterRowsFn } from '@tanstack/react-table'

export default function Table({ defaultColumns, data, table }: { defaultColumns: any, data: any, table: any }) {
    const rerender = useReducer(() => ({}), {})[1]

    const [sorting, setSorting] = useState<any[]>([]);

    const [globalFilter, setGlobalFilter] = useState('')

    const [columns] = useState<typeof defaultColumns>(() => [
        ...defaultColumns,
    ])

    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
        pageCount: -1, // -1 allows the table to calculate the page count for us via instance.getPageCount()
    })


    const instance = useTable(table, {
        data,
        columns,
        state: { pagination, sorting },
        onPaginationChange: setPagination,
        onGlobalFilterChange: setGlobalFilter,
        globalFilterRowsFn: globalFilterRowsFn,
        paginateRowsFn: paginateRowsFn,
        onSortingChange: setSorting,
        sortRowsFn: sortRowsFn,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true,
    })

    return (
        // This is the outer div holding the table
        <div className="mt-8 flex flex-col px-8">
            {/* <div>
                <input
                    value={globalFilter ?? ''}
                    onChange={e => setGlobalFilter(e.target.value)}
                    className="p-2 font-lg shadow border border-block"
                    placeholder="Search all columns..."
                />
            </div> */}

            <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table {...instance.getTableProps()} className="min-w-full divide-y divide-gray-200 border border-sky-500">
                            {/* <div className="p-4">
                                <label htmlFor="table-search" className="sr-only">Search</label>
                                <div className="relative mt-1">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="table-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search All Columns" />
                                </div>
                            </div> */}
                            <thead className="bg-gray-300">
                                {instance.getHeaderGroups().map(headerGroup => (
                                    <tr {...headerGroup.getHeaderGroupProps()} className="w-full text-sm">
                                        {headerGroup.headers.map(header => (
                                            <th {...header.getHeaderProps()}>
                                                {header.isPlaceholder ? null :
                                                    (
                                                        <div
                                                            {...(header.column.getCanSort()
                                                                ? header.column.getToggleSortingProps({
                                                                    className: 'cursor-pointer select-none',
                                                                })
                                                                : {})}
                                                        >
                                                            {header.renderHeader()}
                                                            {{
                                                                asc: ' 🔼',
                                                                desc: ' 🔽',
                                                            }[header.column.getIsSorted() as string] ?? null}
                                                        </div>
                                                    )


                                                }
                                            </th>
                                        ))}
                                    </tr>
                                ))}
                            </thead>
                            <tbody {...instance.getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                                {instance.getRowModel().rows.map(row => (
                                    <tr {...row.getRowProps()} className="px-6 py-4 whitespace">
                                        {row.getVisibleCells().map(cell => (
                                            <td {...cell.getCellProps()}>{cell.renderCell()}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="h-2" />
                        <div className="flex items-center gap-2">
                            <button
                                className="border rounded p-1"
                                onClick={() => instance.setPageIndex(0)}
                                disabled={!instance.getCanPreviousPage()}
                            >
                                {'<<'}
                            </button>
                            <button
                                className="border rounded p-1"
                                onClick={() => instance.previousPage()}
                                disabled={!instance.getCanPreviousPage()}
                            >
                                {'<'}
                            </button>
                            <button
                                className="border rounded p-1"
                                onClick={() => instance.nextPage()}
                                disabled={!instance.getCanNextPage()}
                            >
                                {'>'}
                            </button>
                            <button
                                className="border rounded p-1"
                                onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
                                disabled={!instance.getCanNextPage()}
                            >
                                {'>>'}
                            </button>
                            <span className="flex items-center gap-1">
                                <div>Page</div>
                                <strong>
                                    {instance.getState().pagination.pageIndex + 1} of{' '}
                                    {instance.getPageCount()}
                                </strong>
                            </span>
                            <span className="flex items-center gap-1">
                                | Go to page:
                                <input
                                    type="number"
                                    defaultValue={instance.getState().pagination.pageIndex + 1}
                                    onChange={e => {
                                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                                        instance.setPageIndex(page)
                                    }}
                                    className="border p-1 rounded w-16"
                                />
                            </span>
                            <select
                                value={instance.getState().pagination.pageSize}
                                onChange={e => {
                                    instance.setPageSize(Number(e.target.value))
                                }}
                            >
                                {[10, 50, 100, 200, 500].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        Show {pageSize}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>{instance.getRowModel().rows.length} Transactions</div>
                        <div>
                            <button onClick={() => rerender()}>Force Rerender</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}