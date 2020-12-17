import React from "react"
import { DocSearch } from "@docsearch/react"
import { Helmet } from "react-helmet"

import '@docsearch/react/style';
import "./search.scss"

function Search() {
  return <>
    <Helmet>
      <link rel="preconnect" href="https://BH4D9OD16A-dsn.algolia.net" crossorigin />
    </Helmet>
    <DocSearch apiKey="27908f168baedd02638b964a96b84986" indexName="galasa" />
  </>
}

export default Search
