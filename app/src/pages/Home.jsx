// import
import React from "react"

// functions
import { changeDOMTitle } from "../scripts/dom-scripts"

// components
import Header from "../components/Header"
import Footer from "../components/Footer"

// assets
import "./Home.css"
import { Link } from "react-router-dom"

// define
const images = [
   {
      subject: "ingrid",
      url: "https://lh3.googleusercontent.com/Efv8uOBD6-fVNC5YfYh9ldSUvfgwk34-35ylg4A7wyZOJ6_rdPgAVBSk5WnE-hhbuN1axUvlH1hhzicab5fimnNLusqqwvOTSIcahQnKBwDyWqCYFlwfYRSBx8x6JgjbQ6e9zvILHknlzGmZIlrEVc-rzzekdq2xpgZdg8egpXJNV0SC1LgquEeXBYfvjeNpHYhbQCn6woDon0W_MU6483lDvjTK022vugbiTJBKQF8wUzfaOXEWHoX7jTnvCn1mF4laSDYS_C-i5XaIDfpWWtD_VTRiUa93plXmj3sej2j7AI40m3GuF9sgsla_LsVIA4mGsTUQmQTmiCNYr4P2JuSW2BtMWEHJTsHigLaWn0_DfgZoynVl5Lb8lB6oOEjmY71YDvfDq247JubyI5IymDKH7UeIfWNbH2MEqpoIqmjiq7ktWSx_SHamc53l8Bwm6nee_vsVTOvjhDYTSwHD66TLHs-vaRNzS0V6dmTR3As1RjITlFtPf04Fi8G6hdFY6sJCVyZJoA-W57z_kYfIFt7XOc-rNhabBg-G_liKh8BVGqrXfV8R0i54TxTXJGO059xAqF-kXzdcEgEdpDaGqDN7a_c-e9kieJsQ621FI06VgMqDSFYCUlwNCsDUZme6jWaOS2Gc0hGzyR5TqQWf-7eVKBQO7Pen2Z5psIuNIePrIte6k8LqXGJXPo4LG8MnYooW_TWCGm0vTskFHYt3yVHOSVaaRi4p2xeamkJwpudMmkQDjZyMayxeG-1h5tNuyaDBeu8OVH1NcwXPNrbd2z3NFmdAkqg71sT4ZhvA4QBYqmaD8TF9NEneH-an7Q44aY9VhNa3iyOEabtMzZAziCg5ifi5qZhcj3Cu6VMrxD6Io5HJ6htwcWbuUBlWMW1u4cn_skG-yy0oE5Wx0gPamWDYbxT9zrs-dWV9TJNNV8cb1JfaO4i4WkR0WBapwNUgJmbMYAweuNDaeOdSASc=w2472-h1648-no?authuser=0",
   },
   {
      subject: "elijah",
      url: "https://lh3.googleusercontent.com/6zRqLMFjb-laAvoog5L3bDbvAIFWOwx7JneVLBMHsVKRomaEqyhdh_VwKUFNPq2xuDoVkEOoM2Emqjc3adjssmoWlVLmJW0YH7nQGU9DDXF-bIA0ofIgBJXl0rwoEwveHb1oIVH4KVvLS_wUoL3YLPB_6Kd4JL1cGAljmWcM1GXPSmZ4FskFu9H0nFU4cd9HC1o1-5HvCp9j07_turq_jnSALAz_GkVZM9RXOdwnHy2jhkm5uY9XKOKGuJuGuFxUoRxsS09BQHcv7Te4rA3-Fho4uQqwMrBNTjyiNPMeaH21otuVWDU7YCyfpS6fQS-wZTo61-A03-I5WBX7e8Wts8JHB5iVQDMPG_05Z4rDC1-xTDDYye5yfUjN6Uaalx5IMx8cO_6vG76tKmS9nZhp9QNL3SMh9qCIGk25eJgfXVaKEkfmIwPw21pcoesL0yAmBV3wR2Zb0a9XMaZ-ityfEqyIuEdPPTMUGsWdAHLK7K2CvpFrjTs2LXuOpGPyCWMrYTMZJZ4QSYsgLaeMpEH0r2rRwwuswn9_ZkYBIGaR7wqjYPU1TB3MPEj3ynAqOIBRBEtm_o42y88VpFovNtJfV7CfBJnI_TK1SZBr1iDGf4hSHDdpUTgVOOZCXtPc_tt1o29nTsLF7HfrVkL9As7cJVkmjgdJeDzECWdKmh-tXPh5B6VbcTJqh5WDtu5NAm9XtH8rs0i9vJfB4YxYFTAWo2DXxPLcGffl-0el56Cqt8-_zABMk8v32z84RjIE1nw5dxFr8bWeR100zM5jEDpCk3xAsZBzxvULA0tq93IOZNSBa2ZN5fdZlxV3Jj32gABLCCy8l1hbuAMW7J1briS3byIIXrsJag2t6wt5c67_IkIZP8NKe0lo4UfqUCfGY6w8th93wDcWWPXXNDnT_igeoitZjKP7HONe9Vh9KMb8Z6fhL6hVYgrLsP_R94QQjaYtplKwIFe_-8J58BZnQA0=w1472-h982-no?authuser=0",
   },
   {
      subject: "eli",
      url: "https://lh3.googleusercontent.com/eyvN_sAjZNBsw_BwIjRdTB_3dHh6GM1tcQqZXY3HgHnECvUhrjMvAVobf4E7A4SYTvVxtQwVKPyUWeBXijF5e8WmYbStKmC3-X2OqypuXjzf7w3AxJw-ThjRYnUpyMENIzEFGR9jLcpYGeUufBqJkdgAqsxbrHx7mtEE0lIzI-1RadyNBqlPWNcSdftArTIg3s14HSvs2a3OGP7h1YIeRrIuXwCiwNVSQeTK3GzPaMdB9q7SnXnqMJqjsZ6xlKIy2M1T6fvwilW0bADfzHUiZ4v5CTVFxT2xWUzFYU8kuRK2Ww6cILwKgjPMgadxXnrB1mfg0dUL4kwmLvB5VjCz3vsG-mZLL9HxSa5ZJXp-wNPzl2RFiWgNNoxinr9WBDRyJOoBE4rAboWBhizOLadDiloiFAPAu2yMdYqIgx624tRvHpjuLNqTEJueHFpbLKCAUyfREj6FJD9lagVbX-D6VDFXP9HZUoS5MaBsmQMAgGjmUDzFOSGlgYmM-Vgvm1yrXFnxH_bUuxvTZg1SUJgtFsoLTuHL3dJkD4d1CC7psKpieuGxKtuxZUhl8-mIfQ0uEkZuUsyGTkFRmBHKmzbnVjLCiomSQdB9m0hUN8hiBApbulWwOcuk-umdMk2LA0XGq8G3kEG7ONkaIFVHW-0LW2ywXN8G8AnscMQeJijl2WdccM7Lz-jPUexHcwFEpLlUW4IYCIiTz1n918e0lIPOWcDfbzHPw1IFTYr7FlD6CtHcWGz0pWEWxtEWAKLvTc_3mRaInxpgcY4T9KKfX-XlAG-o6MhfPF_FsgaFU-GsF0wRdLIRXiZFNtY43E8byLbC5J4kD26tQhdOm0lP37MEp0f6NBiRrm6LlVZDoqWCJIgRQ8B9a4cY3dve2eg-tPLqmNGcTiaG3pRkovVkND6Mbcr5nF3DeHZfV9Q4uJKUg6Z7X42GPGD3NBj72SGCjjVjeWPezR8GAn_IUoOnzho=w1472-h982-no?authuser=0",
   },
   {
      subject: "daniel",
      url: "https://lh3.googleusercontent.com/HVb9TzghHuNRVsI80Taw40a0ZFzOVxxLyO-efZu-y0NHN_90pxcLkql8WM3W8MZEfVbGzbdM2ukxCuMTPEk50eEcMSRRy_LURbrh9KjOA7mFjyia2wKr-8d_7exemJpegXPSinybi6WZyEf8kYAiWT9kEx5AEn125HLOz-qJ8OIVyNlhAyN5fo60tjoKNj3WoV90D5x3Yg7_C8lefcMvyeNsKtxfOY0myA8odTj5qOL-EuSv0WFqsugPglxXka9liKvHXEajFulsYYyFsn5i0h2EuAf8-5zjrSJx-3qWEhEuVwgZmcBfYHn4JQjcTopdUbKvZbuB88Yc8Zh_Kd8-hF69R20LP7NSSSunff7nv7dDv_WQM7dFK4dnrdquCmW44vIzHY9OBXuYzQJ2YP4KESGLqI9JG1u7LOJahYVoZVR7__WVF9Kku_myE2etdUCHmOFOUK2U7_3oiVx9NtvZ3Ih6M8Wlcoft3bd6be4FN8F7lSGbBd7S5EQyuFn0HqSaEHGzQw6_TMUKzkJ87BPgStTLgcd-L_mL71ymHMAoqF69CXZkIqF2d5dZaHppcjvXaYwW9hWdfs_aq4vZiPedkJPYWcWOeqQrP64NbrWs3pemFyZxF1BvEsiDNEWAVXaR7RAmeSgkV2MzfrqruJW3DupgA5aNi5rcD_yaaH3hozq6-S4Ba6fHTBtqqyYJXyL7WfJGjjPHCWF-V_M3xumc33oYJ9UUPjSfDX6e5tGKgDjLtoEePYlKwMAfewfitSDJZln5h22XJDtHGLTr79InrO3aS4ylukTvYWpl8eldWqsrc36L3Zfm9aYY9rUfmNhhedbXH3W6_HtfOmxHG-5__Fn6DVG8LoGsCZr46_uFyFo-qZdCvgX5EriMAJY0vfJy6zSUXIB85g2j3XwtEyBsYrNbbKKo4rrcU_7U1pksjZ_xUPZLdRQHt4RUokLGCRYrStXFfR0IuPazQy18uNg=w1472-h982-no?authuser=0",
   },
   {
      subject: "sherrise",
      url: "https://lh3.googleusercontent.com/UTOPnXk5ULuUasvyHZiXlamwFoafj-tnUQzZRfPaKuvqOapcBr8OeT9EpgX9U9GRiHAlUBf-2ppTSF9zS32A4WfDGZv-CuVtroeMmSzh4FLB0IbrcPf7G8kZ31u0KBb92XeW_lAXoZZhb0XHul0mFnnIABt1S9hABxzBA4xJuOU6l-Q5TSUamxE8smuLMrrSkhG-ATEgKfrAc5kAzb0oYqCie0qCTp6esiVwOZ1kNb3kffk7lwPh0uFBzmKZ_xLwX4Mi3gqD9F0iQ_RUu61g8cGNmYw4AZ9yh-_m55SG18zZ8pJC62zn5J16nUVmMMmzIq35ciNQRSBs0LdfV-Zzh3H4ZxALBBt8KGdWlvmFcnb5TVjpCaGMgSkn8tBeoL-eIcg0vduwPDwlE1HUSWH4Txf-bAtD8YWd-_F-0aH6a223RdlhT02dWrDB74jqFxlg08HrDieqDCI4O43QfUKnluxMr-_Z4C-bCT9LglV5m_Bw5nLU5Y5EHkEF7QsKrgoUAHZhNeQVxMPSm-86Qbwp_KhiPKe7JjZ2fiDEJI2OrBzayEokbqyAVNk7DtMyCPupn3m9nY5snW3Z2wcb1mIyww4n5GKZBYOMDzCch5JdUEvqwtfvMuChqHL-54Av0r6r8FYJV4pBoB2X1y9j65TW3wDDFQgVLkDquBKYiRwJ2yHzDcCWz5IdtMJ90kwm7qtj8BWGkAxi7Yq_AZr0Bn_VJBvzYRGtscwQkNOS-0QIzAIrzmznoqKb-9Nrt1HdXQngq-tFXtGqDm8nEPhLLVIAGEEkhvEOTWHY7EcA0X2tld-TmlIlizFA48C2_0tHTIk6w4aa0qlnoCNugb9212m9IXbvoQarWsMeaPTCo-Fm39QMXcsUY5CTkewzvV5yfr7TFj2OSfH6v42HyGXArPc4DM9NxMwiHud3ffFQkmE4TIZHbZPWSpmPtHGaFGTTaLDEfAGrjPp60RwcZAOO9t0=w1472-h982-no?authuser=0",
   },
   {
      subject: "leo",
      url: "https://lh3.googleusercontent.com/HKQkERQ3xCymgmwqna_3qFV4Xvi1-Rj_nnPoQEnvMiARiuDGQn0nhDbajf05Sb4iNBXP-eWYFUKMTQvXSxe7uywC9K91AbJRld7nMG3ZmsyXjlwIu6C9vSXhvXOa71f2vMId1uh5C8rmMGCZS5n1yi5u7Fp8BNVKQOigyO0DmfCpCWXdUVNzRU027vzUGapF62UNPBC0zdeRVhXkwY0WPBNZwA0jX6A9tSggZ0WTv7ibLd8v6bfZZBigbUoZnt1h68cyI-91gtQfz052NCGFCJkwwzLwZF-3uT2CaiIDzJ5fAY0lwiq_n-SleY0iPTeu8LG7ne-89uFZl-ugCzxHGiPN2945qhAxZMNh1Rmyw1jJ_5KaXLIe1-pt81sL7CQ9gYzeCcGno2ulCe2_KOmOoB1YUnSt7gXDz_6SWQ3SzRZPzyb455Lc9FZ5DdGY0SPioxTVDvSN_-Xh6B4wABYTF-xDJ5uBdprHp0i0RcTcHzV-8CVW2AL3k4JzvYLw9bLu3_3nprASqR6VvPkLVamDQ_e-GeyIhnzEg1WW2QDasKM9CB0xPC3RGSwxjWQWgNZmrZDWXE3uulhwXyKPIHJ-2l3i2b1SIDO1oaEynnO8xEs963PcXGdy2foN1YDD23u27GsSwV5-uVBRj8tQQeyWEciRT2T5Fp27uoascXtWockpG67WI7TmSolx_vsYgvgkRRrdmKbBOgEHZiqFzL-D7qhyXAK8R_rAb6dlvBewLIDFSnTxr6DuWPme9nNyUbyE5UMXnb8r_ZXafG5Qo1IPVwR53pe_4Qs0ggG15ZxRGngYaQfFo_zJzs8PiJMtGrJtPPusrH5O1-LY4_8HgC-RdwAD4YAejpWdI1BqoDt01xsv82xeCpJAMcVQFh5xPpNy2xy3lT2JpsoxL0dzAjBBXXzL1wMrR2jU0BgixSZdxzY26RZfIcPX7cmg8GiJaAHAcCW5q3OODDotHNFrYsk=w1472-h982-no?authuser=0",
   },
]


