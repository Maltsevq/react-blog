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
                        fullnews,
                        author,
                        
                        }) => (
                            <div key={id}>
                            <NewsListWindow
                            id={id}
                            text={text}
                            image={image}
                            categorydevice={categorydevice}
                            categorybrand={categorybrand}
                            fullnews={fullnews}
                            author={author}
                            />
                            
                            </div>
                            
                        ))
                    }
                    
                </div>
            </div>
        )
    }

    
export default NewsList