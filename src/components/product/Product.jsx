import "./product.css"
import WhiteMaize from "../../img/royal-denmas-3.jpeg"
import YellowMaize from "../../img/royal-denmas-2.jpeg"
import Millet from "../../img/royal-denmas-6.jpg"
import SoyaBeans from "../../img/royal-denmas-7.jpg"
import PalmKernelShell from "../../img/palm-kernel-shell.jpg"
import PalmKernelCake from "../../img/palm-kernel-cake.jpg"
import EmptyPalmBunch from "../../img/royal-denmas-8.jpg"
import TigerNuts from "../../img/tigernuts.jpg"
import LocalRice from "../../img/rice-ghana.jpg"
import LocalBeans from "../../img/local-beans.jpg"
import Yam from "../../img/yam.jpg"
import Cassava from "../../img/cassava.jpg"

export default function Product() {
    return (
        <div className="products" id="products">
            <h1 className="productHeader">Our Products</h1>
            <div className="productsWrapper">
                <div className="productItem">
                    <img src={WhiteMaize} alt="" className="productImg" />
                    <span className="productTitle">White Maize</span>
                </div>
                <div className="productItem">
                    <img src={YellowMaize} alt="" className="productImg" />
                    <span className="productTitle">Yellow Maize</span>
                </div>
                <div className="productItem">
                    <img src={Millet} alt="" className="productImg" />
                    <span className="productTitle">Millet</span>
                </div>
                <div className="productItem">
                    <img src={SoyaBeans} alt="" className="productImg" />
                    <span className="productTitle">Soya Beans</span>
                </div>
                <div className="productItem">
                    <img src={PalmKernelShell} alt="" className="productImg" />
                    <span className="productTitle">Palm Kernel Shell</span>
                </div>
                <div className="productItem">
                    <img src={PalmKernelCake} alt="" className="productImg" />
                    <span className="productTitle">Palm Kernel Cake</span>
                </div>
                <div className="productItem">
                    <img src={EmptyPalmBunch} alt="" className="productImg" />
                    <span className="productTitle">Groundnuts</span>
                </div>
                <div className="productItem">
                    <img src={TigerNuts} alt="" className="productImg" />
                    <span className="productTitle">Tiger Nuts</span>
                </div>
                <div className="productItem">
                    <img src={LocalRice} alt="" className="productImg" />
                    <span className="productTitle">Local Rice</span>
                </div>
                <div className="productItem">
                    <img src={LocalBeans} alt="" className="productImg" />
                    <span className="productTitle">Local Beans</span>
                </div>
                <div className="productItem">
                    <img src={Yam} alt="" className="productImg" />
                    <span className="productTitle">Yam</span>
                </div>
                <div className="productItem">
                    <img src={Cassava} alt="" className="productImg" />
                    <span className="productTitle">Cassava</span>
                </div>
            </div>
        </div>
    )
}
