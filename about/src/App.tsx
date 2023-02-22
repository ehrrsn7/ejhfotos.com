import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { jsPDF } from "jspdf"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ResumeMD from "./mdx/resume.mdx"
import MinecraftMD from "./mdx/minecraft.mdx"
import ContactMD from "./mdx/contact.mdx"
import "./App.css"

export function ProfilePicture({style}) {
	const profilePicture = "https://lh3.googleusercontent.com/gBBcfcWQX6hG1Azxve5mzgaEkjTjwNtFWJylOjkITwL3EbbLzq3MJfqGlnXT2hhf9NpWm73RIB_aWfcJ5hFwdjfehbXtniKBzPTKc4SgMy2KyPI_if8et5Q4eZ6qLNnd6N2GthPEEV8WnQcpsKSNgFpPZs3dfaH7mtyV0Aa2Dc6YJCj1zWXOPqAHuRgLYZRNeIDnKt20N_ntinty767IibQ_F7ufLnccgzmpo1KK1a4s3iHcdTWW69ZMX9W6k3YbUF6y3pGLS48WHZuD71ALjOlqO-iF_QAWprwxQUTfmgWN1PvPVAZYQpk4wC6MldHLCzoc-4joH_YmkMIzQ069bzLq0h7z7JpwmFtfGxGsK19OpgsgJr009C7zD3c1rnv82KMg71qs0mJvh2KSpqLExM0byvFRdj1lAZLwF6IcVGYn8PzaS3ssDtNXBRUvAj3hdvQXu1sBoU_lb1ncmplSb_RPiK1askrTtaw-ph5awVxAlLnrJRNaXB6vTRd637UnE1SDVRCnDFhjdd1_XVm7du7ugfm6FdbHp51FYCajWlZoIaslu9eGLOiqt06QJiF-wRbb7KjdGBNsj2TAmbGNRqRl-8Bb2LYiKSyl6E1MoY0eHOcExYHpmaKTCg6c9s6VGddZr3Rm42l2uWPVGCJ5rcC74FAt7xLTJayeiunFmWPViPbhet5sPmhqkhiRrbHTrZJT2jtD_xCgI1kM0i7E7jWSfvUbNWLexJTm4O6dUX2P60BoTxw-eSAqZKN5O92P0nxtLC7EBt0GN1ic70hVGOS4cIyWWepNC3pkcdhaDgI6eruF13YxmKJcsaVVONga_p7NckYXeHW5c9Io6J1e7J9xeEcko8-5FfBN9sMUC__xNE6kjcU2qUSjUwDgkhBhtsWKW3Pq3AXnbkrc-Jo5Vbx6oA4yu2gdlAVJBg6g0P7vHxcvWkxTt9qzBME5U7Xbd9RLlbzKsXMPZq1h88o=w746-h498-s-no?authuser=0"
	return <img id="ProfilePicture" src={profilePicture} alt="profile picture" style={style} />
}

