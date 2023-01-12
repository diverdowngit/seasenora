import React from "react";
import styles from './PhotoGallery.module.css';
import classnames from 'classnames';
import Layout from "../../../../components/Layout/Layout";
export default function PhotoGallery() {
    return (  
      <Layout>
     <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.headingGrid}>Photo Gallery</h2>
          <div className={styles.galleryimage}>
          <div className={styles.imgbox}>
      <img src="img/KastelSucuracCroatia.jpg" alt="Kastel Sucurac Croatia" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Kastel Sucurac Croatia</p>
          
        </div>
      </div> 
    </div>

    <div className={styles.imgbox}>
      <img src="img/MilnaMarina.jpg" alt="MilnaMarina.jpg" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Milna Marina</p>
          
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="img/MaslinicaCroatia.jpg" alt="MaslinicaCroatia.jpg" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Maslinica Croatia  on a Mooring Ball</p>
         
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="img/MilnaCroatia.jpeg" alt="MilnaCroatia.jpeg" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>MilnaCroatia</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="img/KastelGomilicaCroatia.jpg" alt="img/KastelGomilicaCroatia" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Kastel Gomilica Croatia</p>
          <p className={styles.opacitylow}>Beach</p>
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
      <img src="img/StomorskaCroatia.jpg" alt="img/StomorskaCroatia.jpg" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Stomorska Croatia</p>
          
        </div>
      </div> 
    </div>
    <div className={styles.imgbox}>
    <video id="background-video" loop autoPlay muted>
        <source src="img/windysail.mp4" type="video/mp4" />
</video>
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Adriatic Sea</p>
         
        </div>
      </div>  
    </div>
    
    
    
    
    
    
    {/* <div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div><div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
    </div> 
    <div className={styles.imgbox}>
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div> 
     </div>{/* //Here to add new images////////////////////////////////
     <div className={styles.imgbox}> 
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div className={styles.transparentbox}>
        <div className={styles.caption}>
          <p>Library</p>
          <p className={styles.opacitylow}>Architect Design</p>
        </div>
      </div>  
    </div>//////////////////*/}
          {/* <div className={styles.containerimg}>
            <div className={styles.gallery}>
              <div className={classnames(styles.imggrid1, styles.singlecolumn)}><img className={styles.galleryimg} src="img/KastelSucuracCroatia.jpg" alt="Kastel Sucurac Croatia" /><p className={styles.gridText}>Kastel Sucurac Croatia</p></div>
              <div className={classnames(styles.imggrid2, styles.singlecolumn)}><img className={styles.galleryimg} src="img/MilnaMarina.jpg" alt="MilnaMarina" /><p className={styles.gridText}>Milna Marina</p></div>
              <div className={styles.imggrid3}><img className={styles.galleryimg} src="img/MilnaCroatia.jpeg" alt="MilnaCroatia.jpeg" /><p className={styles.gridText}>Milna Croatia</p></div>
              <div className={styles.imggrid4}><img className={styles.galleryimg} src="img/MaslinicaCroatia.jpg" alt="Maslinica Croatia.jpg" /><p className={styles.gridText}> Maslinica Croatia on a Mooring Ball</p></div>
              <div className={styles.imggrid5}><img className={styles.galleryimg} src="img/StomorskaCroatia.jpg" alt="Stomorska Croatia.jpg" /><p className={styles.gridText}>Stomorska Croatia</p></div>
              <div className={styles.imggrid6}><img className={styles.galleryimg} src="img/KastelGomilicaCroatia.jpg" alt="Kastel Gomilica Croatia jpg" /><p className={styles.gridText}>Kastel Gomilica Beach Croatia</p></div>
              
            </div>
            
          </div> 
         */}
        </div>
       
      </div>
      </div>
      </Layout>
    );
}