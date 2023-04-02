import "./Footer.css"

export function Footer({style}) {
   return <footer id="Footer" style={style}>
      {/* <!-- Footer main --> */}
      <section className="ft-main" style={{
         display: "flex", flexFlow: "row wrap", 
         placeContent: "space-evenly", gap: "2em"
      }}>
         <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
               <li><a href="#">Services</a></li>
               <li><a href="#">Portfolio</a></li>
               <li><a href="#">Pricing</a></li>
               <li><a href="#">Customers</a></li>
               <li><a href="#">Careers</a></li>
            </ul>
         </div>
         <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
               <li><a href="#">Docs</a></li>
               <li><a href="#">Blog</a></li>
               <li><a href="#">eBooks</a></li>
               <li><a href="#">Webinars</a></li>
            </ul>
         </div>
         <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
               <li><a href="#">Help</a></li>
               <li><a href="#">Sales</a></li>
               <li><a href="#">Advertise</a></li>
            </ul>
         </div>
         <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Subscribe to our newsletter to get our latest news.</p>
            <form>
               <input type="email" name="email"
               placeholder="Enter email address" />
               <input type="submit" value="Subscribe" />
            </form>
         </div>
      </section>
    
      {/* <!-- Footer social --> */}
      <section className="ft-social">
         <ul className="ft-social-list" style={{
            display: "flex", flexFlow: "row wrap", 
            placeContent: "space-evenly", gap: "2em"
         }}>
            <SocialIcon name="github" />
            <SocialIcon name="facebook" />
            <SocialIcon name="instagram" />
            <SocialIcon name="linkedin" />
            <SocialIcon name="youtube" />
            <SocialIcon name="twitter" />
         </ul>
      </section>
    
      {/* <!-- Footer legal --> */}
      <section className="ft-legal">
         <ul className="ft-legal-list" style={{
            display: "flex", flexFlow: "row wrap", 
            placeContent: "space-evenly", gap: "2em"
         }}>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; 2019 Copyright Nowrap Inc.</li>
         </ul>
      </section>
   </footer>
}

function SocialIcon({name}) {
   return <li>
      <a href={socials[name].socialURL}
      target="_blank" rel="noreferrer">
         <img src={socials[name].iconURL}
         alt={`${name} icon`} width="25px"
         style={{filter: "brightness(0) invert(1)"}} />
      </a>
   </li>
}

const socials = {
   github: {
      iconURL: "https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   snapchat: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Snapchat_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   facebook: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   linkedin: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   instagram: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   messenger: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Messenger3_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   youtube: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   twitter: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
   tumblr: {
      iconURL: "https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Tumblr5_svg-1024.png",
      socialURL: "https://github.com/ehrrsn7",
   },
}

export default Footer
