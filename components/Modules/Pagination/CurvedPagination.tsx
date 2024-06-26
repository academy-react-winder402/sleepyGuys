import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function CurvedPagination({ total, rowsOfPage }: { total: number, rowsOfPage: number }) {
  const router = useRouter();
  const { pathname, query } = router

  const [currentPage, setCurrentPage] = useState<number>(1);

  const changePageHandler = (newPage: number) => {
    setCurrentPage(newPage);
    router.push({
      pathname,
      query: {
        ...query,
        PageNumber: newPage
      }
    });
  };

  useEffect(() => {
    if (query.PageNumber) {
      setCurrentPage(Number(query.PageNumber));
    }
  }, [query]);
  return (
    <div className="flex justify-center items-center mt-10 col-span-4">
      <Pagination
        className="pagination-curved"
        total={Math.ceil(total / rowsOfPage)}
        color="secondary"
        size="md"
        dir="ltr"
        page={currentPage}
        onChange={(newPage) => changePageHandler(newPage)}
        classNames={{
          wrapper: ["gap-x-1"],
        }}
      />
    </div>
  );
}