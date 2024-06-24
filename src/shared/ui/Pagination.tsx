import Pagination from '@mui/material/Pagination';

type PaginationComponentProps = {
  page: number
  handleChangePage: (event: any, value: number) => void
  totalPages?: number
}

const UiPagination = ({ page, handleChangePage, totalPages }: PaginationComponentProps) => {
  return (
    <Pagination count={totalPages} shape="rounded" color='primary' page={page} onChange={handleChangePage} />
  )
}

export default UiPagination