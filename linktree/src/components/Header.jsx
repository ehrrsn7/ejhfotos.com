import "./Header.css"
import useMediaQuery from "../hooks/useMediaQuery"
import { Pivot as Hamburger } from "hamburger-react"
import React from "react"

const images = {
   ingrid: "https://lh3.googleusercontent.com/Efv8uOBD6-fVNC5YfYh9ldSUvfgwk34-35ylg4A7wyZOJ6_rdPgAVBSk5WnE-hhbuN1axUvlH1hhzicab5fimnNLusqqwvOTSIcahQnKBwDyWqCYFlwfYRSBx8x6JgjbQ6e9zvILHknlzGmZIlrEVc-rzzekdq2xpgZdg8egpXJNV0SC1LgquEeXBYfvjeNpHYhbQCn6woDon0W_MU6483lDvjTK022vugbiTJBKQF8wUzfaOXEWHoX7jTnvCn1mF4laSDYS_C-i5XaIDfpWWtD_VTRiUa93plXmj3sej2j7AI40m3GuF9sgsla_LsVIA4mGsTUQmQTmiCNYr4P2JuSW2BtMWEHJTsHigLaWn0_DfgZoynVl5Lb8lB6oOEjmY71YDvfDq247JubyI5IymDKH7UeIfWNbH2MEqpoIqmjiq7ktWSx_SHamc53l8Bwm6nee_vsVTOvjhDYTSwHD66TLHs-vaRNzS0V6dmTR3As1RjITlFtPf04Fi8G6hdFY6sJCVyZJoA-W57z_kYfIFt7XOc-rNhabBg-G_liKh8BVGqrXfV8R0i54TxTXJGO059xAqF-kXzdcEgEdpDaGqDN7a_c-e9kieJsQ621FI06VgMqDSFYCUlwNCsDUZme6jWaOS2Gc0hGzyR5TqQWf-7eVKBQO7Pen2Z5psIuNIePrIte6k8LqXGJXPo4LG8MnYooW_TWCGm0vTskFHYt3yVHOSVaaRi4p2xeamkJwpudMmkQDjZyMayxeG-1h5tNuyaDBeu8OVH1NcwXPNrbd2z3NFmdAkqg71sT4ZhvA4QBYqmaD8TF9NEneH-an7Q44aY9VhNa3iyOEabtMzZAziCg5ifi5qZhcj3Cu6VMrxD6Io5HJ6htwcWbuUBlWMW1u4cn_skG-yy0oE5Wx0gPamWDYbxT9zrs-dWV9TJNNV8cb1JfaO4i4WkR0WBapwNUgJmbMYAweuNDaeOdSASc=w2472-h1648-no?authuser=0"
}

export default function Header() {
   const isMobile = useMediaQuery("(max-width: 767px)")

   React.useEffect(() => {
      document.querySelector("header").style.backgroundImage = `url(${images["ingrid"]})`
   }, [])

   return <header>
      <span>
         <span>
            {isMobile && <p></p>}
            {isMobile || <p>Home</p>}
            {isMobile || <p>Video</p>}
            {isMobile || <p>Photos</p>}
            {isMobile || <p></p>}
         </span>
         <p className="CursiveLogo">ejhfotos</p>
         <span>
            {isMobile || <p></p>}
            {isMobile || <p>Pricing</p>}
            {isMobile || <p>Contact</p>}
            {isMobile || <p>More</p>}
            {isMobile && <Hamburger />}
         </span>
      </span>
   </header>
}