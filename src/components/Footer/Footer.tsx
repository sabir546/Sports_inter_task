
import { useTheme } from "../ContextNav/ThemeContext";

const Footer:React.FC = () => {
  const { theme } = useTheme();

  return (
    <div  className={`${theme === "light" ? "bg-gray-50" : "bg-gray-800"} footer`}>
      <div  className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3   className={`${
          theme === "light" ? "text-gray-900" : "text-white"
        } text-xl md:text-3xl lg:text-4xl  mb-5 text-center `}>Download our sports app</h3>
          <p  className={
                  theme === "light" ? "text-zinc-800" : "text-gray-100"
                } >Stay fit. All day, every day.</p>
          <div className=" apple flex justify-center my-10 ">
            
              <div  className={`${
          theme === "light" ? "bg-gray-900" : ""
        }  flex items-center border  rounded-lg px-4 py-2 w-52 mx-2    `} >
              <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" alt="Google Play Store" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div  className={`${
          theme === "light" ? "bg-gray-900" : ""
        }  flex items-center border  rounded-lg px-4 py-2 w-52 mx-2 lg:my-0 my-3`}>
              <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" alt="Apple Store" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div  className={`${theme === "light" ? "text-gray-800" : "text-white"} mt-18 flex flex-col md:flex-row md:justify-between items-center text-sm`}>
        
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Beautiful Footer, 2024.</p>
          <div className="order-1 md:order-2">
            <span className={`${theme === "light" ? "text-gray-800" : "text-white"} p-2`}>About us</span>
            <span className={`${theme === "light" ? "text-gray-800" : "text-white"} px-2 border-l`}>Contact us</span>
            <span className={`${theme === "light" ? "text-gray-800" : "text-white"} px-2 border-l`}>Privacy Policy</span>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

