import React from "react";


import NewsListWindow from "./NewsListWindow";
import news from './news'


const NewsList = () => {
    return(
            <div>
                <div className="row">
                    {
                        news.map(({
                        id,
                        text,
                        image,
                        categorydevice,
                        categorybrand,
<<<<<<< HEAD

=======
                        fullnews,
                        author,
                        
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
                        }) => (
                            <div key={id}>
                            <NewsListWindow
                            id={id}
                            text={text}
                            image={image}
                            categorydevice={categorydevice}
                            categorybrand={categorybrand}
<<<<<<< HEAD

=======
                            fullnews={fullnews}
                            author={author}
>>>>>>> 1717862778222c82ae6f84bc1c0622752bbefb27
                            />
                            
                            </div>
                            
                        ))
                    }
                    
                </div>
            </div>
        )
    }

    
export default NewsList