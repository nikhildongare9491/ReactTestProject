import React, { useEffect, useState } from "react";
import axios  from "axios";
import './css/slider.css';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'


const URL = `http://localhost:5000`

function Home(){
    const [user, setUser] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        const lastIndex = user.length - 1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, user]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index]);

    useEffect(() => {
        axios.get(`${URL}/sliderContent`).then( res => {
            console.log('slider data =', res);
            setUser(res.data)
        }).catch(err => {
            console.log(err.message);
        })
    }, []);

    return(
        <div>
            <section className="container">
                <div className="title">
                    <h3>
                        <span>/</span> reviews
                    </h3>
                </div>

                <div className="section-center">
                    {
                        user.map((item, key) => {
                            const {id, name, image, quote} = item;

                            let position = "nextSlide";
                            if(key === index){
                                position = "activeSlide";
                            }

                            if((key === index-1 || (index === 0)) && (key === user.length -1)){
                                position = "lastSlide";
                            }

                            return(
                                <article className={position} key={key}>
                                    <img src={image} alt={name} className="user-img" />
                                    <h4> {name} </h4>
                                    <p className="text"> {quote} </p>
                                </article>
                            )
                        })
                    }

                    <button className="prev" onClick={() => setIndex(index-1)}>
                        <FiChevronLeft/>
                    </button> 
                    <button className="next" onClick={() => setIndex(index+1)}>
                        <FiChevronRight/>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Home;