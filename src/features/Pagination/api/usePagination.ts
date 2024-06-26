export const usePagination = (setPage: (value: number) => void) => {
  const handleChangePage = (event: any, value: number) => {
    setPage(value);
  };

  return {
    handleChangePage
  }
}