export default function Home() {
   const [image, setImage] = React.useState(images[0].url)
   const [count, setCount] = React.useState(0)

   React.useEffect(() => {
      changeDOMTitle(document, "Home")

      const interval = setInterval(() => {
         console.log({count, length: images.length, wrap: !(count + 1 < images.length), image: images[count].subject})

         if (count + 1 < images.length) {
            setCount(count => count + 1)
         }
         else {
            setCount(() => 0)
         }

         setImage(() => images[count].url)
      }, 5000)

      return () => clearInterval(interval)
   })

   return <div id="Home" className="content">
      <Header image={image}>
         <span style={{padding: "1em", display: "flex", paddingTop: 50}}>
            <Link to="/"><button className="SpecialButton">Click here</button></Link>
            <Link to="/"><button className="SpecialButton">And here</button></Link>
         </span>
         <span style={{padding: "1em", display: "flex", marginTop: 110}}>
         </span>
      </Header>
      <main>
         <h1>Welcome!</h1>
         <p>This site is under construction. I hope to put a wonderful photography website here!</p>
         <p>Plan:</p> 
         <ul>
            <li>
               <p>
                  <a href="http://www.ejhfotos.com/">Home:</a>{' '}
                  This will be the main page, the photography site. 
               </p>
            </li>
            <li>
               <p>
                  <a href="http://about.ejhfotos.com/">About:</a>{' '}
                  This will be a landing page for everybody, including not only those who click the "about" link, but also potential employers who would like to clearly see my software portfolio, links and resume. 
               </p>
            </li>
            <li>
               <p>
                  <a href="http://linktree.ejhfotos.com/">Linktree:</a>{' '}
                  Lightweight linktree.
               </p>
            </li>
         </ul>

         {/* Template Items */}
         <h1>Template Items</h1>
         <p className="Subtitle">(Placeholders for the various components to be integrated in this site. Basically, "TODO" components.)</p>
         <br></br>

         <h2>[Welcome section]</h2>
         <br></br>

         <h2>[Hover Carrousel]</h2>
         <p className="Subtitle">(For preview of "weddings/engagements/other" images)</p>
         <br></br>

         <h2>[Check out our latest <em>"[]"</em>]</h2>
         <br></br>

         <h2>[Normal Album Carrousel]</h2>
         <br></br>

         <h2>[Normal Text with Button Sections]</h2>
         <br></br>

         <h2>[Text and Button with Background Image Sections]</h2>
         <br></br>

         <h2>[Testimonials Section with Text, Image and Arrow Buttons]</h2>
         <br></br>

         <h2>[Fixed image backgrounds to scroll over]</h2>
         <br></br>
      </main>
      <Footer />
   </div>
}
