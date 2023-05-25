import Logo1 from "../../assets/img/cash_currency_money_finance_coin_won_korean_south_icon_251401.png"
import Logo2 from "../../assets/img/free-icon-girl-2945463.png"
import Logo3 from "../../assets/img/free-icon-virgo-5796862.png"
import { useEffect, useRef } from "react";

const Services = () => {
    
    useEffect(() => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
        // h2ref.current.scrollIntoView();
      }, []);
    return (
        <section className="services">
            <div className="services-main">
                <div className="services-main-head">
                    <div className="main-head-srvice">SERVICES</div>
                    <h3>What We Do.</h3>
                    <p>Lorem ipsum Elit ut consequat veniam eu nulla nulla reprehenderit reprehenderit 
                        sit velit in cupidatat ex aliquip ut cupidatat Excepteur tempor id irure sed dolore sint sunt voluptate ullamco nulla qui Duis qui culpa
                         voluptate enim ea aute qui veniam in irure et nisi nostrud deserunt est officia minim.</p>
                </div>
                <div className="services-main-items">
                    <div className="services-item">
                        <div className="services-item-img">
                            <img src={Logo1} alt="img" />
                        </div>
                        <div className="services-item-title">BRANDING</div>
                        <p className="services-item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className="services-item">
                        <div className="services-item-img">
                            <img src={Logo2} alt="img" />
                        </div>
                        <div className="services-item-title">WEB DESIGN</div>
                        <p className="services-item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className="services-item">
                        <div className="services-item-img">
                            <img src={Logo2} alt="img" />
                        </div>
                        <div className="services-item-title">WEB DEVELOPMENT</div>
                        <p className="services-item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                    <div className="services-item">
                        <div className="services-item-img">
                            <img src={Logo3} alt="img" />
                        </div>
                        <div className="services-item-title">MARKETING</div>
                        <p className="services-item-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services