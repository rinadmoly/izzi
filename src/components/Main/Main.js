import React, { useEffect } from 'react'
import Card from '../Card'
import MainCarousel from '../MainCarousel'
import BannerCard from '../BannerCard'
import Hoc from '../../hoc/hoc'
import { connect } from 'react-redux'
import { loadedData } from '../../actions'
import './main.css'
import Sort from '../Sort/Sort'

 const Main =({service, items, loadedData}) => {    
    const data = service.getRes();
    console.log('GET', data)
    console.log('store',items)
    // console.log('GET', data[1].id)
    // console.log('store',items[1].id)
    useEffect(() => {
        
        loadedData(data)
    }, [])
    return (
        <div>
            <section id='cards'>
                <div className='container'>
                    <div className='cards_section'>
                        <div className='cards'>
                            {items.map(el => 
                            <Card
                                key={el.id}
                                {...el}/>
                            )}
                        </div>
                        <div className='view_all'>
                            <a href='#'>Посмотреть все</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sale_carousel'>
                <div className='container'>
                    <MainCarousel />
                </div>
            </section>
            <section id='banner_cards'>
                <div className='container'>
                    <BannerCards />
                </div>
            </section>
        </div>
    )
}


const mapStateToProps = ({items}) => {
    return{ items }
}

const mapDispachToProps ={
    loadedData
}

export default Hoc()(connect(mapStateToProps, mapDispachToProps)(Main))

const BannerCards = () =>{
    return(
        <div className='banner_cards'>
            <BannerCard />
            <BannerCard />
            <BannerCard />
        </div>
    )
}




// class Main extends React.Component {

//     componentDidMount() {
//         const { service } = this.props;
//         const data = service.getRes();
//       this.props.loadedData(data);
//     }
  
//     render() {
//       const { data } = this.props.items;
//       console.log(data)
//       return (
//                 <div>
//                     <section id='cards'>
//                         <div className='container'>
//                             <div className='cards_section'>
//                                 <div className='cards'>
//                                     {[].map(el => 
//                                     <Card
//                                         key={el.id}
//                                         {...el}/>
//                                     )}
//                                 </div>
//                                 <div className='view_all'>
//                                     <a href='#'>Посмотреть все</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </section>
        
//                     <section id='sale_carousel'>
//                         <div className='container'>
//                             <MainCarousel />
//                         </div>
//                     </section>
//                     <section id='banner_cards'>
//                         <div className='container'>
//                             <BannerCards />
//                         </div>
//                     </section>
//                 </div>
//             )
//     }
//   }