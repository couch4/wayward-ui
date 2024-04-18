import { FC } from "react";
import { Button, Stack } from "../../../components";
import { useSearchParams } from "next/navigation";
import {
  paginationWrapper,
  paginationStepsWrapper,
  paginationBack,
  paginationNext,
} from "./Pagination.styles";
import { PaginationShowMore, PaginationSteps } from "./chunks";
import { on } from "events";

const buttonVars = {
  back: "iconBack",
  next: "iconNext",
  Pagination: "pagination",
};

const Pagination: FC<any> = ({
  totalPages = 1,
  totalCount = 1,
  currentPage = 1,
  buttonVariants = buttonVars,
  paginationType = "leadingZeroNumbers",
  showMoreText = "Show more",
  textStyles,
  motion,
  onChange,
}) => {
  const searchParams = useSearchParams();

  if (totalPages === 1) return;

  const handlePaginate = (nextPagenum: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", `${nextPagenum}`);
    window.history.pushState(null, "", `?${params.toString()}`);
    onChange && onChange(nextPagenum);
  };

  const paginationProps = {
    totalPages,
    totalCount,
    currentPage,
    textStyles,
    motion,
    onChange: handlePaginate,
  };

  if (paginationType === "showMore") {
    return (
      <PaginationShowMore
        showMoreText={showMoreText}
        {...paginationProps}
        textStyles={textStyles?.showMore}
      />
    );
  }

  return (
    <Stack direction="row" {...paginationWrapper(motion?.paginationWrapper)}>
      {currentPage > 1 && (
        <Button
          variant={buttonVariants?.back}
          onClick={() => handlePaginate(currentPage - 1)}
          {...paginationBack(motion?.paginationChild)}
        />
      )}
      <Stack direction="row" {...paginationStepsWrapper}>
        <PaginationSteps {...paginationProps} paginationType={paginationType} />
      </Stack>
      {currentPage <= totalPages - 1 && (
        <Button
          variant={buttonVariants?.next}
          onClick={() => handlePaginate(currentPage + 1)}
          {...paginationNext(motion?.paginationChild)}
        />
      )}
    </Stack>
  );
};
export default Pagination;
