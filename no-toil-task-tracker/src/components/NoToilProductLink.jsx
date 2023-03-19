export default function NoToilProductLink({row}) {
	const title = row.Title.toLowerCase()
	const noToilLinkBase = "https://notoil.com/product"
	const isNumber = title => !isNaN(parseInt(title))

	if (!row.Title.includes('-') && isNumber(row.Title)) {
		// pre-oiled filters contain just numbers
		if (isNumber(row.Title))
			return <ProductLink title={title}
				description="Pre-oiled Air Filter on NoToil.com"
				slug="pre-oiled-air-filter" />
	}

	else if (row.Title.includes('-')) {
		// non-oiled standard filters contain numbers and hyphens only
		if (isNumber(row.Title.replace('-', ''))) 
			return <ProductLink title={title}
				description="Standard Air Filter on NoToil.com"
				slug="standard-air-filter" />

		// extreme condition filters contain 'x'
		if (row.Title.toLowerCase().includes('x'))
			return <ProductLink title={title}
				description="Extreme Condition Filter on NoToil.com"
				slug="extreme-condition-filter" />

		// bike wash kits contain 'wk'
		if (row.Title.toLowerCase().includes("wk"))
			return <ProductLink title={title}
			description="Bike Wash Kit on NoToil.com"
			slug="bike-wash-kit" />

		// super-flo kits contain 'pf'
		if (row.Title.toLowerCase().includes("pf"))
			return <ProductLink title={title}
			description="Pre-Filter Air Filter Cover on NoToil.com"
			slug="pre-filter-air-filter-cover" />

		// super-flo kits contain 'frf'
		if (row.Title.toLowerCase().includes("frf"))
			return <ProductLink title={title}
			description="Extreme Condition Filter on NoToil.com"
			slug="extreme-condition-filter" />

		// super-flo kits contain 'sfk'
		if (row.Title.toLowerCase().includes("sfk"))
			return <ProductLink title={title}
			description="Super-Flo Kit on NoToil.com"
			slug="super-flo-kit" />
	}

	else
		return <></>
}

function ProductLink({title, description, slug}) {
	const noToilLinkBase = "https://notoil.com/product"
	return <div className="ProductLink" style={{placeContent: "start", placeItems: "start"}}>
		<a href={`${noToilLinkBase}/${slug}-${title}/`}>
			<p>{description}</p>
		</a>
	</div>
}
