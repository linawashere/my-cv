import { Link } from "react-router-dom"

interface CaseCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    link?: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ id, title, description, image, link }) => {
    return (
        <>
            <Link to={`/cases/${id}`} className="case-card__link">
                <div className="case-card">
                    <div className="case-card__content">
                        <h3 className="case-card__title">{title}</h3>
                        <p>{description}</p>
                    </div>
                    {/* <Link to={`/cases/${id}`} className="case-card__link">View Case Study</Link> */}
                    <div className="case-card__image-container">
                        <img
                            src={image}
                            alt={title}
                            className="case-card__image"
                            loading="lazy"
                        />
                    </div>
                    <div className="case-card__overlay">
                        <span className="case-card__view-btn">View Case</span>
                        <img src="./images/arrow.png" alt="arrow" className="case-card__icon" />
                    </div>

                </div>
            </Link>
        </>
    )
}

export default CaseCard;