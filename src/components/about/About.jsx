import "./about.css"
import AboutImage from "../../img/royal-denmas-1.jpeg"

export default function About() {
    return (
        <div className="about" id="about">
            <div className="aboutFeaturedImage">
                <img src={AboutImage} alt="" className="aboutImg" />
            </div>
            <div className="aboutText">
                <h1 className="aboutHeader">About Us</h1>
                <hr className="aboutDivider" />
                <span className="aboutDes">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit maxime odio explicabo nostrum eum asperiores ea recusandae officiis cupiditate doloribus. Nobis minus velit illum cupiditate id dolor sed sint iste.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, dicta repellat! Sequi odio enim consequuntur tempora reiciendis iusto quod aliquam dolorem hic cumque, iure porro id accusantium error suscipit eveniet.
                    </p>
                    <br/>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolorum totam explicabo voluptatum provident neque, perferendis nulla veritatis praesentium ipsum dolore cumque, porro libero eligendi dolor cupiditate. Error, ea laudantium?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus odio dignissimos assumenda asperiores ullam illo quos eos doloremque ex minima architecto, expedita quod debitis alias autem modi eveniet. Odit, minima?
                    </p>
                    <br/>
                    <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestias eligendi corrupti quis facere! Odit cum similique voluptatibus tenetur optio accusamus, velit adipisci amet voluptatem, eum natus fugit nulla architecto.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non similique esse, repellendus quidem eligendi, laborum eum cupiditate officia officiis doloremque nobis dignissimos reprehenderit ullam autem distinctio doloribus ex, rerum totam!
                    </p>
                </span>
            </div>
        </div>
    )
}
