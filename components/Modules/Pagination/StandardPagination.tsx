import React from "react";
import { Pagination } from "@nextui-org/react";

export default function StandardPagination() {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <div dir="ltr"  className="flex justify-center items-center pt-10 col-span-4">
       <div className="flex flex-col gap-5">
      <Pagination
        className="pagination"
        total={10}
        color="secondary"
        size="lg"
        page={currentPage}
        onChange={setCurrentPage}
      />
     
    </div>
    </div>
  );
}
