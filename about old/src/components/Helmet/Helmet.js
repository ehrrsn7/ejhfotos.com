import { Helmet as H } from "react-helmet"

import { headerData } from "../../data/headerData"

export default function Helmet() {
   return <H><title>{headerData.name} - Porfolio</title></H>
}
