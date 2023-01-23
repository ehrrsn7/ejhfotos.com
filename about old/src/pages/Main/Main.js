import React from "react"

import { Helmet, Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from "../../components"

export default function Main() {
	return <div>
		<Helmet />
		<Navbar />        
		<Landing />
		<About />
		<Education />
		<Skills />
		<Experience />
		<Projects />
		<Achievement />
		<Services />
		<Testimonials />
		<Blog />
		<Contacts />
		<Footer />
	</div>
}
