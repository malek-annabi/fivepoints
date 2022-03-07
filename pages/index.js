import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const clearText=(field)=>
{
    if (field.defaultValue == field.value) field.value = '';
    else if (field.value == '') field.value = field.defaultValue;

}
  return (
    <>
<head/>
<body>
<div id="templatemo_container">

    
    <div id="templatemo_content_top">
    	
      <div className="section_w335 fl margin_right_40">
        
        	<div className="header_01">
            	About Our Library</div>
            <div className="image_wrapper">
	            <img src="images/templatemo_image_01.jpg" alt="image" />
            </div>
            
            <p>This is a free website template provided by <a href="http://www.templatemo.com" target="_parent">templatemo.com</a>. You may apply this template for your websites. Credit goes to <a href="http://www.photovaco.com" target="_blank">Free Photos</a> for photos. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Nunc a nulla. Suspendisse vitae orci a ligula egestas bibendum. Pellentesque tempus sapien nec sem commodo ullamcorper. <a href="#">Read more...</a></p>
        </div>
        
        <div className="section_w335 fl">
        
        	<div className="header_01">
           	    History Books</div>
      <div className="image_wrapper">
	            <img src="images/templatemo_image_02.jpg" alt="image" />
            </div>
            
            <p>Donec mattis rhoncus mi. Aliquam erat arcu, euismod et, dignissim in, interdum ac, est. Mauris congue felis at nisi. Donec felis. Pellentesque leo lacus, rhoncus nec, consequat ac, ullamcorper nec, orci. </p>
            <p>Quisque blandit eros et lorem. Etiam nec enim. Cras arcu. Integer molestie. Aliquam a dui. Suspendisse ac magna quis est eleifend dictum. <a href="#">Read more...</a></p>
        </div>
        
        <div className="margin_bottom_40"></div>
        
        <div className="section_w335 fl margin_right_40">
        
        	<div className="header_01">
            	Ancient Arts</div>
            <div className="image_wrapper">
	            <img src="images/templatemo_image_03.jpg" alt="image" />
            </div>
            
            <p>Suspendisse luctus, risus id laoreet adipiscing, urna dolor faucibus elit, vel tincidunt ante diam non lectus. Curabitur velit quam, euismod at euismod ac, euismod non nunc. Fusce dictum lobortis porta.</p>
            <p>Duis nisi urna, porta sed, molestie nec, euismod ac, libero. Mauris in elit. Morbi nec magna pulvinar mi scelerisque posuere. <a href="#">Read more...</a></p>

        </div>
        
      <div className="section_w335 fl">
        
        	<div className="header_01">
            	Popular News
            </div>
            <div className="image_wrapper">
	            <img src="images/templatemo_image_04.jpg" alt="image" />
            </div>
            
            <p>Phasellus in justo at lectus pulvinar ultrices. Fusce non lacus et lorem ornare interdum. Nunc eget urna. Mauris vestibulum felis eget tortor. Praesent mattis varius quam. Vestibulum ullamcorper ipsum nec augue. </p>
            <p>Quisque hendrerit, neque id congue suscipit, nunc justo porttitor quam, ut venenatis augue odio at orci. <a href="#">Read more...</a></p>
        </div>
        
        <div className="margin_bottom_20 b_bottom"></div>
        
        <div className="cleaner"></div>
    </div>
    
    <div id="templatmeo_content_bottom">
    
    	<div className="section_w210 fl margin_right_40">
        	<div className="header_02">Fusce vel magna elit</div>
            <p>Phasellus tincidunt orci id turpis elementum ultricies. Proin non velit velit. Vivamus dolor justo, laoreet non elementum nec, interdum sit amet massa.</p>
            <p>Vestibulum auctor odio eget ante. Nunc commodo, magna pharetra semper vehicula, dui ligula feugiat elit, et euismod nunc orci ut libero. Etiam sodales massa vel metus. <a href="#">Read more...</a></p>
        </div>
        
        <div className="section_w210 fl margin_right_40">
        	<div className="header_02">Aliquam dictum eleifend</div>
            <p>Maecenas consectetur congue lacinia. Phasellus pretium, massa nec semper tincidunt, nisi dolor malesuada odio, et luctus orci nibh in felis. Aenean elementum auctor dui vel hendrerit. </p>
            <p>Etiam nec tristique erat. Phasellus volutpat sagittis metus eu bibendum. Mauris ultricies mollis rutrum. Cras tincidunt lectus sed risus ultrices ornare. <a href="#">Read more...</a></p>
        </div>
        
        <div className="section_w210 fl">
        	<div className="header_02">Pellentesque vel lacus</div>
            <p>Etiam odio est, placerat at ultricies sed, rhoncus nec sem. Praesent euismod faucibus adipiscing. Sed risus leo, pharetra at porttitor non, bibendum sit amet tellus. </p>
          <p>Cras aliquet hendrerit posuere. In tempor pretium est non gravida. Donec porttitor neque at purus ullamcorper porttitor. Donec convallis tempus dictum. Pellentesque at odio mi, eget sodales ante. <a href="#">Read more...</a></p></div>
        
        <div className="margin_bottom_40 b_bottom"></div>
        <div className="margin_bottom_30"></div>
        
        <div id="templatemo_footer">
        
            <ul className="footer_list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Resources</a></li>
                <li><a href="#">Services</a></li>
                <li className="last"><a href="#">Contact</a></li>
            </ul> 
            
            <div className="margin_bottom_10"></div>
            
            Copyright © 2048 <a href="#">Your Company Name</a> | <a href="http://www.iwebsitetemplate.com" target="_parent">Website Templates</a> by <a href="http://www.templatemo.com" target="_parent">Free CSS Templates</a>
            
            <div className="margin_bottom_20"></div>
		
        </div>
        
        <div className="cleaner"></div>    
    </div> 
</div> 
</body>
</>
  );
}
