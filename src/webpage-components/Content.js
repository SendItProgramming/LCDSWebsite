import React, { Component } from "react"
import SideBar from "./content-components/SideBar";
import MainContent from "./content-components/MainContent";
import {
	QuotePanel,
	LoginPanel,
	KidsCornerPanel,
	SquirrelPanel,
	AboutUsPanel,
	Registration,
	Programs,
	PictureFrame,
	UpcomingEvents,
	CoSponsors,
	ButtonsPanel,
	ContentCarousel
} from "./SharedComponents";


export default class Content extends Component {
    render() {
        return (
			<div>
				<SideBar site_urls={this.props.site_urls}
					quote={this.GetQuote()}
					custom_buttons={<ButtonsPanel/>}
					member_login={<LoginPanel/>}
					kids_corner={<KidsCornerPanel/>}
					squirrel={<SquirrelPanel/>}
					about_us={<AboutUsPanel/>}
					registration={<Registration/>}
					programs={<Programs/>}
					pic={<PictureFrame/>}
					upcoming_events={<UpcomingEvents/>}
					co_sponsors={<CoSponsors/>}
				/>
				<MainContent pictures={<ContentCarousel/>}/>
			</div>
        )
	}

	GetQuote() {
		return(
			<QuotePanel 
				quote="Childhood is a Journey, not a Race" 
				author="unknown"
			/>
		);
	}

}
