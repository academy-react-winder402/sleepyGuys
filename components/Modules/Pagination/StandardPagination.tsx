import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function StandardPagination() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);

  const changePageHandler = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(router.pathname + `?page=${newPage}`);
  };

  useEffect(() => {
    setCurrentPage(Number(router.query.page));
  }, [router.query]);

  return (
    <div className="flex justify-center items-center mt-10 col-span-4">
      <Pagination
        className="pagination"
        total={10}
        color="secondary"
        size="md"
        dir="rtl"
        page={currentPage}
        onChange={(newPage) => changePageHandler(newPage)}
        classNames={{
          wrapper: ["gap-x-2"],
        }}
      />
    </div>
  );
}
