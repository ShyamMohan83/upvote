import {SecondaryHeading} from '../component/SecondaryHeading';
import {Card} from '../component/Card';

const Home = ()=> {
    return(
        <div>
            <div>
            <SecondaryHeading title="Home page" />
            </div>
            <div>
                <h3>Listing</h3>
                <Card/>
            </div>
        </div>
    )
}

export default Home;