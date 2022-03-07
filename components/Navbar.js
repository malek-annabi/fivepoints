import Link from "next/link";
import clearText from "../pages/index.js";
const Navbar = () => {
    return (
    <>
        <div id="templatemo_banner">
        <div id="search_section">
            <form action="#" method="get">
                <input type="text" value="Enter keyword here..." name="q" size="10" id="searchfield" title="searchfield" onFocus={()=>clearText(this)} onBlur={()=>clearText(this)} />
              <input type="submit" name="Search" value="" alt="Search" id="searchbutton" title="Search" />
            </form>
      </div>

    </div> 
    
	<div id="templatemo_menu">
        <ul>
            <li><a href="#" className="current">Home</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" className="last">Contact</a></li>
        </ul>    	
    </div> 
    </>
    );
}
export default Navbar;