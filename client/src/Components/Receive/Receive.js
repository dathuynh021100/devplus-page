import './Receive.css'
import { useInView } from 'react-intersection-observer'
const dataReceive=[
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/1.png',
    title:'Programing foundation',
    detail:'Algorithm, Design patte'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/2.png',
    title:'Database',
    detail:'SQL Syntax'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/3.png',
    title:'Testing',
    detail:'Unit testing, TDD'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/4.png',
    title:'Front-end',
    detail:'HTM/CSS/JS , ReactJS/VueJS'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/5.png',
    title:'Back-end',
    detail:'PHP, NodeJS'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/6.png',
    title:'Agile Stable Team',
    detail:'Agile/Scrum'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/7.png',
    title:'English',
    detail:'Basic conversion'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/8.png',
    title:'Communication',
    detail:'HORENSO'
  },
  {
    img:'https://devplus.edu.vn/assets/images/categories/icons/9.png',
    title:'Career path',
    detail:'Work ethic, Integrity'
  },
]
 const Receive =()=>{
  const {ref:receiveRef,inView: receiveVisible} = useInView({
    triggerOnce: true
  })
return(
  <section className="receive" ref={receiveRef}>
  <div className="content-title">
   <div className="content-list">
     <div className="list-heading">
        <h2>What an engineer after Devplus will must have?</h2>
     </div>
     <div className="list-container">
        {dataReceive.map((item,index)=>(
          <div className={`list-row ${receiveVisible ? "fade-up":""}`} key={index}>
            <div className="list-item">
             <div className="list-icon">
               <img src={item.img} alt="img"/>
             </div>
            <div className="list-text">
               <h4>{item.title}</h4>
               <span>{item.detail}</span>
             </div>
            </div>  
         </div>
        ))}
      </div>

   </div>
</div></section>         
)
}
export default Receive;