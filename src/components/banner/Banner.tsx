import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import SearchBar from "../search/Search";
import LocationIcon from "../../assets/icons/LocationIcon";
import { Carousel } from "react-responsive-carousel";
import { StyledBanner } from "./Banner.styles";
import { IBanner } from "./IBanner";
import { DESKTOP_IMAGES, MOBILE_IMAGES } from "../../constants";

const Banner: React.FC<IBanner> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    usersLocation,
    usersLocationTemp
}): JSX.Element => {
    const displayedImages = window.innerWidth > 768 ? DESKTOP_IMAGES : MOBILE_IMAGES;
    return (
        <StyledBanner className="banner">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={false}
                autoPlay={true}
                stopOnHover={false}
                swipeable={false}
                dynamicHeight={false}
                emulateTouch={false}
                autoFocus={false}
                animationHandler="fade"
            >
                {displayedImages.map((item, i) => {
                    return (
                        <div key={i} className="banner__image">
                            <img src={item} alt="" />
                        </div>
                    );
                })}
            </Carousel>
            <div className="banner__content">
                {usersLocationTemp && usersLocation && (
                    <div className="banner__content__user-location" data-testid="user-location">
                        <LocationIcon />
                        <p>
                            {usersLocation} - {usersLocationTemp} &deg;C
                        </p>
                    </div>
                )}

                <h1>Know the weather</h1>
                <SearchBar
                    handleGetCityWeather={handleGetCityWeather}
                    searchValue={searchValue}
                    handleChangeSearchInput={handleChangeSearchInput}
                />
            </div>
        </StyledBanner>
    );
};

export default Banner;
