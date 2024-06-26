import Pagination from '@mui/material/Pagination';
import { usePagination } from '../api/usePagination';

type PaginationComponentProps = {
  page: number
  setPage: (value: number) => void
  totalPages?: number
}

const UiPagination = ({ page, setPage, totalPages }: PaginationComponentProps) => {
  const { handleChangePage } = usePagination(setPage)

  return (
    <Pagination count={totalPages} shape="rounded" color='primary' page={page} onChange={handleChangePage} />
  )
}

export default UiPagination