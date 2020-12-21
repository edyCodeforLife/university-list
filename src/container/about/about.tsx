import React, {memo} from "react";
import "../../components/app.scss";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import * as LS from 'local-storage';

function _About(props) {
	const { dataNews } = props;

	return (
		<div className="homeContainer">
			<Header
				userName={LS.get("currentLoggedIn")}
				{...props}
			/>
			<div
				className="containerScreen textAdjust"
			>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus congue arcu in eros scelerisque, vitae elementum ante tempus. Phasellus est massa, condimentum et nulla quis, consequat fermentum nunc. Etiam viverra ultricies elit, ac imperdiet neque hendrerit ut. Pellentesque vitae nunc et erat ornare egestas. Praesent rutrum, nulla sodales tincidunt suscipit, tortor nisi venenatis risus, eu ullamcorper nisl enim ac felis. Aliquam eget congue magna. Curabitur fermentum aliquet enim, hendrerit congue est hendrerit eu. Praesent et ullamcorper leo. Etiam sodales arcu vitae nunc dapibus egestas. Aliquam convallis nibh ante, eget suscipit elit posuere sit amet. Quisque tincidunt ligula arcu, nec venenatis neque laoreet id. Quisque nec felis luctus tellus volutpat egestas. Nam at mattis lectus. Praesent lectus turpis, pretium vitae imperdiet sit amet, malesuada id nulla.
				</p>
				<p>
					Etiam placerat est eget tempor gravida. Donec in tortor tincidunt, sollicitudin dolor mattis, varius turpis. Sed ac ex scelerisque, lobortis nisi a, molestie nulla. Donec nec justo lacinia, aliquam tortor id, maximus leo. Quisque mattis ante libero, vel bibendum nisi lacinia a. Etiam tempor commodo lacus in dapibus. Quisque in dictum dui. Donec ac finibus nulla, at eleifend nulla. Nulla luctus viverra elit quis euismod.
				</p>

				<p>
					Donec sem arcu, tempor ac nunc eu, euismod maximus augue. Curabitur vel magna rutrum, facilisis enim vitae, sodales elit. Donec mattis nisi eu malesuada commodo. Phasellus sit amet neque at nisl placerat suscipit in vitae nunc. Etiam et nisl sed odio egestas dictum. Ut vel nisl ornare, venenatis lacus lobortis, laoreet justo. Quisque gravida neque eu justo sagittis sagittis. Nam quis erat pellentesque, rhoncus leo ac, facilisis urna. Praesent mattis facilisis rutrum. Phasellus laoreet, nunc in egestas elementum, dolor ex venenatis odio, vitae cursus risus arcu in purus. Suspendisse blandit scelerisque ultricies. Donec a finibus arcu. Praesent neque ipsum, congue ut purus vel, dictum euismod justo. Integer dapibus velit sollicitudin, condimentum nisi a, eleifend dolor.

				</p>
				<p>
					Etiam mi magna, malesuada quis sagittis vitae, luctus et urna. Curabitur non nulla nunc. Fusce ut eleifend massa. Praesent nisi elit, consequat vehicula maximus vitae, tempus vitae arcu. Praesent laoreet dignissim eros, sed rhoncus nunc suscipit ac. Maecenas dapibus faucibus suscipit. Etiam diam metus, tincidunt ultrices mauris vitae, scelerisque porttitor lacus. Nam enim urna, ultrices ac ornare eu, tincidunt vitae sapien. Mauris nulla neque, dictum nec ligula sed, mattis dignissim purus. Ut tempor, libero ut viverra egestas, ex ex dictum odio, sit amet finibus ex nisi at arcu. Aliquam efficitur turpis ac risus auctor placerat. Suspendisse ut euismod tortor. Vestibulum diam odio, efficitur eget odio in, varius imperdiet quam.
				</p>

				<p>
					Integer blandit odio ac turpis euismod varius. Nunc faucibus quam ut gravida aliquet. Mauris at velit ex. Vestibulum et felis sed erat auctor convallis at viverra lacus. Nam condimentum ut dui sit amet feugiat. Morbi ultrices et arcu vel semper. Praesent sit amet laoreet leo. Sed volutpat lacinia elementum. Mauris quis blandit est. Morbi sodales condimentum eros, ut sodales nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus.
				</p>
			</div>
			<Footer />
		</div>
	);
}
export default memo(_About);
export const About = memo(_About);