export function Home() {
	return <>
		<Header />
		<div id="Home">
			<span>
				<ProfilePicture style={{flex: 0}} />

				<div style={{textAlign: "left", flex: 1}}>
					<h1 style={{textAlign: "center", wordBreak: "break-word"}}>Welcome to <code>about.ejhfotos.com</code></h1>

					<p>My name is Elijah Harrison, and this is my website, <code>ejhfotos.com</code></p>

					<p>I am a recently graduated software engineer looking for an entry-level position to apply my skills in computer programming.</p>

				</div>
			</span>
			<span>
				<p>I do photography on the side, primarily weddings, portraits, and other things like that. My photography portfolio can be found on the main site, <Link to="http://ejhfotos.com" target="_blank" rel="noopener noreferrer"><code>www.ejhfotos.com</code></Link></p>

				<div id="GitHub">
					<h3>GitHub</h3>
					<p>I have posted my favorite coding projects on my <Link to="https://github.com/ehrrsn7?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</Link>:</p>
					<ul style={{listStyleType: "none", paddingLeft: 0}}>
						<li id="Asteroids">
							<Link to="https://github.com/ehrrsn7/Asteroids">
								<h2>Asteroids</h2>
							</Link>
							<span>
								<div style={{flex: 1}}>
									<p>This is a personal favorite of mine. One of the first games I learned how to make using callback pointers in C++ was Asteroids. Once I learned the basic concepts, I figured the easy physics of it would be a good learning tool for different languages:</p>
								</div>
								<div style={{flex: 0}}>
									<img src="https://png.pngtree.com/png-vector/20191113/ourmid/pngtree-asteroid-icon-flat-style-png-image_1977257.jpg" alt="asteroid" width={50} />
								</div>
							</span>
							<ul>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/Asteroids/tree/main/C%2B%2B" target="_blank" rel="noopener noreferrer">
											<button>Asteroids in C++</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/Asteroids/tree/main/Django" target="_blank" rel="noopener noreferrer">
											<button>Asteroids in Javascript (Django)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/Asteroids/tree/main/Java" target="_blank" rel="noopener noreferrer">
											<button>Asteroids in Java</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/Asteroids/tree/main/Kotlin" target="_blank" rel="noopener noreferrer">
											<button>Asteroids in Kotlin</button>
										</Link>
									</p>
								</li>
							</ul>
							<span>
								<figure>
									<img src="https://lh3.googleusercontent.com/u0gySOVX-Rc7Nl0gxqOcpfJ_gjAZsR7OP8xRo2od_gbUdM5xkf5RKO8Uv4dZi6JUq0HoZv6-lGB_Qn1UrHrsKuUCK2ZjDVu00ghxBqLi6uD-KxruOSZiNjMxN2MfjnkbC3SE58iV2JeB6kLinlLGhft8VQLx5HQ3JlYCI-HwE7B6BiTWaaxD9o_DBGrq2KGHkzLNT47f58bpI_RF8BfjPy8YQoMAIkwMUggFtvqKEui_pwocqjvDqbwOY3LH9eDukBdrUT9dNm4SdSGQRdRwc0axiUO1S6bW9qi6K_2O9ww5Umvo-pIcUE0RqfNkWbVnTyKwR3K4sF1Xe68FbMaszwO0sC74k_oKWmx8v5MI6Wlf3Heu68j7XCe8BX4JYFi7KRReOf7K7lzIaguYPKFUT-CX2C4cPjJw8EK-SMd0VVsMIyQAME_mQOqwOAOum7sCkDWEz1jrpkz4hfuxi-muFCaFssWXMuxooX9JKbn-wEUDKIxa-fZhYM4VF5Pd_gMQadb4B85l8TGIOEgOWnGZPAseDnnYQzgKLZGAKtdtChbPUY-3v1DFuWM8uVSwLvlFoLDBE8ZqN-_RSmQb1PllHjKAIEnN9SdWRqyNSXfO7euqk3cfXlMM9xppOzqszE2p7oJvCNY2rviCnRTL0wAQKZbfF4QuuKOyULbH1g-31y7UeyrFj-9G56goxtP6NZU1Ky3r2l86Gczstbme7FeZNfYzCBgGhNNKDbzMjsiayXZ6BEjP0v82o46pIt6ovNgRN_F7RJknbrXSxmzh6dgnOk2ikW1UOCc8yrTsvjSnrKsFJ7CeaCcI5yXZFfyq94OxYIWV2ThdMLKU9kgmTwE3qiqLbqBryymJaj2WNGa3FuflOEGpMnhr0p6ORrmE2VN9VtWf42EqslfvJZet8RIZvGfCvqsCINXJY5C_MXgpnpDOLGPa1Cazz5DdSXp2f59KDdtaYFMF16idJpM82II=w746-h658-s-no?authuser=0" alt="screenshot of asteroids in C++" />
									<figcaption>screenshot of asteroids in C++</figcaption>
								</figure>
								<figure>
									<img src="https://lh3.googleusercontent.com/3G3EiL0G6NnvCSvx43vi7bGoV3x7x8cA-Y9HXL0GxB_sH-NHpexfOIlqDhIFyenHVcSJ82CF8usaxpXmmSAuHAmjy7QfG6YNz7tE4PSZSrAuzzl8QOyZ9tDUgaafttJUpg_YWRgG-PvPz7nnMrfvbs2V6y0gLGQTxOjvz51XCnmEe1zwgMNTTV6PGfkHb-IzYybXDQ9wE-mnKIGj3eNB1f4fjXuURBwlP5ItMLeMptWWobGk1FmBZlzKWpaLAL3DBgAXca72ZweBvuUtnxEXbuly5AXAsOzoRL_QE8jYWKIZ2CjsBUKFvWBmbIixpZQAkLfD3I-Qm220v7eNG5rbbZGNArr_LTbOHyKqH83zT_n2Bi3-t-krOee_4NrXQ9gMbyGl9VqCOiPcAV6zWx_qLHjt-cRP9skQ1ogwoYe9Loi6AO_V36EbOaln2oPeYI85hv_3v5TOSGtD6ymUVdZZsPKxqEXlpGlCMPEvUKEVkIohNqUp_uots_sn8OWclc99wQ9dU2Qd3FdIzbwt-SFo6qWGdOsFD0o25QGEA1una-uewtU9RXFAshCa9gQKu1brOIr1MLaFoGXWqhdD-tTX5jYBSO9c4N0niJt61pYq7SgpYi1zeIpWiv1IF0Lh43L84rdxHloUnqijn90Fir3z_a0quWj0TF_fYQYc7MDpi1XWBv3ccYJqSSHxesFAvzo9-C0tRq7JHCKTY5QUK2EUDcl4CpQYtUqQctpTeYJhltDHpoBKKWp0uEv5TymCM7QJIMAgC1NzTLfZVGWmUdJbPM3S6BHtZd73H6mGFxp3nmzXmSV-xYYfONMSTRNmFPmEg6aGIiVbGkMQESJn-1_lBRKC9CrUx5tMDuLGZqkXlRGSzqOz7M-_DC5LkQrfvxJIQ-tGwMDwR17qqEuQfCo5EFTomrmRfdRXNrr-4sqCeHJ-O2ff2VXyrMeGP6h2UiAVqXQ9j_3rVbwOGwqCCI0=w600-h375-s-no?authuser=0" alt="screenshot of asteroids in Javascript" />
									<figcaption>screenshot of asteroids in JavaScript</figcaption>
								</figure>
								<figure>
									<img src="https://lh3.googleusercontent.com/lOo5Mg3DU2Dcpci2S3y_yuIvsCk_gfMNzfXkM-weE07xnZe4347E03dP02mJw1cSYxUlR3kfX_gq4N3LW9V0g1DGCQTaYY5l3lBvQyRt9xyEYsNzdrgJPu7B0PL8_bIxklhFeRT8XiZU_e56FLGTLva4C15UEXw0Wc-6uq6jTOaDIGOkVl-tJmWhMOQKPZRUGs0JonNudB6gtnPlGJnhodRiCmnAKSrHN6FbJkIU3pcaNuirLvq7lVvTR_AMQ2rESjWzowf4KdzPJSILLGeFkR2pSvEJdiSNSItoGTjZddnNt1xo89XjmJ3FynIxuDsGV-fSZc8JqMvPVJktjZdvTGkgFs2JbA6A-9NE8K8ISaNLTgH-P7FcvxtAB0xA4VZi0KSe4k8CEP-MDcyTgzbjbYKHi4siiE6MhB_tNXmp9ysMtK81ml_PTXPFhRHsBEWzTQZaCUMlWmlA_enSKeTtr7qg3PEkoE36hySmgCBTQQiBGXIroeta8gtaFyrQZn5oBilEGBgY4AXAk2lBG5PkJuqiInYDJdC8PecLqgIzl9m0Ar5CUj5otyww8nUqDnJVBt2qyMIYnolJqOHTg4dOeR7QDoglhvBWWpYfdM-QMayNgkMhTgYZhJlogVoAARz-DWRXFcwC021zn6gzhrW1uGQghzXyg9fHU_MRDZ6EPF8OgTnhH1EsQhPA8DTL68i5PWT2aZE5gWRuGt449pxV4R4kjJyR6uWGEdbPW_nxaoUlWFwG1SMFHscMNeazUgCM1gFhTjtMJ1S0nyGi5oBNZl0TReHXGENiKvs4l9aecToWQO8seDAOxHGqV1hnVjrsixjyynq6ttO417xQQFFEy9aen95f0COUokz3BDfGcdm-ctRwCmPZ3qXy-esDjxzV7O_JuYoJxdQTdnSN9XsDtHt6dC9LaQ4LJ1qkPw2N2CFfjL2rzySUSN7XN6dcNuoINm8x666TGAyAp7Kse8w=w600-h285-s-no?authuser=0" alt="screenshot of asteroids in Kotlin Android" />
									<figcaption>screenshot of asteroids in Kotlin Android</figcaption>
								</figure>
							</span>
						</li>
						<li id="No-Toil-Task-Tracker">
							<Link to="https://github.com/ehrrsn7/No-Toil-Task-Tracker" target="_blank" rel="noopener noreferrer">
								<h2>No Toil Task Tracker</h2>
							</Link>
							<p>This is an inventory tracking system I built for <Link to="https://notoil.com" target="_blank" rel="noopener noreferrer">No Toil industries</Link>.</p>
							<p>It was built using Django + React.</p>
							<span className="full-width">
								<figure>
									<img 
									src="https://lh3.googleusercontent.com/vvIi6W9_nFg-UgDTneqYXY3JvjwXICqHYqkDXdXLoK_M76Su6N7ttVSGJlDMxSSLm9bbOdwDzdeopEsRruqriLwuzzLl4sHldQuiEooZlyW0wswE3xuhMBbg3LCVWRNNMDKI-m1JGEZJYcHxdqGR-slAD3MuwdYmUVka-zLCpDNRfohTKF5py-7VBEOJh9nmyVD-2lqQWZ7XxkoRI56SSpCYdv6HR4D12MKwwLTQ_iCwop1a2PkBMbZiCX-hew8VoshZVfqAAt20W4mVGxvZ3xvRnBurtLcEGQ5ioYmoYP62Xe3f1FAC7SyuNZVVsnyV5ASKQmk5uOAvatOYPWJdhQ2j6TVrzfmDZkMdkIFiPNxP_bONgy6HvbuKJX9mC5BeaTx42Dzz50GoD9Z3Ziza-WJoXGdF0Hq3yc4c3HvSQuYlGvmeZ8FRe1VN_juPwAiVkHOoShPaa20gld7C3AxYpsBYfmcNZymMVtZvxNFxrKE9yYb59HOBuVOsZdN823br9pDWLSnaAMMfvlKZTGC1dCFDjJLmeakQj0faHO_Qw6ZiZuO6BstRQoxKVNU6CiPaVBmCrI5QZ33k7akjYj9WIXBd2PjVW86pmzeqIlYO9KQpBRUjsWOcBVy702Snd2qWYzXbvCTIK3YcWcVET2Xr1aPp26jH1rO2DnPrrHWLP8mjI6etMKBl6o4aA9Gi_fxWDnQVCzuHE7kfnV_2zw3CvqdnTnsivO4Xb9RMVRwI444i1EFzRh-_p4IUB4HO2urqpGb2Ky4FEVQHi3OihF_26PLfj4jhv7vnev9YavTPIuO5RqUHNAq9Sj6PQYkFfYTfW8XlCCWkhjY2JzpDeYFQpZmnmGLKQWKlHSRUc1xY33-TQYA24HysRXEuGDWSrFdDPtmH5hVcSjTD38KIyBNujfpjEn353cPy9wqQ9bR-TIseyeF0k22gJduM6vXEn1K--UR71AIhTPqNQt98BBk=w600-h375-s-no?authuser=0" 
									alt="screenshot of No-Toil-Task-Tracker application" />
									<figcaption>screenshot of No-Toil-Task-Tracker application</figcaption>
								</figure>
							</span>
						</li>
						<li id="CSE-232-Labs">
							<Link to="https://github.com/ehrrsn7/cse-232-labs" target="_blank" rel="noopener noreferrer">
								<h2>CSE 232 Labs</h2>
							</Link>
							<p>CSE 232 was a course I took at <Link to="https://www.byui.edu/majors/software-engineering-bs" target="_blank" rel="noopener noreferrer">BYU-I</Link> taught by James Helfrich. The content was all about implementing the C++ Standard Library containers.</p>
							<ul>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.01.Lab.115/array.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::array</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.02.Lab.100/vector.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::vector</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.03.Lab.100/stack.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::stack</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.04.Lab.100/node.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::node (linked list node)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.05.Lab.100/list.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::list (linked list)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.06.Lab.100/bnode.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::bnode (binary tree node)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.07.Lab.100/bst.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::bst (binary standard tree)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.08.Lab.100/set.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::set (bst implementation)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.09.Lab.100/map.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::map (bst implementation)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.10.Lab.100/priority_queue.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::priority_queue (vector/percolate implementation)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.12.Lab.100/deque.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::deque (wrapping array of arrays implementation)</button>
										</Link>
									</p>
								</li>
								<li>
									<p>
										<Link to="https://github.com/ehrrsn7/CSE-232-Labs/blob/main/232.13.Lab.100/hash.h"
										target="_blank"
										rel="noopener noreferrer">
											<button>custom::unordered_set (hash map)</button>
										</Link>
									</p>
								</li>
							</ul>
						</li>
						<li id="Orbit-Simulator">
							<Link to="https://github.com/ehrrsn7/orbit-simulator"
							target="_blank"
							rel="noopener noreferrer">
								<h2>Orbit Simulator (CSE 231)</h2>
							</Link>
							<p>This was a partner project between my friend Eli Jukes and I.</p>
							<p>We set it up so that the simulator uses real physics formulas with dilation/adjustments to run properly.</p>

							<span className="full-width">
								<figure>
									<img src="https://lh3.googleusercontent.com/EzPgEgimesQwcC6BScivD0guAsEl7ThmusnkTQULgkWmuA0NOIqtU3HWwn_Ym9AACx9FETg8T9xQaIuyk1Uh2Mrb47jSRmTn5K8Mpce1oqGRjX9MEk64oUxjoji2pLg3bsa-IxcOxOwm_C_ckEb7OhBr0r2NQixeLmLme-fz9Zwb8TnfV5amk9Z9cb8oHtPQTNue9B8qg1K3_o2af5tgt6bnG0tMi0yEKZBcQS-1NxhvhImUe0Tmtr1jaUZwI_ZAm0BRglCsaDsa8w9K0l9rasbMu1-c14huuCIDpQARIIxhYnxLL2kBdvBGo9bF8lE2ElRdIRh3jfBjYJRGBYW3y0LbTIEaPh9dTNepKJv8BQvwoG3ZmdhGbz_aJZQAMtEPD_njacAkh_Q5kVA8gLVJZ0kLPlD5vteZESTGbK53pigSPk1rPXcJGoNwgJecXX1ZmSYljE7a3OgpXauK4HeWScunr9gRg7QdQ9Q-eBCipC3TZWZFTjox0TcX98khp-B4WYLIkNhFnqSZVlxfWdPJh0xL_lfiv6i2wWKKMjcGoDTDqjy7H06V3PYMrCeBhRg8mWX_XQC7VcPg8V7zDz8YgeKQ3C5oDIT6_D8YffNlrHlAxpatpWX-zAbOlZFWOVZUIOvLd32U_AqrWjMdb5QmGaKu81Tv6pW4sfdVY09-DpjYIPfnWOvPp4jwd9zhABFGVkXQvBUt2eNWH8WLD4K9n9lwjDMVoUHcWuJlsxsdxDCSSmOTOAEDgNghMQwjoNFp5awfFaXF1NNhepc6ng0tGyxDhoPXQe_BQO-xzsROFL9j59qkAfIQ9YSHwjAtrSvIpNBfgil6TSik9ZOOjl00qPrTuy5xFWBjD74aZnVOlosV5bxDRm5secJvNfG9Vj5QvGmA7fNodopuQ6xTjfHB4DjbaCHfvXTyXTTDDarGBVBDj1oS3P6f4J_gHOOz08zO1W9uZbu1_Swag3TQOoI=w746-h702-s-no?authuser=0" alt="" width="100%" />
									<figcaption>screenshot of orbit sumulator application</figcaption>
								</figure>
							</span>
						</li>
					</ul>
				</div>
			</span>
		</div>
		<Footer />
	</>
}

