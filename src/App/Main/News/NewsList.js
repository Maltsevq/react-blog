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

                        }) => (
                            <div key={id}>
                            <NewsListWindow
                            id={id}
                            text={text}
                            image={image}
                            categorydevice={categorydevice}
                            categorybrand={categorybrand}

                            />
                            
                            </div>
                            
                        ))
                    }
                    
                </div>
            </div>
        )
    }

    
export default NewsList