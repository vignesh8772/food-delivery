import "./Appdownload.css"
import {assets} from '../../assets/frontend_assets/assets'
 
 const AppDownload = () => {
   return (
     <div className="app" id="app">
        <p>Better Expericence Download <br /> Tomato App</p>
        <div className="app-imgk">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
     </div>
   )
 }
 
 export default AppDownload