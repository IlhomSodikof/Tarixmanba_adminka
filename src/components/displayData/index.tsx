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
    count: number,
    updatePage: (e: number) => void
}

const DisplayData = ({headersDisplay, loading, result, data, page, updatePage, count}: props) => {
    if(loading || data.length < 0) return <Loading />

    return (
        <TableContainer sx={{marginTop: "40px"}}>
            <Table sx={{width: "100%"}}>
                <TableBody>
                    <TableRow selected>
                        {headersDisplay}
                    </TableRow>
                    {result}
                </TableBody>
            </Table>
            {data.length > 0 ? (
                <Box>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "end",
                        marginTop: "20px"
                    }}>
                        <Pagination 
                            count={Math.ceil(count/10) || 1} 
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
                    alignItems: "center",
                    height: "20vh"
                }}>
                    <UINoData />
                </Box>
            )}
        </TableContainer>
    )
}

export default DisplayData