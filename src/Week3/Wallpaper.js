import React from 'react'
import hulk from '../Week3/hulk-1.jpg'
import veno from '../Week3/veno.jpg'
import venom from '../Week3/venom.jpg'
import Global from '../Week3/Global.css'


function Wallpaper(){
    return(
        <div>
            <div class="container">
            <div class="sample-wallpaper">
    
          <article class="wallpaper">
            <img src={veno} alt="Wallpaper #1" class="wallpaper" />
          </article>

       
          <article class="wallpaper">
            <img src={hulk} alt="Wallpaper #1" class="wallpaper" />
          </article>

          <article class="wallpaper">
            <img src={venom} alt="Wallpaper #1" class="wallpaper" />
          </article>
        </div>
            </div>
        </div>
    )
}
export default Wallpaper