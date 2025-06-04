import React from "react";
import './Contact.css';

const Contact =()=>{
    return(
<div className="Contact" name='contact-us'>
    <div className="contact-col">
        <h3>Send us a massege</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veritatis alias molestias ab repellat voluptates numquam sit, culpa esse reprehenderit voluptate. Possimus sit pariatur aperiam maiores molestiae excepturi repudiandae velit?</p>
        <ul>
            <li>Contact@gmail.com</li>
            <li>+12345 567890</li>
            <li>N-2 cidco ramnagar </li>
        </ul>
    </div>
    <div className="contact-col">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" required />
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone" required />
            <label htmlFor="">Write your message here</label>
<textarea name="message" rows='6'  id=""></textarea>  
<button type="submit" className="btn dark-btn">Submit</button>      </form>
    </div>
</div>
    )
}
export default Contact;