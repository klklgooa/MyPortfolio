import { Link } from "react-router-dom";
import Gatron from "../music/Gatron.mp3";
import Milky from "../music/Milky.mp3";
import Meteor_white from "../music/Meteor_white.mp3";
function Header() { 
    var audio = new Audio();

		function check() {
			if (audio.paused == false)
				stop()

			const musicNodeList = document.getElementsByName('music');

			musicNodeList.forEach((node) => {
				if (node.checked) {
					playMusic(node.value);
				}
			})
		}
		function playMusic(choice) {
			audio = new Audio(choice);
			audio.load();
			audio.play();
		}
		function stop() {
			audio.pause();
		}
    return (
        <header>
            <span id="header_span">
                <Link to={"/"} id="header_a">Inchan's&nbsp; Portpolio</Link>
            </span>
            <details id="music_details">
                <summary>Music</summary>
                <ul style={{float: "left"}}>
                    <li>
                        <div><input type="radio" id="Milky" name="music" value="../music/Milky.mp3"></input> <label
                            htmlFor="Milky">mStone_Milky </label></div>
                    </li>

                    <li>
                        <div><input type="radio" id="Gatron" name="music" value="../music/Gatron.mp3"></input> <label
                            htmlFor="Gatron">Gatron_Brown</label></div>
                    </li>

                    <li>
                        <div><input type="radio" id="Meteor" name="music" value="../music/Meteor_white.mp3"></input> <label
                            htmlFor="Meteor">SP-star_Meteor_white</label></div>
                    </li>
                </ul>
                <span>
                    <input id="play_button" class="music_button" type="button" value="Play" onClick={check}></input>
                    <input id="stop_button" class="music_button" type="button" value="Stop" onClick={stop}></input>
                </span>
            </details>
        </header>

    );
}
export default Header;