export function Resume() {
	return <>
		<Header />
		<span>
			<button onClick={() => {
				const element = document.querySelector<HTMLElement>("#Resume")
				const doc = new jsPDF({
					orientation: "portrait",
				})
				doc.setDisplayMode("5%", "single", "UseOutlines")
				const newPDF = doc.html(element, {
					async callback(doc) {
						console.log("todo: save pdf file here instead of opening the window print prompt")
						window.print()
						return
						await doc.save("new_pdf_file.pdf")
					}
				})
				console.log({newPDF})
			}}>Save PDF</button>
			<button onClick={() => window.print()}>Print PDF</button>
		</span>
		<div id="Resume">
			<ResumeMD />
		</div>
		<Footer />
	</>
}

export function Minecraft() {
	return <>
		<Header />
		<div id="Minecraft">
			<MinecraftMD />
		</div>
		<Footer />
	</>
}

export function Contact() {
	return <>
		<Header />
		<div id="Contact">
			<ContactMD />
		</div>
		<Footer />
	</>
}

export function NotFound() {
	return <>
		<Header />
		<h1>Error 404</h1>
		<p>Page not found.</p>
		<Link to="/">
			<p>Go Home</p>
		</Link>
		<Footer />
	</>
}

export default function App() {
	return <div id="App">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/resume" element={<Resume />} />
			<Route path="/minecraft" element={<Minecraft />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
		</BrowserRouter>
	</div>
}
