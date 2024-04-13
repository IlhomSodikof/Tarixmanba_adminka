// mui
import { Box, Pagination, Table, TableBody, TableContainer, TableRow } from "@mui/material"
// ui-components
import UINoData from "../../ui-components/noData"
import Loading from "../loading"

interface props {
    headersDisplay: any, 
    loading: boolean, 
    result: any, 
    data: any, 
    page: number, 
    updatePage: (e: number) => void
}

const DisplayData = ({headersDisplay, loading, result, data, page, updatePage}: props) => {
    return (
        <TableContainer sx={{marginTop: "40px"}}>
            {loading && <Loading />}
            {!loading && data && data?.length > 0 ? (
                <Box>
                    <Table sx={{width: "100%"}}>
                        <TableBody>
                            <TableRow selected>
                                {headersDisplay}
                            </TableRow>
                            {result}
                        </TableBody>
                    </Table>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px"
                    }}>
                        <Pagination 
                            count={data && Math.ceil(data.length/20) || 1} 
                            variant="outlined" 
                            shape="rounded"
                            page={page}
                            onChange={(_e, value) => updatePage(value)}
                            boundaryCount={2}
                        />
                    </Box>    
                </Box>
            ) : (
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "cente"
                }}>
                    <UINoData />
                </Box>
            )}
        </TableContainer>
    )
}

export default DisplayData