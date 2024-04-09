import { useState } from "react"
import DisplayData from "../../components/source/displayData"
import Search from "../../components/source/search"

const Source: React.FC = () => {
    const [search, _setSearch] = useState<string>("")
    return (
        <section>
            <Search />
            <DisplayData search={search} />
        </section>
    )
}

export default Source